<?php
/**
 * Plugin Name:     Section
 * Description:     A Gutenberg block that allows you to add other blocks inside.
 * Version:         0.1.0
 * Author:          Bharath
 * License:         GPL-2.0-or-later
 * Text Domain:     oleti
 *
 * Plugin URI:      https://github.com/bharath/section
 * Author URI:      https://bharath.dev
 *
 * @package         oleti
 */

/**
 * Registers all block assets so that they can be enqueued through the block editor
 * in the corresponding context.
 *
 * @see https://developer.wordpress.org/block-editor/tutorials/block-tutorial/applying-styles-with-stylesheets/
 */
function oleti_section_block_init() {
	$dir = dirname( __FILE__ );

	$script_asset_path = "$dir/build/index.asset.php";
	if ( ! file_exists( $script_asset_path ) ) {
		throw new Error(
			'You need to run `npm start` or `npm run build` for the "oleti/section" block first.'
		);
	}
	$index_js     = 'build/index.js';
	$script_asset = require( $script_asset_path );
	wp_register_script(
		'oleti-section-block-editor',
		plugins_url( $index_js, __FILE__ ),
		$script_asset['dependencies'],
		$script_asset['version']
	);

	wp_set_script_translations(
		'oleti-section-block-editor',
		'oleti',
		plugin_dir_path( __FILE__ ) . 'languages'
	);

	$editor_css = 'editor.css';
	wp_register_style(
		'oleti-section-block-editor',
		plugins_url( $editor_css, __FILE__ ),
		array(),
		filemtime( "$dir/$editor_css" )
	);

	$style_css = 'style.css';
	wp_register_style(
		'oleti-section-block',
		plugins_url( $style_css, __FILE__ ),
		array(),
		filemtime( "$dir/$style_css" )
	);

	register_block_type( 'oleti/section', array(
		'editor_script' => 'oleti-section-block-editor',
		'editor_style'  => 'oleti-section-block-editor',
		'style'         => 'oleti-section-block',
	) );
}
add_action( 'init', 'oleti_section_block_init' );




/**
 * Register Custom Block Styles
 */
function oleti_section_block_register_block_patterns() {

	if ( function_exists( 'register_block_pattern_category' ) ) {

		register_block_pattern_category(
			'Section',
			[
				'label' => __( 'Section', 'oleti' )
			]
		);

	}

	if ( function_exists( 'register_pattern' ) ) {

		/**
		* Register block patterns
		*/
		register_pattern(
			'oleti/section-background-color',
			[
				'title'   => __( 'Section with Background Color', 'oleti' ),
				'content' => "<!-- wp:oleti/section {\"align\":\"full\",\"backgroundColor\":\"accent\",\"textColor\":\"background\"} -->
		\n<section class=\"wp-block-oleti-section alignfull has-accent-background-color has-background-color has-text-color has-background padding-top-extra-small padding-right-none padding-bottom-extra-small padding-left-none margin-top-none margin-bottom-none has-background-overlay-50 has-background-overlay\"><div class=\"wp-block-oleti-section__inner-container\">\n<!-- wp:paragraph -->
		<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
		\n<!-- /wp:paragraph --></div></section>
		\n<!-- /wp:oleti/section -->",
			]
		);

		register_pattern(
			'oleti/section-background-image',
			[
				'title'   => __( 'Section with Background Image', 'oleti' ),
				'content' => "<!-- wp:oleti/section {\"align\":\"full\",\"backgroundColor\":\"primary\",\"paddingTop\":\"normal\",\"paddingBottom\":\"normal\",\"url\":\"https://jsfwpblock.test/wp-content/uploads/2020/02/f5346433-b15c-33cf-86db-93811aba4fc3.jpg\",\"id\":46} -->
		\n<section class=\"wp-block-oleti-section alignfull has-primary-background-color has-background padding-top-normal padding-right-none padding-bottom-normal padding-left-none margin-top-none margin-bottom-none has-background-overlay-50 has-background-overlay\" style=\"background-image:url(https://jsfwpblock.test/wp-content/uploads/2020/02/f5346433-b15c-33cf-86db-93811aba4fc3.jpg)\"><div class=\"wp-block-oleti-section__inner-container\">\n<!-- wp:paragraph -->
		<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
		\n<!-- /wp:paragraph --></div></section>
		\n<!-- /wp:oleti/section -->",
			]
		);

	}

}
add_action( 'init', 'oleti_section_block_register_block_patterns' );
