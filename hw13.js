`use strict`;

//task 1

let x = 10, y = 7;

x > y ? console.log(`x больше, чем y`) : console.log(`x не больше, чем y`);

//task 2

let num = +prompt(`Введите число`);
if (num % 2 === 0) {
    console.log(`Число ${num} четное`);
} else {
    console.log(`Число ${num} нечетное`);
}

//task 3

let numTwo = prompt(`Введите целое число`);
let numberLength;
let sign;

if (numTwo.length === 1) {
    numberLength = `однозначное`;
} else if (numTwo.length === 2) {
    numberLength = `двухзначное`;
} else if (numTwo.length === 3) {
    numberLength = `трехзначное`;
} else if (numTwo.length > 3) {
    numberLength = `имеет более 3-е цифр`;
}

if (numTwo >= 0) {
    sign = `положительное`;
} else {
    sign = `отрицательное`;
}

console.log(`Число ${numTwo} является ${numberLength} ${sign}`);

//task 4

let num1 = +prompt(`Enter 1st number`);
let num2 = +prompt(`Enter 2nd number`);
let num3 = +prompt(`Enter 3rd number`);

let maxNum;

if (num1 >= num2 && num1 >= num3) {
    maxNum = num1;
} else if (num2 >= num1 && num2 >= num3) {
    maxNum = num2;
} else if (num3 >= num1 && num3 >= num2) {
    maxNum = num3;
}

console.log(maxNum);

//task 5

let a = +prompt(`Enter side a`);
let b = +prompt(`Enter side b`);
let c = +prompt(`Enter side c`);

if (a > 0 && b > 0 && c > 0) {
    if (a + b > c) {
        console.log(`Треугольник может существоваь, тк сумма 2-ух сторон БОЛЬШЕ длинны третей стороны`);
    } else if (b + c > a) {
        console.log(`Треугольник может существоваь, тк сумма 2-ух сторон БОЛЬШЕ длинны третей стороны`);
    } else if (a + c > b) {
        console.log(`Треугольник может существоваь, тк сумма 2-ух сторон БОЛЬШЕ длинны третей стороны`);
    } else console.log(`Треугольник НЕ может существоваь, тк сумма 2-ух сторон МЕНЬШЕ длинны третей стороны`);
}
console.log(`Что-то пошло не так`);