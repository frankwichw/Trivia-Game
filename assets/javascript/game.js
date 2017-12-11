$( document ).ready(function() {
var correctAnswers = 0;
var incorrectAnswers = 0;
var userGuess;

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

	$("#startButton").click(function(){
		firstQuestion();
	});


	function firstQuestion(){
		var time = 30;
		$("#startButton").addClass("hide");
		$("#timeRemaining").html("<h2>" + time + "</h2>");
		$("#question").removeClass("hide");
		$("#question").html("<h3>" + trivia.questions[0] + "</h3>");
		$("#buttonOne").removeClass("hide");
		$("#buttonTwo").removeClass("hide");
		$("#buttonThree").removeClass("hide");
		$("#buttonFour").removeClass("hide");
		$("#buttonOne").html(trivia.answersOne[0]);
		$("#buttonTwo").html(trivia.answersOne[1]);
		$("#buttonThree").html(trivia.answersOne[2]);
		$("#buttonFour").html(trivia.answersOne[3]);
		setInterval(function(){
			time--;
			$("#timeRemaining").html("<h2>" + time + "</h2>");
		}, 1000);
		$("#buttonOne").click(function(){
			correctAnswers++;
			
		});
	};

	function secondQuestion(){

	};

	function thirdQuestion(){

	};

});