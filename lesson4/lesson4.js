// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

//     function rectangleArea(a,b){
//         return  a * b;
//     }
//     let SRectangle = rectangleArea(12, 23);
// console.log(SRectangle);

// - створити функцію яка обчислює та повертає площу кола з радіусом r

// function circleArea(r) {
//     return Math.PI*r*r
// }
// let SCircle = circleArea(12);
// console.log(SCircle);

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// function cilinderArea(r,h){
//     return 2 * Math.PI * r * (r + h)
// }
// let SCilinder = cilinderArea(12, 45)
// console.log(SCilinder)

// - створити функцію яка приймає масив та виводить кожен його елемент

//  function number(numbers) {
//      for (let num of numbers) {
//          console.log(num);
//      }
//  }
// let Numbers=[1,2,3,4];
// number(Numbers);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

// function print(writer){
//     document.write(`<h2>${writer}</h2>`)
// }
// print(`Hello`)

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// function  print(text){
//     document.write(`<ul>`);
//     document.write(`<li>${text}</li>`)
//     document.write(`<li>${text}</li>`)
//     document.write(`<li>${text}</li>`)
//     document.write(`</ul>`)
// }
// print(`Hello`)

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// function generateSize(text, count) {
//     document.write(`<ul>`);
//         for (let i = 0; i < count; i++) {
//         document.write(`<li>${text}</li>`);
//         }
//     document.write(`</ul>`);
// }
// generateSize('Hello', 3);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// function elementPrint(text){
//      document.write(`<ul>`)
//           for (const element of text) {
//               document.write(`<li>${element}</li>`);
//           }
//      document.write(`</ul>`)
// }
// elementPrint([12 ,28,true,false,"Hello"]);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

// let users = [
//     {name: 'vasya',  age: 31, id: 1},
//     {name: 'petya',  age: 30, id: 2},
//     {name: 'kolya',  age: 29, id: 3},
//     {name: 'olya',   age: 28, id: 4},
//     {name: 'max',    age: 30, id: 5},
//     {name: 'anya',   age: 31, id: 6},
//     {name: 'oleg',   age: 28, id: 7},
//     {name: 'andrey', age: 29, id: 8},
//     {name: 'masha',  age: 30, id: 9},
//     {name: 'olya',   age: 31, id: 10},
//     {name: 'max',    age: 31, id: 11}
// ];
//
// function ObjectUsers(arr){
//     for (const user of arr) {
//         document.write(`<div>${user.name}, ${user.age}, ${user.id}</div>`)
//     }
// }
// ObjectUsers(users)

// - створити функцію яка повертає найменьше число з масиву

// let numbers = [10,12,10500,3,954]
//
// function minNumber(number) {
//     let min = number[0];
//     for (const num of number) {
//         if (min > num) min = num
//     }
//     return min;
// }
//
// console.log(minNumber(numbers));


// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

// function sum(arr) {
//     let result = 0;
//     for (const num of arr) {
//         result += num;
//     }
//     return result;
// }
// console.log(sum([22, 20, 10]));


// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

// function swap(arr,index1,index2) {
//     let num1 = arr[index1];
//     let num2 = arr[index2];
//     arr[index1] = num2;
//     arr[index2] = num1;
//     return arr
// }
// console.log(swap([11,22,33,44],0,1))

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

// function exchange(sumUAH, currencyValues, exchangeCurrency) {
//     for (const currency of currencyValues) {
//         if (currency.currency === exchangeCurrency) {
//             return sumUAH / currency.value
//         }
//     }
// }
//
// const currencies = [{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}];
//
// console.log(exchange(10000, currencies, 'USD'));
// console.log(exchange(10000, currencies, 'EUR'));