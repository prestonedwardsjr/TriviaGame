Skip to content
 
Search or jump to…

Pull requests
Issues
Marketplace
Explore
 @prestonedwardsjr Sign out
1
0 2 jahdasha/trivia-game
 Code  Issues 1  Pull requests 0  Projects 0  Wiki  Insights
trivia-game/assets/javascript/app.js
a1eabbc  on Mar 8, 2016
 Jahdasha Flagg correction to index
     
63 lines (58 sloc)  1.69 KB
$(document).ready(function(){
  $("#start-button").click(function(){
// ----------------------------------------------------------------
 // declaring the value for the timer to 60 seconds
 // hide the start button and rules
  	var number = 50;
  	alert("The let game begin!");
    $("#start-button").on("click", start);  // starts the games 
    $("#submit").on("click", finish);  // submits answers and finishes the game
    $("#restart").on("click", restart);  // restarts the games 
// ----------------------------------------------------------------
// functions
    function start(){
    	counter = setInterval(timer, 1000);
    	showMe(".question");
    	showMe(".answers");
    	showMe("#submit");
	    hideMe("#start-button");
	    hideMe(".rules");
	    hideMe("#restart");
	    hideMe("#results");
    }
    function timer(){
      number-- // decrements the timer by 1
      $("#show-number").html("<h2>" + number + "</h2>" );
      if (number === 0){
        alert("Times Up!")
        stop(); // calls the stop function
      }
    }
    function stop(){
    	clearInterval(counter); // stops the timer
    	$("#results").show();
    	$("#restart").show();
		$(".question").hide();
		$(".answers").hide();
		$("#submit").hide();
    }
    function finish(){
    	number = 1; // if number is equal to 0 number will show -1 so 1 has to be selected
    	clearInterval(counter); // stops the timer
    	timer();
    }

    function restart(){
    	number = 50;
    	start();
    }

    function hideMe(e) {
    	$(e).hide();
    }
    function showMe(e) {
    	$(e).show();
    }

// ----------------------------------------------------------------
//calling functions
  	start(); // calls the start function
  });
});

© 2018 GitHub, Inc.
Terms
Privacy
Security
Status
Help
Contact GitHub
Pricing
API
Training
Blog
About
Press h to open a hovercard with more details.