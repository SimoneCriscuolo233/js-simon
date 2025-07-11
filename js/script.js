const countdownTimer = document.getElementById('countdown');
const instructions = document.getElementById('instructions');
let numList = document.getElementById('numbers-list');
const answers = document.getElementById('answers-form');
const answerInput = document.getElementById('input-group');
const numAnswer = document.querySelectorAll('.form-control');
let submitButton = document.querySelector('.btn');
const result = document.getElementById('message');

let timer;
let countdown = 10;

numList.style.display = 'block';
for (let i = 0; i < 5; i++) {
  let randomNum = Math.floor(Math.random() * 50 + 1);
  document.getElementById('numbers-list').innerHTML += `<li class ="num">${randomNum}</li>`;
}
let li = document.querySelectorAll('num');
function startCountdown() {
  timer = setInterval(() => {
    countdownTimer.textContent = countdown;
    countdown--;

    if (countdown <= 0) {
      clearInterval(timer);
      instructions.textContent = 'Time is up! Now enter the numbers you remember.';
      numList.classList.remove('d-flex');
      numList.classList.add('d-none');
      countdownTimer.style.display = 'none';
      answers.classList.remove('d-none');
      answerInput.style.display = 'block';
    }
  }, 1000);
}
startCountdown();
submitButton.addEventListener('click', (e) => {
  e.preventDefault();
  let userAnswer = [];
 
  for (let i = 0; i < 5; i++) {
    userAnswer.push(numAnswer[i]);
    console.log(userAnswer[i]);
  }
  let correctAnswers = 0;
  for (let i = 0; i < 5; i++) {
    if (userAnswer[i] === li[i]) {
      correctAnswers++;
    }
  }

});

