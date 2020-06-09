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
} from '@wordpress/block-editor';

import {
	PanelBody,
	withFallbackStyles,
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
	const { textColor, backgroundColor } = ownProps.attributes;
	const editableNode = node.querySelector( '[contenteditable="true"]' );
	const computedStyles = editableNode
		? getComputedStyle( editableNode )
		: null;
	return {
		fallbackBackgroundColor:
			backgroundColor || ! computedStyles
				? undefined
				: computedStyles.backgroundColor,
		fallbackTextColor:
			textColor || ! computedStyles ? undefined : computedStyles.color,
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
			id,
			url,
			backgroundType,
			focalPoint,
			hasParallax,
			bgOpacity,
		} = attributes;

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
				</InspectorControls>
			</Fragment>
		);
	}
}

export default compose( [
	withColors( 'backgroundColor', { textColor: 'color' } ),
	applyFallbackStyles,
] )( Inspector );
