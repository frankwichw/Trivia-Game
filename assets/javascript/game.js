$( document ).ready(function() {

	// initializing variables
	var correctAnswers = 0;
	var incorrectAnswers = 0;
	var userGuess;

	// object containing trivia questions and answers
	var trivia = {
		questions: [
		"Which of these is a fruit introduced in Animal Crossing: New Leaf?",
		"At what time of year can you catch a dung beetle in Animal Crossing: Wild World?",
		"Which character was made optional in Animal Crossing: New Leaf because he was too scary for some young players?"
		],
		answersOne: [
		"mangoes",
		"cherries",
		"pears",
		"apples"
		],
		answersTwo: [
		"Only in June",
		"March to October",
		"December to February",
		"There are no dung beetles in Wild World"
		],
		answersThree: [
		"Wendle",
		"K.K. Slider",
		"Mr. Resetti",
		"Dr. Shrunk"
		]
	};

	// start button initialization
	$("#startButton").click(function(){
		firstQuestion();
	});

	// initialize timer variable
	var timer;

	// button events for question one
	$("#buttonOneQ1").click(function(){
		clearInterval(timer);
		correctAnswers++;
		$("#question").html("<h3>Correct! The answer is " + trivia.answersOne[0] + ".</h3><img src='assets/images/tiffany.gif' width='400'>");
		$("#timeRemainingQ1").addClass("hide");
		$("#buttonsQ1").addClass("hide");
		setTimeout(secondQuestion, 4000);
	});

	$("#buttonTwoQ1, #buttonThreeQ1, #buttonFourQ1").click(function(){
		clearInterval(timer);
		incorrectAnswers++;
		$("#question").html("<h3>Wrong! The correct answer was " + trivia.answersOne[0] + ".</h3><img src='assets/images/tiffany.gif' width='400'>");
		$("#timeRemainingQ1").addClass("hide");
		$("#buttonsQ1").addClass("hide");
		setTimeout(secondQuestion, 4000);
	});

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
		timer = setInterval(function(){
			time--;
			$("#timeRemainingQ1").html("<h2>" + time + "</h2>");
			if (time < 0){
				clearInterval(timer);
				incorrectAnswers++;
				$("#timeRemainingQ1").addClass("hide");
				$("#question").html("<h3>Out of time! The correct answer was " + trivia.answersOne[0] + ".</h3><img src='assets/images/tiffany.gif' width='400'>");
				$("#buttonsQ1").addClass("hide");
				setTimeout(secondQuestion, 4000);
			};
		}, 1000);
	
	};

	// button events for question two
	$("#buttonOneQ2, #buttonTwoQ2, #buttonFourQ2").click(function(){
		clearInterval(timer);
		incorrectAnswers++;
		$("#question").html("<h3>Wrong! The correct answer was " + trivia.answersTwo[2] + ".</h3><img src='assets/images/able.gif' width='400'>");
		$("#timeRemainingQ2").addClass("hide");
		$("#buttonsQ2").addClass("hide");
		setTimeout(thirdQuestion, 4000);
	});

	$("#buttonThreeQ2").click(function(){
		clearInterval(timer);
		correctAnswers++;
		$("#question").html("<h3>Correct! The answer is " + trivia.answersTwo[2] + ".</h3><img src='assets/images/able.gif' width='400'>");
		$("#timeRemainingQ2").addClass("hide");
		$("#buttonsQ2").addClass("hide");
		setTimeout(thirdQuestion, 4000);
	});

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
		
		timer = setInterval(function(){
			timeTwo--;
			$("#timeRemainingQ2").html("<h2>" + timeTwo + "</h2>");
			if (timeTwo < 0){
				clearInterval(timer);
				incorrectAnswers++;
				$("#question").html("<h3>Out of time! The correct answer was " + trivia.answersTwo[2] + ".</h3><img src='assets/images/able.gif' width='400'>");
				$("#timeRemainingQ2").addClass("hide");
				$("#buttonsQ2").addClass("hide");
				setTimeout(thirdQuestion, 4000);
			};
		}, 1000);
		
	};

	// button events for question three
	$("#buttonOneQ3, #buttonTwoQ3, #buttonFourQ3").click(function(){
		clearInterval(timer);
		incorrectAnswers++;
		$("#question").html("<h3>Wrong! The correct answer was " + trivia.answersThree[2] + ".</h3><img src='assets/images/resetti.gif'>");
		$("#timeRemainingQ3").addClass("hide");
		$("#buttonsQ3").addClass("hide");
		setTimeout(endPage, 4000);
		console.log(correctAnswers);
		console.log(incorrectAnswers);
	});

	$("#buttonThreeQ3").click(function(){
		clearInterval(timer);
		correctAnswers++;
		$("#question").html("<h3>Correct! The answer is " + trivia.answersThree[2] + ".</h3><img src='assets/images/resetti.gif'>");
		$("#timeRemainingQ3").addClass("hide");
		$("#buttonsQ3").addClass("hide");
		setTimeout(endPage, 4000);
	});

	function thirdQuestion(){
		var timeThree = 30;

		$("#timeRemainingQ3").removeClass("hide");
		$("#timeRemainingQ3").html("<h2>" + timeThree + "</h2>");
		$("#question").html("<h3>" + trivia.questions[2] + "</h3>");
		$("#buttonsQ3").removeClass("hide");
		$("#buttonOneQ3").html(trivia.answersThree[0]);
		$("#buttonTwoQ3").html(trivia.answersThree[1]);
		$("#buttonThreeQ3").html(trivia.answersThree[2]);
		$("#buttonFourQ3").html(trivia.answersThree[3]);
		
		timer = setInterval(function(){
			timeThree--;
			$("#timeRemainingQ3").html("<h2>" + timeThree + "</h2>");
			if (timeThree < 0){
				clearInterval(timer);
				incorrectAnswers++;
				$("#question").html("<h3>Out of time! The correct answer was " + trivia.answersThree[2] + ".</h3><img src='assets/images/resetti.gif'>");
				$("#timeRemainingQ3").addClass("hide");
				$("#buttonsQ3").addClass("hide");
				setTimeout(endPage, 4000);
			};
			}, 1000);
		
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
			console.log(correctAnswers);
			console.log(incorrectAnswers);
	});

});