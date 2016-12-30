$(document).ready( function () {

    var loop;

// conditions for the result of the loop
    function counting(i) {
      var destination = $('#result');

    loop = setTimeout(function() {
          destination.html(i);
          // fingers and toes conditions
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

            console.log(i);
        }, 1000 * i);

    }


    // start i through the loop
    function count(num) {
        for (var i = 0; i <= num; i++) {
            counting(i);
        };
    }

    var number;

    var counterNumber;

    $('#countMe').on('click', function () {
     number = parseFloat( $('#counter').val(), 10 );

    count(number);


    return countedNumber = number;

    });

    function clearText() {
      $('#fingers').css({'color': '#263238'
                        , 'text-transform': 'none'});
      $('#toes').css(   {'color': '#263238'
                        , 'text-transform': 'none'});
    }

    $('#resetCounter').on('click', function(){
      clearTimeout(loop);
      $('#counter').bind().val('');
      $('#result').empty();
      clearText();

    })

    $('#restartCounter').bind('click', function () {

      clearText();
      count(countedNumber);
    })

})
