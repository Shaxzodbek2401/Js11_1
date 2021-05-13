
// const database = {
//     'user1' : {
//         'Имя' : prompt('Введите имя'),
//         'Возраст': +prompt("Возраст")
//     },
//     'user2' : {
//         'Имя' : prompt('Введите имя'),
//         'Возраст': +prompt("Возраст")
//     },
//     'user3' : {
//         'Имя' : prompt('Введите имя'),
//         'Возраст': +prompt("Возраст")
//     },
//     'user4' : {
//         'Имя' : prompt('Введите имя'),
//         'Возраст': +prompt("Возраст")
//     },
//     'user5' : {
//         'Имя' : prompt('Введите имя'),
//         'Возраст': +prompt("Возраст")
//     },
//     'user6' : {
//         'Имя' : prompt('Введите имя'),
//         'Возраст': +prompt("Возраст")
//     },
//     'user7' : {
//         'Имя' : prompt('Введите имя'),
//         'Возраст': +prompt("Возраст")
//     },
//     'user8' : {
//         'Имя' : prompt('Введите имя'),
//         'Возраст': +prompt("Возраст")
//     },
//     'user9' : {
//         'Имя' : prompt('Введите имя'),
//         'Возраст': +prompt("Возраст")
//     },
//     'user10' : {
//         'Имя' : prompt('Введите имя'),
//         'Возраст': +prompt("Возраст")
//     },

// }

// for (const key in database) {
//     for (const keys in database[key]) {
//         console.log(database[key]);
//     }
// }


// for (let index = 1; index <= 10; index++) {
//     alert(`Введите данные ${index} пользователья`)
//     user_data_base = {
//         name: prompt('Имя'),
//         age: +prompt('Возраст')
//     }
//     console.log(`${index} пользователь:`);
//     for (const key in user_data_base) {
//         console.log(user_data_base[key]);
//     }
// }

for (let index = 1; index <= 10; index++) {
    alert(`Введите данные ${index} пользователья`)
    user_data_base = {
        name: prompt('Имя'),
        age: +prompt('Возраст')
    }
    console.log(`${index} пользователь:`);
    for (const key in user_data_base) {
        console.log(user_data_base[key]);
    }
}