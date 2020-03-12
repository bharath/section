/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
import { InnerBlocks, getColorClassName } from '@wordpress/block-editor';

const deprecated = [
	{
		attributes: {
			align: {
				type: 'string',
				default: 'wide',
			},
			backgroundColor: {
				type: 'string',
			},
			customBackgroundColor: {
				type: 'string',
			},
			textColor: {
				type: 'string',
			},
			customTextColor: {
				type: 'string',
			},
			tagName: {
				type: 'string',
				default: 'section',
			},
			paddingTop: {
				type: 'string',
				default: 'extra-small',
			},
			paddingBottom: {
				type: 'string',
				default: 'extra-small',
			},
			paddingLeft: {
				type: 'string',
				default: 'extra-small',
			},
			paddingRight: {
				type: 'string',
				default: 'extra-small',
			},
			marginTop: {
				type: 'number',
				default: 'none',
			},
			marginBottom: {
				type: 'number',
				default: 'none',
			},
		},

		supports: {
			align: [ 'wide', 'full' ],
			anchor: true,
			html: false,
		},

		save( { className, attributes } ) {
			const {
				backgroundColor,
				customBackgroundColor,
				textColor,
				customTextColor,
				tagName,
			} = attributes;

			const CustomTag = `${ tagName }`;

			const backgroundClass = getColorClassName(
				'background-color',
				backgroundColor
			);

			const textClass = getColorClassName( 'color', textColor );
			const hasPaddingTop = !! attributes.paddingTop;
			const hasPaddingRight = !! attributes.paddingRight;
			const hasPaddingBottom = !! attributes.paddingBottom;
			const hasPaddingLeft = !! attributes.paddingLeft;
			const hasMarginTop = !! attributes.marginTop;
			const hasMarginBottom = !! attributes.marginBottom;

			const classes = classnames( className, backgroundClass, textClass, {
				'has-text-color': textColor || customTextColor,
				'has-background': backgroundColor || customBackgroundColor,
				//'has-padding-top': hasPaddingTop,
				//'has-padding-bottom': hasPaddingBottom,
				//'has-margin-top': hasMarginTop,
				//'has-margin-bottom': hasMarginBottom,
				[ `padding-top-${ attributes.paddingTop }` ]: hasPaddingTop,
				[ `padding-right-${ attributes.paddingRight }` ]: hasPaddingRight,
				[ `padding-bottom-${ attributes.paddingBottom }` ]: hasPaddingBottom,
				[ `padding-left-${ attributes.paddingLeft }` ]: hasPaddingLeft,
				[ `margin-top-${ attributes.marginTop }` ]: hasMarginTop,
				[ `margin-bottom-${ attributes.marginBottom }` ]: hasMarginBottom,
			} );

			const styles = {
				backgroundColor: backgroundClass
					? undefined
					: customBackgroundColor,
				color: textClass ? undefined : customTextColor,
			};

			return (
				<CustomTag className={ classes } style={ styles }>
					<div className="wp-block-oleti-section__inner-container">
						<InnerBlocks.Content />
					</div>
				</CustomTag>
			);
		},
	},
];

export default deprecated;
