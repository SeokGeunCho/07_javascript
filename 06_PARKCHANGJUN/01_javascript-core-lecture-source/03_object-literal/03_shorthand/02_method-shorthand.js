// 메서드 단축
var dog = {
    name : '뽀삐',
    eat : function(food) {
        console.log(`${this.name}(은)는 ${food}를 맛있게 먹어요~`);
    }
};

// 메서드 축약
var dog2 = {
    name : '뽀삐',
    eat(food) {
        console.log(`${this.name}(은)는 ${food}을 맛있게 먹어요~`);
    }
};

dog.eat('고구마');
dog2.eat('불닭');
