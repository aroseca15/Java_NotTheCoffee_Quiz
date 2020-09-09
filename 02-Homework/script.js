
// Variables to control timer:
// const time = questions.length * 15;
const questions = [
    {
        question: "What is Javascript?",
        choices: ["Programing Language", "Coffee Shop", "Name of Play", "Story Book"],
        answers: "Programing Language"
    },

    {
        question: "HTML is considered the________ of a website..",
        choices: ["Muscles", "Heart", "Skeleton", "Skin"],
        answers: "Skeleton"
    },

    {
        question: "What does 'document.getElementById' do?",
        choices: ["Rename an element", "Create a div", "Runs in live server", "Grabs a specific element"],
        answers: "Grabs a specific element"
    },

    {
        question: "What does CSS do for a website?",
        choices: ["Gives them internet access", "Makes them look appealing", "CSS is another name for HTML", "None of the above"],
        answers: "Makes them look appealing"
    },

    {
        question: "Which is the correct way to grab a class element in CSS?",
        choices: ["?Class", "!Class", "9Class", "None of the above"],
        answers: "None of the above"
    },

    {
        question: "What syntax is this: '$()'?",
        choices: ["Javascript", "JQuery", "HTML", "CSS"],
        answers: "JQuery"
    },

    {
        question: "Why is it good practice to keep JS and CSS separate from HTML?",
        choices: ["Easier to debug", "Makes code look tidy", "Add new features easier ", "All the above"],
        answers: "All the above"
    } 
];


const startBtn = document.getElementById("start");
startBtn.addEventListener('click' , startQuiz)
let shuffledQuestions, currentQuestionIndex;
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerBtnsElement = document.getElementById('answer-buttons');



function startQuiz(){
console.log('started');
startBtn.classList.add('hide');
shuffledQuestions = questions.sort(()=> Math.random() - .5);
currentQuestionIndex = 0
questionContainerElement.classList.remove('hide');
setNextQuestion()
}

function setNextQuestion(){
showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question){
questionElement.innerText = question.question;
question.choices.forEach(answer => {
  document.createElement('button');
  button.innerText = choices.text;
  button.classList.add('btn');
  if (answer.correct){
      button.dataset.correct = answer.correct
  }
  button.addEventListener('click' , selectAnswer);
  answerButtonsElement.appendChild(button)
})
}

function resetChoices(){
    while (answerBtnsElement.firstChild){
        answerBtnsElement.removeChild
        (answerBtnsElement.firstChild)


    }
}

function selectAnswer(e){


}


// const timerEL = document.getElementById("time");


// let timerID;

// Function to start quiz:
// startBtn.addEventListener('click', function StartQuiz() {
//     timerID = setInterval(clockTick, 1000);
//     timerEL.textContent = time;
// })


// Function to Stop Quiz / Counter:
// function EndQuiz() {
//     clearInterval(timerID);
// }

// // Function for ClockTick:
// function clockTick() {
//     time--;
//     timerEL.textContent = time;
//     // check if user ran out of time:
//     if (time <= 0) {
//         EndQuiz();
//     }

// }






