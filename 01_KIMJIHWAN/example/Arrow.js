// 화살표 함수 구현하기
function normalFunction() {
    console.log(arguments); // 사용 가능
}

const arrowFunction = () => {
    console.log(arguments); // 오류 발생!
};