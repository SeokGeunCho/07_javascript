// 032. 비구조화 할당(Destructuring Assignment) - 객체(Object) 비구조화 할당
// 비구조화 할당은 ES6에서 도입된 문법으로, 객체나 배열의 값을 변수에 쉽게 할당할 수 있는 기능이다.
var obj = {
    a: 1,
    b: 2,
    c: 30,
    d: 44,
    e: 5
};

var {a, c} = obj;
console.log(`a >>> ${a}`);
console.log(`c >>> ${c}`);

var {a:newA=10, f:newF=5} = obj;
console.log(`newA >> ${newA}`);
console.log(`newF >> ${newF}`);

// 032-1. 배열 비구조화 할당 (Array Destructuring Assignment)
// 배열 비구조화 할당은 ES6에서 도입된 문법으로, 배열의 값을 변수에 쉽게 할당할 수 있는 기능이다.
var arr = [1, 2, 30, 44, 5];

var [b, c, ...rest] = arr;
console.log(`0) b >>> ${b}`);
console.log(`1) c >>> ${c}`);

var [a=10, f=9] = [1];
console.log(`1) a >>> ${a}`);
console.log(`1) f >>> ${f}`);

[a, f] = [f, a];
console.log(`2) a >>> ${a}`);
console.log(`2) f >>> ${f}`);

function getArr() {
    return [1, 2, 3, 4, 5];
}
[a, , , , , , f] = getArr();
console.log(`3) a >>> ${a}`);
console.log(`4) f >>> ${f}`);


