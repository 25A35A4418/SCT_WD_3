const quizData = [
    {
        question: "What does HTML stand for?",
        options: [
            "Hyper Text Markup Language",
            "High Text Machine Language",
            "Hyper Tool Markup Language",
            "Home Text Markup Language"
        ],
        correct: 0
    },
    {
        question: "Which language is used for styling web pages?",
        options: [
            "Python",
            "HTML",
            "CSS",
            "Java"
        ],
        correct: 2
    },
    {
        question: "Which language is used for web interactivity?",
        options: [
            "JavaScript",
            "C++",
            "Python",
            "PHP"
        ],
        correct: 0
    }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionBtns = document.querySelectorAll(".option-btn");

function loadQuestion() {
    const current = quizData[currentQuestion];

    questionEl.textContent = current.question;

    optionBtns.forEach((btn, index) => {
        btn.textContent = current.options[index];
    });
}

function checkAnswer(selected) {
    if (selected === quizData[currentQuestion].correct) {
        score++;
    }

    optionBtns.forEach(btn => btn.disabled = true);
}

function nextQuestion() {
    optionBtns.forEach(btn => btn.disabled = false);

    currentQuestion++;

    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        document.getElementById("quiz").classList.add("hidden");
        document.getElementById("result").classList.remove("hidden");
        document.getElementById("score").textContent =
            `${score} / ${quizData.length}`;
    }
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;

    document.getElementById("quiz").classList.remove("hidden");
    document.getElementById("result").classList.add("hidden");

    loadQuestion();
}

loadQuestion();