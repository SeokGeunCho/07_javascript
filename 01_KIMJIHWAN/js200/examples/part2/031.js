// 031. 속성 계산명 (Computed Property Names)
// ES6에서 추가된 기능으로, 객체 리터럴에서 속성 이름을 동적으로 계산할 수 있는 방법

var obj = {};
for (var i = 0; i < 4; i++) {
    obj['key' + i] = i; // 동적 프로퍼티 접근을 의미합니다.
}
console.log(obj);

var profile = 'chloe:30';
var person = {
    [profile] : true,   
    [profile.split(':')[0]]: profile.split(':')[1]
    // profile.split(':')[0]은 'chloe'가 되고, profile.split(':')[1]은 '30'이 됩니다.
    // 따라서 person은 {chloe: true, chloe: 30}이 됩니다.
};
console.log(person);

