$(document).ready( function () {



    var countedNumber;

    var timeOut;

    var i = 0;

      var myLoop = function() {

        timeOut = setTimeout(function () {
          console.log(i++);
          if (i <= number) {
            ( (i > 0) & (i % 3 === 0) ) ?
                  $('#fingers').css
                      ({'color': 'red'
                      , 'text-transform': 'uppercase'})
                :
                  $('#fingers').css
                      ({'color': 'black'
                      , 'text-transform': 'none'});

            ( (i > 0) & (i % 5 === 0) ) ?
                  $('#toes').css
                      ({'color': 'red'
                      , 'text-transform': 'uppercase'})
                :
                  $('#toes').css
                      ({'color': 'black'
                      , 'text-transform': 'none'});
            $('#result').html(i);
             myLoop();
          }
       }, 1000);

    }

    var countingF = function () {
      number = parseFloat( $('#counter').val(), 10 );
        count(number);
        $('#currentNumber').html(number);
    }

    function count(number) {
        myLoop(number);
    };

    $('#countMe').on('click', countingF);

    $('#resetCounter').on('click', function(){
      console.log(timeOut);
      countedNumber = number;
      clearTimeout(timeOut);
      $('#counter').bind().val('');
      $('#result').empty();
      clearText();
    });

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
