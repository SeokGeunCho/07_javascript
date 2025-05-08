// 객체 구조 분해 할당

const pants = {
  productName: "배기팬츠",
  color: "검정색",
  price: 30000,
};

console.log(pants);

const { productName, color, price } = pants;
console.log(productName);
console.log(color);
console.log(price);

// 객체의 속성을 변수에 저장해서 사용
const { productName: pn, color: co, price: pr } = pants;
console.log(pn);
console.log(co);
console.log(pr);
