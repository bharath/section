/**
 * External dependencies
 */
import classnames from 'classnames';
import FastAverageColor from 'fast-average-color';
import tinycolor from 'tinycolor2';

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { useSelect } from '@wordpress/data';
import { compose, withInstanceId, useInstanceId } from '@wordpress/compose';
import {
	withColors,
	InnerBlocks,
	InspectorControls,
	ContrastChecker,
	PanelColorSettings,
	BlockControls,
	MediaReplaceFlow,
	MediaUpload,
	MediaUploadCheck,
	__experimentalBlock as Block,
	__experimentalBlockAlignmentMatrixToolbar as BlockAlignmentMatrixToolbar,
} from '@wordpress/block-editor';
import {
	PanelBody,
	ToggleControl,
	FocalPointPicker,
	PanelRow,
	Button,
	IconButton,
	Toolbar,
	RangeControl,
	__experimentalBoxControl as BoxControl,
} from '@wordpress/components';
import icons from './icons';

/**
 * Internal dependencies
 */
import {
	backgroundImageStyles,
	isContentPositionCenter,
	getPositionClassName,
	attributesFromMedia,
	IMAGE_BACKGROUND_TYPE,
	VIDEO_BACKGROUND_TYPE,
	COVER_MIN_HEIGHT,
	CSS_UNITS,
} from './shared';

/**
 * Module Constants
 */
const ALLOWED_MEDIA_TYPES = [ 'image', 'video' ];

const { __Visualizer: BoxControlVisualizer } = BoxControl;

function retrieveFastAverageColor() {
	if ( ! retrieveFastAverageColor.fastAverageColor ) {
		retrieveFastAverageColor.fastAverageColor = new FastAverageColor();
	}
	return retrieveFastAverageColor.fastAverageColor;
}

function CoverHeightInput( {
	onChange,
	onUnitChange,
	unit = 'px',
	value = '',
} ) {
	const [ temporaryInput, setTemporaryInput ] = useState( null );
	const instanceId = useInstanceId( UnitControl );
	const inputId = `block-cover-height-input-${ instanceId }`;
	const isPx = unit === 'px';

	const handleOnChange = ( unprocessedValue ) => {
		const inputValue =
			unprocessedValue !== ''
				? parseInt( unprocessedValue, 10 )
				: undefined;

		if ( isNaN( inputValue ) && inputValue !== undefined ) {
			setTemporaryInput( unprocessedValue );
			return;
		}
		setTemporaryInput( null );
		onChange( inputValue );
		if ( inputValue === undefined ) {
			onUnitChange();
		}
	};

	const handleOnBlur = () => {
		if ( temporaryInput !== null ) {
			setTemporaryInput( null );
		}
	};

	const inputValue = temporaryInput !== null ? temporaryInput : value;
	const min = isPx ? COVER_MIN_HEIGHT : 0;

	return (
		<BaseControl label={ __( 'Minimum height of cover' ) } id={ inputId }>
			<UnitControl
				id={ inputId }
				isResetValueOnUnitChange
				min={ min }
				onBlur={ handleOnBlur }
				onChange={ handleOnChange }
				onUnitChange={ onUnitChange }
				step="1"
				style={ { maxWidth: 80 } }
				unit={ unit }
				units={ CSS_UNITS }
				value={ inputValue }
			/>
		</BaseControl>
	);
}

const RESIZABLE_BOX_ENABLE_OPTION = {
	top: false,
	right: false,
	bottom: true,
	left: false,
	topRight: false,
	bottomRight: false,
	bottomLeft: false,
	topLeft: false,
};

function ResizableCover( {
	className,
	onResizeStart,
	onResize,
	onResizeStop,
	...props
} ) {
	const [ isResizing, setIsResizing ] = useState( false );

	return (
		<ResizableBox
			className={ classnames( className, {
				'is-resizing': isResizing,
			} ) }
			enable={ RESIZABLE_BOX_ENABLE_OPTION }
			onResizeStart={ ( _event, _direction, elt ) => {
				onResizeStart( elt.clientHeight );
				onResize( elt.clientHeight );
			} }
			onResize={ ( _event, _direction, elt ) => {
				onResize( elt.clientHeight );
				if ( ! isResizing ) {
					setIsResizing( true );
				}
			} }
			onResizeStop={ ( _event, _direction, elt ) => {
				onResizeStop( elt.clientHeight );
				setIsResizing( false );
			} }
			minHeight={ COVER_MIN_HEIGHT }
			{ ...props }
		/>
	);
}

/**
 * useCoverIsDark is a hook that returns a boolean variable specifying if the cover
 * background is dark or not.
 *
 * @param {?string} url          Url of the media background.
 * @param {?number} dimRatio     Transparency of the overlay color. If an image and
 *                               color are set, dimRatio is used to decide what is used
 *                               for background darkness checking purposes.
 * @param {?string} overlayColor String containing the overlay color value if one exists.
 * @param {?Object} elementRef   If a media background is set, elementRef should contain a reference to a
 *                               dom element that renders that media.
 *
 * @return {boolean} True if the cover background is considered "dark" and false otherwise.
 */
