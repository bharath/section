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
			paddingSize: {
				type: 'string',
			},
			paddingUnit: {
				type: 'string',
				default: 'px',
			},
			marginSize: {
				type: 'string',
			},
			marginUnit: {
				type: 'string',
				default: 'px',
			},
			tagName: {
				type: 'string',
				default: 'section',
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

			const CustomTagname = `${ tagName }`;

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
				backgroundColor: backgroundClass
					? undefined
					: customBackgroundColor,
				color: textClass ? undefined : customTextColor,
			};

			return (
				<CustomTagname className={ classes } style={ styles }>
					<div className="wp-block-oleti-section__inner-container">
						<InnerBlocks.Content />
					</div>
				</CustomTagname>
			);
		},
	},
];

export default deprecated;
