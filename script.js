let playerScore = 0;
let computerScore = 0;

const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");

rockBtn.addEventListener("click", () => {
  const playerChoice = "Rock 🪨";
  playRound(playerChoice);
});

paperBtn.addEventListener("click", () => {
  const playerChoice = "Paper 📄";
  playRound(playerChoice);
});

scissorsBtn.addEventListener("click", () => {
  const playerChoice = "Scissors ✂";
  playRound(playerChoice);
});

function playRound(playerChoice) {
  const computerChoice = computerInput();
  const playerChoiceDisplay = document.querySelector(".playerChoiceDisplay");
  const computerChoiceDisplay = document.querySelector(
    ".computerChoiceDisplay"
  );

  let playerWonRound;
  let computerWondRound;

  playerChoiceDisplay.textContent = "Player Chose: " + playerChoice;
  computerChoiceDisplay.textContent = "Computer Chose: " + computerChoice;

  if (playerChoice === computerChoice) {
    playerWonRound = false;
    computerWondRound = false;
    scoreKeeper(playerWonRound, computerWondRound);
  } else if (
    (playerChoice === "Rock 🪨" && computerChoice === "Scissors ✂") ||
    (playerChoice === "Paper 📄" && computerChoice === "Rock 🪨") ||
    (playerChoice === "Scissors ✂" && computerChoice === "Paper 📄")
  ) {
    playerWonRound = true;
    computerWondRound = false;
    scoreKeeper(playerWonRound, computerWondRound);
  } else {
    playerWonRound = false;
    computerWondRound = true;
    scoreKeeper(playerWonRound, computerWondRound);
  }
}

function computerInput() {
  const choices = ["Rock 🪨", "Paper 📄", "Scissors ✂"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function scoreKeeper(playerWonRound, computerWondRound) {
  const playerScoreDisplay = document.querySelector(".playerScoreDisplay");
  const computerScoreDisplay = document.querySelector(".computerScoreDisplay");
  const roundWinnerDisplay = document.querySelector(".roundWinnerDisplay");

  let playerWonGame;

  if (playerWonRound === true) {
    playerScore++;
    playerScoreDisplay.textContent = "Player Score: " + playerScore;
    roundWinnerDisplay.textContent = "You win this round!";
  } else if (computerWondRound === true) {
    computerScore++;
    computerScoreDisplay.textContent = "Computer Score: " + computerScore;
    roundWinnerDisplay.textContent = "You lost this round!";
  } else {
    roundWinnerDisplay.textContent = "This round is a tie!";
  }

  if (playerScore === 5) {
    playerWonGame = true;
    gameOver(roundWinnerDisplay, playerWonGame);
  } else if (computerScore === 5) {
    playerWonGame = false;
    gameOver(roundWinnerDisplay, playerWonGame);
  }
}

function gameOver(roundWinnerDisplay, playerWonGame) {
  const buttons = document.querySelector("#buttons");
  const playAgainBtn = document.createElement("button");

  if (playerWonGame === true) {
    roundWinnerDisplay.textContent = "You win the game!";
  } else {
    roundWinnerDisplay.textContent = "You lost the game!";
  }

  rockBtn.remove();
  paperBtn.remove();
  scissorsBtn.remove();

  buttons.appendChild(playAgainBtn);
  playAgainBtn.textContent = "Play Again?";

  playAgainBtn.addEventListener("click", () => {
    location.reload();
  });
}
