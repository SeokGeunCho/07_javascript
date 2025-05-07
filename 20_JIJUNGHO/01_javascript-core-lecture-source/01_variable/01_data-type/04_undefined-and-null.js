// 자바스크립트 엔진이 변수 초기화 시 undefined 사용
// 선언은 되어있지만 사용하지 않을때 시스템에서 넣어주는 값
var undef;
console.log(`undef`, undef);

// null은 변수에 값이 없다는 것을 의도적으로 명시할 때 사용한다.
var nullVar = "something";
nullVar = null;
console.log(`nullvar`, nullVar);
