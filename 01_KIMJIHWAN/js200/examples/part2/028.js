// 028. 객체 이해하기 (Object)
// 객체는 키와 값의 쌍으로 이루어진 데이터 구조입니다.
// 객체는 중괄호({})로 감싸고, 키와 값은 콜론(:)으로 구분합니다.
// 키는 문자열로, 값은 다양한 데이터 타입이 될 수 있습니다.
var family = {  // family은 객체입니다.
    'address': 'Seoul',
    members: {},    // members는 객체입니다.
    addFamily: function (age, name, role) { // addFamily는 메서드입니다.
        this.members[role] = {  // this는 family 객체를 가리킵니다.
            age: age,   // age는 매개변수입니다.
            name: name  // name은 매개변수입니다.
        };
    },
    getHeadcount: function () { // getHeadcount는 메서드입니다.
        return Object.keys(this.members).length;
    } 
};

family.addFamily(30, 'harin', 'mother'); // family 객체에 'mother'라는 키를 추가합니다.
family.addFamily(35, 'james', 'father'); // family 객체에 'father'라는 키를 추가합니다.
family.addFamily(5, 'jenny', 'daughter'); // family 객체에 'daughter'라는 키를 추가합니다.
console.log(family.getHeadcount()); // family 객체의 멤버 수를 출력합니다.
// );
