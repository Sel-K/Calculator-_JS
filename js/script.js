'use strict';

let title = prompt('Как называется ваш проект?'); //ранее указано 'Calculator_JS';
let screens = prompt('Какие типы экранов нужно разработать?', 'Simple, Complex, Interactive');
let screenPrice = +prompt('Сколько будет стоить данная работа?', '12000');
let rollback = 77;


// 7 пункт
let service1 = +prompt('Какой дополнительный тип услуги нужен?');
let servicePrice1 = +prompt('Сколько это будет стоить?');
let service2 = +prompt('Какой дополнительный тип услуги нужен?');
let servicePrice2 = +prompt('Сколько это будет стоить?');

// 8 пункт
let fullPrice = (screenPrice + servicePrice1 + servicePrice2);
//10 пункт
if (fullPrice > 30000) {
    console.log("Даем скидку в 10%");
} else if (fullPrice <= 30000 && fullPrice > 15000) {
    console.log('Даем скидку в 5%');
} else if (fullPrice <= 15000 && fullPrice >= 0) {
    console.log('Скидка не предусмотрена');
} else if (fullPrice < 0) {
    console.log('Что то пошло не так')
};

// 6 пункт
let adaptiv = confirm('Нужен ли адаптив на сайте?');

// 9 пункт
let toIntermediary = (fullPrice) * (rollback / 100); 
let servicePercentPrice = (fullPrice - toIntermediary);//% отката посреднику


//Выводы в консоль и алерт
console.log(typeof 'Calculator_JS');
console.log(typeof 65431385797865445654n);
console.log(typeof true);
console.log(screens.length); //показывает длинну строки
console.log('Стоимость вёрстки экранов ' + screenPrice + ' рублей/ долларов/гривен/юани');
console.log('Стоимость разработки сайта ' + fullPrice + ' рублей/ долларов/гривен/юани');
console.log(screens.toLowerCase().split(' ')); //toLowerCase - все буквы в нижнем регистре, .split - разбивает на массив строку//
console.log(title.toString());
console.log(screens.toString());
console.log(screenPrice);
console.log(adaptiv);
console.log(fullPrice); // 8 пункт
console.log(Math.ceil(servicePercentPrice)); // 9 пункт
console.log('Процент отката посреднику за работу ' + toIntermediary + ' рублей');