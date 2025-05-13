// 객체 구조 분해 할당의 다양한 사용법

const pants = {
  productName: "배기팬츠",
  color: "검정색",
  price: 30000,
};

// 1. 원하는 속성만 골라 변수로 꺼낼 수 있다
const { productName } = pants;
console.log(productName); // 배기팬츠

// 2. 없는 속성은 기본값을 지정해서 사용할 수 있다
const shirts = { productName: "베이직 셔츠" };
const { productName: pn, color: co = "어떤 색상", price: pr = 0 } = shirts;
console.log(pn); // 베이직 셔츠
console.log(co); // 어떤 색상
console.log(pr); // 0
console.log(shirts); // { productName: '베이직 셔츠' }

// 3. 나머지 속성들을 묶어서 따로 저장할 수 있다 (rest 문법)
const { productName: pn2, ...rest } = pants;
console.log(pn2); // 배기팬츠
console.log(rest); // { color: '검정색', price: 30000 }

// 4. let 등 미리 선언된 변수에 구조 분해 할당하려면 괄호로 감싸야 한다
let pn3, co3, pr3;

// {}만 쓰면 코드 블록으로 인식되어 에러 발생:
// { productName: pn3, color: co3, price: pr3 } = pants

// 소소괄호로 감싸면 구조 분해로 처리됨
({ productName: pn3, color: co3, price: pr3 } = pants);
console.log(pn3); // 배기팬츠
console.log(co3); // 검정색
console.log(pr3); // 30000
