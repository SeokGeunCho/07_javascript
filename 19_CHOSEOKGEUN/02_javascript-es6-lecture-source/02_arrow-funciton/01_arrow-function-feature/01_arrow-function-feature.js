// 1. 화살표 함수는 this를 가지지 않는다.
const theater = {
  store: "건대점",
  titles: ["어벤져스", "겨울왕국", "스파이더맨"],
  showMovieList() {
    // 일반 함수 (오류 발생 방지를 위해 this 저장)
    this.titles.forEach(
      function (title) {
        console.log(this); // 전역 객체 (또는 undefined in strict mode)
        console.log(`${this.store} : ${title}`);
      }.bind(this)
    ); // this를 theater로 바인딩

    // 화살표 함수 (정상 동작)
    this.titles.forEach((title) => console.log(`${this.store} : ${title}`));
  },
};

theater.showMovieList();

// 2. 화살표 함수는 new와 함께 호출할 수 없다.
const arrowFunc = () => {};
// new arrowFunc(); // ❌ 오류 발생 (주석 처리)
console.log(arrowFunc.hasOwnProperty("prototype")); // false

// 3. 화살표 함수는 super를 가지지 않는다.
class Animal {
  constructor(name, weight) {
    this.name = name;
    this.weight = weight;
  }

  move(lostWeight) {
    if (this.weight > lostWeight) {
      this.weight -= lostWeight;
      console.log(
        `${this.name}(은)는 움직임으로 인해 ${lostWeight}kg 감량 되어 ${this.weight}kg이 되었습니다.`
      );
    }
  }
}

class Tiger extends Animal {
  move(lostWeight) {
    // 화살표 함수에서 super 사용 가능 (외부 스코프에서 참조)
    setTimeout(() => {
      super.move(lostWeight);
    }, 3000);
  }
}

let tiger = new Tiger("백두산 호랭이", 90);
tiger.move(1);

// 4. 화살표 함수는 arguments를 가지지 않는다.
(function () {
  console.log("일반 함수 arguments:", arguments);
  // 화살표 함수는 본인의 arguments 3,4가 아닌 상위스코프의 arguments 1,2를 참조한다.
  // const arrowFunc = () => console.log("화살표 함수 arguments:", arguments);
  const arrowFunc = function () {
    console.log("--->", arguments);
  };
  arrowFunc(3, 1);
})(1, 2); // 즉시실행함수

// 화살표 함수는 콜백 함수로 자주 사용되며, 자신의 this/arguments를 갖지 않고
// 상위스코프를 그대로 참조하도록 설계되어 ES5 콜백 함수에서 자주 발생하던
// this 바인딩 문제(전역 객체 or undefined를 가리킴)을 간편하게 해결 할 수 있다.
