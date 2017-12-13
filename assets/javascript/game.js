$( document ).ready(function() {

	// initializing variables
	var correctAnswers = 0;
	var incorrectAnswers = 0;
	var userGuess;

	// object containing trivia questions and answers
	var trivia = {
		questions: [
		"Question one?",
		"Question two?",
		"Question three?"
		],
		answersOne: [
		"Right answer",
		"Wrong answer",
		"Wrong answer",
		"Wrong answer"
		],
		answersTwo: [
		"Wrong answer",
		"Wrong answer",
		"Right answer",
		"Wrong answer"
		],
		answersThree: [
		"Wrong answer",
		"Wrong answer",
		"Right answer",
		"Wrong answer"
		]
	};

	// start buton initialization
	$("#startButton").click(function(){
		firstQuestion();
	});

	// questions
	function firstQuestion(){

		var time = 30;

		$("#startButton").addClass("hide");
		$("#timeRemainingQ1").removeClass("hide");
		$("#timeRemainingQ1").html("<h2>" + time + "</h2>");
		$("#question").removeClass("hide");
		$("#question").html("<h3>" + trivia.questions[0] + "</h3>");
		$("#buttonsQ1").removeClass("hide");
		$("#buttonOneQ1").html(trivia.answersOne[0]);
		$("#buttonTwoQ1").html(trivia.answersOne[1]);
		$("#buttonThreeQ1").html(trivia.answersOne[2]);
		$("#buttonFourQ1").html(trivia.answersOne[3]);
		
		// timer interval and button choices
		var timer = setInterval(function(){
			time--;
			$("#timeRemainingQ1").html("<h2>" + time + "</h2>");
			if (time < 0){
				clearInterval(timer);
				incorrectAnswers++;
				$("#timeRemainingQ1").addClass("hide");
				$("#question").html("<h3>Out of time! The correct answer was " + trivia.answersOne[0] + "<h3><img src='assets/images/placeholder.gif'>");
				$("#buttonsQ1").addClass("hide");
				setTimeout(secondQuestion, 3000);
			};
			}, 1000);

			$("#buttonOneQ1").click(function(){
				clearInterval(timer);
				correctAnswers++;
				$("#question").html("<h3>Correct! The answer is " + trivia.answersOne[0] + "<h3><img src='assets/images/placeholder.gif'>");
				$("#timeRemainingQ1").addClass("hide");
				$("#buttonsQ1").addClass("hide");
				setTimeout(secondQuestion, 3000);
			});

			$("#buttonTwoQ1, #buttonThreeQ1, #buttonFourQ1").click(function(){
				clearInterval(timer);
				incorrectAnswers++;
				$("#question").html("<h3>Wrong! The correct answer was " + trivia.answersOne[0] + "<h3><img src='assets/images/placeholder.gif'>");
				$("#timeRemainingQ1").addClass("hide");
				$("#buttonsQ1").addClass("hide");
				setTimeout(secondQuestion, 3000);
			});		
		
	};

	function secondQuestion(){
		var timeTwo = 30;

		$("#timeRemainingQ2").removeClass("hide");
		$("#timeRemainingQ2").html("<h2>" + timeTwo + "</h2>");
		$("#question").html("<h3>" + trivia.questions[1] + "</h3>");
		$("#buttonsQ2").removeClass("hide");
		$("#buttonOneQ2").html(trivia.answersTwo[0]);
		$("#buttonTwoQ2").html(trivia.answersTwo[1]);
		$("#buttonThreeQ2").html(trivia.answersTwo[2]);
		$("#buttonFourQ2").html(trivia.answersTwo[3]);
		
		var timerTwo = setInterval(function(){
			timeTwo--;
			$("#timeRemainingQ2").html("<h2>" + timeTwo + "</h2>");
			if (timeTwo < 0){
				clearInterval(timerTwo);
				incorrectAnswers++;
				$("#question").html("<h3>Out of time! The correct answer was " + trivia.answersTwo[2] + "<h3><img src='assets/images/placeholder.gif'>");
				$("#timeRemainingQ2").addClass("hide");
				$("#buttonsQ2").addClass("hide");
				setTimeout(thirdQuestion, 3000);
			};
			}, 1000);

			$("#buttonOneQ2, #buttonTwoQ2, #buttonFourQ2").click(function(){
				clearInterval(timerTwo);
				incorrectAnswers++;
				$("#question").html("<h3>Wrong! The correct answer was " + trivia.answersTwo[2] + "<h3><img src='assets/images/placeholder.gif'>");
				$("#timeRemainingQ2").addClass("hide");
				$("#buttonsQ2").addClass("hide");
				setTimeout(thirdQuestion, 3000);
			});

			$("#buttonThreeQ2").click(function(){
				clearInterval(timerTwo);
				correctAnswers++;
				$("#question").html("<h3>Correct! The answer is " + trivia.answersTwo[2] + "<h3><img src='assets/images/placeholder.gif'>");
				$("#timeRemainingQ2").addClass("hide");
				$("#buttonsQ2").addClass("hide");
				setTimeout(thirdQuestion, 3000);
			});
		
	};

	function thirdQuestion(){
		timeThree = 30;

		$("#timeRemainingQ3").removeClass("hide");
		$("#timeRemainingQ3").html("<h2>" + timeThree + "</h2>");
		$("#question").html("<h3>" + trivia.questions[2] + "</h3>");
		$("#buttonsQ3").removeClass("hide");
		$("#buttonOneQ3").html(trivia.answersThree[0]);
		$("#buttonTwoQ3").html(trivia.answersThree[1]);
		$("#buttonThreeQ3").html(trivia.answersThree[2]);
		$("#buttonFourQ3").html(trivia.answersThree[3]);
		
		var timerThree = setInterval(function(){
			timeThree--;
			$("#timeRemaining").html("<h2>" + timeThree + "</h2>");
			if (timeThree < 0){
				clearInterval(timerThree);
				incorrectAnswers++;
				$("#question").html("<h3>Out of time! The correct answer was " + trivia.answersThree[2] + "<h3><img src='assets/images/placeholder.gif'>");
				$("#timeRemainingQ3").addClass("hide");
				$("#buttonsQ3").addClass("hide");
				setTimeout(endpage, 3000);
			};
			}, 1000);

			$("#buttonOneQ3, #buttonTwoQ3, #buttonFourQ3").click(function(){
				clearInterval(timerThree);
				incorrectAnswers++;
				$("#question").html("<h3>Wrong! The correct answer was " + trivia.answersThree[2] + "<h3><img src='assets/images/placeholder.gif'>");
				$("#timeRemainingQ3").addClass("hide");
				$("#buttonsQ3").addClass("hide");
				setTimeout(endPage, 3000);
			});

			$("#buttonThreeQ3").click(function(){
				clearInterval(timerThree);
				correctAnswers++;
				$("#question").html("<h3>Correct! The answer is " + trivia.answersThree[2] + "<h3><img src='assets/images/placeholder.gif'>");
				$("#timeRemainingQ3").addClass("hide");
				$("#buttonsQ3").addClass("hide");
				setTimeout(endPage, 3000);
			});
		
	};

	function endPage(){
		$("#question").html("<h3>That's all!</h3><h3>Correct answers: " + correctAnswers + "</h3><h3>Wrong answers: " + incorrectAnswers + "</h3>");
		$("#resetButtonDiv").removeClass("hide");
		
	};	

	$("#resetButton").click(function(){
			correctAnswers = 0;
			incorrectAnswers = 0;
			$("#question").empty();
			$("#resetButtonDiv").addClass("hide");
			$("#startButton").removeClass("hide");
		});

});