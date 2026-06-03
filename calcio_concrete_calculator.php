<?php
/*
Plugin Name: Concrete Calculator by Calculator.iO
Plugin URI: https://www.calculator.io/concrete-calculator/
Description: Need concrete for a slab, footing, or stairs? Use our free Concrete Calculator to accurately estimate volume, yards, and bags of mix needed for your project.
Version: 1.0.0
Author: www.calculator.io / Concrete Calculator
Author URI: https://www.calculator.io/
License: GPLv2 or later
Text Domain: calcio_concrete_calculator
*/

if (!defined('ABSPATH')) exit;

if (!function_exists('add_shortcode')) return "No direct call for Concrete Calculator by www.calculator.io";

function calcio_concrete_calculator_shortcode(){
    $page = 'index.html';
    return '<h2><img src="' . esc_url(plugins_url('assets/images/icon-48.png', __FILE__ )) . '" width="48" height="48">Concrete Calculator</h2><div><iframe style="background:transparent; overflow: scroll" src="' . esc_url(plugins_url($page, __FILE__ )) . '" width="100%" frameBorder="0" allowtransparency="true" onload="this.style.height = this.contentWindow.document.documentElement.scrollHeight + \'px\';" id="calcio_concrete_calculator_iframe"></iframe></div>';
}


add_shortcode( 'calcio_concrete_calculator', 'calcio_concrete_calculator_shortcode' );