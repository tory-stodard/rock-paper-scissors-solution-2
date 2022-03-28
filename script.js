const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");
const roundWinnerDisplay = document.querySelector(".roundWinnerDisplay");
const playerChoseDisplay = document.querySelector(".playerChose");
const computerChoseDisplay = document.querySelector(".computerChose");

let playerScore = 0;
let computerScore = 0;

playerInput();

function playerInput() {
  let playerChoice;

  rockBtn.addEventListener("click", () => {
    playerChoice = "Rock";
    playerChoseDisplay.textContent = "Player Choice: Rock";
    computerInput(playerChoice);
  });
  paperBtn.addEventListener("click", () => {
    playerChoice = "Paper";
    playerChoseDisplay.textContent = "Player Choice: Paper";
    computerInput(playerChoice);
  });
  scissorsBtn.addEventListener("click", () => {
    playerChoice = "Scissors";
    playerChoseDisplay.textContent = "Player Choice: Scissors";
    computerInput(playerChoice);
  });
}

function computerInput(playerChoice) {
  const choices = ["Rock", "Paper", "Scissors"];
  let computerChoice = choices[Math.floor(Math.random() * choices.length)];

  computerChoseDisplay.textContent = "Computer Choice: " + computerChoice;
  playRound(playerChoice, computerChoice);
}

function playRound(playerChoice, computerChoice) {
  let playerWonRound;
  let computerWonRound;

  if (playerChoice === computerChoice) {
    roundWinnerDisplay.textContent = "This round is a tie!";
    playerWonRound = false;
    computerWonRound = false;
    scoreKeeper(playerWonRound, computerWonRound);
  } else if (
    (playerChoice === "Rock" && computerChoice === "Scissors") ||
    (playerChoice === "Paper" && computerChoice === "Rock") ||
    (playerChoice === "Scissors" && computerChoice === "Paper")
  ) {
    roundWinnerDisplay.textContent = "You win this round!";
    playerWonRound = true;
    computerWonRound = false;
    scoreKeeper(playerWonRound, computerWonRound);
  } else {
    roundWinnerDisplay.textContent = "You loose this round!";
    playerWonRound = false;
    computerWonRound = true;
    scoreKeeper(playerWonRound, computerWonRound);
  }
}

function scoreKeeper(playerWonRound, computerWonRound) {
  const playerScoreDisplay = document.querySelector(".playerScore");
  const computerScoreDisplay = document.querySelector(".computerScore");

  if (playerWonRound === true) {
    playerScore++;
    playerScoreDisplay.textContent = "Player Score: " + playerScore;
  } else if (computerWonRound === true) {
    computerScore++;
    computerScoreDisplay.textContent = "Computer Score: " + computerScore;
  }

  if (playerScore === 5) {
    rockBtn.remove();
    paperBtn.remove();
    scissorsBtn.remove();
    playerChoseDisplay.remove();
    computerChoseDisplay.remove();
    roundWinnerDisplay.textContent = "You win the game!";
  } else if (computerScore === 5) {
    rockBtn.remove();
    paperBtn.remove();
    scissorsBtn.remove();
    playerChoseDisplay.remove();
    computerChoseDisplay.remove();
    roundWinnerDisplay.textContent = "You loose the game!";
  }
}
