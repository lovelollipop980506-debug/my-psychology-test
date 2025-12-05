# GitHub 배포 가이드

## 📦 준비된 배포 파일

`honey-jam-tests.zip` 파일이 생성되었습니다. 이 파일에는 다음이 포함되어 있습니다:

- `index.html` - 메인 페이지
- `style.css` - 공통 스타일
- `script.js` - 공통 스크립트
- `tests/` - 테스트 디렉토리
  - `food/` - 음식 테스트
    - `index.html` - 테스트 페이지
    - `data.js` - 질문 및 결과 데이터
    - `logic.js` - 테스트 로직 (이름 입력, URL 공유 기능 포함)
    - `images/` - 결과 이미지
- `.gitignore` - Git 무시 파일
- `README.md` - 프로젝트 설명서

## 🚀 GitHub에 배포하기

### 1단계: 기존 저장소 정리 (선택사항)

기존 GitHub 저장소의 파일을 모두 지우려면:

1. GitHub 저장소 페이지로 이동
2. 모든 파일 선택
3. 상단의 "..." 메뉴 > "Delete files" 클릭
4. 커밋 메시지 작성 후 커밋

또는 새 저장소를 만들 수도 있습니다.

### 2단계: 파일 압축 해제

1. `honey-jam-tests.zip` 파일의 압축을 해제합니다
2. 압축 해제된 폴더의 내용을 확인합니다

### 3단계: GitHub에 업로드

#### 방법 A: GitHub 웹 인터페이스 사용

1. GitHub 저장소 페이지로 이동
2. "Add file" > "Upload files" 클릭
3. 압축 해제한 모든 파일과 폴더를 드래그 앤 드롭
4. 커밋 메시지 입력 (예: "Update: Add name input and URL sharing features")
5. "Commit changes" 클릭

#### 방법 B: Git 명령어 사용

```bash
# 1. 압축 해제한 폴더로 이동
cd [압축 해제한 폴더 경로]

# 2. Git 초기화 (새 저장소인 경우)
git init

# 3. 원격 저장소 연결
git remote add origin [your-repository-url]

# 4. 모든 파일 스테이징
git add .

# 5. 커밋
git commit -m "Update: Add name input and URL sharing features"

# 6. GitHub에 푸시
git push -u origin main
```

### 4단계: GitHub Pages 설정

1. GitHub 저장소의 "Settings" 탭으로 이동
2. 왼쪽 메뉴에서 "Pages" 선택
3. "Source" 섹션에서:
   - Branch: `main` 선택
   - Folder: `/ (root)` 선택
4. "Save" 클릭
5. 배포 완료까지 1~2분 대기
6. 페이지 상단에 표시되는 URL로 접속하여 확인

## ✨ 새로 추가된 기능

### 1. 이름 입력 기능
- 테스트 시작 버튼 클릭 시 이름 입력 팝업 표시
- 미입력 시 "익명"으로 자동 설정

### 2. 개인화된 결과
- 결과 화면에 "{이름}님과 닮은 음식은?" 표시

### 3. URL 기반 결과 공유
- 공유 버튼 클릭 시 `?name={이름}&result={결과타입}` 형식의 URL 생성
- 예: `https://your-site.com/tests/food/index.html?name=철수&result=Ramen`

### 4. 공유받은 결과 화면
- 공유 링크로 접속 시:
  - 질문 화면 건너뛰고 바로 결과 표시
  - "나도 같은 테스트 해보기!" 버튼만 표시
- 직접 테스트한 경우:
  - "친구에게 공유하기", "다른 테스트 하러가기" 버튼 표시

## 🔍 최종 확인사항

배포 후 다음 사항들을 확인하세요:

- [ ] 메인 페이지가 정상적으로 로드되는지
- [ ] 음식 테스트 페이지로 접속되는지
- [ ] 이름 입력 팝업이 정상적으로 작동하는지
- [ ] 테스트 진행 및 결과 표시가 정상적으로 되는지
- [ ] 공유 링크가 제대로 생성되는지
- [ ] 공유 링크로 접속 시 결과가 제대로 표시되는지
- [ ] 모든 이미지가 정상적으로 표시되는지

## 💡 문제 해결

### 이미지가 표시되지 않는 경우
- 이미지 파일들이 `tests/food/images/` 폴더에 제대로 업로드되었는지 확인

### 공유 링크가 작동하지 않는 경우
- URL 파라미터가 제대로 전달되는지 브라우저 개발자 도구에서 확인
- GitHub Pages URL이 올바른지 확인

### 스타일이 적용되지 않는 경우
- CSS 파일 경로가 올바른지 확인
- 브라우저 캐시를 삭제하고 새로고침
