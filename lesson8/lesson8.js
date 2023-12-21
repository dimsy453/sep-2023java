// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

function User(id, name, surname,email,phone) {
       this.id = id;
       this.name = name;
       this.surname = surname;
       this.email = email;
       this.phone = phone;
}
const users = [
new User(1,`Vasy`,`Vasilev`,`Vasy@april.biz`,380503585654),
new User(2,`Pety`,`Petrov`,`Pety@april.biz`,380509874563),
new User(3,`Koly`,`Nikolaev`,`Koly@april.biz`,380509632587),
new User(4,`Olyga`,`Ogli`,`Olyga@april.biz`,380506541221),
new User(4,`Viktoriy`,`Vetrova`,`Viktoriy@april.biz`,380501231232),
new User(6,`Ludmila`,`Livered`,`Ludmila@april.biz`,380501599515),
new User(7,`Vova`,`Voitov`,`Vova@april.biz`,380505555588),
new User(8,`Dany`,`Danilov`,`Dany@april.biz`,380507778899),
new User(9,`Darina`,`Katunina`,`Darina@april.biz`,380503332211),
new User(10,`Diana`,`Vasilev`,`Diana@april.biz`,380503542687)
]
console.log(users)

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

idUsers = users.filter ((user) => !(user.id % 2))
console.log(idUsers)

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

sortUsers = users.sort((user1, user2) => (user1.id - user2.id))
console.log(sortUsers)

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)

class Client {
       constructor(id, name, surname , email, phone, order) {
              this.id =id;
              this.name = name;
              this.surname = surname;
              this. enail = email;
              this.phone = phone;
              this.order = order;
}
}

// створити пустий масив, наповнити його 10 об'єктами Client

const Clients = [
        new Client(1,`Vasy`,`Vasilev`,`Vasy@april.biz`,380503585654,['bear',`milk`,`apple`]),
        new Client(2,`Pety`,`Petrov`,`Pety@april.biz`,380509874563,['bear',`milk`]),
        new Client(3,`Koly`,`Nikolaev`,`Koly@april.biz`,380509632587,['bear',]),
        new Client(4,`Olyga`,`Ogli`,`Olyga@april.biz`,380506541221,[`apple`,'bear',`milk`]),
        new Client(4,`Viktoriy`,`Vetrova`,`Viktoriy@april.biz`,380501231232,[`apple`,'bear']),
        new Client(6,`Ludmila`,`Livered`,`Ludmila@april.biz`,380501599515,[`apple`]),
        new Client(7,`Vova`,`Voitov`,`Vova@april.biz`,380505555588,[`apple`,'bear',`milk`]),
        new Client(8,`Dany`,`Danilov`,`Dany@april.biz`,380507778899[`apple`,'bear']),
        new Client(9,`Darina`,`Katunina`,`Darina@april.biz`,380503332211,[`apple`]),
        new Client(10,`Diana`,`Vasilev`,`Diana@april.biz`,380503542687[`apple`,'bear',`milk`])
    ]


// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

// orderClients = Clients.sort((Client1 ,Client2) => (Client1.order.length - Client2.order.length))
// console.log(orderClients)

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:

function Car (model,producer,year,maxSpeed,volume) {
    this.model = model;
    this.producer = producer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.volume = volume;

    this.drive = function () {
        console.log(`їдемо зі швидкістю ${maxSpeed} на годину`)
    }

    this.invo = function () {
        console.log(`model`, this.model);
        console.log(`producer`, this.producer);
        console.log(`year`, this.year);
        console.log(`maxSpeed`, this.maxSpeed);
        console.log(`volume`, this.volume)
    }
    this.increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed = newSpeed
    }
    this.changeYear = function (newValue) {
        this.year = newValue
    }
    this.addDriver = function (driver) {
        this.driver = driver
    }
}
const Cars =
    new Car(`Volvo`,`Germany`,21,180,1.6);
console.log(Cars)

// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`

Cars.drive()

// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed

Cars.increaseMaxSpeed(200)

// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`

Cars.invo()

