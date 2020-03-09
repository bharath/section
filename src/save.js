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
	} = attributes;

	const backgroundClass = getColorClassName(
		'background-color',
		backgroundColor
	);

	const textClass = getColorClassName( 'color', textColor );

	const hasPadding = !! attributes.paddingSize;

	const hasMargin = !! attributes.marginSize;

	const classes = classnames( className, backgroundClass, textClass, {
		'has-text-color': textColor || customTextColor,
		'has-background': backgroundColor || customBackgroundColor,
		'has-padding': hasPadding,
		'has-margin': hasMargin,
		[ `padding-${ attributes.paddingSize }` ]: hasPadding,
		[ `margin-${ attributes.marginSize }` ]: hasMargin,
	} );

	const styles = {
		backgroundColor: backgroundClass ? undefined : customBackgroundColor,
		color: textClass ? undefined : customTextColor,
	};

	return (
		<div className={ classes } style={ styles }>
			<div className="wp-block-oleti-section__inner-container">
				<InnerBlocks.Content />
			</div>
		</div>
	);
}
