// 배열 구조 분해 할당의 다양한 사용법

// 1. 객체 속성에 배열 값을 할당하기
const user = {};
[user.firstName, user.lastName] = "Gwanson Yu".split(" ");
console.log(user); // { firstName: 'Gwanson', lastName: 'Yu' }

// 2. 변수 값 교환 (swap)
let student = "학생";
let teacher = "선생님";
[teacher, student] = [student, teacher];
console.log(`student : ${student}, teacher : ${teacher}`); // student : 선생님, teacher : 학생

// 3. 나머지 요소는 배열로 받기 (rest 문법)
const [sign1, sign2, ...rest] = ["양자리", "황소자리", "쌍둥이자리", "게자리"];
console.log(sign1); // 양자리
console.log(sign2); // 황소자리
console.log(rest); // [ '쌍둥이자리', '게자리' ]

// 4. 기본값 지정 (default value)
const [firstName = "아무개", lastName = "김"] = ["길동"];
console.log(firstName); // 길동
console.log(lastName); // 김
