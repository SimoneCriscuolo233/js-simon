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
let randomNum = [];
numList.style.display = 'block';
for (let i = 0; i < 5; i++) {
  randomNum.push(Math.floor(Math.random() * 50 + 1));
  numList.innerHTML += `<li>${randomNum[i]}</li>`;
}
function startCountdown() {
  timer = setInterval(() => {
    countdownTimer.textContent = countdown;
    countdown--;

    if (countdown <= 0) {
      clearInterval(timer);
      instructions.textContent = 'Tempo scaduto! Ora inserisci i numeri che ricordi.';
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
  console.log(randomNum);
  let correctAnswers = 0;
  for (let i = 0; i < 5; i++) {
    userAnswer.push(answerInput.children[i].value);
    console.log(userAnswer);
    if (userAnswer[i] == randomNum[i]) {
      correctAnswers++;
    }
  }
  console.log(correctAnswers);
  if (correctAnswers === 5) {
    result.textContent = 'Congratulations! You remembered all the numbers correctly!';
  } else {
    result.textContent = `You remembered ${correctAnswers} out of 5 numbers correctly.`;
    setInterval(() => {
      result.textContent = '';
    }, 5000);
  }

});

