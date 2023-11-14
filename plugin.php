<?php
/*
Plugin Name: Concrete Calculator by Calculator.iO
Plugin URI: https://www.calculator.io/concrete-calculator/
Description: Estimate the right amount of concrete for home improvement projects. Concrete calculators do the math to figure out how many bags of mix to buy for driveway slabs, deck footings, stairs, and DIY projects.
Version: 1.0.0
Author: Calculator.io
Author URI: https://www.calculator.io/
License: GPLv2 or later
Text Domain: ci_concrete_calculator
*/

if (!defined('ABSPATH')) exit;

if (!function_exists('add_shortcode')) return "No direct call for Concrete Calculator by Calculator.iO";

function display_ci_concrete_calculator(){
    $page = 'index.html';
    return '<h2><a href="https://www.calculator.io/concrete-calculator/" target="_blank"><img src="' . esc_url(plugins_url('assets/images/icon-48.png', __FILE__ )) . '" width="48" height="48"></a> Concrete Calculator</h2><div><iframe style="background:transparent; overflow: scroll" src="' . esc_url(plugins_url($page, __FILE__ )) . '" width="100%" frameBorder="0" allowtransparency="true" onload="this.style.height = this.contentWindow.document.documentElement.scrollHeight + \'px\';" id="ci_concrete_calculator_iframe"></iframe></div>';
}

add_shortcode( 'ci_concrete_calculator', 'display_ci_concrete_calculator' );