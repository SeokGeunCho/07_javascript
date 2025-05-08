// 함수 나머지 매개변수 이해하기 (rest parameters)
// 나머지 매개변수는 ES6에서 도입된 문법으로, 함수의 매개변수를 배열로 받을 수 있는 기능이다.
// 나머지 매개변수는 매개변수의 마지막에 위치해야 하며, 나머지 매개변수는 배열로 전달된다.

function sum(...args) {
    var total = 0;
    for (var i = 0; i < args.length; i++) {
        total += args[i];
    }
    console.log(args.indexOf(1))
    return total;
}
console.log(sum(1, 2, 3));

function sum2(a, b, ...others) {
    var total = a + b;
    for (var i = 0; i < others.length; i++) {
        total += others[i];
    }
    return total;
}
console.log(sum2(1, 2));
console.log(sum2(1, 2, 3, 4));

