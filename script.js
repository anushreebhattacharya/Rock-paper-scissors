document.addEventListener("DOMContentLoaded", () => {
  const choices = document.querySelectorAll(".choice");
  const userDisplay = document.getElementById("user-choice");
  const computerDisplay = document.getElementById("computer-choice");
  const winnerDisplay = document.getElementById("winner");
  const restartBtn = document.getElementById("restart");

  const options = ["rock", "paper", "scissors"];

  function getComputerChoice() {
    const randIndex = Math.floor(Math.random() * 3);
    return options[randIndex];
  }

  function getWinner(user, comp) {
    if (user === comp) return "Draw";
    if (
      (user === "rock" && comp === "scissors") ||
      (user === "paper" && comp === "rock") ||
      (user === "scissors" && comp === "paper")
    ) {
      return "You Win!";
    } else {
      return "Computer Wins!";
    }
  }

  choices.forEach(button => {
    button.addEventListener("click", () => {
      const userChoice = button.dataset.choice;
      const computerChoice = getComputerChoice();

      userDisplay.textContent = `You chose: ${userChoice}`;
      computerDisplay.textContent = `Computer chose: ${computerChoice}`;
      winnerDisplay.textContent = `Winner: ${getWinner(userChoice, computerChoice)}`;
    });
  });

  restartBtn.addEventListener("click", () => {
    userDisplay.textContent = "You chose: -";
    computerDisplay.textContent = "Computer chose: -";
    winnerDisplay.textContent = "Winner: -";
  });
});
