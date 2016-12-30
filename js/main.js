$(document).ready( function () {

// conditions for the result of the loop
    function counting(i) {
        var destination = $('.container__counter--result');

        setTimeout(function () {
          destination.html(i);
          // fingers and toes conditions
          ( (i > 0) & (i % 3 === 0) ) ?
                $('#fingers').css({'color': 'red'})
              :
                $('#fingers').css({'color': 'black'});

          ( (i > 0) & (i % 5 === 0) ) ?
                $('#toes').css({'color': 'red'})
              :
                $('#toes').css({'color': 'black'});

            console.log(i);
        }, 1000 * i);
    }

    // start i through the loop
    function count(num) {
        for (var i = 0; i <= num; i++) {
            counting(i);
        };
    }


    $('#countMe').on('click', function () {

    var number = parseFloat( $('#counter').val(), 10 );

    count(number);

    });




})
