// 1. 함수 리터럴로 생성 (일급 객체)
var hello = function () {
  return "안녕!";
};

// 2. 객체에 함수 저장
var obj = { hello };

// 3. 함수를 매개변수로 전달하고, 반환값으로 함수 사용
function repeat(func, count) {
  for (var i = 0; i < count; i++) {
    console.log(func());
  }
  return function () {
    console.log(`${count}번 반복 완료`);
  };
}

// 4. 함수 실행 및 반환된 함수 호출
var returnFunc = repeat(obj.hello, 10);
returnFunc();
