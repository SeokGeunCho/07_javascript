// 039. 스코프 (Scope) - var, let, const
// 스코프(Scope)란 변수가 유효한 범위를 의미합니다. 자바스크립트는 함수 레벨 스코프(function-level scope)를 지원합니다.
// 즉, 변수가 선언된 함수 내에서만 유효합니다. 블록 레벨 스코프(block-level scope)는 지원하지 않습니다.
// 블록 레벨 스코프란 if, for, while 등의 블록 내에서만 유효한 변수를 의미합니다. 자바스크립트는 ES6부터 let과 const를 지원하여 블록 레벨 스코프를 지원합니다.
// var는 함수 레벨 스코프를 지원합니다. 즉, 변수가 선언된 함수 내에서만 유효합니다. 블록 레벨 스코프는 지원하지 않습니다.

var a = 10;
console.log(a);

function print() {
    var b = 20;
    if (true) {
        var c = 30;   
    }
    console.log(c);
}
    
print();
// console.log(b);

function print1() {
    console.log(a);
}

function print2() {
    var a = "local";
    print1();
}

print1();
print2();
// 렉시컬 스코프(Lexical Scope)란 변수가 선언된 위치에 따라 변수가 유효한 범위를 결정하는 것을 의미합니다.
// 즉, 변수가 선언된 위치에 따라 변수가 유효한 범위가 결정됩니다. 자바스크립트는 렉시컬 스코프를 지원합니다.

// 다이나믹 스코프(Dynamic Scope)란 변수가 호출된 위치에 따라 변수가 유효한 범위를 결정하는 것을 의미합니다.
// 즉, 변수가 호출된 위치에 따라 변수가 유효한 범위가 결정됩니다. 자바스크립트는 다이나믹 스코프를 지원하지 않습니다.
