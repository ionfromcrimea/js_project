// 1 - Функции - https://www.youtube.com/watch?v=Bluxbh9CaQ0, 2:43

const greet2 = function greet2(name) {
  console.log('Привет 2 - ', name)
}

greet2('Лена')
console.log(typeof greet2)
console.dir(greet2)

// 2 - Анонимные функции
// let counter = 0
// setInterval(function() {
//     console.log(++counter)
// }, 1000)

// 3 - Стрелочные функции

const arrow = (name) => {
    console.log('Привет -', name)
}
arrow('Olleg')

const arrow2 = name => console.log('Привет -', name);
arrow2('Ollleg')

// const pow2 = (num) => {
//     return num ** 2
// }
const pow2 = num => num ** 2
console.log(pow2(5));

// 4 - Параметры по умолчанию

// const sum = (a = 1, b = 1) => a + b;
const sum = (a = 40, b = a * 2) => a + b;
console.log(sum());

function sumAll(...all) {
    console.log(all);
    let result = 0;
    for (let num of all) {
        result += num;
    }
    return result
}

const res = sumAll(1, 2, 3, 4, 5, 6)
console.log(res);

// 5 - Замыкания

function createMember(name) {
    return function(lastName) {
        console.log(name + lastName);
    }
}

const logWithLastName = createMember('Ollleg');
// console.log(logWithLastName);
console.log(logWithLastName('ivvanov'));
console.log(logWithLastName('ivvannov'));

