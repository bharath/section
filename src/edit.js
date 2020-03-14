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

import {
	IMAGE_BACKGROUND_TYPE,
	VIDEO_BACKGROUND_TYPE,
	backgroundImageStyles,
} from './shared';

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
			url,
			backgroundType,
			focalPoint,
			hasParallax,
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
			'has-parallax': hasParallax,
		} );

		const style =
			backgroundType === IMAGE_BACKGROUND_TYPE
				? backgroundImageStyles( url )
				: {};
		if ( focalPoint && ! hasParallax ) {
			style.backgroundPosition = `${ Math.round(
				focalPoint.x * 100
			) }% ${ Math.round( focalPoint.y * 100 ) }%`;
		}

		return (
			<Fragment>
				{ isSelected && <Inspector { ...this.props } /> }
				<CustomTag className={ classes } style={ style }>
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
							className="wp-block-section__video-background"
							autoPlay
							muted
							loop
							src={ url }
						/>
					) }
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
