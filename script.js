// when user hits start you need to hide the coding quiz challenge
// and p tag and display the questions looping through them and moving to
// the next question once the user makes a selection


// check 
document.getElementById("start").addEventListener("click", function() {
    document.getElementById("middleBox").remove();
    document.getElementById("codingQuiz").style.visibility = "visible";

    // console.log(questionToShow);
    var timeLeft = 75;
    var wrong = false;
    var downloadTimer = setInterval(function function1() {
        document.getElementById("timeRemaining").innerHTML = "Time: " + timeLeft;
        timeLeft -= 1;
        if (wrong === true) {
            timeLeft -= 10;
        }
        if (timeLeft < 0) {
            clearInterval(downloadTimer);
        }
    }, 1000);
    
    // var questionToShow = document.getElementById("question").innerHTML;
    // var clicked = false;

    
    var questions = ["Commonly data types do not include:", "The condition in an if/else statement is enclosed within", "Arrays in javascript can be used to store ___"];
    var pointer = 0;
    document.getElementById("question").innerHTML = questions[pointer];
    document.getElementById("buttonone").addEventListener("click", function(){
        pointer++;
        if (pointer !== questions.length) {
            document.getElementById("question").innerHTML = questions[pointer];
        }
    })
    document.getElementById("buttontwo").addEventListener("click", function(){
        pointer++;
        if (pointer !== questions.length) {
            document.getElementById("question").innerHTML = questions[pointer];
        }
    })
    document.getElementById("buttonthree").addEventListener("click", function(){
        pointer++;
        if (pointer !== questions.length) {
            document.getElementById("question").innerHTML = questions[pointer];
        }
    })
    document.getElementById("buttonfour").addEventListener("click", function(){
        pointer++;
        if (pointer !== questions.length) {
            document.getElementById("question").innerHTML = questions[pointer];
        }
    })
})



// do something with Time remaining -- before start: 0, once started 75 and dcreasing by the second, if wrong answer -10 seconds


