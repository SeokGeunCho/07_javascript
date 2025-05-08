// 객체 구조 분해 할당
const pants = {
  productName: "배기팬츠",
  color: "검정색",
  price: 30000,
};

console.log(pants);
// const productName = pants.productName;
// const color = pants.color;
// const price = pants.price;
const { productName, color, price } = pants;
console.log(productName);
console.log(price);
console.log(color);
// 각 변수의 서술 순서는 무관하여 {객체 프로퍼티:목표변수} 형식으로 작성하여
// 프로퍼티 키값과 다른 변수명을 설정할 수 있다.
const { productName: pn, price: pr, color: co } = pants;
console.log(pn);
console.log(pr);
console.log(co);

