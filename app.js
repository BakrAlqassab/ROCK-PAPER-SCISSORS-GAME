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
  const computerChoice = getComputerChoice();

  let winners;
  if (playerSelection) {
    winners = getWinner(computerChoice, playerSelection);
  } else {
    winners = getWinner(computerChoice);
  }

  let message = `you picked ${
    playerSelection || DEFAULT_USER_CHOICE
  } , Computer picked ${computerChoice} therefore you `;
  if (winners === RESULT_DRAW) {
    message = message + `  had a draw`;
  } else if (winners === RESULT_PLAYER_WINS) {
    message = message + ' Won!';
  } else {
    message = message + 'lost!';
  }

  alert(message);
  gameIsRunning = false;
});

// Not related to th game

// const sumUp = (numbers) => {

// Here is used Rest Operator ... , it more practical to reuse the function
// Rest parameter must be the last formal parameter
const combine = (resultHandler, operation, ...numbers) => {
  const validateNumber = (number) => {
    return isNaN(number) ? 0 : number;
  };
  let sum = 0;
  for (const num of numbers) {


    if (operation === 'ADD') {
      sum += validateNumber(num);
    }else if(operation === "Minus")
    {


         sum -= validateNumber(num);
    }
  }

  resultHandler(sum, ' The result after adding all numbers is : ');
};

// const subtractUp = (resultHandler, ...numbers) => {
//   const validateNumber = (number) => {
//     return isNaN(number) ? 0 : number;
//   };
//   let sum = 0;
//   for (const num of numbers) {
//     sum -= validateNumber(num);
//   }

//   resultHandler(sum);
// };

const showResult = ( messageText, result) => {
  alert(`${messageText}    ${result}`);
};

// console.log(sumUp([1, 55, 44, 75, 6, 2, 5, 4, 5, 5, 87, 5, 5555, 7, 5, 5]));
combine(showResult.bind(this,'The result after add all numbers is '),"ADD", 1, 55, 44, 75, 6, 2, 5, 4, 5, 5, 87, 5, 5555, 7, 5);

combine(showResult.bind(this,'The result after add all numbers is '), "ADD",1, 55, 44, 75, 6, 2, 5, 4, 5, 5, 4, 65, 85, 11);

combine(showResult.bind(this,'The result after Subtract all numbers is '), "Minus",10, 12, 55);
