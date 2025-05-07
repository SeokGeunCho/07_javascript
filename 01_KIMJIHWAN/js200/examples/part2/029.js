// 029. 객체 리터럴과 this 키워드
var family = {
    'address' : 'Seoul',
    members: {},
    addFamily: function(age, name, role) {
        this.members[role] = {  // 동적 프로퍼티 접근을 의미합니다.
            age: age,
            name: name
        };
    },
    getHeadcound: function() {
        return Object.keys(this.members).length; // object.keys()는 객체의 키를 배열로 반환합니다.
    }
};

family.addFamily(30, 'harin', 'mother');
family.addFamily(35, 'james', 'father');
family.addFamily(5, 'jenny', 'daughter');


// for in 문법
// for (var i in object) {
//     console.log(i); // i는 object의 키를 나타냅니다.
//     console.log(object[i]); // object[i]는 object의 값을 나타냅니다.
var printMembers = function() {
    var members = family.members;
    for (a in members) { //
        console.log('role => ' + a + ', name => ' + members[a].name
            + ', age => ' + members[a].age);
    }
};
printMembers();


var members = family.members;
members['mother'].age = 40;
members.niece = {age: 5, name: 'lyn'};
delete members.aunt;
delete members['dog'];
printMembers();