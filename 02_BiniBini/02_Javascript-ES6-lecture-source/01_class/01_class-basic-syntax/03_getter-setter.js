// 📘 getter & setter 사용 예제

class Product {

    // 생성자 → 객체가 생성될 때 자동 실행됨
    constructor(name, price) {
        // setter 호출됨 (this.name = name → 자동으로 set name() 실행됨)
        this.name = name;
        this.price = price;
    }

    // ✅ getter 함수 (값을 읽을 때 실행됨)
    get name() {
        console.log("get name 동작");
        return this._name; // 실제 값을 _name에 저장해둠
    }

    get price() {
        console.log("get price 동작");
        return this._price; // _price도 마찬가지
    }

    // ✅ setter 함수 (값을 설정할 때 실행됨)
    set name(value) {
        console.log("set name 동작");
        this._name = value; // 내부 변수로 실제 저장
    }

    set price(value) {
        console.log("set price 동작");
        this._price = value;
    }

    set price(value) {
        if (value < 0) {
            console.log("❌ 가격은 음수가 될 수 없습니다.");
            return;
        }
        this._price = value;
    }
    
}

// 📌 객체 생성 (new 키워드로 클래스 인스턴스 만들기)
let phone = new Product("전화기", 23000);

// 위 constructor에서 this.name = "전화기" → 자동으로 set name 실행됨
// this.price = 23000 → set price 실행됨

// ✅ 값을 읽을 때 → getter 자동 실행됨
console.log(phone.name, phone.price); 
// 콘솔:
// set name 동작
// set price 동작
// get name 동작
// get price 동작
// 출력: 전화기 23000