function useCoverIsDark( url, dimRatio = 50, overlayColor, elementRef ) {
	const [ isDark, setIsDark ] = useState( false );
	useEffect( () => {
		// If opacity is lower than 50 the dominant color is the image or video color,
		// so use that color for the dark mode computation.
		if ( url && dimRatio <= 50 && elementRef.current ) {
			retrieveFastAverageColor().getColorAsync(
				elementRef.current,
				( color ) => {
					setIsDark( color.isDark );
				}
			);
		}
	}, [ url, url && dimRatio <= 50 && elementRef.current, setIsDark ] );
	useEffect( () => {
		// If opacity is greater than 50 the dominant color is the overlay color,
		// so use that color for the dark mode computation.
		if ( dimRatio > 50 || ! url ) {
			if ( ! overlayColor ) {
				// If no overlay color exists the overlay color is black (isDark )
				setIsDark( true );
				return;
			}
			setIsDark( tinycolor( overlayColor ).isDark() );
		}
	}, [ overlayColor, dimRatio > 50 || ! url, setIsDark ] );
	useEffect( () => {
		if ( ! url && ! overlayColor ) {
			// Reset isDark
			setIsDark( false );
		}
	}, [ ! url && ! overlayColor, setIsDark ] );
	return isDark;
}

function SectionEdit( {
	attributes,
	className,
	clientId,
	backgroundColor,
	textColor,
	isSelected,
	setBackgroundColor,
	setTextColor,
	fallbackTextColor,
	fallbackBackgroundColor,
	setAttributes,
} ) {
	const hasInnerBlocks = useSelect(
		( select ) => {
			const { getBlock } = select( 'core/block-editor' );
			const block = getBlock( clientId );
			return !! ( block && block.innerBlocks.length );
		},
		[ clientId ]
	);

	const BlockWrapper = Block[ attributes.tagName ];

	const {
		url,
		backgroundType,
		focalPoint,
		hasParallax,
		style: styleAttribute,
		contentPosition,
		id,
		bgOpacity,
	} = attributes;

	const onSelectMedia = attributesFromMedia( setAttributes );

	const toggleParallax = () => {
		setAttributes( {
			hasParallax: ! hasParallax,
			...( ! hasParallax ? { focalPoint: undefined } : {} ),
		} );
	};

	const hasBgOpacity = !! attributes.bgOpacity;

	const classes = classnames(
		className,
		{
			'has-background': backgroundColor.color,
			'has-text-color': textColor.color,
			[ backgroundColor.class ]: backgroundColor.class,
			[ textColor.class ]: textColor.class,
			'has-parallax': hasParallax,
			[ `has-background-overlay-${ attributes.bgOpacity }` ]: hasBgOpacity,
			'has-background-overlay': hasBgOpacity,
			'has-custom-content-position': ! isContentPositionCenter(
				contentPosition
			),
		},
		getPositionClassName( contentPosition )
	);

	const style =
		backgroundType === IMAGE_BACKGROUND_TYPE
			? backgroundImageStyles( url )
			: {};
	if ( focalPoint && ! hasParallax ) {
		style.backgroundPosition = `${ Math.round(
			focalPoint.x * 100
		) }% ${ Math.round( focalPoint.y * 100 ) }%`;
	}

	const hasBackground = !! ( url || backgroundColor );

	const controls = (
		<>
			<BlockControls>
				<BlockAlignmentMatrixToolbar
					label={ __( 'Change content position' ) }
					value={ contentPosition }
					onChange={ ( nextPosition ) =>
						setAttributes( { contentPosition: nextPosition } )
					}
				/>
				{ !! url && (
					<MediaReplaceFlow
						mediaId={ id }
						mediaURL={ url }
						allowedTypes={ ALLOWED_MEDIA_TYPES }
						accept="image/*,video/*"
						onSelect={ onSelectMedia }
					/>
				) }
				{ ! url && (
					<Toolbar label="Options">
						<MediaUploadCheck>
							<MediaUpload
								onSelect={ onSelectMedia }
								allowedTypes={ ALLOWED_MEDIA_TYPES }
								value={ backgroundType }
								render={ ( { open } ) => (
									<IconButton
										className="components-toolbar__control"
										label={ __(
											'Add background',
											'oleti'
										) }
										icon={ icons.sectionMedia }
										onClick={ open }
									/>
								) }
							/>
						</MediaUploadCheck>
					</Toolbar>
				) }
			</BlockControls>
			<InspectorControls>
				{ ! url && (
					<PanelBody title={ __( 'Media', 'oleti' ) }>
						<MediaUploadCheck>
							<MediaUpload
								onSelect={ onSelectMedia }
								allowedTypes={ ALLOWED_MEDIA_TYPES }
								value={ backgroundType }
								render={ ( { open } ) => (
									<Button
										className="section-background-image__toggle"
										onClick={ open }
									>
										{ __( 'Add background', 'oleti' ) }
									</Button>
								) }
							/>
						</MediaUploadCheck>
					</PanelBody>
				) }
				{ !! url && (
					<PanelBody title={ __( 'Media settings', 'oleti' ) }>
						{ IMAGE_BACKGROUND_TYPE === backgroundType && (
							<ToggleControl
								label={ __( 'Fixed background', 'oleti' ) }
								checked={ hasParallax }
								onChange={ toggleParallax }
							/>
						) }
						{ IMAGE_BACKGROUND_TYPE === backgroundType &&
							! hasParallax && (
								<FocalPointPicker
									label={ __(
										'Focal point picker',
										'oleti'
									) }
									url={ url }
									value={ focalPoint }
									onChange={ ( newFocalPoint ) =>
										setAttributes( {
											focalPoint: newFocalPoint,
										} )
									}
								/>
							) }
						{ VIDEO_BACKGROUND_TYPE === backgroundType && (
							<video autoPlay muted loop src={ url } />
						) }
						<PanelRow>
							<Button
								isSecondary
								isSmall
								className="block-library-section__reset-button"
								onClick={ () =>
									setAttributes( {
										url: undefined,
										id: undefined,
										backgroundType: undefined,
										focalPoint: undefined,
										hasParallax: undefined,
									} )
								}
							>
								{ __( 'Clear Media', 'oleti' ) }
							</Button>
						</PanelRow>
					</PanelBody>
				) }
				<PanelColorSettings
					title={ __( 'Color Settings', 'oleti' ) }
					colorSettings={ [
						{
							value: backgroundColor.color,
							onChange: setBackgroundColor,
							label: __( 'Background Color', 'oleti' ),
						},
						{
							value: textColor.color,
							onChange: setTextColor,
							label: __( 'Text Color', 'oleti' ),
						},
					] }
				>
					{ !! url && (
						<RangeControl
							label={ __( 'Background Color opacity', 'oleti' ) }
							value={ bgOpacity }
							onChange={ ( newBgOpacity ) =>
								setAttributes( {
									bgOpacity: newBgOpacity,
								} )
							}
							min={ 0 }
							max={ 100 }
							step={ 10 }
						/>
					) }
					<ContrastChecker
						{ ...{
							textColor: textColor.color,
							backgroundColor: backgroundColor.color,
							fallbackTextColor,
							fallbackBackgroundColor,
						} }
					/>
				</PanelColorSettings>
			</InspectorControls>
		</>
	);

	if ( ! hasBackground ) {
		const placeholderIcon = <BlockIcon icon={ icon } />;
		const label = __( 'Section' );

		return (
			<>
				{ controls }
				<Block.div className="is-placeholder">
					<MediaPlaceholder
						icon={ placeholderIcon }
						labels={ {
							title: label,
							instructions: __(
								'Upload an image or video file, or pick one from your media library.'
							),
						} }
						onSelect={ onSelectMedia }
						accept="image/*,video/*"
						allowedTypes={ ALLOWED_MEDIA_TYPES }
						notices={ noticeUI }
						onError={ ( message ) => {
							removeAllNotices();
							createErrorNotice( message );
						} }
					>
						<div className="wp-block-cover__placeholder-background-options">
							<ColorPalette
								disableCustomColors={ true }
								value={ overlayColor.color }
								onChange={ setOverlayColor }
								clearable={ false }
							/>
						</div>
					</MediaPlaceholder>
				</Block.div>
			</>
		);
	}

	return (
		<>
			{ controls }
			<BlockWrapper
				className={ classes }
				data-url={ url }
				style={ style }
			>
				<BoxControlVisualizer
					values={ styleAttribute?.spacing?.padding }
					showValues={ styleAttribute?.visualizers?.padding }
				/>

				{ IMAGE_BACKGROUND_TYPE === backgroundType && (
					<img
						aria-hidden
						alt=""
						style={ {
							display: 'none',
						} }
						src={ url }
					/>
				) }
				{ VIDEO_BACKGROUND_TYPE === backgroundType && url && (
					<video
						className="wp-block-oleti-section__video-background"
						autoPlay
						muted
						loop
						src={ url }
					/>
				) }
				<InnerBlocks
					renderAppender={
						hasInnerBlocks
							? undefined
							: () => <InnerBlocks.ButtonBlockAppender />
					}
					__experimentalTagName="div"
					__experimentalPassedProps={ {
						className: 'wp-block-oleti-section__inner-container',
					} }
				/>
			</BlockWrapper>
		</>
	);
}

export default compose( [
	withColors( 'backgroundColor', { textColor: 'color' } ),
] )( SectionEdit );
