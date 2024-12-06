<?php
$unique_id = wp_unique_id( 'p-' );

// Adds the global state.
wp_interactivity_state(
	'create-block',
	array(
		'isDark'    => false,
		'darkText'  => esc_html__( 'Switch to Light', 'decibel-meter-update' ),
		'lightText' => esc_html__( 'Switch to Dark', 'decibel-meter-update' ),
		'themeText'	=> esc_html__( 'Switch to Dark', 'decibel-meter-update' ),
	)
);

$context = array(
	'decibelValue' => 0,
	'backgroundColor' => 'yellow'
)
?>

<div
	<?php echo get_block_wrapper_attributes(); ?>
	data-wp-interactive="create-block"
	<?php echo wp_interactivity_data_wp_context($context); ?>
>
	<h2>Decibel Meter Value: <span data-wp-text="context.decibelValue"></span></h2>
	<div 
		class="meter-warning-color"
		data-wp-style--background="context.backgroundColor"
	></div>
	<button data-wp-on--click="actions.randomizeNumber">Random!</button>
</div>
