var correct_answers = 0;
var incorrect_answers = 0;
var unansweredd_questions = 0;

$(document).ready(function () {
    $('#startbutton').on('click', function () {
        startgame()
    });

    //On Submit display ScoreCard 
    $('#endbutton').on('click', function () {
        //Colleect All answers 
        userchoice();
        //Display Scorecard
        scoreCard();

    });

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
    ];

    //Start Game 
    function startgame() {
        //Hide Q& A section 
        $('#Question1').empty();
        $('#Question1').show();
        //Hide Q& A section 
        $('#results').empty();
        $('#results').hide();
        //Reset Values -Global Variables 
        correct_answers = 0;
        incorrect_answers = 0;
        unansweredd_questions = 0;
        //Timer Variable 
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
                //Count all answers 
                userchoice();
                //Display Scorecard 
                scoreCard();
            }
        }, 1000);
        //Populate All Q&A 
        for (var i = 0; i < triviaQuestions.length; i++) {

            $('#Question1').append("<h4 id='Q-" + i + "' > " + triviaQuestions[i].question + "</h4>")
            //Answers for Q 
            for (var j = 0; j < triviaQuestions[i].answers.length; j++) {
                $('#Question1').append("<div><input type='radio' name='option-" + j +
                    "' value='" + triviaQuestions[i].answers[j] + "''> " + triviaQuestions[i].answers[j] + " </div>");
            }
        }
        //Add End Game button 
        $('#Question1').append("<button id='endbutton' class='btn btn-success btn-lg'>Submit Answers</button>");
    }



    //Score Card 
    function userchoice() {

        for (var i = 0; i < triviaQuestions.length; i++) {

            console.log("triviaQuestions[i].correctAnswer", triviaQuestions[i].correctAnswer);

            var optionVal = $("input[name='option-" + i + "']:checked").val();
            console.log(optionVal);

            if (optionVal === triviaQuestions[i].correctAnswer) {
                console.log('correct answer');
                correct_answers++;
            } else if (optionVal === undefined) {
                console.log("no guess");
                unansweredd_questions++;
            } else {
                console.log('wrong answer');
                incorrect_answers++;
            }
        }

    }

    function scoreCard() {

        $('#results').show();

        $('#results').html("<h2 class='text-center'>All Done!</h2>");
        $('#results').append("<h4 class='text-center text-success'> Correct Answers - " + correct_answers + "</h4>")
        $('#results').append("<h4 class='text-center text-danger'> InCorrect Answers - " + incorrect_answers + "</h4>")
        $('#results').append("<h4 class='text-center text-primary'> Unanswered Answers - " + unansweredd_questions + "</h4>")
        //Hide Q& A section 
        $('#Question1').hide();
    }
});