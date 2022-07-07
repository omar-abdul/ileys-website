<?php
// Exit if accessed directly
if ( !defined( 'ABSPATH' ) ) exit;

// BEGIN ENQUEUE PARENT ACTION
// AUTO GENERATED - Do not modify or remove comment markers above or below:

if ( !function_exists( 'chld_thm_cfg_locale_css' ) ):
    function chld_thm_cfg_locale_css( $uri ){
        if ( empty( $uri ) && is_rtl() && file_exists( get_template_directory() . '/rtl.css' ) )
            $uri = get_template_directory_uri() . '/rtl.css';
        return $uri;
    }
endif;
add_filter( 'locale_stylesheet_uri', 'chld_thm_cfg_locale_css' );
         
if ( !function_exists( 'child_theme_configurator_css' ) ):
    function child_theme_configurator_css() {
        wp_enqueue_style( 'chld_thm_cfg_separate', trailingslashit( get_stylesheet_directory_uri() ) . 'ctc-style.css', array( 'astra-theme-css','woocommerce-layout','woocommerce-smallscreen','woocommerce-general' ) );
    }
endif;
add_action( 'wp_enqueue_scripts', 'child_theme_configurator_css', 10 );


add_action('woocommerce_checkout_process', 'my_custom_checkout_field_process');

  function my_custom_checkout_field_process() {
      // Check if set, if its not set add an error. This one is only requite for companies
    if ( ! (preg_match('/^[0-9]{10}$/D', $_POST['billing_phone'] ))){

        wc_add_notice( "Incorrect Phone Number! Please enter valid 10 digits phone number"  ,'error' );
    }
}

function get_country_code($code){
	switch ($code){
		case 'SO':
			return '+252';
			break;
		case 'ETH':
			return '+251';
			break;
		default:
			return '+252';
	}
	
}

function action_after_new_order ($order){
	//$order->data['billing']['phone']
	$country_code = $order->data['billing']['country'];
	$dial_code = get_country_code($country_code);
	$number = $dial_code.$order->data['billing']['phone'];
	//echo $number;
}
add_action( 'woocommerce_after_order_details', 'action_after_new_order',10,1);

// END ENQUEUE PARENT ACTION
