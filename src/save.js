/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
import { InnerBlocks, getColorClassName } from '@wordpress/block-editor';

export default function save( { className, attributes } ) {
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
	const hasPaddingBottom = !! attributes.paddingBottom;
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
		[ `padding-bottom-${ attributes.paddingBottom }` ]: hasPaddingBottom,
		[ `margin-top-${ attributes.marginTop }` ]: hasMarginTop,
		[ `margin-bottom-${ attributes.marginBottom }` ]: hasMarginBottom,
	} );

	const styles = {
		backgroundColor: backgroundClass ? undefined : customBackgroundColor,
		color: textClass ? undefined : customTextColor,
	};

	return (
		<CustomTag className={ classes } style={ styles }>
			<div className="wp-block-oleti-section__inner-container">
				<InnerBlocks.Content />
			</div>
		</CustomTag>
	);
}
