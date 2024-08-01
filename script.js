// Add event listener to the button to toggle the div
document.getElementById("toggleButton").addEventListener("click", function () {
  var randomText = document.getElementById("randomText");
  var toggleButton = document.getElementById("toggleButton");
  if (randomText.style.visibility === "hidden") {
    randomText.style.visibility = "visible";
    toggleButton.textContent = "Hide Text";
  } else {
    randomText.style.visibility = "hidden";
    toggleButton.textContent = "Show Text";
  }
});

// Create and add new elements to the card div
var card = document.getElementById("card");
var h2 = document.createElement("h2");
h2.textContent = "Gandalf";
var a = document.createElement("a");
a.href = "https://en.wikipedia.org/wiki/Gandalf";
a.textContent = "Go to profile";
a.setAttribute("target", "blank");

card.appendChild(h2);
card.appendChild(a);

//Create small quiz with yes/no answers

const questions = [
  { text: "Japan has square watermelons.", answer: true },
  {text: "All the kings in a standard deck of cards have a mustache.",answer: false},
  {text: "In some states, it’s illegal to eat specific foods while walking backwards.", answer: true},
  { text: "Cows sleep standing up.", answer: true },
  { text: "Polar bears’ skin is white.", answer: false },
  { text: "Can human sneeze with eyes open?", answer: false },
  { text: "Red M&Ms disappeared for a decade.", answer: true },
  { text: "Lightning never strikes the same place twice.", answer: false },
];

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  document.querySelector(".start-button").style.display = "none";
  document.querySelector(".question-container").style.display = "block";
  showQuestion();
}

function showQuestion() {
  const questionElement = document.getElementById("question");
  questionElement.innerText = questions[currentQuestionIndex].text;
  document.getElementById("result").innerText = "";
}

function answer(isTrue) {
  const currentQuestion = questions[currentQuestionIndex];
  const resultDiv = document.getElementById("result");
  const trueButton = document.querySelector(".true");
  const falseButton = document.querySelector(".false");

  trueButton.disabled = true;
  falseButton.disabled = true;

  if (isTrue === currentQuestion.answer) {
    score++;
    resultDiv.innerHTML = `Correct! Score: ${score}`;
    resultDiv.style.color = "green";
    if (isTrue) {
      trueButton.style.backgroundColor = "green";
    } else {
      falseButton.style.backgroundColor = "green";
    }
  } else {
    resultDiv.innerHTML = `Wrong! Score: ${score}`;
    resultDiv.style.color = "red";
    if (isTrue) {
      trueButton.style.backgroundColor = "red";
    } else {
      falseButton.style.backgroundColor = "red";
    }
  }

  setTimeout(() => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      showQuestion();
      trueButton.disabled = false;
      falseButton.disabled = false;
      trueButton.style.backgroundColor = "lightgray";
      falseButton.style.backgroundColor = "lightgray";
    } else {
      document.querySelector(".question-container").style.display = "none";
      showFinalResult();
    }
  }, 500);
}

function showFinalResult() {
  const finalResultDiv = document.getElementById("result");
  const totalQuestions = questions.length;

  if (score >= totalQuestions / 2) {
    finalResultDiv.innerHTML = `Congrats, you’ve got a bunch of fun, quirky facts in your brain! You got ${score} out of ${totalQuestions} right.`;
  } else {
    finalResultDiv.innerHTML = `Congrats, Your brain is free from a bunch of unnecessary information. You got ${score} out of ${totalQuestions} right.`;
  }
  finalResultDiv.style.color = "black";
}
