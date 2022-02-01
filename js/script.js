'use strict';

let title = prompt('Как называется ваш проект?'); //ранее указано 'Calculator_JS';
console.log(title.toString());
let screens = prompt('Какие типы экранов нужно разработать?', 'Simple, Complex, Interactive');
console.log(screens.toString());
let screenPrice = prompt('Сколько будет стоить данная работа?', '12000');
console.log(screenPrice);
let rollback = 77;

// 6 пункт
let adaptiv = prompt('Нужен ли адаптив на сайте?');
if (adaptiv == 'yes' || adaptiv == 'да') {
    console.log(!!true);
} else if (adaptiv == 'no' || adaptiv == 'нет') {
    console.log(!!false);
} else {
    alert('Ответьте да или нет');
};
console.log(adaptiv);

// 7 пункт
let service1 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice1 = prompt('Сколько это будет стоить?');
let service2 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice2 = prompt('Сколько это будет стоить?');

// 8 пункт
let fullPrice = (Number(screenPrice) + Number(servicePrice1) + Number(servicePrice2));
console.log(fullPrice);
//10 пункт
if (fullPrice > 30000) {
    console.log("Даем скидку в 10%");
} else if (fullPrice == 30000 || fullPrice < 30000 && fullPrice > 15000) {
    console.log('Даем скидку в 5%');
} else if (fullPrice <= 15000 && fullPrice >= 0) {
    console.log('Скидка не предусмотрена');
} else if (fullPrice < 0) {
    console.log('Что то пошло не так')
};

// 9 пункт
let toIntermediary = Number((fullPrice) * (rollback / 100)); //% отката посреднику
console.log('Процент отката посреднику за работу ' + toIntermediary + ' рублей');
let servicePercentPrice = (fullPrice - toIntermediary);
console.log(Math.ceil(servicePercentPrice));









console.log(typeof 'Calculator_JS');
console.log(typeof 65431385797865445654n);
console.log(typeof true);
console.log(screens.length); //показывает длинну строки
console.log('Стоимость вёрстки экранов ' + screenPrice + ' рублей/ долларов/гривен/юани');
console.log('Стоимость разработки сайта ' + fullPrice + ' рублей/ долларов/гривен/юани');
console.log(screens.toLowerCase().split(' ')); //toLowerCase - все буквы в нижнем регистре, .split - разбивает на массив строку//


alert('Hello, my JS!');
let a = 'GitBash ';
let b = 'is killing me!';
console.log(a + b);
