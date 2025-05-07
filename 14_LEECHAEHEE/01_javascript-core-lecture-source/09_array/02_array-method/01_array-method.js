// 배열 메소드
const arr = [];
// 배열의 생성자 함수는 Array
console.log(arr.constructor === Array);
// 배열의 프로토타입 객체는 Array.prototype
console.log(Object.getPrototypeOf(arr) === Array.prototype);

// Array.prototype.indexOf
// indexOf : 배열에서 요소가 위치한 인덱스를 리턴
// lastIndexOf : 배열의 요소가 위치한 마지막 인덱스를 리턴
// includes : 배열에 해당 요소 포함 여부 리턴
const foodList = ["물회", "삼계탕", "냉면", "수박", "물회"];
console.log(foodList);

console.log(`foodList.indexOf('물회') : ${foodList.indexOf("물회")}`); // 0
console.log(`foodList.indexOf('물회', 1) : ${foodList.indexOf("물회", 1)}`); // 4
console.log(`foodList.indexOf('삼겹살') : ${foodList.indexOf("삼겹살")}`); // -1(존재하지않을경우)

console.log(`foodList.lastIndexOf('물회') : ${foodList.lastIndexOf("물회")}`); // 4
console.log(
  `foodList.lastIndexOf('물회', 1) : ${foodList.lastIndexOf("물회", 1)}`
); // 0
console.log(
  `foodList.lastIndexOf('삼겹살') : ${foodList.lastIndexOf("삼겹살")}`
); // -1

console.log(`foodList.includes('물회') : ${foodList.includes("물회")}`); // true
console.log(`foodList.includes('삼겹살') : ${foodList.includes("삼겹살")}`); // false

// Array.prototype.push:배열의 맨 뒤에 요소 추가
// Array.prototype.pop : 배열의 맨 뒤에 요소 제거
const chinesefood = ["짜장면", "짬뽕", "우동"];

console.log(`push 전 chinesFood : ${chinesefood}`);
// chinesefood.push("탕수육");
// chinesefood.push("양장피");
chinesefood.push("탕수육", "양장피");
console.log(`push 후 chinesFood : ${chinesefood}`);

console.log(`chinesFood.pop(): ${chinesefood.pop()}`);
console.log(`chinesFood.pop(): ${chinesefood.pop()}`);
console.log(`chinesFood.pop(): ${chinesefood.pop()}`);
console.log(`pop 후 chinesFood : ${chinesefood}`);

// Array.prototype.unshift : 배열의 맨 앞에 요소 추가
// Array.prototype.shift: 배열의 맨 앞 요소 제거 후 반환
const chickenList = ["양념치킨", "후라이드", "파닭"];

console.log(`unshift 전 chickenList : ${chickenList}`);

// chickenList.unshift("간장치킨");
// chickenList.unshift("마늘치킨");
chickenList.unshift("간장치킨", "마늘치킨");
console.log(`unshift 후 chickenList : ${chickenList}`);

console.log(`chickenList.shift(): ${chickenList.shift()}`);
console.log(`chickenList.shift(): ${chickenList.shift()}`);
console.log(`chickenList.shift(): ${chickenList.shift()}`);

console.log(`shift 후 chickenList : ${chickenList}`);

// Array.prototype.concat : 두 개 이상의 배열을 결합
const idol1 = ["아이브", "오마이걸"];
const idol2 = ["트와이스", "에스파"];
const idol3 = ["블랙핑크", "레드벨벳"];

const mix = idol1.concat(idol2);
const mix2 = idol3.concat(idol1, idol2);

console.log(`idol1 기준으로 idol2 배열을 concat : ${mix}`);
console.log(`idol3 기준으로 idol1, idol2 배열을 concat : ${mix2}`);
console.log("------->", idol1 === mix);

// Array.prototype.slice : 배열의 요소 선택 잘라내기
// Array.prototype.splice : 배열의 index 위치의 요소 제거 및 추가
const front = ["HTML", "CSS", "JavaScript", "jQuery"];

// slice(시작인덱스, 종료인덱스)
console.log(`front.slice(1, 3) : ${front.slice(1, 3)}`);
console.log(`front.slice(1) : ${front.slice(1)}`);
console.log(`front : ${front}`);

// splice(index, 제거수, 추가값1, 추가값2,....)
console.log(`front.splice(3, 1, "React") : ${front.splice(3, 1, "React")}`);
console.log(`front : ${front}`);

// Array.prototype.join: 배열을 구분자로 결합하여 문자열로 반환
const snackList = ["사탕", "초콜렛", "껌", "과자"];
console.log(`snackList.join() : ${snackList.join()}`);
console.log(`snackList.join('/') : ${snackList.join("/")}`);

// Array.prototype.reverse: 배열의 순서를 뒤집음
console.log(`[1, 2, 3, 4, 5].reverse() : ${[1, 2, 3, 4, 5].reverse()}`);
