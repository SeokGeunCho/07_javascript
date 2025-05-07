// 중첩 구조 분해 할당
const product = {
  size: {
    width: 10,
    height: 30
  },
  items: ["doll", "robot"],
};

const {
  size: {width, height},
  items: [items1, items2],
  producer = "홍길동",
} = product;

console.log(width);
console.log(height);
console.log(producer);
