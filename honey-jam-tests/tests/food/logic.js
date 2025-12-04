// import { questions, results } from './data.js';

let currentQuestionIndex = 0;
let score = {
    Ramen: 0,
    Cake: 0,
    Dumpling: 0,
    Americano: 0
};

let userName = ''; // 사용자 이름 저장
let isSharedResult = false; // 공유받은 결과인지 확인

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

// 페이지 로드 시 URL 파라미터 확인
window.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const sharedName = urlParams.get('name');
    const sharedResult = urlParams.get('result');

    if (sharedName && sharedResult) {
        // 공유받은 결과 표시
        isSharedResult = true;
        userName = sharedName;
        displaySharedResult(sharedResult);
    }
});

// Global functions for HTML onclick
window.startTest = () => {
    // 이름 입력 팝업
    const inputName = prompt('이름을 입력해주세요:');
    userName = inputName && inputName.trim() !== '' ? inputName.trim() : '익명';

    startScreen.classList.remove('active');
    questionScreen.classList.add('active');
    showQuestion();
};

window.shareResult = () => {
    const resultType = document.getElementById('result-container').dataset.resultType;
    const shareUrl = `${window.location.origin}${window.location.pathname}?name=${encodeURIComponent(userName)}&result=${resultType}`;

    if (navigator.share) {
        navigator.share({
            title: `${userName}님과 닮은 음식은?`,
            text: `${userName}님과 닮은 음식은 ${resultNameEl.innerText}입니다!`,
            url: shareUrl,
        });
    } else {
        alert('링크가 복사되었습니다!');
        navigator.clipboard.writeText(shareUrl);
    }
};

window.restartTest = () => {
    // 페이지 새로고침으로 테스트 재시작 (URL 파라미터 제거)
    window.location.href = window.location.pathname;
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
        displayResult(result, resultType, false);
    }, 1500);
}

// 공유받은 결과 표시 함수
function displaySharedResult(resultType) {
    startScreen.classList.remove('active');
    resultScreen.classList.add('active');

    const result = results[resultType];
    if (result) {
        displayResult(result, resultType, true);
    }
}

// 결과 화면 렌더링 함수
function displayResult(result, resultType, isShared) {
    const resultContainer = document.getElementById('result-container');
    resultContainer.dataset.resultType = resultType;

    // 이미지 및 기본 정보 표시
    resultImgEl.src = result.img;
    resultNameEl.innerText = result.name;
    if (resultTitleEl) resultTitleEl.innerText = result.title;
    resultDescEl.innerHTML = result.desc; // Use innerHTML for <br>
    if (resultQuoteEl) resultQuoteEl.innerText = result.quote;

    resultMatchEl.innerText = result.match;
    resultUnmatchEl.innerText = result.unmatch;

    // 사용자 이름 헤더 추가
    const userNameHeader = document.getElementById('user-name-header');
    if (userNameHeader) {
        userNameHeader.innerText = `${userName}님과 닮은 음식은?`;
    }

    // 버튼 영역 조건부 렌더링
    const buttonContainer = document.getElementById('button-container');
    if (isShared) {
        // 공유받은 결과: "나도 같은 테스트 해보기!" 버튼만 표시
        buttonContainer.innerHTML = `
            <button class="btn" onclick="restartTest()">나도 같은 테스트 해보기!</button>
        `;
    } else {
        // 본인 결과: "친구에게 공유하기", "다른 테스트하기" 버튼 표시
        buttonContainer.innerHTML = `
            <button class="btn" onclick="shareResult()">친구에게 공유하기</button>
            <button class="btn" style="background: #666 !important; margin-top: 10px;" onclick="location.href='../../index.html'">다른 테스트 하러가기</button>
        `;
    }
}

