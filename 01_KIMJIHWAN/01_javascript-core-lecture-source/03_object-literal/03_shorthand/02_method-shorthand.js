// 메서드 단축
var dog = {
    name : '뽀삐',
    eat : function(food) {
        console.log(`${this.name}(은)는 ${food}를 맛있게 먹어요~`);
    }
};

function 이름(food) {}
var dog2 = {
    name : '뽀삐',
    eat(food) {
        console.log(`${this.name}(은)는 ${food}를 맛있게 먹어요~`);
        
    }
};

dog.eat('고구마');
dog2.eat('옥수수');