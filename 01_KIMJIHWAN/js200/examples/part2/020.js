// 020. 템플릿 문자열 (template string)
// ES5에서는 문자열을 표현하기 위해서 '' 또는 ""를 사용했음
// ES6에서 추가된 문자열 표현 방식
var cart = [
    {name: '옷', price: 2000},
    {name: '가방', price: 1000}
];
var numOfItems = `카트에 ${cart.length}개의 아이템이 있습니다.`;
var cartTable =
`<ul>
    <li>품목: ${cart[0].name}, 가격: ${cart[0].price}</li>
    <li>품목: ${cart[0].name}, 가격: ${cart[0].price}</li>
</ul>`;
console.log(numOfItems);
console.log(cartTable);

var personName = 'harin';
var helloString = 'hello ' + personName;
var helloTemplateString = `hello ${personName}`;
console.log(helloString === helloTemplateString);
console.log(typeof helloTemplateString);
