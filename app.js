const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = 'ROCK';
const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WINS = 'PLAYER_WINS';
const RESULT_COMPUTER_WINS = 'COMPUTER_WINS';
let gameIsRunning = false;

const getPlayerChoice = function () {
  const selection = prompt(`${ROCK},${PAPER}, ${SCISSORS} ?`).toUpperCase();
  if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
    alert(`Invalid Choice!, we choose you as Defalult ${DEFAULT_USER_CHOICE}`);
    return;
  }

  return selection;
};

const getComputerChoice = function () {
  const randomValue = Math.random();

  if (randomValue < 0.34) {
    return ROCK;
  } else if (randomValue < 0.67) {
    return PAPER;
  } else {
    return SCISSORS;
  }
};
const getWinner = (cChoice, pChoice = DEFAULT_USER_CHOICE) =>
  cChoice === pChoice
    ? RESULT_DRAW
    : (cChoice === ROCK && pChoice === PAPER) ||
      (cChoice === PAPER && pChoice === SCISSORS) ||
      (cChoice === SCISSORS && pChoice === ROCK)
    ? RESULT_PLAYER_WINS
    : RESULT_COMPUTER_WINS;

startGameBtn.addEventListener('click', () => {
  if (gameIsRunning) {
    return;
  }
  gameIsRunning = true;
  const playerSelection = getPlayerChoice();
  const computerChoice  = getComputerChoice();

  let winners;
  if (playerSelection) {
    winners = getWinner(computerChoice, playerSelection);
  } else {
    winners = getWinner(computerChoice);
  }

  let message = `you picked ${playerSelection || DEFAULT_USER_CHOICE } , Computer picked ${computerChoice}  therefore you `;
  if (winners === RESULT_DRAW) {
    message = message + ` therefore you had a draw`;
  } else if (winners === RESULT_PLAYER_WINS) {
    message = message + ' Won!';
  } else {
    message = message + 'lost!';
  }

  alert(message);
  gameIsRunning = false;
});
