// JSON을 문자열로 반환하기 (stringify)

// JSON이란 JavaScript Object Notation의 약자로,
// 데이터를 구조화하여 저장하고 전송할 수 있는 형식

// JSON은 특정 프로그래밍 언어에 종속되지 않으며, 
// Python, Java, C#, PHP 등 다양한 언어에서 지원됩니다.

// JSON 객체의 stringify 메소드는 대입한 값을 JSON 문자열로 변환
// JSON.stringify 메소드 활용 방법은 다음과 같음
// JSON.stringify(값, 리플레이서, 공백 개수)

const testStringify = {
    stringifiedNum: JSON.stringify(13.1),
    stringifiedStr: JSON.stringify('Kiss Carnival'),
    stringifiedBln: JSON.stringify(false),
    stringifiedArr: JSON.stringify([2003, 2017])
};

for (let key in testStringify) {
    console.log('--------${key}----------');
    console.log(typeof testStringify[key]);
    console.log(testStringify[key]);
}

console.log(`--------stringifyObj----------`);
const obj = {
    drama: 'PET',
    season: 2017,
    casting: ['koyuki', 'matsumoto jun'],
    character: ['sumire', 'momo']
};
// JSON.stringify()은 문자열 자료형
console.log(typeof JSON.stringify(obj));
console.log(JSON.stringify(obj));
console.log(JSON.stringify(obj, ['drama', 'season']));
console.log(JSON.stringify(obj, null, 4));
console.log(JSON.stringify(obj, (key, val) => {
    if (key === 'season') return 2003;
    return val;
}, 4));