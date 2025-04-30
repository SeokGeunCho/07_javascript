// [JavaScript - 메서드 단축(축약) 구문]

// 1. 일반 메서드 작성 방법 (ES5 스타일)
var dog = {
    name: '뽀삐',
    eat: function(food) {  // 익명 함수 형태
        console.log(`${this.name}(은)는 ${food}를 맛있게 먹어요~`);
    }
};

dog.eat('고구마');
// 출력: 뽀삐(은)는 고구마를 맛있게 먹어요~


// 2. 메서드 단축 구문 (ES6부터 지원)
// - function 키워드 생략
// - 메서드 이름만 적고 바로 괄호()를 붙이면 됨
var dog2 = {
    name: '빠삐',
    eat(food) {  // 메서드 축약형
        console.log(`${this.name}(은)는 ${food}를 맛있게 먹어요~`);
    }
};

dog2.eat('불닭');
// 출력: 빠삐(은)는 불닭를 맛있게 먹어요~

// 요약:
// - function 키워드 생략 가능
// - 코드가 더 짧고 읽기 쉬워진다
// - 객체 리터럴 안에서 메서드를 정의할 때만 사용 가능
