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
} from '@wordpress/block-editor';

import {
	PanelBody,
	withFallbackStyles,
	SelectControl,
} from '@wordpress/components';

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
			tagName,
			paddingTop,
			paddingBottom,
			marginTop,
			marginBottom,
		} = attributes;

		return (
			<Fragment>
				<InspectorControls>
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
							label={ __( 'Padding Top' ) }
							value={ paddingTop }
							onChange={ ( newPaddingTop ) =>
								setAttributes( {
									paddingTop: newPaddingTop,
								} )
							}
							options={ [
								{ value: 'none', label: 'None' },
								{ value: 'extra-small', label: 'Extra Small' },
								{ value: 'small', label: 'Small' },
								{ value: 'normal', label: 'Normal' },
								{ value: 'medium', label: 'Medium' },
								{ value: 'large', label: 'Large' },
								{ value: 'extra-large', label: 'Extra Large' },
							] }
						/>
						<SelectControl
							label={ __( 'Padding Bottom' ) }
							value={ paddingBottom }
							onChange={ ( newPaddingBottom ) =>
								setAttributes( {
									paddingBottom: newPaddingBottom,
								} )
							}
							options={ [
								{ value: 'none', label: 'None' },
								{ value: 'extra-small', label: 'Extra Small' },
								{ value: 'small', label: 'Small' },
								{ value: 'normal', label: 'Normal' },
								{ value: 'medium', label: 'Medium' },
								{ value: 'large', label: 'Large' },
								{ value: 'extra-large', label: 'Extra Large' },
							] }
						/>
						<SelectControl
							label={ __( 'Margin Top' ) }
							value={ marginTop }
							onChange={ ( newMarginTop ) =>
								setAttributes( {
									marginTop: newMarginTop,
								} )
							}
							options={ [
								{ value: 'none', label: 'None' },
								{ value: 'extra-small', label: 'Extra Small' },
								{ value: 'small', label: 'Small' },
								{ value: 'normal', label: 'Normal' },
								{ value: 'medium', label: 'Medium' },
								{ value: 'large', label: 'Large' },
								{ value: 'extra-large', label: 'Extra Large' },
							] }
						/>
						<SelectControl
							label={ __( 'Margin Bottom' ) }
							value={ marginBottom }
							onChange={ ( newMarginBottom ) =>
								setAttributes( {
									marginBottom: newMarginBottom,
								} )
							}
							options={ [
								{ value: 'none', label: 'None' },
								{ value: 'extra-small', label: 'Extra Small' },
								{ value: 'small', label: 'Small' },
								{ value: 'normal', label: 'Normal' },
								{ value: 'medium', label: 'Medium' },
								{ value: 'large', label: 'Large' },
								{ value: 'extra-large', label: 'Extra Large' },
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
