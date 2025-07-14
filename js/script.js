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
const generateRandNums = (min, max) => {
  let randomNum = [];

  while (randomNum.length < 5) {
    let number = Math.floor(Math.random() * (max - min + 1)) + min;
    if (randomNum.includes(number) === false) {
      randomNum.push(number);
    }
  }
  return randomNum;
}
const random = generateRandNums(1, 50)
for (let i = 0; i < 5; i++) {
  numList.innerHTML += `<li>${random[i]}</li>`;
}

countdownTimer.textContent = countdown;
function startCountdown() {
  timer = setInterval(() => {
    countdown--;
    countdownTimer.textContent = countdown;

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

const confirm = () => {

  let userAnswer = [];

  let correctAnswers = [];

  for (let i = 0; i < 5; i++) {
    userAnswer.push(parseInt(numAnswer[i].value));
  }
  for (i = 0; i < 5; i++) {
    if (random.includes(userAnswer[i])) {
      correctAnswers.push(userAnswer[i]);
    }
  }

  result.innerHTML = `ricordi ${correctAnswers.length}. i numeri corretti sono (${correctAnswers}.)`
};


submitButton.addEventListener('click', (e) => {
  e.preventDefault();
  confirm();
})









