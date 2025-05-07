// 객체 변경되지 않도록 하기(freeze)
let obj = {}

// 에러는 나지 않고, 객체 값 변경 막아주기
obj.title = 'IDOL';
obj = Object.freeze(obj);
obj.title = 'Euphoria';

console.log(obj);

const changeUntilNum = (obj, num) => {
    'use strict';

    while(true) {
        console.log(obj);
        
        if (obj.age >= num) {
            obj = Object.freeze(obj);
        }
        obj.age += 1;
    }
}

let profile = {name: '지연',  age: 25};
changeUntilNum(profile, 30);