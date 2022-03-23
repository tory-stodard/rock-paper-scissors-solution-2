let playerScore = 0;
let computerScore = 0;

game();

function game() {
  for (let i = 0; i < 5; i++) {
    const playerSelection = playerInput();
    const computerSelection = computerInput();
    console.log(playRound(computerSelection, playerSelection));
    console.log("- - - - - - - - - - - - - - - - - - - - - -");
  }
}

function playRound(computerSelection, playerSelection) {
  let playerWonRound;
  let computerWonRound;

  if (computerSelection === playerSelection) {
    playerWonRound = false;
    computerWonRound = false;
    scoreKeeper(playerWonRound, computerWonRound);
    return "this round is a tie!";
  } else if (
    (computerSelection === "rock" && playerSelection === "paper") ||
    (computerSelection === "paper" && playerSelection === "scissors") ||
    (computerSelection === "scissors" && playerSelection === "rock")
  ) {
    playerWonRound = true;
    computerWonRound = false;
    scoreKeeper(playerWonRound, computerWonRound);
    return "you win this round!";
  } else {
    playerWonRound = false;
    computerWonRound = true;
    scoreKeeper(playerWonRound, computerWonRound);
    return "you loose this round!";
  }
}

function computerInput() {
  const choices = ["rock", "paper", "scissors"];
  const cpu = choices[Math.floor(Math.random() * choices.length)];
  console.log("CPU chose: " + cpu);
  return cpu;
}

function playerInput() {
  const player = prompt("Type, rock, paper, or scissors.").toLowerCase();
  console.log("Player chose: " + player);
  return player;
}

function scoreKeeper(playerWonRound, computerWonRound) {
  if (playerWonRound === true) {
    playerScore++;
    console.log("Player Score = " + playerScore);
    console.log("CPU Score = " + computerScore);
  } else if (computerWonRound === true) {
    computerScore++;
    console.log("Player Score = " + playerScore);
    console.log("CPU Score = " + computerScore);
  } else {
    console.log("Player Score = " + playerScore);
    console.log("CPU Score = " + computerScore);
  }
}
