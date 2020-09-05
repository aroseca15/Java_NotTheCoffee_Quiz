
// Variables to control timer:
const time = questions.length * 15; 
const questions = [
    {
        question: "What is Javascript?", 
        choices: ["Programing Language", "Coffee Shop", "Name of Play", "Story Book"],
        answer: "Programing Language" 
    }, {}, {}, {}, {}, {}, {}
]; 
const timerEL = document.getElementById("time");
const startBtn = document.getElementById("Start");
// $(startBtn).on('click')

let timerID;

// Function to start quiz:
startBtn.addEventListener('click', function StartQuiz() {
    timerID = setInterval(clockTick, 1000);
    timerEL.textContent = time;
})


// Function to Stop Quiz / Counter:
function EndQuiz() {
    clearInterval(timerID);
}

// Function for ClockTick:
function clockTick() {
    time--;
    timerEL.textContent = time;
    // check if user ran out of time:
    if (time <= 0){
        EndQuiz();
    }

}






