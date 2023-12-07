// --створити масив з:
//     - з 5 числових значень

// let numbers = [23,35,68,95,46 ];
//
// // - з 5 стічкових значень
//
// let urgentValues = ['gender','name','age','id','telephone'];
//
// // - з 5 значень стрічкового, числового та булевого типу
//
// let differents = ['gender',45, false,'telephone',true];
//
// // - та вивести його в консоль
//
//   console.log(numbers, urgentValues, differents);


// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

//  let different =['gender',45, false,'telephone',true];
// console.log(different[0]);
// console.log(different[1]);
// console.log(different[2]);
// console.log(different[3]);
// console.log(different[4]);

///
// - є масив [2,17,13,6,22,31,45,66,100,-18] :

// let numbers = [2,17,13,6,22,31,45,66,100,-18]

// 1. перебрати його циклом while

// let i= 0 ;
// while (i < numbers.length) {
//     let number = numbers[i];
//     console.log(number);
//     i++;
// }

//     2. перебрати його циклом for

// for (i=0 ;i <numbers.length;i++){
//     let number = numbers[i]
//     console.log(number);
// }

//     3. перебрати циклом while та вивести  числа тільки з непарним індексом

// let i= 0 ;
// while (i < numbers.length) {
//     let number = numbers[i];
//     console.log(number);
//     i+=2;
// }

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом

// for (i=0 ;i <numbers.length;i+=2) {
//     let number = numbers[i]
//     console.log(number);
// }

// 5. перебрати циклом while та вивести  числа тільки парні  значення

// let i= 1 ;
// while (i < numbers.length) {
//     let number = numbers[i];
//     console.log(number);
//     i+=2;
// }

// 6. перебрати циклом for та вивести  числа тільки парні  значення

// for (i=1 ;i <numbers.length;i+=2) {
//   let number = numbers[i]
//     console.log(number);
//
// }
// 7. замінити кожне число кратне 3 на слово "okten" !!!

// for (i=0 ;i < numbers.length;i++) {
//     if(numbers[i] % 3 === 0) {
//         numbers[i] = "okten"
//     }
// }
//         console.log(numbers);

// 8. вивести масив в зворотньому порядку.

// let numbers=[2,17,13,6,22,31,45,66,100,-18]
// numbers.reverse()
// console.log(numbers)

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)



// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

// massifs=[12,25,35,36,85,123,456,789,951,63]
// massifs.reverse()
// for (i=0 ;i <massifs.length;i++){
//     let massif = massifs[i]
//     console.log(massif);
// }

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

// massifs=['console','reverse','lesson','men','play','end','home','max','vasy','pety']
// massifs.reverse()
// for (i=0 ;i <massifs.length;i++){
//     let massif = massifs[i]
//     console.log(massif);
// }

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

// massifs=[false,'reverse','lesson','men','play','end',12,25,35,true]
// massifs.reverse()
// for (i=0 ;i <massifs.length;i++){
//     let massif = massifs[i]
//     console.log(massif);
//     document.write (massif)
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

// for (i=0 ;i <massifs.length;i++){
//     let massif = massifs[i];
//     if (typeof massif === 'boolean') {
//             console.log(massif);}
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

// for (i=0 ;i <massifs.length;i++){
//     let massif = massifs[i];
//     if (typeof massif === 'number') {
//         console.log(massif);}
// }

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

// for (i=0 ;i <massifs.length;i++){
//     let massif = massifs[i];
//     if (typeof massif === 'string') {
//         console.log(massif);}
// }


//
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
//

// for (let num of massifs) {
//          console.log(num);
//      }

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i < 10; i++) {
//     console.log(i);
//     document.write( i )
// }

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i < 100; i++) {
//     console.log(i);
//     document.write( - i )
// }

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i < 100; i+=2) {
//     console.log(i);
//     document.write( - i )
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

// for (i=1 ;i <100;i++) {
//     if (i % 2 == 1) continue;
//     console.log(i);
//     document.write( - i )
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

// for (let i = 0; i < 100; i++) {
//     if (i % 2 == 0) continue;
//     console.log(i);
//     document.write( - i )
// }


//
//
//
// стоврити масив книжок (назва, кількість сторінок, автори , жанри).
// -знайти наібльшу книжку.

let books = [
    {title: 'vasya', pages: 31, author: ['vasya','petya'], genre: 'poetry'},
    {title: 'petya', pages: 300, author: ['vasya', 'vasya'], genre: 'detektive'},
    {title: 'kolya', pages: 294, author: 'olya', genre: 'horror'},
    {title: 'olya', pages: 281, author: ['max', 'olya'], genre: ['adventyres','detektive']},
    {title: 'max', pages: 30, author: 'kolya', genre: 'adventyres'},
    {title: 'anya', pages: 31, author: 'anya', genre: 'detektive'},
    {title: 'oleg', pages: 286, author: 'petya', genre: 'poetry'},
    {title: 'andrey', pages: 29, author: 'kolya', genre: 'horror'},
    {title: 'masha', pages: 307, author: 'kolya', genre: ['detektive','horror']},
    {title: 'olya', pages: 312, author:[' masha','andrey'],genre: 'poetry'},
    {title: 'max', pages: 31, author: 'oleg', genre: 'horror'},
];
// - знайти книжку/ки з найбільшою кількістю жанit

// let resultBooks = [];
// for (let book of books) {
//    if (book.genre.length === 2){
//        resultBooks[resultBooks.length] = book;
//    }
// }
//       console.log (resultBooks);

// - знайти книжку/ки з найдовшою назвою
//
// for (let book of books){
//     consol.log (book)
// }

// - знайти книжку/ки які писали 2 автори

// let resultBooks = [];
// for (let book of books) {
//     if (book.author.length === 2){
//         resultBooks[resultBooks.length] = book;
//     }
// }
// console.log (resultBooks);

// - знайти книжку/ки які писав 1 автор

let resultBooks = [];
for (let book of books) {
    if (book.author.length === 1 ){
        resultBooks[resultBooks.length] = book;
    }
}
console.log (resultBooks);
