// 043. 스코프 체인 (Scope Chain) 예제
// 스코프 체인(Scope Chain)란 변수가 유효한 범위를 결정하는 체인을 의미합니다. 즉, 변수가 유효한 범위를 결정하는 체인입니다.
var person = 'harin';

function print() {
    var person2 = 'jay';

    function innerPrint() {
        console.log(person);
        console.log(person2);
    }

    innerPrint();

    console.log('print finished');
}
print();

console.log('finished');
