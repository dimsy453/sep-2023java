
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// let SRectangle = (a, b) => a + b;
// console.log(SRectangle(12,23));

// - створити функцію яка обчислює та повертає площу кола з радіусом r

// let SCircle = (r) => Math.PI*r*r;
// console.log(SCircle(12));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// let SCilinder = (r,h) => 2 * Math.PI * r * (r + h);
// console.log(SCilinder(12,45))

// - створити функцію яка приймає масив та виводить кожен його елемент

// let Numbers=[1,2,3,4];
// let foot = (Numbers) => {for (let num of Numbers) console.log(num)}
//  foot(Numbers)


// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

// let print = (print) => document.write(`<h2>${print}</h2>`)
//
// print(`Hello`)

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// let print = (print) => document.write(`<ul>
//                            <li>${print}</li>
//                            <li>${print}</li>
//                            <li>${print}</li>
//                             </ul>`)
//
// print(`Hello`)

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// let generateSize =(text, count) => {
//     document.write(`<ul>`);
//         for (let i = 0; i < count; i++) {
//         document.write(`<li>${text}</li>`);
//         }
//     document.write(`</ul>`);
// }
//
// generateSize('Hello', 3);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// let Print=[12 ,28,true,false,"Hello"]
// let elementPrint=(Print) => {
//      document.write(`<ul>`)
//           for (const element of Print) {
//               document.write(`<li>${element}</li>`);
//           }
//      document.write(`</ul>`)
// }
// elementPrint(Print)

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
// let ObjectUsers = (arr) => {for (const user of arr)
// { document.write(`<div>${user.id}, ${user.name }, ${user.age }</div>`)}
// }
// ObjectUsers(users)

 // - створити функцію яка повертає найменьше число з масиву

// let numbers = [10,12,10500,1,954]
//
// let minNumber = (arr) => {
//  let min = arr[0]
//   for (const num of numbers)
//    if (min > num) min = num
//  return min}
//  console.log(minNumber(numbers))

 // - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

// let sum = (arr) => {
//     let result = 0;
//     for (const num of arr) {
//         result += num
//     }
//  return result;
// }
// console.log(sum([22, 20, 10]));

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

// let swap = (arr,index1,index2) => {
//     let num1 = arr[index1];
//     let num2 = arr[index2];
//     arr[index1] = num2;
//     arr[index2] = num1;
//     return arr
// }
// console.log(swap([11,22,33,44],0,1))

// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

// let exchange = (sumUAH, currencyValues, exchangeCurrency) => {
//  for (const currency of currencyValues) {
//   if (currency.currency === exchangeCurrency) {
//    return sumUAH / currency.value
//   }
//  }
// }
// const currencies = [{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}];
//
// console.log(exchange(10000, currencies, 'USD'));