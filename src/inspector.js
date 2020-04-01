/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { Component, Fragment } from '@wordpress/element';
import { compose } from '@wordpress/compose';
import {
	InspectorControls,
	ContrastChecker,
	PanelColorSettings,
	withColors,
	BlockControls,
	MediaReplaceFlow,
	MediaUpload,
	MediaUploadCheck,
	__experimentalUseGradient as useGradient,
	__experimentalPanelColorGradientSettings as PanelColorGradientSettings,
} from '@wordpress/block-editor';

import {
	PanelBody,
	withFallbackStyles,
	SelectControl,
	ToggleControl,
	FocalPointPicker,
	PanelRow,
	Button,
	IconButton,
	Toolbar,
	RangeControl,
} from '@wordpress/components';

import icons from './icons';

import {
	attributesFromMedia,
	IMAGE_BACKGROUND_TYPE,
	VIDEO_BACKGROUND_TYPE,
} from './shared';

const ALLOWED_MEDIA_TYPES = [ 'image', 'video' ];

const { getComputedStyle } = window;

const applyFallbackStyles = withFallbackStyles( ( node, ownProps ) => {
	const { textColor, backgroundColor } = ownProps;
	const backgroundColorValue = backgroundColor && backgroundColor.color;
	const textColorValue = textColor && textColor.color;
	//avoid the use of querySelector if textColor color is known and verify if node is available.
	const textNode =
		! textColorValue && node ? node.querySelector( '[contenteditable="true"]' ) : null;
	return {
		fallbackBackgroundColor:
			backgroundColorValue || ! node ? undefined : getComputedStyle( node ).backgroundColor,
		fallbackTextColor:
			textColorValue || ! textNode ? undefined : getComputedStyle( textNode ).color,
	};
} );

