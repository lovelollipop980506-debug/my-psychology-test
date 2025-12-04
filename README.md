# 꿀잼 테스트 - 심리 테스트 웹사이트

재미있는 심리 테스트를 제공하는 웹사이트입니다.

## 🎯 주요 기능

### 메인 페이지
- 테스트 목록 카드 형식으로 표시
- 깔끔하고 직관적인 UI

### Food MBTI 테스트
- 10개의 질문으로 구성
- 4가지 음식 타입 결과 (매운 라면, 초코 케이크, 군만두, 아이스 아메리카노)
- 실제 음식 사진과 함께 결과 표시
- **이름 입력 기능**: 테스트 시작 시 사용자 이름 입력
- **개인화된 결과**: "{이름}님과 닮은 음식은?" 형식으로 결과 표시
- **URL 기반 결과 공유**: 친구에게 공유 시 개인화된 링크 생성
- **공유받은 결과 화면**: 공유받은 링크로 접속 시 다른 UI 표시

## 🛠️ 기술 스택

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Design**: Pretendard 폰트, 반응형 디자인
- **Deployment**: GitHub Pages (정적 호스팅)

## 📂 프로젝트 구조

```
├── index.html          # 메인 페이지
├── style.css           # 공통 스타일
├── script.js           # 공통 스크립트
└── tests/
    └── food/
        ├── index.html  # Food MBTI 테스트 페이지
        ├── data.js     # 질문 및 결과 데이터
        ├── logic.js    # 테스트 로직
        └── images/     # 결과 이미지
            ├── ramen.png
            ├── cake.png
            ├── dumpling.png
            └── americano.png
```

## 🚀 로컬 실행 방법

1. 이 저장소를 클론합니다:
```bash
git clone <repository-url>
```

2. `index.html` 파일을 브라우저로 엽니다:
   - 파일 탐색기에서 `index.html`을 더블클릭
   - 또는 Live Server 등의 로컬 서버 사용

## 📦 배포

GitHub Pages를 통해 배포할 수 있습니다:
1. GitHub 저장소 생성
2. 파일 업로드
3. Settings > Pages에서 "Deploy from a branch" 선택
4. main 브랜치의 루트(/) 선택
5. Save 클릭

## 📝 라이선스

이 프로젝트는 개인 프로젝트입니다.
