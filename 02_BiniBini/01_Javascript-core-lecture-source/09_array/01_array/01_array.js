// ✅ 1. 배열 생성 방법

// (1) 배열 리터럴 방식 (가장 많이 사용됨)
const arr = ["banana", "peach", "kiwi"];
console.log(arr); 
// ➜ ["banana", "peach", "kiwi"]
// ✅ 가장 직관적이며 자주 쓰이는 배열 생성 방법

// (2) 배열 생성자 함수 new Array()

// 2-1. 빈 배열 생성
const arr2 = new Array();
console.log(arr2); 
// ➜ []
// ✅ 빈 배열 생성 (거의 사용되지 않음, 대신 [] 리터럴 사용 권장)

// 2-2. 숫자 하나를 넣으면 '배열의 길이'로 인식됨
const arr3 = new Array(10);
console.log(arr3); 
// ➜ [ <10 empty items> ]
// ✅ 10칸짜리 배열이 생성되지만 값은 비어 있음 (undefined가 아닌 'empty slot')

// 2-3. 숫자 여러 개를 넣으면 각각이 배열 요소로 들어감
const arr4 = new Array(1, 2, 3);
console.log(arr4); 
// ➜ [1, 2, 3]
// ✅ 이 경우엔 리터럴 방식과 동일하게 작동함

// (3) Array.of() 메서드 사용

console.log(Array.of(10)); 
// ➜ [10]
// ✅ new Array(10)과 다르게 '값 10'을 요소로 갖는 배열을 생성

console.log(Array.of(1, 2, 3)); 
// ➜ [1, 2, 3]
// ✅ 여러 값을 배열 요소로 바로 넣음

console.log(Array.of("Hello", "js")); 
// ➜ ["Hello", "js"]
// ✅ 다양한 타입의 값을 배열 요소로 가질 수 있음

// ❗ new Array(10)과 Array.of(10)의 차이!
// new Array(10)  ➜ 길이 10짜리 빈 배열
// Array.of(10)   ➜ 값 10이 들어간 배열 [10]

// ✅ 2. 배열 요소 접근 및 반복

// 배열 요소 접근 (인덱스는 0부터 시작)
console.log(arr[0]); // ➜ "banana"
console.log(arr[1]); // ➜ "peach"

// 배열의 길이 확인 (요소 개수)
console.log(arr.length); // ➜ 3

// 배열 순회 (반복문)
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]); 
}
// ➜ "banana", "peach", "kiwi"
// ✅ 배열 요소를 하나씩 출력

// ✅ 3. 배열의 타입 확인

console.log(typeof arr); 
// ➜ "object"
// ✅ 배열도 내부적으로는 객체(Object) 타입임

console.log(Array.isArray(arr)); 
// ➜ true
// ✅ 배열인지 아닌지 정확히 확인할 땐 이 메서드 사용

// ✅ 4. 출력 방식의 차이: console.log vs console.dir

console.log(Array.of(1, 2, 3)); 
// ➜ [1, 2, 3]
// ✅ 배열의 값만 단순 출력

console.dir(Array.of(1, 2, 3)); 
// 구조 및 prototype까지 펼쳐 보여줌
// ✅ 객체의 전체 속성과 내부 구조까지 보고 싶을 때 사용

const user = { name: "Bini", age: 20 };
console.log(user); 
// ➜ { name: "Bini", age: 20 }

console.dir(user); 
// ➜ ▶ Object → 내부 구조를 트리 구조로 보여줌

// ✅ 5. 배열 vs 일반 객체 차이

const obj1 = [];     // 배열
console.log(obj1.length); 
// ➜ 0 ✅ 배열은 length 프로퍼티를 가짐 (요소 개수)

const obj2 = {};     // 일반 객체
console.log(obj2.length); 
// ➜ undefined ❌ 객체에는 length가 없음

console.log(Array.isArray(obj1)); 
// ➜ true ✅ 배열 맞음

console.log(Array.isArray(obj2)); 
// ➜ false ✅ 일반 객체는 배열 아님
