var correct_answers = 0;
var incorrect_answers = 0;
var unansweredd_questions = 0;

$(document).ready(function () {

    $('#startbutton').on('click', function () {
        startgame()
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

    function startgame() {
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
    }


    $('#endbutton').on('click', function () {
        userchoice()

        function userchoice() {
            for (var i = 0; i < triviaQuestions.length; i++) {
                var radioValue = $("input[name='option']:checked").val();
                if (radioValue === triviaQuestions[i].correctAnswer) {
                    console.log('correct answer');
                    correct_answers++;
                } else if (radioValue === undefined) {
                    console.log("no guess");
                    unansweredd_questions++;
                } else {
                    console.log('wrong answer');
                    incorrect_answers++;
                }
            }

            $('#results').html("<h4>" + correct_answers + "</h4>")
            $('#results').html("<h4>" + incorrect_answers + "</h4>")
            $('#results').html("<h4>" + unansweredd_questions + "</h4>")
        }
    })
});