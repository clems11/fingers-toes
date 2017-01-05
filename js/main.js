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
