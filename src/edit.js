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

		const { tagName } = attributes;

		const CustomTag = `${ tagName }`;

		const hasPadding = !! attributes.paddingSize;

		const hasMargin = !! attributes.marginSize;

		const classes = classnames( className, {
			'has-background': backgroundColor.color,
			'has-text-color': textColor.color,
			[ backgroundColor.class ]: backgroundColor.class,
			[ textColor.class ]: textColor.class,
			'has-padding': hasPadding,
			'has-margin': hasMargin,
			[ `padding-${ attributes.paddingSize }` ]: hasPadding,
			[ `margin-${ attributes.marginSize }` ]: hasMargin,
		} );

		return (
			<Fragment>
				{ isSelected && <Inspector { ...this.props } /> }
				<CustomTag className={ classes }>
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
