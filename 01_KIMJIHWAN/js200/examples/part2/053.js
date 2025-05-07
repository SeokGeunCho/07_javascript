// 053. 클래스 정적 메소드와 속성 정의하기
// 일반적인 메소드는 해당 클래스의 인스턴스를 통해 호춣합니다.
// 반면 정적 메소드는 클래스를 통해 직접 호출하는 메소드를 말합니다.
// 클래스에서 정적 메소드는 static 키워드를 사용하여 정의합니다.
class Product {
    static build(name, price) {
        const id = Math.floor(Math.random() * 1000);
        return new Product(id, name, price);
    }

    static getTaxPrice(product) {
        return (product.price * 0.1) + product.price;
    }

    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

// prototype 상속과는 다르게 클래스로 상속을 하게 되면 정적 메소드 또한 상속하게 됩니다.
class DeposableProduct extends Product {
    depose() {
        this.deposed = true;
    }
}

const gum = Product.build('껌', 1000);
console.log(gum);

const clothes = new DeposableProduct(1, '옷', 2000);
const taxPrice = DeposableProduct.getTaxPrice(clothes);
console.log(taxPrice);
function showThis() {
    console.log(this); // 브라우저에서는 window, Node.js에서는 global
}
showThis();


// 053-1. 클래스
class ProductWithCode {
    static get CODE_PREFIX() {
        return "PRODUCT-"
    }

    constructor(id) {
        this.id
        this.code = ProductWithCode.CODE_PREFIX + id;
    }
}

const product1 = new ProductWithCode('001');
console.log(ProductWithCode.CODE_PREFIX);
console.log(product1.code);

