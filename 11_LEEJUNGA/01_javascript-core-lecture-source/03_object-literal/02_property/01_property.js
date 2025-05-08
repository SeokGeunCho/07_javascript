var obj = {
  normal: "normal value",
  "@ s p a c e @": "space value", // 특수문자 사용시
  0: 1, // 숫자 키는 내부적으로 문자열로 변환
  var: "var", // 예약어 키는 오류 발생하지 않지만 권장하지 않는다.
  normal: "new value", // 이미 존재하는 키를 중복 선언하면 나중에 선언한 값으로 덮어씀
};
console.log(`obj >>`, obj);
