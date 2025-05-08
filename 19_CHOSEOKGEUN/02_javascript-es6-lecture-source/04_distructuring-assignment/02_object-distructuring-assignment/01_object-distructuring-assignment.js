// 객체 구조 분해 할당
const pants = {
  productName: "배기팬츠",
  color: "검정색",
  price: "30000",
};

console.log(pants);
// const productName = pants.productName;
// const color = pants.color;
// const price = pants.color;
const { productName, price, color } = pants;
console.log(productName);
console.log(price);
console.log(color);

const { productName: pn, price: pr, color: co } = pants;
console.log(pn);
console.log(pr);
console.log(co);
