var body = document.body;
var questionsDisplay = document.getElementById("question");
var listEl = document.getElementById("listitens");
var li1 = document.getElementById("opt0");
var li2 = document.getElementById("opt1");
var li3 = document.getElementById("opt2");
var li4 = document.getElementById("opt3");
var i = 0;
var scoreCounter = 0;
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
wrap (li1, li2, li3, li4);

function wrap (a1, a2, a3, a4){
    console.log(scoreCounter)
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


    li1.onclick = function() {
        if (questionsArray[i].answerId === 0){
            alert("correct");
            scoreCounter + 10;
            i++;
            wrap (li1, li2, li3, li4);}
        else{
            scoreCounter - 10;
            alert("incorrect");
            i++;
            wrap (li1, li2, li3, li4);}
    }

    li2.onclick = function() {
        if (questionsArray[i].answerId === 1){
            alert("correct");
            scoreCounter + 10;
            i++;
            wrap (li1, li2, li3, li4);}
        else{
            scoreCounter - 10;
            alert("incorrect");
            i++;
            wrap (li1, li2, li3, li4);}
        }
    }

    li3.onclick = function() {
        if (questionsArray[i].answerId === 2){
            alert("correct");
            scoreCounter + 10;
            i++;
            wrap (li1, li2, li3, li4);}
        else{
            scoreCounter - 10;
            alert("incorrect");
            i++;
            wrap (li1, li2, li3, li4);}
    }

    li4.onclick = function() {
        if (questionsArray[i].answerId === 3){
            alert("correct");
            scoreCounter + 10;
            i++;
            wrap (li1, li2, li3, li4);}
        else{
            scoreCounter - 10;
            alert("incorrect");
            i++;
            wrap (li1, li2, li3, li4);}
}
