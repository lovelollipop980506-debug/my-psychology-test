const questions = [
    {
        id: 1,
        question: "스트레스 받을 때 당신의 선택은?",
        answers: [
            { text: "🔥 화끈하게 해소한다", scores: { Ramen: 2, Dumpling: 1 } },
            { text: "🍫 달달하게 녹여낸다", scores: { Cake: 2, Americano: 0 } }
        ]
    },
    {
        id: 2,
        question: "친구가 약속에 20분 늦었다면?",
        answers: [
            { text: "“오케이, 난 카페 둘러보고 있었어!”", scores: { Americano: 2, Ramen: 1 } },
            { text: "“괜찮아~ 천천히 와!”", scores: { Dumpling: 2, Cake: 1 } }
        ]
    },
    {
        id: 3,
        question: "새로운 맛이 나오면?",
        answers: [
            { text: "바로 도전!", scores: { Ramen: 2, Dumpling: 1 } },
            { text: "리뷰 보고 신중히 결정", scores: { Americano: 2, Cake: 1 } }
        ]
    },
    {
        id: 4,
        question: "주말 계획 스타일은?",
        answers: [
            { text: "즉흥적으로 움직인다", scores: { Dumpling: 2, Ramen: 1 } },
            { text: "집에서 휴식하며 여유롭게 보낸다", scores: { Cake: 2, Americano: 1 } }
        ]
    },
    {
        id: 5,
        question: "일할 때 스타일은?",
        answers: [
            { text: "빠르게 끝내고 나중에 수정", scores: { Ramen: 2, Dumpling: 1 } },
            { text: "꼼꼼하고 완벽하게 마무리", scores: { Americano: 2, Cake: 1 } }
        ]
    },
    {
        id: 6,
        question: "친구가 고민 상담을 요청했다면?",
        answers: [
            { text: "해결책부터 제시", scores: { Americano: 2, Ramen: 1 } },
            { text: "공감부터 시작", scores: { Cake: 2, Dumpling: 1 } }
        ]
    },
    {
        id: 7,
        question: "새로운 사람을 만날 때 당신은?",
        answers: [
            { text: "먼저 분위기 주도", scores: { Ramen: 2, Dumpling: 1 } },
            { text: "천천히 파악 후 다가간다", scores: { Cake: 2, Americano: 1 } }
        ]
    },
    {
        id: 8,
        question: "맛집을 찾을 때 당신은?",
        answers: [
            { text: "일단 가보고 판단하기", scores: { Dumpling: 2, Ramen: 1 } },
            { text: "리뷰/평점 철저히 확인", scores: { Americano: 2, Cake: 1 } }
        ]
    },
    {
        id: 9,
        question: "갈등 상황이 생기면?",
        answers: [
            { text: "바로 대화해서 해결", scores: { Ramen: 2, Americano: 1 } },
            { text: "시간을 두고 차분하게 이야기", scores: { Dumpling: 2, Cake: 1 } }
        ]
    },
    {
        id: 10,
        question: "하루 마무리 스타일은?",
        answers: [
            { text: "뜨거운 음식/게임/TV로 마무리", scores: { Ramen: 2, Dumpling: 1 } },
            { text: "조용한 음악/디저트/커피로 마무리", scores: { Americano: 2, Cake: 1 } }
        ]
    }
];

const results = {
    "Ramen": {
        name: "매운 라면",
        title: "불 지르는 추진력의 화르르 인간🔥",
        desc: "당신은 뜨겁고 빠르다. 라면 물 끓듯 몰입하고, 결정도 후딱 한다.<br>주변 사람들 정신 못 차리게 하지만 또 찾게 되는 중독성 있음.",
        quote: "“고민? 3분 안에 해결함.”",
        img: "images/ramen.png",
        match: "군만두",
        unmatch: "아이스 아메리카노"
    },
    "Cake": {
        name: "초코 케이크",
        title: "겉단단 속달달 스윗괴물🍰",
        desc: "겉은 멀쩡해 보여도 속은 감성 덩어리.<br>사소한 행복 잘 느끼고 공감 능력 좋아서 친구들이 믿고 찾는 스타일.",
        quote: "“케이크 먹고 싶은데…(감정 충전 중)”",
        img: "images/cake.png",
        match: "아이스 아메리카노",
        unmatch: "매운 라면"
    },
    "Dumpling": {
        name: "군만두",
        title: "겉바속촉 균형 천재 만두피 인간🥟",
        desc: "현실적 + 따뜻함 + 유머 + 조율 능력까지 고루 갖춘 밸런스형.<br>어디다 놔도 잘 어울리고 주변을 편하게 하는 사람.",
        quote: "“응~ 다 괜찮아. 너 하고 싶은 대로 하셈.”",
        img: "images/dumpling.png",
        match: "매운 라면",
        unmatch: "초코 케이크"
    },
    "Americano": {
        name: "아이스 아메리카노",
        title: "겉차갑 속…도 차갑네 인간 아아🧊",
        desc: "감정에 휘둘리지 않고 판단이 빠르고 깔끔한 쿨한 타입.<br>쓸데없는 드라마 없이 핵심만 본다.",
        quote: "“결론부터 말해봐.”",
        img: "images/americano.png",
        match: "초코 케이크",
        unmatch: "군만두"
    }
};
