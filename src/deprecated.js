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
} from './shared';

const deprecated = [
	{
		attributes: {
			align: {
				type: 'string',
				//default: 'wide',
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
				default: 'small',
			},
			paddingRight: {
				type: 'string',
				default: 'small',
			},
			marginTop: {
				type: 'number',
				default: 'none',
			},
			marginBottom: {
				type: 'number',
				default: 'none',
			},
			url: {
				type: 'string',
			},
			id: {
				type: 'number',
			},
			hasParallax: {
				type: 'boolean',
				default: false,
			},
			backgroundType: {
				type: 'string',
				default: 'image',
			},
			focalPoint: {
				type: 'object',
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
				url,
				backgroundType,
				focalPoint,
				hasParallax,
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
				<CustomTag className={ classes } style={ style }>
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
						<InnerBlocks.Content />
					</div>
				</CustomTag>
			);
		},
	},
];

export default deprecated;
