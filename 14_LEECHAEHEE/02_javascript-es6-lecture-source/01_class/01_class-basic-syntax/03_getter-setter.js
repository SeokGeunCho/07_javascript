// getter, setter
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  // getter 함수
  get name() {
    console.log("get name 동작");
    return this._name;
  }

  get price() {
    console.log("get price 동작");
    return this._price;
  }

  // setter함수
  set name(value) {
    console.log("set name 동작");
    this._name = value;
  }
  set price(value) {
    console.log("set price 동작");
    this._price = value;
  }
}

let phone = new Product("전화기", 23000);
console.log(phone.name, phone.price);
