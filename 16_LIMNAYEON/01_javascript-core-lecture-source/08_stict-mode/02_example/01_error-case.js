// error case

// 1. 암묵적 전역

(function(){
  x = 1;
  console.log(x);
  

})();

// 2. 변수, 함수, 매개변수의 삭제
(function() {
  var x = 1;

  delete x;
})();

// 3. 매개변수의 이름 중복
(function() {
  function test(x, x){
    return x + x;
  }
  console.log(`test: ${test(1, 2)}`);
  
})();

// with문 사용
(function(){
  // "use strict";
  const test = { x: 1, y: 2, z: 3};
  
  // console.log(test.x);
  // console.log(test.y);
  // console.log(test.z);
  // with는 객체 이름을 생략할 수 있어 코드를 간단히 할 수 있다는 장점이 있지만
  // 성능과 가독성 문제로 사용하지 않는 것이 좋다.

  with (test){
    console.log(x);
    console.log(y);
    console.log(z);

  }
})();
