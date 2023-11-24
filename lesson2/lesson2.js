// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let arr = [235,true,'anna',258,'dog',false, 456,654,'name',951 ];
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);
console.log(arr[7]);
console.log(arr[8]);
console.log(arr[9]);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let book1= {
    title: 'algebra',
    pageCount: 320,
    genre: 'fantastic'
};
let book2 = {
    title: 'war and peace',
    pageCount: 1230,
    genre: 'historical'
};
let book3 = {
    title: 'cobzar',
    pageCount: 620,
    genre: 'poetry'
}

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.

let Book1= {
    title: 'algebra',
    pageCount: 320,
    genre: 'fantastic',
    authors:[{name: 'Ister',age: 53}]
};
let Book2 = {
    title: 'war and peace',
    pageCount: 1230,
    genre: 'historical',
    authors:[{name: 'Tolstoy',age: 160}]
};
let Book3 = {
    title: 'cobzar',
    pageCount: 620,
    genre: 'poetry',
    authors:[{name: 'shevchenko',age: 153}]
};

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

let users =[
    {
        name: 'Vasy',
        username: 'vasy123',
        password: 123456789
    },
    {
        name: 'Pety',
        username: 'Pety234',
        password: 234567891
    },
    {
        name: 'Katy',
        username: 'katy345',
        password: 345678912
    },
    {
        name: 'Anna',
        username: 'anna456',
        password: 456789123
    },
    {
        name: 'Koly',
        username: 'koly567',
        password: 567891234
    },
    {
        name: 'Ivan',
        username: 'ivan678',
        password: 678912345
    },
    {
        name: 'Dima',
        username: 'dima789',
        password: 789123456
    },
    {
        name: 'valy',
        username: 'valy891',
        password: 891234567
    },
    {
        name: 'Kasy',
        username: 'kasy912',
        password: 912345678
    },
    {
        name: 'Roma',
        username: 'roma357',
        password: 1597536842
    },
]
console.log(users[0]["password"]);
console.log( users[1]["password"]);
console.log(users[2]["password"]);
console.log(users[3]["password"]);
console.log(users[4]["password"]);
console.log(users[5]["password"]);
console.log(users[6]["password"]);
console.log(users[7]["password"]);
console.log(users[8]["password"]);
console.log(users[9]["password"]);


// // Логічні розгалуження:
// //     - Є змінна х, якій ви надаєте довільне числове значення.
// //     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

let x= -35
if (x != 0){ console.log('Вірно')}
else
{ console.log('Невірно');}



// // - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// // (в першу, другу, третю или четверту частину години).

let time = 18;
let quarter;
switch (true) {
    case time >= 0 && time <= 14:
        quarter = 1;
        break;
    case time >= 15 && time <= 29:
        quarter = 2;
        break;
    case time >= 30 && time <= 44:
        quarter = 3;
        break;
    case time >= 45 && time <= 59:
        quarter = 4;
        break;
    default:
        quarter = "Некоректне значення";
}
console.log( 'Належить до ' + quarter + "  четверті години.")

// // - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let day = 65;
let dekade;
switch (true) {
    case day >= 0 && day <= 10:
        dekade = 1;
        break;
    case day >= 11 && day <= 20:
        dekade = 2;
        break;
    case day >= 21 && day <= 31:
        day = 3;
        break;
    default:
        quarter = "Некоректне значення";
}
console.log("Належить до " + quarter + " четверті місяця.")

// // - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
//

let wekend = prompt('Введіть число тиждня');
switch (wekend) {
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tusday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;
    default: console.log("Некоректне значення")
}


// //     - Користувач вводить або має два числа.
// //         Потрібно знайти та вивести максимальне число з тих двох .
// //         Також потрібно врахувати коли введені рівні числа.
// //

let number1 = 58;
let number2 = 26;
if (number1 === number2)
{console.log('Числа рівні')}
else if(number1 > number2)
    {console.log('Масимальне число: ' + number1)}
else{console.log('Масимальне число: ' + number2)}


// //     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
// //         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)


        let x1 = null;
        if (x1 = x1 || 'default')
        {console.log(x1)}
        else console.log('false')

// //     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

        let coursesAndDurationArray = [
            {title: 'JavaScript Complex', monthDuration: 5},
            {title: 'Java Complex', monthDuration: 6},
            {title: 'Python Complex', monthDuration: 6},
            {title: 'QA Complex', monthDuration: 4},
            {title: 'FullStack', monthDuration: 7},
            {title: 'Frontend', monthDuration: 4}
        ]

        if (coursesAndDurationArray[0]['monthDuration'] >=5)
           {console.log('Супер')};
        if (coursesAndDurationArray[1]['monthDuration'] >=5)
           {console.log('Супер')};
        if (coursesAndDurationArray[2]['monthDuration'] >=5)
           {console.log('Супер')};
        if (coursesAndDurationArray[3]['monthDuration'] >=5)
           {console.log('Супер')};
        if (coursesAndDurationArray[4]['monthDuration'] >=5)
           {console.log('Супер')};
        if (coursesAndDurationArray[5]['monthDuration'] >=5)
           {console.log('Супер')}
