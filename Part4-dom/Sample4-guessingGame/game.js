// JS keeping random number.
let randomNumber = Math.floor(Math.random() * 20 + 1);
let score = 10;
let highestScore = 0;

// Check button
document.querySelector(".control").addEventListener("click", () => {
  const guess = Number(document.querySelector(".guess").value);
  let message = document.querySelector(".message");

  // giving info if there is no guess
  if (!guess) {
    message.textContent = "Please enter a number!";

    // if guess is true
  } else if (guess == randomNumber && score > 1) {
    message.textContent = " 🎉 Congratulations, you win!!!";
    document.querySelector(".number").textContent = randomNumber;
    document.querySelector("body").style.backgroundColor = "green";

    // Update the highest score
    if (score > highestScore) {
      highestScore = score;
      document.querySelector(".max-score").textContent = score;
    }

    // if the score is wrong
  } else {
    // check the score value if it reached 0
    if (score > 1) {
      score--;

      // direct player according to his guess.
      guess < randomNumber
        ? (message.textContent = "📈 Increse.")
        : (message.textContent = "📉 Decrease.");
      document.querySelector(".score").textContent = score;

      // if the score is 0 finish the game.
    } else {
      message.textContent = "You lost!!! 😔";
      document.querySelector(".score").textContent = 0;
    }
  }
});

// Again button
document.querySelector(".again").addEventListener("click", () => {
  score = 10;
  randomNumber = Math.floor(Math.random() * 20 + 1);
  document.querySelector(".message").textContent = "Tahmine Başlanıyor";
  document.querySelector(".guess").value = " ";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".score").textContent = score;
  document.querySelector("body").style.backgroundColor = "#2d3436";
});