// -- changeYear (newValue) - змінює рік випуску на значення newValue

Cars.changeYear(234)

// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

Cars.addDriver({name:`Vasy`,age:31})



// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:

class Car2 {
    constructor(model, producer, year, maxSpeed, volume) {

        this.model = model;
        this.producer = producer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.volume = volume;
    }

    drive() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
    }

    info() {
        console.log(`model`, this.model);
        console.log(`producer`, this.producer);
        console.log(`year`, this.year);
        console.log(`maxSpeed`, this.maxSpeed);
        console.log(`volume`, this.volume)
    }

    increaseMaxSpeed(newSpeed) {
        this.maxSpeed = newSpeed
    }

    changeYear(newValue) {
        this.year = newValue
    }

    addDriver(driver) {
        this.driver = driver
    }
}

const Cara =
     new Car2(`BMW`, `Japan`, 2021, 380, 4.5)

console.log(Cara)
Cara.drive()
Cara.info()
Cara.increaseMaxSpeed(400)
Cara.changeYear(2022)
Cara.addDriver({name: `Vasy`,age: 23})

// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
//
//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

class Cinderella {
    constructor(name,age,footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize
    }
}
const Cinderellas = [
    new Cinderella(`Vasy`,35,35),
    new Cinderella(`Yana`,18,36),
    new Cinderella(`Katy`,21,37),
    new Cinderella(`Sasha`,19,38),
    new Cinderella(`Masha`,20,39),
    new Cinderella(`Uly`,22,40),
    new Cinderella(`Tany`,23,41),
    new Cinderella(`Vika`,31,42),
    new Cinderella(`Dasha`,44,43),
    new Cinderella(`Oly`,25,44),
]

class prince {
    constructor(name,age,shoe) {
        this.name = name;
        this.age = age;
        this.shoe = shoe
    }
}

const Prince =
new prince(`Koly`, 40, 44);





let findCinderellas =
   Cinderellas.find( (arr)=> arr.footSize === Prince.shoe)
console.log(findCinderellas)


let filterCinderellas = []
for (const arr of Cinderellas) {
    if (arr.footSize === Prince.shoe) {
        filterCinderellas[arr] = arr
    }
}
console.log(filterCinderellas)







// class Human {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
// }
//
// class Cinderella extends Human {
//     constructor(name, age, footSize) {
//         super(name, age)
//         this.footSize = footSize;
//     }
// }
//
// const popelArr = [
//     new Cinderella('Alina', 22, 36),
//     new Cinderella('Tamara', 17, 45),
//     new Cinderella('Anna', 17, 37),
//     new Cinderella('Inna', 30, 38),
//     new Cinderella('Rita', 30, 39),
//     new Cinderella('Olga', 17, 39),
//     new Cinderella('Irina', 18, 34),
//     new Cinderella('Oksana', 25, 35),
//     new Cinderella('Tanya', 29, 40),
//     new Cinderella('Sabrina', 57, 46),
// ];
//
// class Prince extends Human {
//     constructor(name, age, bootSize) {
//         super(name, age)
//         this.bootSize = bootSize;
//     }
//
//     findCinderella1(arr) {
//         // if (!this.bootSize) throw new Error('нема)')
//         for (const cinderella of arr) {
//              return  (cinderella.footSize === this.bootSize) {
//                 return cinderella;
//             }
//         }
//     }
//
//     findCinderella2(arr) {
//         if (!this.bootSize) throw new Error('нема)')
//         return arr.find((cinderella) => cinderella.footSize === this.bootSize);
//     }
// }
//
// const prince1 = new Prince('Sergey', 18);
//
// try {
//     const cinderella1 = prince1.findCinderella1(popelArr);
//     console.log('cinderella1: ', cinderella1);
// } catch (e) {
//     console.error(e.message);
// }
//
// const prince2 = new Prince('Sergey', 18, 46);
//
// try {
//     const cinderella2 = prince2.findCinderella2(popelArr);
//     console.log('cinderella2: ', cinderella2);
// } catch (e) {
//     console.error(e.message);
// }

