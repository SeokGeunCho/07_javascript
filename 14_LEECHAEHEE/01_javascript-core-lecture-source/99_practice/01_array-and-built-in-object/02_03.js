let arr = ["1080px", "$100", "+200", "60kg", "6m", "-15"];
console.log(removeChar(arr));

function removeChar(arr){
    // 코드 작성
    return arr.map(item => parseInt(item) || +item.slice(1));

    // 앞에 붙는 문자가 1개가 아닌 상황도 처리하려면
/*    return arr.map(item => {
        // 숫자, 마이너스(-), 소수점(.)만 남기고 모두 제거
        const cleaned = item.replace(/[^0-9.-]+/g, '');
        return Number(cleaned);
    });*/
}