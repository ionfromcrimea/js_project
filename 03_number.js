// 1 - Number
const num = 42
const float = 42.78
console.log(float)
const pow = 10e3
function validate(obj, lowval, hival){
    if ((obj.value < lowval) || (obj.value > hival))
        alert("Неверное значение!");
}
console.log("string text line 1\n\
string text line 2");
//new Number, String, Array
// console.log(Number.MAX_SAFE_INTEGER);
// console.log(Math.pow(2,53)-1);
// console.log(Number.MIN_SAFE_INTEGER);
// console.log(Number.MAX_VALUE);
// console.log(Number.MIN_VALUE);
// console.log(Number.POSITIVE_INFINITY);
// console.log(Number.NaN); // Not A Number
// console.log(typeof Number.NaN);
// const weird = 2 / undefined
// console.log(isNaN(weird));
// console.log(Number.isNaN(42));
// console.log(Number.isFinite(Infinity));
// const strInt = '40'
// const strFloat = '40.45'
// console.log(Number.parseInt(strInt) + 2);
// console.log(Number(strInt) + 2);
// console.log(+strInt + 2);
// console.log(parseFloat(strFloat) + 2);
// console.log(+strFloat + 2);

console.log(0.4 + 0.2);
console.log((0.4 + 0.2).toFixed(2));
console.log(parseFloat((0.4 + 0.2).toFixed(2)));

// 2 - BigInt
console.log(1234567891234567891234567899999);
console.log(typeof 1234567891234567891234567899999);
console.log(typeof 1234567891234567891234567899999n);
console.log(typeof (123456799899999999999n - 8887678n));
console.log(typeof (-23456799899999999999n - 8887678n));
// console.log(typeof (123456799899999999999.7654321n)); //error
console.log(10n + BigInt(2));
console.log(5n / 2n); // = 2n

// 3 - Math
console.log(Math.E);
console.log(Math.sqrt(25));
console.log(Math.pow(5, 2));
console.log(Math.abs(-6));
console.log(Math.max(23, 19, 6, 67,55));
console.log(Math.floor(4.9));
console.log(Math.random());

function getRandomBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

console.log(getRandomBetween(10, 42));
