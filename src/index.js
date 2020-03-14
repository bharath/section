/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */
import { registerBlockType, createBlock } from '@wordpress/blocks';

/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import deprecated from './deprecated';
import edit from './edit';
import save from './save';
import icons from './icons';

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */
registerBlockType( 'oleti/section', {
	/**
	 * This is the display title for your block, which can be translated with `i18n` functions.
	 * The block inserter will show this name.
	 */
	title: __( 'Section', 'oleti' ),

	/**
	 * This is a short description for your block, can be translated with `i18n` functions.
	 * It will be shown in the Block Tab in the Settings Sidebar.
	 */
	description: __(
		'A Gutenberg block that allows you to add other blocks inside.',
		'oleti'
	),

	/**
	 * Blocks are grouped into categories to help users browse and discover them.
	 * The categories provided by core are `common`, `embed`, `formatting`, `layout` and `widgets`.
	 */
	category: 'layout',

	/**
	 * An icon property should be specified to make it easier to identify a block.
	 * These can be any of WordPress’ Dashicons, or a custom svg element.
	 */
	icon: {
		src: icons.section,
	},

	/**
	 * Optional block extended support features.
	 */
	supports: {
		// Pick which alignment options to display ('left', 'right', 'center', 'wide','full').
		align: [ 'wide', 'full' ],
		// Add the support for an anchor link.
		anchor: true,
		// Removes support for an HTML mode.
		html: false,
	},

	// Make it easier to discover a block with keyword aliases.
	// These can be localised so your keywords work across locales.
	keywords: [
		__( 'section', 'oleti' ),
		__( 'group', 'oleti' ),
		__( 'container', 'oleti' ),
		__( 'row', 'oleti' ),
		__( 'wrapper', 'oleti' ),
	],

	// Specifying block attributes
	attributes: {
		align: {
			type: 'string',
			//default: 'wide',
		},
		backgroundColor: {
			type: 'string',
		},
		textColor: {
			type: 'string',
		},
		customBackgroundColor: {
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

	example: {
		attributes: {
			customBackgroundColor: '#ffffff',
			customTextColor: '#000000',
		},
		innerBlocks: [
			{
				name: 'core/paragraph',
				attributes: {
					customTextColor: '#cf2e2e',
					fontSize: 'large',
					content: __( 'One.' ),
				},
			},
			{
				name: 'core/paragraph',
				attributes: {
					customTextColor: '#ff6900',
					fontSize: 'large',
					content: __( 'Two.' ),
				},
			},
			{
				name: 'core/paragraph',
				attributes: {
					customTextColor: '#fcb900',
					fontSize: 'large',
					content: __( 'Three.' ),
				},
			},
		],
	},

	/**
	 * For grouping & ungrouping blocks into Section blocks.
	 * Based on the Group block.
	 *
	 * @see https://github.com/WordPress/gutenberg/blob/master/packages/block-library/src/group/index.js
	 */
	transforms: {
		from: [
			{
				type: 'block',
				isMultiBlock: true,
				blocks: [ '*' ],
				__experimentalConvert( blocks ) {
					// Avoid transforming a single `oleti/section` Block
					if (
						blocks.length === 1 &&
						blocks[ 0 ].name === 'oleti/section'
					) {
						return;
					}

					const alignments = [ 'wide', 'full' ];

					// Determine the widest setting of all the blocks to be grouped
					const widestAlignment = blocks.reduce(
						( accumulator, block ) => {
							const { align } = block.attributes;
							return alignments.indexOf( align ) >
								alignments.indexOf( accumulator )
								? align
								: accumulator;
						},
						undefined
					);

					// Clone the Blocks to be Grouped
					// Failing to create new block references causes the original blocks
					// to be replaced in the switchToBlockType call thereby meaning they
					// are removed both from their original location and within the
					// new group block.
					const groupInnerBlocks = blocks.map( ( block ) => {
						return createBlock(
							block.name,
							block.attributes,
							block.innerBlocks
						);
					} );

					return createBlock(
						'oleti/section',
						{
							align: widestAlignment,
						},
						groupInnerBlocks
					);
				},
			},
		],
	},

	/**
	 * The edit function describes the structure of your block in the context of the editor.
	 * This represents what the editor will render when the block is used.
	 *
	 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
	 *
	 * @param {Object} [props] Properties passed from the editor.
	 *
	 * @return {WPElement} Element to render.
	 */
	edit,

	/**
	 * The save function defines the way in which the different attributes should be combined
	 * into the final markup, which is then serialized by the block editor into `post_content`.
	 *
	 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
	 *
	 * @return {WPElement} Element to render.
	 */
	save,

	deprecated,
} );
