// 메서드 단축
var dog = {
  name: "뽀삐",
  eat: function (food) {
    console.log(`${this.name}(은)는 ${food}를 맛있게 먹어요`);
  },
};

var dog2 = {
  name: "뽀삐",
  eat(food) {
    console.log(`${this.name}(은)는 ${food}를 맛있게 먹어요`);
  },
};

dog.eat("토끼");
dog2.eat("까마귀");
