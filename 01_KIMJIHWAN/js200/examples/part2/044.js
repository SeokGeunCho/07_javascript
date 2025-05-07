// 044. 클로저(Closure) - 예제 1
// 클로저는 함수가 선언될 때의 환경을 기억하는 함수입니다. 즉, 클로저는 자신이 선언된 환경을 기억합니다.

function createCounterClosure() {
    let count = 0;
    return {
        increase: function() {
            count++;
        },
        getCount: function() {
            return count;
        }
    };
}

const counter1 = createCounterClosure();
const counter2 = createCounterClosure();

counter1.increase();
counter1.increase();
console.log(`counter 1의 값 : ` + counter1.getCount());
counter2.increase();
console.log(`counter 2의 값 : ` + counter2.getCount());
