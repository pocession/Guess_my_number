"use strict";

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

const setAnswer = function (num) {
  return Math.trunc(Math.random() * num) + 1;
};

let answer = setAnswer(20);
console.log(answer);
let score = 20;
let trying = 1;
let highScore = 0;

document.querySelector(".check").addEventListener("click", function () {
  // note the input type is string

  let input = Number(document.querySelector(".guess").value);
  if (!input) {
    displayMessage("No Number!");
  } else if (input === answer) {
    document.querySelector(".number").textContent = answer;
    displayMessage("🎉 Correct Number!");

    document.querySelector("body").style.backgroundColor = "#60b347"; // select element does not require a dot
    document.querySelector(".number").style.width = "30 rem";
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (input !== answer) {
    if (score > 0) {
      displayMessage(input > answer ? "Too high!" : "Too low!");
      document.querySelector(".score").textContent = score--;
      document.querySelector(".trying").textContent = trying++;
    } else {
      displayMessage("You lost the game");
    }
  }
  document.querySelector(".score").textContent = score;
});

document.querySelector(".again").addEventListener("click", function () {
  answer = setAnswer(20);
  console.log(answer);
  score = 20;
  trying = 1;
  document.querySelector(".score").textContent = score;
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15 rem";
  document.querySelector(".number").textContent = "?";
  displayMessage("Start guessing ...");
  document.querySelector(".guess").value = "";
  document.querySelector(".trying").textContent = 0;
});
