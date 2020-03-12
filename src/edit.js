/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
import { withSelect } from '@wordpress/data';
import { compose } from '@wordpress/compose';
import { Component, Fragment } from '@wordpress/element';
import { withColors, InnerBlocks } from '@wordpress/block-editor';

/**
 * Internal dependencies
 */
import Inspector from './inspector';

class SectionEdit extends Component {
	render() {
		const {
			attributes,
			backgroundColor,
			textColor,
			className,
			hasInnerBlocks,
			isSelected,
		} = this.props;

		const {
			tagName,
			paddingTop,
			paddingRight,
			paddingBottom,
			paddingLeft,
			marginTop,
			marginBottom,
		} = attributes;

		const CustomTag = `${ tagName }`;
		const hasPaddingTop = !! attributes.paddingTop;
		const hasPaddingRight = !! attributes.paddingRight;
		const hasPaddingBottom = !! attributes.paddingBottom;
		const hasPaddingLeft = !! attributes.paddingLeft;
		const hasMarginTop = !! attributes.marginTop;
		const hasMarginBottom = !! attributes.marginBottom;

		const classes = classnames( className, {
			'has-background': backgroundColor.color,
			'has-text-color': textColor.color,
			[ backgroundColor.class ]: backgroundColor.class,
			[ textColor.class ]: textColor.class,
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
			backgroundColor: backgroundColor.color,
			color: textColor.color,
			paddingTop: paddingTop ? paddingTop + 'px' : undefined,
			paddingRight: paddingRight ? paddingRight + 'px' : undefined,
			paddingBottom: paddingBottom ? paddingBottom + 'px' : undefined,
			paddingLeft: paddingLeft ? paddingLeft + 'px' : undefined,
			marginTop: marginTop ? marginTop + 'px' : undefined,
			marginBottom: marginBottom ? marginBottom + 'px' : undefined,
		};

		return (
			<Fragment>
				{ isSelected && <Inspector { ...this.props } /> }
				<CustomTag className={ classes } style={ styles }>
					<div className="wp-block-oleti-section__inner-container">
						<InnerBlocks
							renderAppender={
								! hasInnerBlocks &&
								InnerBlocks.ButtonBlockAppender
							}
						/>
					</div>
				</CustomTag>
			</Fragment>
		);
	}
}

export default compose( [
	withColors( 'backgroundColor', { textColor: 'color' } ),
	withSelect( ( select, { clientId } ) => {
		const { getBlock } = select( 'core/block-editor' );

		const block = getBlock( clientId );

		return {
			hasInnerBlocks: !! ( block && block.innerBlocks.length ),
		};
	} ),
] )( SectionEdit );
