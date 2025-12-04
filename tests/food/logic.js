// import { questions, results } from './data.js';

let currentQuestionIndex = 0;
let score = {
    Ramen: 0,
    Cake: 0,
    Dumpling: 0,
    Americano: 0
};

// DOM Elements
const startScreen = document.getElementById('start-screen');
const questionScreen = document.getElementById('question-screen');
const loadingScreen = document.getElementById('loading-screen');
const resultScreen = document.getElementById('result-screen');

const questionEl = document.getElementById('question');
const answersEl = document.getElementById('answers');
const progressEl = document.getElementById('progress');

const resultNameEl = document.getElementById('result-name');
const resultImgEl = document.getElementById('result-img');
const resultTitleEl = document.getElementById('result-title');
const resultDescEl = document.getElementById('result-desc');
const resultQuoteEl = document.getElementById('result-quote');
const resultMatchEl = document.getElementById('result-match');
const resultUnmatchEl = document.getElementById('result-unmatch');

// Global functions for HTML onclick
window.startTest = () => {
    startScreen.classList.remove('active');
    questionScreen.classList.add('active');
    showQuestion();
};

window.shareResult = () => {
    if (navigator.share) {
        navigator.share({
            title: '나와 닮은 음식 찾기',
            text: `나의 음식 성향은 ${resultNameEl.innerText}입니다!`,
            url: window.location.href,
        });
    } else {
        alert('링크가 복사되었습니다!');
        navigator.clipboard.writeText(window.location.href);
    }
};

function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionEl.innerText = currentQuestion.question;

    // Update progress bar
    const progress = ((currentQuestionIndex) / questions.length) * 100;
    progressEl.style.width = `${progress}%`;

    answersEl.innerHTML = '';
    currentQuestion.answers.forEach(answer => {
        const btn = document.createElement('div');
        btn.classList.add('answer-btn');
        btn.innerText = answer.text;
        btn.onclick = () => selectAnswer(answer.scores);
        answersEl.appendChild(btn);
    });
}

function selectAnswer(scores) {
    // Add scores
    for (const type in scores) {
        if (score.hasOwnProperty(type)) {
            score[type] += scores[type];
        }
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    questionScreen.classList.remove('active');
    loadingScreen.classList.add('active');

    // Calculate Result
    // Find the type with the highest score
    let maxScore = -1;
    let resultType = "";

    // Simple max finding
    for (const type in score) {
        if (score[type] > maxScore) {
            maxScore = score[type];
            resultType = type;
        }
    }

    // Handle ties (optional: prioritize specific types or random)
    // For now, first max found wins.

    console.log("Result Type:", resultType, score);

    // Simulate loading
    setTimeout(() => {
        loadingScreen.classList.remove('active');
        resultScreen.classList.add('active');

        const result = results[resultType];
        resultImgEl.src = result.img;
        resultNameEl.innerText = result.name;
        if (resultTitleEl) resultTitleEl.innerText = result.title;
        resultDescEl.innerHTML = result.desc; // Use innerHTML for <br>
        if (resultQuoteEl) resultQuoteEl.innerText = result.quote;

        resultMatchEl.innerText = result.match;
        resultUnmatchEl.innerText = result.unmatch;
    }, 1500);
}
