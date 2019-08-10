const choices = document.querySelectorAll('.choice');
const button = document.querySelector('button');

let result = document.querySelector('.result');
let scores = document.querySelector('.scores');
let playerScore = document.querySelector('.player').querySelector('.score');
let computerScore = document.querySelector('.computer').querySelector('.score');
let playerWin = 0;
let computerWin = 0;

function removeSelected(e) {
  this.classList.remove(`${this.id}-selected`);
  this.classList.add(`${this.id}`);
}

// gameplay mechanics:

function computerPlay() {
  let options = ["rock", "paper", "scissors"];
  let selection = Math.floor(Math.random() * 3);
  return options[selection];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection != null) {
    playerSelection = playerSelection.toString().toLowerCase();
  }

  // end messages here so they can be edited more easily
  let playerWins = "Player wins!";
  let computerWins = "Computer wins.";
  let tie = "It's a tie.";

  if (playerSelection == "rock") {
    if (computerSelection == "rock") {
      return "Rock vs. Rock. " + tie;
    } else if (computerSelection == "paper") {
      computerWin += 1;
      return "Rock vs. Paper. " + computerWins;
    } else if (computerSelection == "scissors") {
      playerWin += 1;
      return "Rock vs. Scissors. " + playerWins;
    }

  } else if (playerSelection == "paper") {
    if (computerSelection == "rock") {
      playerWin += 1;
      return "Paper vs. Rock. " + playerWins;
    } else if (computerSelection == "paper") {
      return "Paper vs. Paper. " + tie;
    } else if (computerSelection == "scissors") {
      computerWin += 1;
      return "Paper vs. Scissors. " + computerWins;
    }

  } else if (playerSelection == "scissors") {
    if (computerSelection == "rock") {
      computerWin += 1;
      return "Scissors vs. Rock. " + computerWins;
    } else if (computerSelection == "paper") {
      playerWin += 1;
      return "Scissors vs. Paper. " + playerWins;
    } else if (computerSelection == "scissors") {
      return "Scissors vs. Scissors. " + tie;
    }

  } else {
    return "Error with player selection."
  }

}

function restartGame(e) {
  result.textContent = '';
  playerWin = 0;
  computerWin = 0;
  document.querySelector('.scores').classList.add('start');
  document.querySelector('button').classList.add('start');
}

function playGame(e) {
  this.classList.add(`${this.id}-selected`);
  this.classList.remove(`${this.id}`);

  let playerSelection = `${this.id}`;
  let computerSelection = computerPlay();

  result.textContent = playRound(playerSelection, computerSelection);

  scores.classList.remove('start');
  button.classList.remove('start');

  playerScore.textContent = playerWin;
  computerScore.textContent = computerWin;
}

choices.forEach(choice => choice.addEventListener('click', playGame));
choices.forEach(choice => choice.addEventListener('transitionend', removeSelected));

button.addEventListener('click', restartGame);
