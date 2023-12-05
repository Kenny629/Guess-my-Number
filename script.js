"use strict";

let random = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
let question = document.querySelector(".quest");
function displayMessage(message) {
  document.querySelector(".guessing").textContent = message;
}

//when the check button is being clicked
document.querySelector(".check").addEventListener("click", function () {
  const number = Number(document.querySelector(".numberwe").value);

  //when there's no input
  if (!number) {
    displayMessage("⛔ No Number!");

    //when player wins
  } else if (number === random) {
    displayMessage("🎉 Correct Number!");
    document.querySelector("body").style.backgroundColor = "#60b347";
    question.style.width = "16rem";
    question.textContent = random;
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = score;
    }

    //when guess is wrong
  } else if (number !== random) {
    if (score > 1) {
      displayMessage(number > random ? "📈Too High!" : "📉Too Low!");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("🎃 You lost the game!");
      document.querySelector(".score").textContent = 0;
    }
  }
});

//when again button is clicked
document.querySelector(".again").addEventListener("click", function () {
  document.querySelector("body").style.backgroundColor = "var(--black)";
  score = 20;
  document.querySelector(".score").textContent = score;
  displayMessage("Start guessing...");
  question.textContent = "?";
  question.style.width = "8rem";
  document.querySelector(".numberwe").value = "";
  random = Math.trunc(Math.random() * 20) + 1;
});
