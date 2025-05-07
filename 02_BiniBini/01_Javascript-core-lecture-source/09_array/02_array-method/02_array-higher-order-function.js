// ✅ 배열 고차 함수 정리 (왕초보용 자세한 설명 + 출력값 포함)

// ✅ Array.prototype.sort(): 배열 정렬하기
let randNums = [];
for (let i = 0; i < 10; i++) {
  randNums[i] = Math.floor(Math.random() * 100) + 1;
  // Math.random(): 0 이상 1 미만의 랜덤한 소수 생성
  // * 100 → 0 이상 100 미만
  // Math.floor(): 소수점 버림하여 정수로 만듦 (예: 42.8 → 42)
  // +1 → 최종적으로 1부터 100까지의 정수가 생성됨
}
console.log("🎲 정렬 전 randNums:", randNums); // 예: [73, 28, 99, 3, 15, ...]

randNums.sort();
// 기본 정렬은 문자열 기준이라 숫자를 올바르게 정렬하지 못할 수 있어요
console.log("❌ 기본 sort() 결과 (문자열 정렬 기준):", randNums);

randNums.sort((a, b) => a - b);
// 오름차순 정렬: a - b 결과가 음수면 a가 앞에, 양수면 b가 앞에 와요
console.log("✅ 숫자 오름차순 정렬:", randNums);

randNums.sort((a, b) => b - a);
// 내림차순 정렬: a - b의 반대 방향
console.log("✅ 숫자 내림차순 정렬:", randNums);


// ✅ Array.prototype.forEach(): 배열 순회
const fruits1 = ["apple", "banana", "cherry"];
fruits1.forEach((fruit, idx, arr) => {
  console.log("🧾 현재 과일:", fruit); // apple, banana, cherry
  console.log("📍 인덱스:", idx); // 0, 1, 2
  console.log("📦 원본 배열:", arr); // 전체 배열 출력
});

fruits1.forEach(fruit => console.log("🎯 대문자 과일:", fruit.toUpperCase()));
// APPLE, BANANA, CHERRY


// ✅ Array.prototype.map(): 변환된 새 배열 반환
const prices = [100, 200, 300];
const vatAdded = prices.map(p => p * 1.1); // 각 가격에 10% VAT 추가
console.log("💰 VAT 추가 가격:", vatAdded); // [110, 220, 330]

const labels = prices.map((p, i) => `상품${i + 1}: ${p}원`);
console.log("🏷️ 가격 라벨:", labels); // ['상품1: 100원', '상품2: 200원', ...]


// ✅ Array.prototype.filter(): 조건 만족 요소만 반환
const ages = [12, 17, 21, 30, 15];
const adults = ages.filter(age => age >= 18); // 성인만 필터링
console.log("🔞 성인만:", adults); // [21, 30]

const names = ["Anna", "Bob", "Charlie", "Alex"];
const aNames = names.filter(name => name.startsWith("A")); // A로 시작하는 이름
console.log("🔠 A로 시작:", aNames); // ['Anna', 'Alex']


// ✅ Array.prototype.reduce(): 누적 계산
const nums1 = [1, 2, 3];
const sum1 = nums1.reduce((acc, cur) => acc + cur, 0); // 0부터 시작해서 누적합
console.log("🧮 합계:", sum1); // 6

const scores1 = [75, 88, 92, 60];
const max1 = scores1.reduce((acc, cur) => acc > cur ? acc : cur); // 최댓값 찾기
console.log("🏆 최대 점수:", max1); // 92

const words1 = ["J", "S"];
const combinedWord = words1.reduce((acc, c) => acc + c); // 문자열 결합
console.log("💬 문자 합치기:", combinedWord); // "JS"

const votes = ["yes", "no", "yes", "yes", "no"];
const voteCount = votes.reduce((acc, cur) => {
  acc[cur] = (acc[cur] || 0) + 1; // 객체 형태로 개수 카운트
  return acc;
}, {});
console.log("🗳️ 투표 수:", voteCount); // { yes: 3, no: 2 }


// ✅ Array.prototype.find(): 첫 번째 조건 만족 값
const numbers3 = [5, 8, 10, 15];
const firstEven = numbers3.find(n => n % 2 === 0);
console.log("🔍 첫 짝수:", firstEven); // 8


// ✅ Array.prototype.some(): 하나라도 조건 만족?
const list = [1, 3, 5, 7];
const hasEven = list.some(n => n % 2 === 0);
console.log("✔️ 짝수 있나요?:", hasEven); // false


// ✅ Array.prototype.every(): 모두 조건 만족?
const marks = [80, 90, 100];
const allPass = marks.every(score => score >= 60);
console.log("✅ 모두 합격?:", allPass); // true


// ✅ 클래스 + 배열 메서드 예제
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

const products = [
  new Product("우유", 1200),
  new Product("커피", 3000),
  new Product("과자", 1500),
  new Product("빵", 1800)
];

products.forEach(p => console.log("🍞 상품 이름:", p.name));
// 우유, 커피, 과자, 빵

const pricesList = products.map(p => p.price);
console.log("💵 가격 목록:", pricesList); // [1200, 3000, 1500, 1800]

const expensive = products.filter(p => p.price > 1500);
console.log("💸 1500원 초과:", expensive); // 커피, 빵 객체

const totalPrice = products.reduce((acc, p) => acc + p.price, 0);
console.log("💳 전체 가격:", totalPrice); // 7500

products.sort((a, b) => b.price - a.price);
console.log("📈 가격 내림차순:", products); // 커피 > 빵 > 과자 > 우유

const foundItem = products.find(p => p.name === "커피");
console.log("🔍 커피 상품:", foundItem); // Product { name: '커피', price: 3000 }

const hasCheap = products.some(p => p.price < 1000);
console.log("🛍️ 천 원 이하 있음?:", hasCheap); // false

const allOver1000 = products.every(p => p.price >= 1000);
console.log("📦 전부 천 원 이상?:", allOver1000); // true
