let user = {};
Object.defineProperty(user, "age", {
    get: function() {
        return this._age;
    },
    set: function (age) {
        if (age < 0) {
            console.log(`0보다 작은값은 올 수 없습니다.`);
        } else {
            this._age = age;
        }
    },
    enumerable: true
});
    // Object.defineProperty() 메서드를 사용하여 객체의 속성자 정의하기
    // user 객체에 age라는 속성을 정의하고, getter와 setter를 사용하여 age 속성에 대한 접근을 제어합니다.
    // age 속성에 대한 getter와 setter를 정의하여 age 속성에 대한 정
    // 의된 동작을 구현합니다. getter는 age 속성의 값을 가져올 때 호출되고, setter는
    // age 속성의 값을 설정할 때 호출됩니다.

user.age = 10;
console.log(user.age);
user.age = -1;

let user2 = {
    get name() {
        return this._name;
    },
    set name(val) {
        if (val.length < 3) {
            throw new Error("이름은 3글자 이상이어야 합니다.");
        }
        this._name = val;
    }
}
user2.name = 'harin';
console.log(user2.name);
user2.name = 'ha'; // Error: 이름은 3글자 이상이어야 합니다.