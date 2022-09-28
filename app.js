var readline = require("readline-sync");

var userName = readline.question("What is your name? - ");
console.log("Hello " + userName + " Welcome to Fandom Quiz");

var score = 0;
var questionsAndAns = [
    {
        question: "What is my favourite programming language?",
        answer: "xyz"
    },
    {
        question: "What is my favourite IDE?",
        answer: "xyz"
    },
    {
        question: "What is my favourite scripting language?",
        answer: "xyz"
    },
    {
        question: "What is my favourite operating system for programming?",
        answer: "xyz"
    },
    {
        question: "What is my favourite programming blog?",
        answer: "xyz"
    }
]

function quiz(question, correctAnswer) {
    var userAnswer = readline.question(question + " - ");
    if(userAnswer === correctAnswer) {
        score++;
        console.log("Correct Answer");
    }
    else {
        score--;
        console.log("Wrong Answer");
    }
    console.log("Score: " + score);
}

for(var i = 0; i < questionsAndAns.length; i++) {
    var currentQuestion = questionsAndAns[i];
    quiz(currentQuestion.question, currentQuestion.answer);
}
console.log("Final score: " + score);