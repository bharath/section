<?php
/**
 * Plugin Name:     Section
 * Description:     A Gutenberg block that allows you to add other blocks inside.
 * Version:         0.1.0
 * Author:          Bharath
 * License:         GPL-2.0-or-later
 * Text Domain:     oleti
 *
 * Plugin URI: https://github.com/bharath/section
 * Author URI: https://bharath.dev
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

function oleti_section_block_sidebar_plugin_register() {
	wp_register_style(
		'oleti-section-block-sidebar-plugin-style',
		plugins_url( 'section-sidebar.css', __FILE__ )
	);
}
add_action( 'init', 'oleti_section_block_sidebar_plugin_register' );

function oleti_section_block_sidebar_plugin_style_enqueue() {
	wp_enqueue_style( 'oleti-section-block-sidebar-plugin-style' );
}
add_action( 'enqueue_block_assets', 'oleti_section_block_sidebar_plugin_style_enqueue' );
