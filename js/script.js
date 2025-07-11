const countdownTimer = document.getElementById('countdown');
const instructions = document.getElementById('instructions');
let numList = document.getElementById('numbers-list');
const answers = document.getElementById('answers-form');
const answerInput = document.getElementById('input-group');
const numAnswer = document.querySelectorAll('form-control');
const submitButton = document.querySelector('btn');
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
    countdown--;
    countdownTimer.textContent = countdown;

    if (countdown <= 0) {
      clearInterval(timer);
      instructions.style.display = 'none';
      numList.classList.remove('d-flex');
      numList.classList.add('d-none');
      countdownTimer.style.display = 'none';
      answers.classList.remove('d-none');
      answerInput.style.display = 'block';
      submitButton.style.display = 'block';
    }
  }, 1000);
}
startCountdown();