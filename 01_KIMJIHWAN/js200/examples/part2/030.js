// 030. 단축 프로퍼티 이름과 메소드 정의
// 단축 프로퍼티 이름은 ES6에서 도입된 문법으로, 변수 이름과 프로퍼티 이름이 같을 때, 프로퍼티 이름을 생략할 수 있는 기능이다.
// 메소드 정의는 ES6에서 도입된 문법으로, 오브젝트 안에 함수를 정의할 때, function 키워드를 생략할 수 있는 기능이다.

var adress = 'Seoul';
var members = {};
var addFamily = function(age, name, role) {
    this.members[role] = {age, name};
    // this.members[role] = {  // 동적 프로퍼티 접근을 의미합니다.
    //     age: age,
    //     name: name
}
var getHeadcount = function() {
    return Object.keys(this.members).length;
}
var family = {adress, members, addFamily, getHeadcount};
// family = {
//     adress: adress,
//     members: members,
//     addFamily: addFamily,
//     getHeadcount: getHeadcount
// };

family.addFamily(30, 'chloe', 'aunt');
family.addFamily(25, 'jason', 'uncle');
family.addFamily(5, 'jason', 'brother');
console.log(family.getHeadcount());

