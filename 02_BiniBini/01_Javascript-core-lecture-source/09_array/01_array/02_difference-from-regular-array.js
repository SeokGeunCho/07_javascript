// ✅ 배열 생성
const arr = [1, 2, 3]; // 배열 리터럴 방식으로 배열 생성

// ✅ 일반적인 배열 요소 접근
console.log(arr[0]); 
// ➜ 1
// ✅ 배열의 인덱스 0번에 있는 값을 가져옵니다.
// 즉, arr[0]은 '1', arr[1]은 '2'에 해당함.
// 배열은 순서가 있는 데이터 구조이며, 인덱스를 통해 요소에 접근합니다.

// ✅ 배열의 내부 속성(프로퍼티) 확인
console.log(Object.getOwnPropertyDescriptors(arr));
/*
{
  '0': { value: 1, writable: true, enumerable: true, configurable: true },
  '1': { value: 2, writable: true, enumerable: true, configurable: true },
  '2': { value: 3, writable: true, enumerable: true, configurable: true },
  length: {
    value: 3, writable: true, enumerable: false, configurable: false
  }
}
*/
// ✅ 위 결과는 배열이 실제로는 객체(Object)라는 것을 보여줍니다.
// 배열 요소는 key가 문자열인 숫자 ('0', '1', '2') 형태로 프로퍼티로 저장됩니다.
// 각 요소는 객체 프로퍼티처럼 다뤄지며, value 외에 writable, enumerable, configurable이라는 설정값을 가집니다.
// 'length'도 배열의 내장 프로퍼티로 존재합니다.

// ✅ 배열의 프로토타입(원형 객체) 확인
console.log(Object.getPrototypeOf(arr));
// ➜ Array.prototype 객체가 출력됨
// ✅ Object.getPrototypeOf(arr)는 배열이 상속하는 prototype 객체를 보여줍니다.
// 결과는 Array.prototype이며, 이 안에는 배열의 메서드(push, pop, map, filter 등)가 정의되어 있습니다.

// ✅ 결론 요약
// - arr[0]: 배열 요소에 접근 (일반적인 사용 방법)
// - Object.getOwnPropertyDescriptors(arr): 배열 내부 프로퍼티와 설정 정보 확인 (개발자 도구용)
// - Object.getPrototypeOf(arr): 배열이 상속받는 원형 객체(prototype)를 확인 (배열 메서드의 출처 확인)

// ✅ JS 배열에는 모든 타입의 값이 요소로 들어갈 수 있음 (JavaScript는 동적 타입 언어)
const arr2 = [
  "홍길동",        // 문자열
  20,             // 숫자
  true,           // 불리언
  null,           // null
  undefined,      // undefined
  [],             // 빈 배열 (중첩 가능)
  {},             // 객체
  function() {}   // 함수
];

console.log(arr2);
// ➜ ["홍길동", 20, true, null, undefined, Array(0), Object, ƒ]
// ✅ 다양한 타입이 하나의 배열 안에 공존할 수 있음

console.log(Object.getOwnPropertyDescriptors(arr2));
/*
각 요소는 다음과 같은 형태로 저장됨:
'0': { value: "홍길동", writable: true, enumerable: true, configurable: true }
...
'7': { value: function() {}, writable: true, enumerable: true, configurable: true }
length: { value: 8, writable: true, enumerable: false, configurable: false }
*/
// ✅ 배열 요소 각각은 객체의 속성처럼 다뤄지며, 속성 설명자(descriptor)를 통해 제어 가능
