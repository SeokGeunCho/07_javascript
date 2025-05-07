// 전역과 지역 스코프
// 전역 : 코드의 가장 바깥 영역, 전역에 변수를 선언하면 전역 변수가 되어 어디서든 참조 가능
// 지역 : 함수 내부에 몸체, 지역에 변수를 선언하면 지역변수가 되어 자신의 지역 스코프와
//        하위 지역 스코프에서 참조 가능

// 전역
var x = "global x";
var y = "global y";

function outer() {
  // z는 지역변수이면서, inner에서는 전역변수가 된다.
  var z = "outer's local z";
  console.log(x);
  console.log(y);
  console.log(z);

  // 전역변수와 지역변수의 우선순위는 지역변수가 더 높다.
  function inner() {
    var x = "inner's local x";
    console.log(x);
    console.log(y);
    console.log(z);
  }
  inner();
}

outer();

// console.log(x);
// console.log(y);
// console.log(z);
