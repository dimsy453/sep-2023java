
// - Нам дано масив друзів let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"]; Потрібно зробити перевірку якщо
// кількість елементів у масиві більше або дорівнює 3, то виводиться повідомлення про те, що це великий масив, в якому  3 і більше елементи.
//     Інакше слід вивести на екран повідомлення про те, що це маленький масив, в якому менше 3-х елементів.
//
let friends = [
    {name:'Ivan'},
    {name:'Slavik'},
    {name:'Grisha'},
    {name:'Lera'},
    {name:'Ira'}
]
let length;
if (friends.length >=3 ) {
    console.log('Lerge massif');
}
else {console.log('smaii massif')
}

// - Маємо 3 числа і між ним  нам потрібно знайти те що посередині.
//     Знайти, яке з них є середнім (більше одного, але менше за інше). Перевірити, чи знаходиться перше число між двома іншими.

let num1 = 3;
let num2 = 1;
let num3 = 2;

if ((num1 > num2 && num2 < num3 && num1 < num3) || ( num1 < num2 && num2 > num3 && num1 > num3 )){
    console.log( num1 );
}
else if ((num1 < num2 && num2 < num3 && num1 < num3) || ( num1 < num2 && num2 > num3 && num1 > num3 )){
    console.log(num2);
}
else if ((num1 < num2 && num2 > num3 && num1 < num3) || (num1 > num2 && num2 < num3 && num1 > num3 )){
    console.log( num3 );
}
else {console.log('рівнв числа')
}


// - Маємо будь яке число від -100 , 0 , +100 потрібно перевірити яким є число: позитивним, негативним або нулем
// напишіть це тернарним оператором

let number = 2;

let num;
switch (true) {
    case number >= -100 && number <= -1:
        value = 'негативне';
        break;
    case number >= 1 && number <= 100:
        value = 'позитивне';
        break;
    default:
        value = 'Нулеве';
}
console.log( value + " значення")

// - У нас є змінна test, якщо дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
//     Перевірте роботу скрипта при test, що дорівнює true, false. Напишіть два варіанти скрипта - з коротким записом(тернаркою)

let test = true;

switch (test) {
    case  ((test && true) || true):
        value = 'Вірно';
        break;
    default:
        value = 'Невірно';
}
console.log( value + " значення")

switch (test) {
    case  ((test ||false) || true):
        value = 'Вірно';
        break;
    default:
        value = 'Невірно';
}
console.log( value + " значення")


// - Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
// Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!

let java = prompt('Яка «офіційна» назва JavaScript?');
if (java == 'ECMAScript'){
    console.log( 'Правильно!');
}
else {console.log('Не знаєте? ECMAScript!');
}


// - У першому під'їзді квартири з 1 до 20. У другому з 21 по 48. У третьому з 49 по 90.
// Користувач вводить номер квартири просто в змінні або через prompt('') .
//     Програма повинна зазначити, в якому під'їзді знаходиться дана квартира.

let apartment = prompt('Введіть номер квартири.');
let entrance;
switch (true) {
    case apartment >= 1 && apartment <= 20:
        value = 1;
        break;
    case apartment >= 21 && apartment <= 48:
        value = 2;
        break;
    case apartment >= 49 && apartment <= 90:
        value = 3;
        break;
    default:
        value = "Некоректне значення";
}
console.log(value + "  під'їзд.")

// - Ми маємо змінну number в яку користувач задає числове значення,  якщо змінна рівна 10 вивести повідомлення ВІРНО, якщо змінна не рівна 10 - тоді НЕВІРНО

let number1 = +prompt('Введіть номер.');
switch (true) {
    case number1 <= 10 && number1 >= 10:
        value = "ВІРНО";
        break;
    default:
        value = "НЕВІРНО";
}
console.log( value )



// - Задача-гра "чи ми йдемо сьогодні в OKTEN на навчання?".
//     Змінна, яка характеризує температуру. Якщо температура від +10 до +22 вивести повідомлення що ми йдемо ВЧИТИСЯ .
//     Якщо інша темпаретура, тоді виводимо повідомлення що сидимо вдома і вчимося ОНЛАЙН

let t = +prompt('Яка сьогодні температура ?');

let temperature;
switch (true) {
    case t >= 10 && t <= 22:
        value = ' йдемо вчитися';
        break;
    default:
        value = ' вчимося онлайн';
}
console.log(" Сьогодні " +  value)

// - За допомогою switch case - реалізувати гру - вікторину, де ми вводимо число від 1 до 5. І взалежності від введеного
//     числа нам дається приз. (Авто, Мото, Телефон, і т.д ) і якщо число не підходить тоді  вивести Повідомлення - що число не вірне.


let prize = +prompt('Введіть номер від 1 до 5.');

switch (true) {
    case prize <= 1 && prize >= 1:
        value = "Авто";
        break;
    case prize <= 2 && prize >= 2:
        value = "Мото";
        break;
    case prize <= 3 && prize >= 3:
        value = "Телефон";
        break;
    case prize <= 4 && prize >= 4:
        value = "Грощі";
        break;
    case prize <= 5 && prize >= 5:
        value = "Дім";
        break;
    default:
        value = "НЕВІРНО";
}
console.log( value )