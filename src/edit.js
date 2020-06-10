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
import {
	withColors,
	InnerBlocks,
	__experimentalBlock as Block,
} from '@wordpress/block-editor';
import { __experimentalBoxControl as BoxControl } from '@wordpress/components';

/**
 * Internal dependencies
 */
import Inspector from './inspector';

import {
	IMAGE_BACKGROUND_TYPE,
	VIDEO_BACKGROUND_TYPE,
	backgroundImageStyles,
	isContentPositionCenter,
	getPositionClassName,
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
			url,
			backgroundType,
			focalPoint,
			hasParallax,
			style: styleAttribute,
			contentPosition,
		} = attributes;

		const { __Visualizer: BoxControlVisualizer } = BoxControl;

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

		return (
			<Fragment>
				{ isSelected && <Inspector { ...this.props } /> }
				<Block.div
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
						__experimentalPassedProps={{
							className: 'wp-block-oleti-section__inner-container',
						}}
					/>
				</Block.div>
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
