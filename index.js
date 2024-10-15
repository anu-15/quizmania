console.log("hi");

const quiz = document.querySelector(".quiz");
const answerEl = document.querySelectorAll(".answer");
const questionEl = document.querySelector(".question");
const optionEl1 = document.querySelector("option_1");
const optionEl2 = document.querySelector("option_2");
const optionEl3 = document.querySelector("option_3");
const optionEl4 = document.querySelector("option_4");
const submitbtn = document.querySelector("#submit");
const startbtn = document.querySelector(".start-btn");
const time_left = document.querySelector(".time_left");
const time_sec = document.querySelector(".time_sec");

$(document).ready(function () {
  $(".quiz-rules-content").hide();
  $(".quiz-section").hide();
});

$("input[type='radio']").click(function () {
    if ($("input[type='radio']").is(":checked")) {
        $('.start-btn').removeAttr('disabled');
    } else {
       alert("no");
    }
});

startbtn.addEventListener('click', function(){
    $(".quiz-section").show();
    $(".welcome").hide();
});

const quizData = [
  {
    question: "What is JavaScript?",
    options: [
      "A programming language",
      "A database management system",
      "A markup language",
      "An operating system",
    ],
    correct: 0,
  },
  {
    question: "What is the purpose of the 'typeof' operator in JavaScript?",
    options: [
      "To check the data type of a variable",
      "To create a new variable",
      "To concatenate strings",
      "To define a function",
    ],
    correct: 0,
  },
  {
    question: "How do you declare a variable in JavaScript?",
    options: ["var", "variable", "v", "let"],
    correct: 0,
  },
  {
    question: "What does the '===' operator in JavaScript do?",
    options: [
      "Compares values for equality without type coercion",

      "Assigns a value to a variable",

      "Checks if a variable is defined",

      "Performs bitwise XOR operation",
    ],
    correct: 0,
  },
  {
    question: "Which keyword is used to define a function in JavaScript?",
    options: ["def", "function", "func", "define"],
    correct: 1,
  },
  {
    question:
      "What is the difference between 'null' and 'undefined' in JavaScript?",
    options: [
      "They are the same",

      "'null' represents the absence of a value, while 'undefined' is a variable that has been declared but not assigned a value",

      "'undefined' represents the absence of a value, while 'null' is a variable that has been declared but not assigned a value",

      "'null' and 'undefined' are both used to represent an empty string",
    ],
    correct: 1,
  },
  {
    question: "How do you check if a variable is an array in JavaScript?",
    options: [" isObject()", " typeofArray()", "arrayCheck()", " isArray()"],
    correct: 3,
  },
  {
    question:
      "Which keyword is used to prevent a variable from being modified?",
    options: [" freeze", " const", "lock", " protect"],
    correct: 1,
  },
  {
    question:
      "Which method can be used to round a number to the nearest integer in Javascript?",
    options: [
      "This methods rounds a number up to the nearest integer, regardless of its decimal part.",
      "This methods rounds a number down to the nearest integer, ignoring the decimal part.",
      "This methods rounds a number to the nearest integer, based on its decimal value.",
      "This methods generates a random number between 0 and 1, without rounding.",
    ],
    correct: 2,
  },
  {
    question: "What is the purpose of the 'setTimeout' function in JavaScript?",
    options: [
      "Delays the execution of a function by a specified number of milliseconds",
      "Repeats the execution of a function at a set interval",
      "Halts the execution of a function",
      "Sets the time zone of the script",
    ],
    correct: 0,
  },
];

let currentquiz = 0;
let score = 0;

function loadQuiz() {
  const { question, options } = quizData[currentquiz];
  console.log(question);

  questionEl.innerText = `${currentquiz + 1} : ${question}`;

  options.forEach(
    (curroptn, index) => (window[`option_${index + 1}`].innerText = curroptn)
  );
}

loadQuiz();

const getSelectedoption = () => {
  let answerIndex;
  answerEl.forEach((curroptn, index) => {
    if (curroptn.checked) {
      answerIndex = index;
    }
  });
  return answerIndex;
};

const deselectoption = () => {
  answerEl.forEach((curelem) => (curelem.checked = false));
};

submitbtn.addEventListener("click", () => {
    
let timeleft = 10;
let downloadTimer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(downloadTimer);
    document.getElementById("countdown").innerHTML = "Finished";
  } else {
    document.getElementById("countdown").innerHTML = timeleft + " seconds remaining";
  }
  timeleft -= 1;
}, 1000);
  const selectedOption = getSelectedoption();
  console.log(selectedOption);

  if (selectedOption === quizData[currentquiz].correct) {
    score = score + 1;
  }

  currentquiz++;

  if (currentquiz < quizData.length) {
    deselectoption();
    loadQuiz();
  } else {
    quiz.innerHTML = `
            <div class="result">
                <h2>Congratulation Your score: ${score}/${quizData.length} Correct answers</h2>
            </div>
        `;
  }
});


let timeleft = 10;
let downloadTimer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(downloadTimer);
    document.getElementById("countdown").innerHTML = "Finished";
  } else {
    document.getElementById("countdown").innerHTML = timeleft + " seconds remaining";
  }
  timeleft -= 1;
}, 1000);

