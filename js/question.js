import { questions } from "./data.js";

// 변수 선언
const progressValueEl = document.querySelector(".progress .value");
const numberEl = document.querySelector(".number");
const questionEl = document.querySelector(".question");
const choice1El = document.querySelector(".choice1");
const choice2El = document.querySelector(".choice2");

// 초기값
let currentNumber = 0;
let mbti = "";

function rederQuestion() {
  const question = questions[currentNumber]; // question은 questions[0]
  numberEl.innerHTML = question.number; // data영역에 number영역
  questionEl.innerHTML = question.question; // data영역에 question 영역
  choice1El.innerHTML = question.choices[0].text; // 0번째 질문
  choice2El.innerHTML = question.choices[1].text; // 1번째 질문
  progressValueEl.style.width = (currentNumber + 1) * 10 + "%";
  // 데이터바 width 값 조절
}
function nextQuestion(choiceNumber) {
  // currentNumber가 (questions 객체의 갯수 -1)랑 같으면
  if (currentNumber === questions.length - 1) {
    showResultPage(); // 결과 페이지 이동
    return;
  }
  const question = questions[currentNumber];
  // mbti는 질문에 넣은 값을 한개씩 추가를 한다.
  mbti = mbti + question.choices[choiceNumber].value;
  // mbti = 'infj'
  currentNumber = currentNumber + 1; // 계속 1씩 더한다
  rederQuestion(); // 새로운 페이지 랜더링
}

function showResultPage() {
  // 주소창이 mbti변수를 이용을 해서 제작을 하였다.
  location.href = "/results.html?mbti=" + mbti; // 쿼리스트링
}

// 첫번째 버튼을 클릭을 하면 nextQuestion(0) 실행
choice1El.addEventListener("click", function () {
  nextQuestion(0);
});
// 두번째 버튼을 클릭을 하면 nextQuestion(1) 실행
choice2El.addEventListener("click", function () {
  nextQuestion(1);
});
rederQuestion();
