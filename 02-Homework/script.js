
// Variables to control timer:


// 60

// 2/4 = 


// 105

// 40


//40 / 105 = 39%

let SCORE = 0;

const startBtn = document.getElementById("start");
startBtn.addEventListener('click' , startQuiz)
let shuffledQuestions, currentQuestionIndex;
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerBtnsElement = document.getElementById('answer-buttons');
let body = document.getElementById('body')



function startQuiz(){
    startBtn.classList.add('hide');
    shuffledQuestions = questions.sort(()=> Math.random() - .5);
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide');
    setNextQuestion()
}

let questions = [
    {
        question: "What is Javascript?",
        choices: ["Programing Language", "Coffee Shop", "Name of Play", "Story Book"],
        answer: 0 , correct: true
    },

    {
        question: "HTML is considered the________ of a website..",
        choices: ["Muscles", "Heart", "Skeleton", "Skin"],
        answer: 2 , correct: true
    },

    {
        question: "What does 'document.getElementById' do?",
        choices: ["Rename an element", "Create a div", "Runs in live server", "Grabs a specific element"],
        answer: 3 , correct: true
    },

    {
        question: "What does CSS do for a website?",
        choices: ["Gives them internet access", "Makes them look appealing", "CSS is another name for HTML", "None of the above"],
        answer: 1 , correct: true
    },

    {
        question: "Which is the correct way to grab a class element in CSS?",
        choices: ["?Class", "!Class", "9Class", "None of the above"],
        answer: 3 , correct: true
    },

    {
        question: "What syntax is this: '$()'?",
        choices: ["Javascript", "JQuery", "HTML", "CSS"],
        answer: 1 , correct: true
    },

    {
        question: "Why is it good practice to keep JS and CSS separate from HTML?",
        choices: ["Easier to debug", "Makes code look tidy", "Add new features easier ", "All the above"],
        answer: 3 , correct: true
    } 
];


let time = questions.length * 20;

function setNextQuestion(){
    answerBtnsElement.innerHTML = '';
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question){
    console.log('show question function')
    // print current question
    questionElement.innerText = question.question;

    // render questions buttons
    questions[currentQuestionIndex].choices.forEach((choice, i) => {
        let button = document.createElement('button');
        button.innerText = choice;
        button.classList.add('btn');

        button.addEventListener('click', () => checkAnswer(i, button));


        
        answerBtnsElement.appendChild(button);
    })
}


function checkAnswer(index, button){
    
    
    if(index == questions[currentQuestionIndex].answer){
        SCORE ++
        alert('Correct!!!')
        button.classList.add('correct')
    }else{
        alert('Wrong!!!')
        button.classList.add('incorrect')
    }


    currentQuestionIndex ++

    if(currentQuestionIndex < questions.length){
        console.log(currentQuestionIndex, questions.length)
        setNextQuestion()
    }else{
        endQuiz()
    } return SCORE;
}


function endQuiz() {
    alert('Quiz finished')
}
 

let timerEL = document.getElementById("timer");


let timerID;

// Function to start quiz:
startBtn.addEventListener('click', function StartQuiz() {
    // console.log(time)
    timerID = setInterval(clockTick, 1000);
    timerEL.textContent = time;
})


// Function to Stop Quiz / Counter:
function EndQuiz() {
    clearInterval(timerID);
}

// Function for ClockTick:
function clockTick() {
    console.log(time)
    time--;
    timerEL.textContent = time;
    // check if user ran out of time:
    if (time <= 0) {
        EndQuiz();
    } else{ 
    

    }

}

const saveBtn = document.getElementById('save');

saveBtn.addEventListener("click", function(){
   
    SCORE.push(score);
    localStorage.setItem(JSON.stringify(SCORE));

    console.log(JSON.parse(localStorage.getItem())

    window.location.assign("index.html");
})






