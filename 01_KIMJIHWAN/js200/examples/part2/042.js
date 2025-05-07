// 042. Const로 상수 선언하기 (const Declaration)
// const 키워드를 사용하여 상수를 선언할 수 있습니다.
// const 키워드는 변수를 재할당할 수 없도록 합니다.
const URL = 'http://js.com';
// URL = 'http://js.com';

if (true) {
    const URL2 = 'http://js.com';
}
// console.log(URL2);

// 042-1 불변객체 선언하기 (Immutable Object Declaration)
// const 키워드를 사용하여 불변 객체를 선언할 수 있습니다.
// const 키워드는 객체의 속성을 변경할 수 있지만, 객체 자체를 재할당할 수는 없습니다.
const CONST_USER = {name: 'jay', age: 30};
console.log(CONST_USER.name, CONST_USER.age);
CONST_USER.name = 'jay2';
CONST_USER.age = 31;
console.log(CONST_USER.name, CONST_USER.age);
CONST_USER = {name: 'bbo'}

