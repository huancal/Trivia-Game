$(document).ready(function () {

    $('#startbutton').on('click', function () {
        TriviaGame.start()


    })

    // Question set
    var triviaQuestions = [{
            question: "Who won the World Cup in 2010?",
            answers: ["Spain", "Brazil", "United States", "Netherlands"],
            correctAnswer: "Spain",
        }, {
            question: "Which baseball team won the first World Series?",
            answers: ["Pittsburgh Pirates", "New York Giants", "Boston Americans", "Detroit Tigers"],
            correctAnswer: "Boston Americans",
        },
        {
            question: "In 2014 who was the highest paid athlete at 78.1 million?",
            answers: ["Lebron James", "Tiger Woods", "Kobe Bryant", "Roger Federer"],
            correctAnswer: "Tiger Woods",
        },
        {
            question: "Which team won the 1st Super Bowl that was played on January 15, 1967?",
            answers: ["Green Bay Packers", "Oakland Raiders", "New York Jets", "Kansas City Chiefs"],
            correctAnswer: "Green Bay Packers",
        },
        {
            question: "How many panels make up a soccer ball?",
            answers: ["18", "21", "32", "40"],
            correctAnswer: "32",
        }
    ]

    var TriviaGame = {
        correct_answers: 0,
        incorrect_answers: 0,
        unansweredd_questions: 0,




        start: function () {
            var number = 60;
            setInterval(function () {
                number--;
                if (number >= 0) {
                    span = document.getElementById("show-number");
                    span.innerHTML = " <strong>Time Remaining</strong> " + number + ' Seconds ';
                }
                if (number === 0) {
                    alert('sorry, out of time');
                    clearInterval(number);
                }
            }, 1000);

            for (var i = 0; i < triviaQuestions.length; i++) {
                $('#Question1').append("<h4> " + triviaQuestions[i].question + "</h4>")

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