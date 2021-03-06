/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
import { InnerBlocks, getColorClassName } from '@wordpress/block-editor';

import {
	IMAGE_BACKGROUND_TYPE,
	VIDEO_BACKGROUND_TYPE,
	backgroundImageStyles,
	isContentPositionCenter,
	getPositionClassName,
} from './shared';

export default function save( { className, attributes } ) {
	const {
		backgroundColor,
		customBackgroundColor,
		textColor,
		customTextColor,
		url,
		backgroundType,
		focalPoint,
		hasParallax,
		contentPosition,
	} = attributes;

	const backgroundClass = getColorClassName(
		'background-color',
		backgroundColor
	);

	const textClass = getColorClassName( 'color', textColor );
	const hasBgOpacity = !! attributes.bgOpacity;

	const classes = classnames(
		className,
		backgroundClass,
		textClass,
		{
			'has-text-color': textColor || customTextColor,
			'has-background': backgroundColor || customBackgroundColor,
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
		<div className={ classes } style={ style }>
			{ VIDEO_BACKGROUND_TYPE === backgroundType && url && (
				<video
					className="wp-block-oleti-section__video-background"
					autoPlay
					muted
					loop
					src={ url }
				/>
			) }
			<div className="wp-block-oleti-section__inner-container">
				<InnerBlocks.Content />
			</div>
		</div>
	);
}
