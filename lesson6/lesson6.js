// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let str = 'hello world'
// console.log(str.length)
//
// let str1 = 'lorem ipsum'
// console.log(str1.length)
//
// let str2 = 'javascript is cool'
// console.log(str2.length)

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let str = 'hello world'
// console.log(str.toUpperCase())
//
// let str1 = 'lorem ipsum'
// console.log(str1.toUpperCase())
//
// let str2 = 'javascript is cool'
// console.log(str2.toUpperCase())

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

// let str = 'HELLO WORLD'
// console.log(str.toLowerCase())
//
// let str1 = 'LOREM IPSUM'
// console.log(str1.toLowerCase())
//
// let str2 = 'JAVASCRIPT IS COOL'
// console.log(str2.toLowerCase())

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

// let str = ' dirty string   '
// console.log(str.trim())


// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

// let str = 'Ревуть воли як ясла повні';
// console.log(str.split(` `));

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.

// let numbers = [10,8,-7,55,987,-1011,0,1050,0];
//
// let numberString = numbers.map((item) => String(item))
// console.log(numberString)

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

// let nums = [11,21,3];
//  let sortNums = nums.sort((num1, num2) => {
//     // return num1 - num2  //ascending
//     //  return num2 - num1 //descending
// })
// console.log(sortNums)

// ==========================
// - є масив

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];

// -- відсортувати його за спаданням за monthDuration

//  let sortCourses = coursesAndDurationArray.sort((user1, user2) => {
//     return user1.monthDuration - user2.monthDuration
// })
// console.log(sortCourses)

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

// let filterCourses=
//     coursesAndDurationArray.filter( (user) => user.monthDuration > 5
//     )
//
// console.log(filterCourses)


// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

// let coursesAndDurationArray1 = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// let usersCourses = coursesAndDurationArray1.map((user, index) =>
// {
//     user.id = index+1;
//     return user;
// });
// console.log(usersCourses)

// =========================
//     описати колоду карт (від 6 до туза без джокерів)

CardDeck =[
    {cardSuit: `spade`, value: 6,       color:'black'},
    {cardSuit: `spade`, value: 7,       color:'black'},
    {cardSuit: `spade`, value: 8,       color:'black'},
    {cardSuit: `spade`, value: 9,       color:'black'},
    {cardSuit: `spade`, value: 10,      color:'black'},
    {cardSuit: `spade`, value: 'jack',  color:'black'},
    {cardSuit: `spade`, value: 'queen', color:'black'},
    {cardSuit: `spade`, value: 'king',  color:'black'},
    {cardSuit: `spade`, value: 'ace',   color:'black'},
    {cardSuit: `clubs`, value: 6,       color:'black'},
    {cardSuit: `clubs`, value: 7,       color:'black'},
    {cardSuit: `clubs`, value: 8,       color:'black'},
    {cardSuit: `clubs`, value: 9,       color:'black'},
    {cardSuit: `clubs`, value: 10,      color:'black'},
    {cardSuit: `clubs`, value: 'jack',  color:'black'},
    {cardSuit: `clubs`, value: 'queen', color:'black'},
    {cardSuit: `clubs`, value: 'king',  color:'black'},
    {cardSuit: `clubs`, value: 'ace',   color:'black'},
    {cardSuit: `diamond`, value: 6,       color:'red'},
    {cardSuit: `diamond`, value: 7,       color:'red'},
    {cardSuit: `diamond`, value: 8,       color:'red'},
    {cardSuit: `diamond`, value: 9,       color:'red'},
    {cardSuit: `diamond`, value: 10,      color:'red'},
    {cardSuit: `diamond`, value: 'jack',  color:'red'},
    {cardSuit: `diamond`, value: 'queen', color:'red'},
    {cardSuit: `diamond`, value: 'king',  color:'red'},
    {cardSuit: `diamond`, value: 'ace',   color:'red'},
    {cardSuit: `heart`, value: 6,       color:'red'},
    {cardSuit: `heart`, value: 7,       color:'red'},
    {cardSuit: `heart`, value: 8,       color:'red'},
    {cardSuit: `heart`, value: 9,       color:'red'},
    {cardSuit: `heart`, value: 10,      color:'red'},
    {cardSuit: `heart`, value: 'jack',  color:'red'},
    {cardSuit: `heart`, value: 'queen', color:'red'},
    {cardSuit: `heart`, value: 'king',  color:'red'},
    {cardSuit: `heart`, value: 'ace',   color:'red'},
]

// - знайти піковий туз

// let CarDDeck = CardDeck.reduce((accumulator, Card) => {
// if ( Card.cardSuit === `spade`) {
//     if ( Card.value === 'ace'){
//         accumulator.statT.push(Card);
//     }
//         } else {
//             accumulator.statF.push(Card);
//         }
//         return accumulator;
//     }, {statT: [], statF: []});
//
// console.log(CarDDeck)

// - всі шістки

// let CarDDeck = CardDeck.reduce((accumulator, Card) => {
//     if ( Card.value === 6) {
//             accumulator.statT.push(Card);
//     } else {
//         accumulator.statF.push(Card);
//     }
//     return accumulator;
// }, {statT: [], statF: []});
//
// console.log(CarDDeck)

// - всі червоні карти

// let CarDDeck = CardDeck.reduce((accumulator, Card) => {
//     if ( Card.color === 'red') {
//         accumulator.statT.push(Card);
//     } else {
//         accumulator.statF.push(Card);
//     }
//     return accumulator;
// }, {statT: [], statF: []});
//
// console.log(CarDDeck)

// - всі буби

// let CarDDeck = CardDeck.reduce((accumulator, Card) => {
//     if ( Card.cardSuit === `diamond`) {
//         accumulator.statT.push(Card);
//     } else {
//         accumulator.statF.push(Card);
//     }
//     return accumulator;
// }, {statT: [], statF: []});
//
// console.log(CarDDeck)

// - всі трефи від 9 та більше

// let CarDDeck = CardDeck.reduce((accumulator, Card) => {
// if ( Card.cardSuit === `clubs`) {
//     if ( Card.value  >= `9` || Card.value  >= 9  ){
//         accumulator.statT.push(Card);
//     }
//         } else {
//             accumulator.statF.push(Card);
//         }
//         return accumulator;
//     }, {statT: [], statF: []});
//
// console.log(CarDDeck)

//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }





// =========================
//
//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
// }

//-- зозумів як була написана ця функція, но мені на думку не пришло таке написання. набираюся навоку надалі.//---

// let CarDDeck = CardDeck.reduce((accumulator, Card) => {
//     if ( !accumulator[Card.cardSuit]) {
//         accumulator[Card.cardSuit] = [];
//     }
//     accumulator[Card.cardSuit].push(Card);
//
//     return accumulator;
// }, {});
//
// console.log(CarDDeck)

// =========================





//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

// --написати пошук всіх об'єктів, в який в modules є sass

// let filterModules=
//     coursesArray.filter( (user)=> user.modules.includes('sass'))
// console.log(filterModules)

// --написати пошук всіх об'єктів, в який в modules є docker

// let filterModules=
//     coursesArray.filter( (user)=> user.modules.includes('docker'))
// console.log(filterModules)