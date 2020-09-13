var body = document.body;
var questionsDisplay = document.getElementById("question");
var listEl = document.getElementById("listitens");
var li1 = document.getElementById("0");
var li2 = document.getElementById("1");
var li3 = document.getElementById("2");
var li4 = document.getElementById("3");
var attr1 = li1.getAttribute("data-id");
var attr2 = li2.getAttribute("data-id");
var attr3 = li3.getAttribute("data-id");
var attr4 = li4.getAttribute("data-id");
var i = 0;
var scoreCounter = 0;
var clocker = 20;
var questionsArray = [
    {
        questionText: "Commonly used data types DO NOT inlude:",
        answers: ["alerts", "booleans", "numbers", "strings"],
        answerId: 0
    },
    {
        questionText: "The condition in an if/else statement is enclosed within __________",
        answers: ["curly braces", "parenthesis", "quotes", "square brackets"],
        answerId: 1
    },
    {
        questionText: "Arrays in JavaScript can be used to store __________",
        answers: ["booleans", "numbers and strings", "other arrays", "all of the above"],
        answerId: 3
    },
    {
        questionText: "String values must be enclosed within __________ when being assigned to variables.",
        answers: ["commas", "curly braces", "quotes", "parenthesis"],
        answerId: 2
    },
    {
        questionText: "A very useful tool used during development and debugging for printing content to the degugger is:",
        answers: ["JavaScript", "terminal/bash", "for loops", "console.log"],
        answerId: 3
    }
];

timer();
scoreDisplay(scoreCounter);
wrap (li1, li2, li3, li4, scoreCounter);

function scoreDisplay(score){//control/display score on screen
    document.getElementById("score").innerHTML = "Score: "+score;
}

storeScore(scoreCounter);
function wrap (a1, a2, a3, a4, counter){// append questions to LI
    questionsDisplay.textContent = questionsArray[i].questionText;
    a1.textContent = questionsArray[i].answers[0];
    a2.textContent = questionsArray[i].answers[1];
    a3.textContent = questionsArray[i].answers[2];
    a4.textContent = questionsArray[i].answers[3];

    body.appendChild(questionsDisplay);
    questionsDisplay.appendChild(listEl);
    listEl.appendChild(a1);
    listEl.appendChild(a2);
    listEl.appendChild(a3);
    listEl.appendChild(a4);

    a1.onclick = function() {
        questionControl(attr1, counter);}
    a2.onclick = function() {
        questionControl(attr2, counter);}
    a3.onclick = function() {
        questionControl(attr3, counter); }
    a4.onclick = function() {
        questionControl(attr4, counter);}

}

function timer(){//control timer
var downloadTimer = setInterval(function(){
  if(clocker <= 0){
    clearInterval(downloadTimer);
    document.getElementById("countdown").innerHTML = "Finished";
    window.location.href="score.html"; // show score page if time finish
  } else {
    document.getElementById("countdown").innerHTML = clocker + " seconds remaining";
  }
  clocker -= 1;
}, 1000);
}

function questionControl(param1, counter){//check if the question is correct
    if (questionsArray[i].answerId == param1){
        alert("correct");
        counter = counter + 10;
        scoreDisplay(counter);
        storeScore(counter);
        i++;
        if (i > questionsArray.length){
            window.location.href="score.html";}
        wrap (li1, li2, li3, li4, counter);}
    else{
        alert("Incorrect");
        counter = counter - 10;
        scoreDisplay(counter);
        storeScore(counter);
        i++;
        clocker = clocker - 5;
        if (i > questionsArray.length){
            window.location.href="score.html";}
        wrap (li1, li2, li3, li4, counter);}
}

  function storeScore(score) { // save score in local storage
    localStorage.setItem("score", JSON.stringify(score));
  }