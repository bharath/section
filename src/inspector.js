/**
 * External dependencies
 */
import { partialRight } from 'lodash';

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
	__experimentalDimensionControl as DimensionControl,
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

		const { tagName } = attributes;

		const updateSpacing = ( size, dimensionAttr ) => {
			setAttributes( {
				[ dimensionAttr ]: size,
			} );
		};

		return (
			<Fragment>
				<InspectorControls>
					<PanelBody
						title={ __( 'Spacing', 'oleti' ) }
						//initialOpen={ false }
					>
						<DimensionControl
							label={ __( 'Padding', 'oleti' ) }
							value={ attributes.paddingSize }
							onChange={ partialRight(
								updateSpacing,
								'paddingSize'
							) }
							help={ __(
								'Adjust spacing around content within the block.',
								'oleti'
							) }
						/>

						<DimensionControl
							label={ __( 'Margin', 'oleti' ) }
							value={ attributes.marginSize }
							onChange={ partialRight(
								updateSpacing,
								'marginSize'
							) }
							help={ __(
								'Adjust spacing on the sides of the block.',
								'oleti'
							) }
						/>
					</PanelBody>
					<PanelColorSettings
						title={ __( 'Color Settings', 'oleti' ) }
						//initialOpen={ false }
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
					<PanelBody title={ __( 'Layout', 'oleti' ) }>
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
								{ value: 'div', label: __( 'div', 'oleti' ) },
								{
									value: 'footer',
									label: __( 'footer', 'oleti' ),
								},
								{
									value: 'header',
									label: __( 'header', 'oleti' ),
								},
								{ value: 'main', label: __( 'main', 'oleti' ) },
								{ value: 'nav', label: __( 'nav', 'oleti' ) },
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
