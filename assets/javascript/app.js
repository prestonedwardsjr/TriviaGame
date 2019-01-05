var timer = 120;
var intervalId;
var correctAnswers = 0;
var incorrectAnswers = 0;
var unanswered = 0;
// Questions in Array & answers nested in array
var questions = [{
  question: " Which is least likely to lower your blood pressure?",
  answerList: ["low-fat yogurt","cantaloupe", "whole-grain bread", "spinach", ],
  answer: 2
},
                 {
                   question: " Vitamin D may reduce the risk of all but one of these. Which one?",
                   answerList: ["bone loss","colon cancer", "gum disease", "irritable bowel syndrome", ],
                   answer: 3
                 },       {
                   question: "Which is least likely to reduce your risk of diabetes?",
                   answerList: ["whole-grain cereal","nuts", "orange juice", "alcoholic beverages", ],
                   answer: 2
                 },
                 {
                   question: "Which is least likely to lower your risk of colon cancer?",
                   answerList: ["lean meat","whole-grain bread", "low-fat milk", "a multivitamin", ],
                   answer: 0
                 },
                 {
                   question: "Which is least likely to lower your risk of brittle bones (osteoporosis)?",
                   answerList: ["low-fat yogurt","collard greens", "Sun", "olive oil", ],
                   answer: 3
                 },
                 {
                   question: "Which is least likely to cause food poisoning?",
                   answerList: ["raw sprouts","chicken", "salad", "mayonnaise", ],
                   answer: 3
                 },
                 {
                   question: "Meat eaters have a higher risk of all but one of these diseases. Which one?",
                   answerList: ["osteoarthritis","diabetes", "gout", "colon cancer", ],
                   answer: 0
                 }
                ];


// Start Button
$("#start").on("click", function() {

  // Hide Start button
  $(this).hide();

  // Display initial time countdown
  $("#time").html("<h2>Time Remaining: 120 Seconds</h2>" + "<br>");

  // Start timer countdown
  run();
  // Question 1
  
  $("#question0").html
  ("<h3>" + questions[0].question + "</h3>");
  $("#answer1").html
  ("<input type='radio' name='answer1' value='0'>" + "<label>" + questions[0].answerList[0] + "</label>"
   + "<input type='radio' name='answer1' value='1'>" + "<label>" + questions[0].answerList[1] + "</label>"
   + "<input type='radio' name='answer1' value='2'>" + "<label>" + questions[0].answerList[2] + "</label>"
   + "<input type='radio' name='answer1' value='3'>" + "<label>" + questions[0].answerList[3] + "</label><br><br>");

  // Question 2
  $("#question1").html
  ("<h3>" + questions[1].question + "</h3>");
  $("#answer2").html
  ("<input type='radio' name='answer2' value='0'>" + "<label>" + questions[1].answerList[0] + "</label>"
   + "<input type='radio' name='answer2' value='1'>" + "<label>" + questions[1].answerList[1] + "</label>"
   + "<input type='radio' name='answer2' value='2'>" + "<label>" + questions[1].answerList[2] + "</label>"
   + "<input type='radio' name='answer2' value='3'>" + "<label>" + questions[1].answerList[3] + "</label><br><br>");
  // Question 3
  $("#question2").html
  ("<h3>" + questions[2].question + "</h3>");
  $("#answer3").html
  ("<input type='radio' name='answer3' value='0'>" + "<label>" + questions[2].answerList[0] + "</label>"
   + "<input type='radio' name='answer3' value='1'>" + "<label>" + questions[2].answerList[1] + "</label>"
   + "<input type='radio' name='answer3' value='2'>" + "<label>" + questions[2].answerList[2] + "</label>"
   + "<input type='radio' name='answer3' value='3'>" + "<label>" + questions[2].answerList[3] + "</label><br><br>");
  // Question 4
  $("#question3").html
  ("<h3>" + questions[3].question + "</h3>");
  $("#answer4").html
  ("<input type='radio' name='answer4' value='0'>" + "<label>" + questions[3].answerList[0] + "</label>"
   + "<input type='radio' name='answer4' value='1'>" + "<label>" + questions[3].answerList[1] + "</label>"
   + "<input type='radio' name='answer4' value='2'>" + "<label>" + questions[3].answerList[2] + "</label>"
   + "<input type='radio' name='answer4' value='3'>" + "<label>" + questions[3].answerList[3] + "</label><br><br>");
  // Question 5
  $("#question4").html
  ("<h3>" + questions[4].question + "</h3>");
  $("#answer5").html
  ("<input type='radio' name='answer5' value='0'>" + "<label>" + questions[4].answerList[0] + "</label>"
   + "<input type='radio' name='answer5' value='1'>" + "<label>" + questions[4].answerList[1] + "</label>"
   + "<input type='radio' name='answer5' value='2'>" + "<label>" + questions[4].answerList[2] + "</label>"
   + "<input type='radio' name='answer5' value='3'>" + "<label>" + questions[4].answerList[3] + "</label><br><br>");
  // Question 6
  $("#question5").html
  ("<h3>" + questions[5].question + "</h3>");
  $("#answer6").html
  ("<input type='radio' name='answer6' value='0'>" + "<label>" + questions[5].answerList[0] + "</label>"
   + "<input type='radio' name='answer6' value='1'>" + "<label>" + questions[5].answerList[1] + "</label>"
   + "<input type='radio' name='answer6' value='2'>" + "<label>" + questions[5].answerList[2] + "</label>"
   + "<input type='radio' name='answer6' value='3'>" + "<label>" + questions[5].answerList[3] + "</label><br><br>");
  // Question 7
  $("#question6").html
  ("<h3>" + questions[6].question + "</h3>");
  $("#answer7").html
  ("<input type='radio' name='answer7' value='0'>" + "<label>" + questions[6].answerList[0] + "</label>"
   + "<input type='radio' name='answer7' value='1'>" + "<label>" + questions[6].answerList[1] + "</label>"
   + "<input type='radio' name='answer7' value='2'>" + "<label>" + questions[6].answerList[2] + "</label>"
   + "<input type='radio' name='answer7' value='3'>" + "<label>" + questions[6].answerList[3] + "</label><br><br>");

  // Done button

  $("#submit").html("<button id='done' type='button' class='btn btn-primary'>Done</button>");


  // Click event runs keepingScore() and displayResults() when user clicks Done button
  $("#done").on("click", function() {

    // Keeping track of score based on correct, incorrect, and unanswered
    keepingScore();

    // Display 
    displayResults();

  });
});
// Timer countdown function
function run() {

  clearInterval(intervalId);
  intervalId = setInterval(decrement, 1000);
}


