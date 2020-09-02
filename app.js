// alert('HHHhELLO')
// alert(33)
// 1 - переменные - camelCase
// 1.1 - точки с запятой может испозоваться, может опускаться (кроме некоторых случаев)
// 1.2 - допускаются символы _ и $ (и цмфры - не с начала имени)

// var name = 'Oleg'
const firstName = 'Oleg'
const lastName = 'Ivanov' // string
const isProgrammer = true //boolean

let age = 53 //number

// name = 'Oleeeg'
// console.log(name)
// lastName = 'Iva'
console.log(lastName)
// age = 'some string'
console.log(age)

// 2 - мутирование
console.log('Имя человека: ' + firstName + ', а возраст - ' + age)
console.log('Имя человека: ' + firstName + ', а возраст - ' + age.toString())
console.log(age)
// const lastName2 = prompt('Введите фамилию')
// alert(firstName + lastName)
// alert(firstName + lastName2)

// 3 - операторы (минус и плюс, умножить и рвзделить с числами, инкремент и декремент, плюсравнои пр.)
// 4 - типы данных
console.log(typeof age)
let x
console.log(typeof x) // баг с типом null - даёт object
console.log(-(2 ** 2)) //

// 5 - приоритет операторов
// mdn operator precedence - поиск в гугле (mozilla developer network)
// услоаные операторы (if() {} else if() {} else {})
// 6 - двойное и тройное равеннство, тетрарный оператор - как в пхп
// 7 - булева логика
// 8 - функции (параметры через запятую)
// 9 - массивы
const cars = ['мазда', 'ниссан', 'тойота'] // с нуля
console.log(cars)
const cars2 = new Array('мазда', 'ниссан', 'тойота', 'тазик') // с нуля
console.log(cars2)
console.log(cars2.length)
cars[0] = 'porsche'
cars[cars.length] = 'Mazda'
console.log(cars)

// 10 - Циклы
for (let i=0; i<cars.length; i++) {
    const car = cars[i]
    console.log(car)
}
for (let car of cars) {
    console.log(car)
}

// 11 - объекты
const person = {
    firstName: 'Oleg',
    lastName: 'Ivanov',
    year: 1967,
    languages: ['En', 'Ru', 'Ua'],
    hasWife: true,
    greet: function () {
        console.log('greet from person')
    }
}
console.log(person.year)
console.log(person['firstName'])
person.greet()
person.isProgrammer = true
console.log(person)

