// 045. 객체 속성 기술자 (Object Property Descriptor)
// 객체 속성 기술자란 객체의 속성에 대한 메타데이터를 제공하는 객체입니다.
// 속성 기술자는 객체의 속성에 대한 정보를 담고 있는 객체로, 속성의 값, 속성의 열거 가능 여부, 속성의 쓰기 가능 여부, 속성의 재구성 가능 여부 등을 포함합니다.
// 속성 기술자는 Object.getOwnPropertyDescriptor() 메서드를 사용하여 객체의 속성에 대한 정보를 가져올 수 있습니다.
// 속성 기술자는 Object.defineProperty() 메서드를 사용하여 객체의 속성을 정의할 때 사용할 수 있습니다.
// 속성 기술자는 객체의 속성을 정의할 때 사용할 수 있습니다.


let user = {
    name: "jeado"
};
let descriptor = Object.getOwnPropertyDescriptor(user, 'name');
console.log(descriptor);

let user2 = {};
Object.defineProperty(user2, "name", {
    value: "jeado",
    enumerable: true,
    configurable: true,
    writable: false
});
console.log(user2.name);
user2.name = "bbo";
console.log(user2.name);

let user3 = {
    name: "jeado",
    toString() {
        return this.name;
    }
};
Object.defineProperty(user3, "toString", {
    enumerable: false
});
for (let key in user3) {
    console.log(key);
}

let user4 = {};
Object.defineProperty(user4, "name", {
    value: "jeado",
    configurable: false
});

delete user4.name;
console.log(user4);
Object.defineProperty(user4, "name", {
    writable: true
});
