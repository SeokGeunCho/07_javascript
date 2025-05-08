// 036. 전달 인자(arguments) 객체
// arguments 객체는 함수가 호출될 때 전달된 인자들을 배열 형태로 제공하는 객체
function sum() {
    var total = 0;
    for (var i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }
    console.log(arguments instanceof Array);
    return total;
}

var sumOf1to3 = sum(1, 2, 3);
console.log(sumOf1to3);

function testArg() {
    var newArr = Array.prototype.slice.call(arguments);
    console.log(newArr);
    console.log(newArr.indexOf('b'));
    // console.log(arguments.indexOf('b'));
}

testArg('a', 'b');