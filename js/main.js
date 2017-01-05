$(document).ready(function () {
	"use strict";

	//////////////////////////////////////////////////	
	////
	////     timeout variable for setTimeout scope	

	var timeout;

	//////////////////////////////////////////////////
	////
	////     counting function	

	function wrapperCounter(num) {

		clearTimeout(timeout);

		var i = -1;

		function count() {

			i++;

			if (i <= num) {
				timeout = setTimeout(function () {
					$('#result').html(i);

					// highlight fingers if divisible by 3
					if ((i > 0) && (i % 3 === 0)) {
						$('#fingers').css({
							'color': 'red',
							'text-transform': 'uppercase'
						});
					} else {
						$('#fingers').css({
							'color': 'black',
							'text-transform': 'none'
						});
					}

					// highlight toes if divisble by 5
					if ((i > 0) && (i % 5 === 0)) {
						$('#toes').css({
							'color': 'red',
							'text-transform': 'uppercase'
						});
					} else {
						$('#toes').css({
							'color': 'black',
							'text-transform': 'none'
						});
					}

					count();
				}, 1000);
			}
		}
		count();

	}
	//////////////////////////////////////////////////
	////
	////    collects numbers from "count" and "reset" buttons and places number in the 
	////    "Last number Used" section then sends the number to the counter above

	function createInputNumber(num) {

		$('#currentNumber').html(num);
		wrapperCounter(num);
	}

	//////////////////////////////////////////////////
	////
	////    "count" button onclick function

	$('#countMe').on('click', function () {
		var inputNum = $('#counter').val();
		createInputNumber(inputNum);

	});

	//////////////////////////////////////////////////
	////
	////    "reset" button onclick function

	$('#resetCounter').on('click', function () {

		clearTimeout(timeout);
		$('#counter').val('');
		$('#result').empty();
		$('#toes').removeAttr('style');
		$('#fingers').removeAttr('style');
		timeout = 0;

	});

	//////////////////////////////////////////////////
	////
	////    "restart" button onclick function

	$('#restartCounter').on('click', function () {

		var restartNumber = parseFloat($('#currentNumber').html(), 10);
		createInputNumber(restartNumber);


	});


});
