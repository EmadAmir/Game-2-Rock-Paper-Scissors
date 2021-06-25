const startGameBtn = document.getElementById('start-game-btn');
const stopGameBtn = document.getElementById('stop-game-btn');
const rockBtn = document.getElementById('rock-btn');
const paperBtn = document.getElementById('paper-btn');
const scissorBtn = document.getElementById('scissor-btn');
let playerLabel = document.getElementById('player-label');
let computerLabel = document.getElementById('computer-label');
let displayLabel = document.getElementById('display-label');

const ROCK = `ROCK`;
const PAPER = `PAPER`;
const SCISSOR = `SCISSOR`;

displayLabel.innerText = `Click on 'Start Game' to initiate the Game.`;

startGameBtn.addEventListener('click', () => {
  displayLabel.innerText = `Now you can click on Rock, Paper or Scissor`;
  rockBtn.disabled = false;
  paperBtn.disabled = false;
  scissorBtn.disabled = false;
  
});
stopGameBtn.addEventListener('click', () => {
  displayLabel.innerText = `You have stopped the game to start the game again click on 'Start Game'`;
  rockBtn.disabled = true;
  paperBtn.disabled = true;
  scissorBtn.disabled = true;
  playerLabel.innerText = `PLAYER VS COMPUTER`;
});

rockBtn.addEventListener('click', () => {
  playerLabel.innerText = ROCK;
  //getComputerChoice();
  let computerChoice = getComputerChoice();
  let playerChoice = getPlayerChoice();

  getWinner(computerChoice, playerChoice);
  
});
paperBtn.addEventListener('click', () => {
  playerLabel.innerText = PAPER;
  //getComputerChoice();
  let computerChoice = getComputerChoice();
  let playerChoice = getPlayerChoice();

  getWinner(computerChoice, playerChoice);
  
});
scissorBtn.addEventListener('click', () => {
  playerLabel.innerText = SCISSOR;
  //getComputerChoice(computerChoice, playerChoice);
  let computerChoice = getComputerChoice();
  let playerChoice = getPlayerChoice();

  getWinner(computerChoice, playerChoice);
  
});

const getPlayerChoice = () => {
  let pChoice = playerLabel.innerHTML;
  console.log(pChoice);
  return pChoice;
};

const getComputerChoice = () => {
  let cChoice;
  const randomValue = Math.random();
  if (randomValue < 0.34) {
    computerLabel.innerText = ROCK;
    return ROCK;
  } else if (randomValue < 0.67) {
    computerLabel.innerText = PAPER;
    return PAPER;
  } else {
    computerLabel.innerText = SCISSOR;
    return SCISSOR;
  }
};
const getWinner = (computerChoice, playerChoice) => {
  if (computerChoice === playerChoice) {
    displayLabel.innerText = `DRAW`;
  } else if (
    (computerChoice === ROCK && playerChoice === PAPER) ||
    (computerChoice === PAPER && playerChoice === SCISSOR) ||
    (computerChoice === SCISSOR && playerChoice === ROCK)
  ) {
    displayLabel.innerText = `PLAYER WINS`;
  } else {
    displayLabel.innerText = `COMPUTER WINS`;
  }
};
