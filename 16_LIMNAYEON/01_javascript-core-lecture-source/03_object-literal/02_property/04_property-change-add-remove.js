// 프로퍼티 수정, 추가, 삭제

var dog = {
    name : '뽀삐삐'
};
console.log(dog);

dog.name = '두부'; // 이미 존재하는 프로퍼티에 값을 할당하면 값이 갱신된다.
console.log(dog);


// dog.age = 3;
dog.age = 3;
console.log(dog);

delete dog.age;
console.log(dog);

delete dog.something; // delete 연산자는 객체의 프로퍼티를 삭제하며, 존재하지 않는 프로퍼티 삭제시 무시된다.
console.log(dog);



