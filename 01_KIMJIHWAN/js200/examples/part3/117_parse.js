// JSON 문자열을 JSON으로 변환하기(parse)
const jsonStr = '{"drama":"PET","season":2018,"casting":'
    + '{"koyuki","matumoto jun"], "charactor":["sumire","momo"]}';

// 첫 번째 인자는 stringify로 변환할 대상 값
console.log(JSON.parse(jsonStr));

// 두 번째 리플레이서(Replacer)는 JSON으로 변환하기 전에 값을 변경하는 인자
// 이때 리플레이서로 콜백(Callback) 함수를 넣거타, 특정 키(Key) 정보를 담은
// 배열을 넣어 값을 변경합니다. 리플레이서는 필수값이 아닙니다.
console.log(JSON.parse(jsonStr, (key, val) => {
    if (key === 'season') val = 2003;
    return val;
}));

console.log(JSON.parse('13.1'));
console.log(typeof JSON.parse('13.1'));
console.log(JSON.parse('false'));
console.log(typeof JSON.parse('false'));

console.log(JSON.parse('Kiss Carnival'));
console.log(JSON.parse('[2003, 2017]'));