function decrement() {

  //  Decrease timer by one.
  timer--;

  //  Show the timer in the #time tag
  $("#time").html("<h2>Time Remaining: " + timer+ " Seconds</h2>" + "<br>");

  if (timer === 0) {

    // Run stop function to stop timer countdown
    stop();
    keepingScore();
    displayResults();
  }
}

function stop() {

  //  Clears intervalId
  clearInterval(intervalId);
} 
function displayResults() {
 
  
  $("#time").hide();
  $("#question0").hide();
  $("#answer1").hide();
  $("#question1").hide();
  $("#answer2").hide();
  $("#question2").hide();
  $("#answer3").hide();
  $("#question3").hide();
  $("#answer4").hide();
  $("#question4").hide();
  $("#answer5").hide();
  $("#question5").hide();
  $("#answer6").hide();
  $("#question6").hide();
  $("#answer7").hide();
  $("#submit").hide();


  $("#resultsMessage").html("<h3>Results</h3>");
  $("#correct").html("Correct Answers: " + correctAnswers);
  $("#incorrect").html("Incorrect Answers: " + incorrectAnswers);
  $("#unanswered").html("Unanswered: " + unanswered);
}              

function keepingScore() {

  var userAnswer1 = $("input[name='answer1']:checked").val();

  if (userAnswer1 === undefined) {

    unanswered++;
  }
  else if (userAnswer1 == questions[0].answer) {

    correctAnswers++;
  }
  else {

    incorrectAnswers++;
  }

  var userAnswer2 = $("input[name='answer2']:checked").val();

  if (userAnswer2 === undefined) {

    unanswered++;
  }
  else if (userAnswer2 == questions[1].answer) {

    correctAnswers++;
  }
  else {

    incorrectAnswers++;
  }
  var userAnswer3 = $("input[name='answer3']:checked").val();

  if (userAnswer3 === undefined) {

    unanswered++;
  }
  else if (userAnswer3 == questions[2].answer) {

    correctAnswers++;
  }
  else {

    incorrectAnswers++;
  }
  var userAnswer4 = $("input[name='answer4']:checked").val();

  if (userAnswer4 === undefined) {

    unanswered++;
  }
  else if (userAnswer4 == questions[3].answer) {

    correctAnswers++;
  }
  else {

    incorrectAnswers++;
  }
  var userAnswer5 = $("input[name='answer5']:checked").val();

  if (userAnswer5 === undefined) {

    unanswered++;
  }
  else if (userAnswer5 == questions[4].answer) {

    correctAnswers++;
  }
  else {

    incorrectAnswers++;
  }
  var userAnswer6 = $("input[name='answer6']:checked").val();

  if (userAnswer6 === undefined) {

    unanswered++;
  }
  else if (userAnswer6 == questions[5].answer) {

    correctAnswers++;
  }
  else {

    incorrectAnswers++;
  }
  var userAnswer7 = $("input[name='answer7']:checked").val();

  if (userAnswer7 === undefined) {

    unanswered++;
  }
  else if (userAnswer7 == questions[6].answer) {

    correctAnswers++;
  }
  else {

    incorrectAnswers++;
  }
}







