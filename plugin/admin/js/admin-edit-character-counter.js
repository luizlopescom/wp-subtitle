/**
 * @package     WP Subtitle
 * @subpackage  JavaScript > Admin Edit Character Counter
 */

jQuery(document).ready(function ($) {

	//set field vars
	let getInput = $('#wpsubtitle'); // or input
	const getspan = $('#wpsubtitle_counter');

	//calc saved length
	let innerInput = getInput[0].value;
	let calc = innerInput.length;

	if ( calc > 4) {
		getspan.text(calc);
		getspan.parent().fadeIn();
	} else {
		getspan.parent().hide();
	};

	//calc length on change
	function calculate() {
		let innerInput = getInput[0].value;
		let calc = innerInput.length;
		getspan.text(calc);

		if ( calc > 4) {
			getspan.parent().fadeIn();
		} else {
			getspan.parent().hide();
		};
	}

	getInput.on('input', calculate);

});