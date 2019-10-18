$(document).ready(function () {

    $('#startbutton').on('click', function () {
        var number = 30;
        setInterval(function () {
            number--;
            if (number >= 0) {
                span = document.getElementById("show-number");
                span.innerHTML = number + ' Seconds ';
            }
            if (number === 0) {
                alert('sorry, out of time');
                clearInterval(number);
            }
        }, 1000);

    })




});