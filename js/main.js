$(document).ready( function () {


    // var loop;

// conditions for the result of the loop
    // function counting(i) {
      // var destination = $('#result');

    // loop = setTimeout(function() {

          // fingers and toes conditions
          // ( (i > 0) & (i % 3 === 0) ) ?
          //       $('#fingers').css
          //           ({'color': 'red'
          //           , 'text-transform': 'uppercase'})
          //     :
          //       $('#fingers').css
          //           ({'color': 'black'
          //           , 'text-transform': 'none'});
          //
          // ( (i > 0) & (i % 5 === 0) ) ?
          //       $('#toes').css
          //           ({'color': 'red'
          //           , 'text-transform': 'uppercase'})
          //     :
          //       $('#toes').css
          //           ({'color': 'black'
          //           , 'text-transform': 'none'});
        //
        //     console.log(i);
        // }, 1000 * i);

        // loop = setTimeout(function() { working
        //       destination.html(i);
              // fingers and toes conditions
              // ( (i > 0) & (i % 3 === 0) ) ?
              //       $('#fingers').css
              //           ({'color': 'red'
              //           , 'text-transform': 'uppercase'})
              //     :
              //       $('#fingers').css
              //           ({'color': 'black'
              //           , 'text-transform': 'none'});
              //
              // ( (i > 0) & (i % 5 === 0) ) ?
              //       $('#toes').css
              //           ({'color': 'red'
              //           , 'text-transform': 'uppercase'})
              //     :
              //       $('#toes').css
              //           ({'color': 'black'
              //           , 'text-transform': 'none'});

            //     console.log(i);
            // }, 1000 * i);

    // };









//     var theTimeout,
//     	runner = 0;
//     var newRunner = function() {
//     	theTimeout = setTimeout(function() {
//     		runner += 1.6;
//     		// $('.output')[0].innerHTML = runner;
//          $('.output').html(runner);
//     		newRunner();
//     	}, 1000);
//     };
//     newRunner();
// $('#stopTimer').on('click',
//      function() {
//     	console.log(theTimeout);
//     	clearTimeout(theTimeout);
//     	console.log('Stopped');
//     	console.log(theTimeout);
// })


    // start i through the loop
    function count(number) {
        // var destination = $('#result');
        // number = parseFloat( $('#counter').val(), 10 );
        myLoop(number);
    };

      var countedNumber;

    $('#resetCounter').on('click', function(){
      console.log(timeOut);
      countedNumber = number;
      clearTimeout(timeOut);
      $('#counter').bind().val('');
      $('#result').empty();
      clearText();
    });

    var timeOut;

    var i = 0;

      var myLoop = function() {           //  create a loop function

        timeOut = setTimeout(function () {    //  call a 3s setTimeout when the loop is called
                   //  your code here
          console.log(i++);                     //  increment the counter
          if (i <= number) {
            $('#result').html(i);            //  if the counter < 10, call the loop function
             myLoop();             //  ..  again which will trigger another
          }                      //  ..  setTimeout()
       }, 1000);

    }



    var countingF = function () {
      number = parseFloat( $('#counter').val(), 10 );
        count(number);
    }

    $('#countMe').on('click', countingF);

    function clearText() {
      $('#fingers').css({'color': '#263238'
                        , 'text-transform': 'none'});
      $('#toes').css(   {'color': '#263238'
                        , 'text-transform': 'none'});
    };


    $('#restartCounter').on('click', function() {
      console.log(countedNumber);
      i = 0;
      count(number);
    })


})
