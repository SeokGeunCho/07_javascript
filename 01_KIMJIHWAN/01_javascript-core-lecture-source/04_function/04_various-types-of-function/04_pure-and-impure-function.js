var cnt = 0;

// 순수 함수는 최소 하나 이상의 인수를 전달 받으며 인수의 불변성을 유지한다.
function increase(n) {
    return ++n;
}

// 비순수 함수는 외부 상태에 의존하며 외부 상태를 변경하여 상태변화를 추적하기 어렵게 한다.
function decrease() {
    return --cnt;
}