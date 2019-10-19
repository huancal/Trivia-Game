$(document).ready(function () {

    $('#startbutton').on('click', function () {
        TriviaGame.start()


    })

    // Question set
    var triviaQuestions = [{
        question: "What was the first full length CGI movie?",
        answers: ["A Bug's Life", "Monsters Inc.", "Toy Story", "The Lion King"],
        correctAnswer: "Toy Story",
    }, {
        question: "Which of these is NOT a name of one of the Spice Girls?",
        answers: ["Sporty Spice", "Fred Spice", "Scary Spice", "Posh Spice"],
        correctAnswer: "Fred Spice",
    }]

    var TriviaGame = {
        correct_answers: 0,
        incorrect_answers: 0,
        unansweredd_questions: 0,
        timer: 5,



        start: function () {
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

            for (var i = 0; i < triviaQuestions.length; i++) {
                $('#Question1').append("<h1> " + triviaQuestions[i].question + "</h1>")

                for (var j = 0; j < triviaQuestions[i].answers.length; j++) {
                    $('#Question1').append("<div><input type='radio' name='option" +
                        "'value='" + triviaQuestions[i].answers[j] + "''> " + triviaQuestions[i].answers[j] + "</div>")
                }
            }
        },
    }

    $('#endbutton').on('click', function () {
        userchoice()

        function userchoice() {
            for (var i = 0; i < triviaQuestions.length; i++) {
                var radioValue = $("input[name='option" + i + "']:checked").val();
                if (radioValue === triviaQuestions[i].correctAnswer) {
                    console.log('correct answer');
                    TriviaGame.correct_answers++;

                } else if (radioValue === undefined) {
                    console.log("no guess");
                    TriviaGame.unansweredd_questions++;
                } else {
                    console.log('wrong answer');
                    TriviaGame.incorrect_answers++;
                }
            }
        }

    })




});