class Inspector extends Component {
	render() {
		const {
			backgroundColor,
			setBackgroundColor,
			setTextColor,
			textColor,
			fallbackTextColor,
			fallbackBackgroundColor,
			attributes,
			setAttributes,
		} = this.props;

		const {
			tagName,
			paddingTop,
			paddingRight,
			paddingBottom,
			paddingLeft,
			marginTop,
			marginBottom,
			id,
			url,
			backgroundType,
			focalPoint,
			hasParallax,
			bgOpacity,
		} = attributes;

		const { gradientValue, setGradient } = useGradient();

		const onSelectMedia = attributesFromMedia( setAttributes );

		const toggleParallax = () => {
			setAttributes( {
				hasParallax: ! hasParallax,
				...( ! hasParallax ? { focalPoint: undefined } : {} ),
			} );
		};

		return (
			<Fragment>
				<BlockControls>
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
						<Toolbar>
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
						<PanelColorGradientSettings
							title={ __( 'Button Background & Text Color', 'jetpack' ) }
							settings={ [
								{
									colorValue: textColor.color,
									onColorChange: setTextColor,
									label: __( 'Text Color', 'jetpack' ),
								},
								{
									colorValue: backgroundColor.color,
									onColorChange: setBackgroundColor,
									gradientValue,
									onGradientChange: setGradient,
									label: __( 'Background', 'jetpack' ),
								},
							] }
						>
							<ContrastChecker
								{ ...{
									// Text is considered large if font size is greater or equal to 18pt or 24px,
									// currently that's not the case for button.
									isLargeText: false,
									textColor: textColor.color,
									backgroundColor: backgroundColor.color,
									fallbackBackgroundColor,
									fallbackTextColor,
								} }
							/>
						</PanelColorGradientSettings>

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
					<PanelColorGradientSettings
						title={ __( 'Background & Text Color' ) }
						settings={ [
							{
								colorValue: textColor.color,
								onColorChange: setTextColor,
								label: __( 'Text color' ),
							},
							{
								colorValue: backgroundColor.color,
								onColorChange: setBackgroundColor,
								gradientValue,
								onGradientChange: setGradient,
								label: __( 'Background' ),
							},
						] }
					>
						<ContrastChecker
							{ ...{
								// Text is considered large if font size is greater or equal to 18pt or 24px,
								// currently that's not the case for button.
								isLargeText: false,
								textColor: textColor.color,
								backgroundColor: backgroundColor.color,
								fallbackBackgroundColor,
								fallbackTextColor,
							} }
						/>
					</PanelColorGradientSettings>
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
								label={ __(
									'Background Color opacity',
									'oleti'
								) }
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
					<PanelBody
						title={ __( 'Spacing', 'oleti' ) }
						initialOpen={ false }
					>
						<SelectControl
							label={ __( 'Padding Top', 'oleti' ) }
							value={ paddingTop }
							onChange={ ( newPaddingTop ) =>
								setAttributes( {
									paddingTop: newPaddingTop,
								} )
							}
							options={ [
								{ value: 'none', label: __( 'None', 'oleti' ) },
								{
									value: 'extra-small',
									label: __( 'Extra Small', 'oleti' ),
								},
								{
									value: 'small',
									label: __( 'Small', 'oleti' ),
								},
								{
									value: 'normal',
									label: __( 'Normal', 'oleti' ),
								},
								{
									value: 'medium',
									label: __( 'Medium', 'oleti' ),
								},
								{
									value: 'large',
									label: __( 'Large', 'oleti' ),
								},
								{
									value: 'extra-large',
									label: __( 'Extra Large', 'oleti' ),
								},
							] }
						/>
						<SelectControl
							label={ __( 'Padding Right', 'oleti' ) }
							value={ paddingRight }
							onChange={ ( newPaddingRight ) =>
								setAttributes( {
									paddingRight: newPaddingRight,
								} )
							}
							options={ [
								{ value: 'none', label: __( 'None', 'oleti' ) },
								{
									value: 'extra-small',
									label: __( 'Extra Small', 'oleti' ),
								},
								{
									value: 'small',
									label: __( 'Small', 'oleti' ),
								},
								{
									value: 'normal',
									label: __( 'Normal', 'oleti' ),
								},
								{
									value: 'medium',
									label: __( 'Medium', 'oleti' ),
								},
								{
									value: 'large',
									label: __( 'Large', 'oleti' ),
								},
								{
									value: 'extra-large',
									label: __( 'Extra Large', 'oleti' ),
								},
							] }
						/>
						<SelectControl
							label={ __( 'Padding Bottom', 'oleti' ) }
							value={ paddingBottom }
							onChange={ ( newPaddingBottom ) =>
								setAttributes( {
									paddingBottom: newPaddingBottom,
								} )
							}
							options={ [
								{ value: 'none', label: __( 'None', 'oleti' ) },
								{
									value: 'extra-small',
									label: __( 'Extra Small', 'oleti' ),
								},
								{
									value: 'small',
									label: __( 'Small', 'oleti' ),
								},
								{
									value: 'normal',
									label: __( 'Normal', 'oleti' ),
								},
								{
									value: 'medium',
									label: __( 'Medium', 'oleti' ),
								},
								{
									value: 'large',
									label: __( 'Large', 'oleti' ),
								},
								{
									value: 'extra-large',
									label: __( 'Extra Large', 'oleti' ),
								},
							] }
						/>
						<SelectControl
							label={ __( 'Padding Left', 'oleti' ) }
							value={ paddingLeft }
							onChange={ ( newPaddingLeft ) =>
								setAttributes( {
									paddingLeft: newPaddingLeft,
								} )
							}
							options={ [
								{ value: 'none', label: __( 'None', 'oleti' ) },
								{
									value: 'extra-small',
									label: __( 'Extra Small', 'oleti' ),
								},
								{
									value: 'small',
									label: __( 'Small', 'oleti' ),
								},
								{
									value: 'normal',
									label: __( 'Normal', 'oleti' ),
								},
								{
									value: 'medium',
									label: __( 'Medium', 'oleti' ),
								},
								{
									value: 'large',
									label: __( 'Large', 'oleti' ),
								},
								{
									value: 'extra-large',
									label: __( 'Extra Large', 'oleti' ),
								},
							] }
						/>
						<SelectControl
							label={ __( 'Margin Top', 'oleti' ) }
							value={ marginTop }
							onChange={ ( newMarginTop ) =>
								setAttributes( {
									marginTop: newMarginTop,
								} )
							}
							options={ [
								{ value: 'none', label: __( 'None', 'oleti' ) },
								{
									value: 'extra-small',
									label: __( 'Extra Small', 'oleti' ),
								},
								{
									value: 'small',
									label: __( 'Small', 'oleti' ),
								},
								{
									value: 'normal',
									label: __( 'Normal', 'oleti' ),
								},
								{
									value: 'medium',
									label: __( 'Medium', 'oleti' ),
								},
								{
									value: 'large',
									label: __( 'Large', 'oleti' ),
								},
								{
									value: 'extra-large',
									label: __( 'Extra Large', 'oleti' ),
								},
							] }
						/>
						<SelectControl
							label={ __( 'Margin Bottom', 'oleti' ) }
							value={ marginBottom }
							onChange={ ( newMarginBottom ) =>
								setAttributes( {
									marginBottom: newMarginBottom,
								} )
							}
							options={ [
								{ value: 'none', label: __( 'None', 'oleti' ) },
								{
									value: 'extra-small',
									label: __( 'Extra Small', 'oleti' ),
								},
								{
									value: 'small',
									label: __( 'Small', 'oleti' ),
								},
								{
									value: 'normal',
									label: __( 'Normal', 'oleti' ),
								},
								{
									value: 'medium',
									label: __( 'Medium', 'oleti' ),
								},
								{
									value: 'large',
									label: __( 'Large', 'oleti' ),
								},
								{
									value: 'extra-large',
									label: __( 'Extra Large', 'oleti' ),
								},
							] }
						/>
					</PanelBody>
					<PanelBody
						title={ __( 'Layout', 'oleti' ) }
						initialOpen={ false }
					>
						<SelectControl
							label={ __( 'HTML Tag', 'oleti' ) }
							value={ tagName }
							onChange={ ( value ) =>
								setAttributes( {
									tagName: value,
								} )
							}
							options={ [
								{
									value: 'article',
									label: __( 'article', 'oleti' ),
								},
								{
									value: 'aside',
									label: __( 'aside', 'oleti' ),
								},
								{
									value: 'div',
									label: __( 'div', 'oleti' ),
								},
								{
									value: 'footer',
									label: __( 'footer', 'oleti' ),
								},
								{
									value: 'header',
									label: __( 'header', 'oleti' ),
								},
								{
									value: 'main',
									label: __( 'main', 'oleti' ),
								},
								{
									value: 'nav',
									label: __( 'nav', 'oleti' ),
								},
								{
									value: 'section',
									label: __( 'section', 'oleti' ),
								},
							] }
						/>
					</PanelBody>
				</InspectorControls>
			</Fragment>
		);
	}
}

export default compose( [
	withColors( 'backgroundColor', { textColor: 'color' } ),
	applyFallbackStyles,
] )( Inspector );
