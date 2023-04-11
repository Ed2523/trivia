const questions = [
  {
    question: "¿Quién descubrio america?",
    rightAnswer: "Cristobal Colon",
    answers: ["Cristobal Colon", "merico vespuccio", "Cristiano Ronaldo"],
  },
  {
    question: "¿En qué año inicio la independencia de  México?",
    rightAnswer: "1810",
    answers: ["1810", "1920", "2050"],
  },
];
let counter = 0;
const container = document.querySelector(".container");

container.innerHTML = `<h1 class="question">${questions[counter].question}</h1>
<ul class="answers">
${questions[counter].answers
  .map((answer) => {
    return `<li class="answer">${answer}</li>`;
  })
  .join("")}
</ul>`;

let answers = [...document.querySelectorAll(".answer")];

const jumpToNextQuestion = (e) => {
  console.log("hey");
  if (e.target.innerHTML === questions[counter].rightAnswer) {
    alert("Respuesta correcta");
  } else {
    alert("Respuesta incorrecta");
  }

  counter++;

  if (counter < questions.length) {
    container.innerHTML = `<h1 class="question">${
      questions[counter].question
    }</h1>
    <ul class="answers">
    ${questions[counter].answers
      .map((answer) => {
        return `<li class="answer">${answer}</li>`;
      })
      .join("")}
    </ul>`;

    let newAnswers = [...document.querySelectorAll(".answer")];
    newAnswers.forEach((answer) => {
      answer.addEventListener("click", (e) => jumpToNextQuestion(e));
    });
  } else {
    alert("no more questions");
  }
};

answers.forEach((answer) => {
  answer.addEventListener("click", (e) => jumpToNextQuestion(e));
});
