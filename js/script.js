'use strict';

let title = prompt('Как называется ваш проект?'); //ранее указано 'Calculator_JS';
let screens = prompt('Какие типы экранов нужно разработать?', 'Simple, Complex, Interactive');
let screenPrice = +prompt('Сколько будет стоить данная работа?', '12000');
let rollback = 77;
// 6 пункт
let adaptiv = confirm('Нужен ли адаптив на сайте?');
// 7 пункт
let service1 = +prompt('Какой дополнительный тип услуги нужен?');
let servicePrice1 = +prompt('Сколько это будет стоить?');
let service2 = +prompt('Какой дополнительный тип услуги нужен?');
let servicePrice2 = +prompt('Сколько это будет стоить?');
// 8 пункт
let fullPrice;
// 9 пункт
let toIntermediary;//% отката посреднику
let servicePercentPrice;
let allServicePrices;

const showTypeOff = function (variable) {
    console.log(variable, typeof variable);
}


// к 4 уроку пункт 1

const getAllServicePrices = function (a, b) {
    return (a + b);
}


function getFullPrice(a, b) {
    return a + b;
}



function getServicePercentPrices(a, b) {
    return a - b;
}
//toIntermediary = fullPrice * (rollback / 100);

function getTitle(title) {
    
        title = title.trim();
        return title[0].toUpperCase() + title.slice(1).toLowerCase();
}


//10 пункт
const getRollbackMessage = function (price) {
    if (price > 30000) {
        return 'Даем скидку в 10%';
    } else if (price <= 30000 && price > 15000) {
        return 'Даем скидку в 5%';
    } else if (price <= 15000 && price >= 0) {
        return 'Скидка не предусмотрена';
    } else if (price < 0) {
        return 'Что то пошло не так'
    };
}

//Выводы в консоль и алерт
showTypeOff(title);
showTypeOff(screenPrice);
showTypeOff(adaptiv);
console.log(title = getTitle(title));
console.log(screens.toLowerCase().split(' ')); //toLowerCase - все буквы в нижнем регистре, .split - разбивает на массив строку//
console.log(allServicePrices = getAllServicePrices(servicePrice1, servicePrice2));
console.log(fullPrice = getFullPrice(screenPrice, allServicePrices));
console.log(servicePercentPrice = getServicePercentPrices(fullPrice, toIntermediary = fullPrice * (rollback / 100)));
console.log(getRollbackMessage(fullPrice));
console.log(toIntermediary);



/*Удалить, больше не нужно

console.log(toIntermediary);
console.log(allServicePrices);
console.log(typeof 'Calculator_JS');
console.log(typeof 65431385797865445654n);
console.log(typeof true);
console.log(screens.length); //показывает длинну строки
console.log('Стоимость вёрстки экранов ' + screenPrice + ' рублей/ долларов/гривен/юани');
console.log('Стоимость разработки сайта ' + fullPrice + ' рублей/ долларов/гривен/юани');
console.log(screens.toString());
console.log(fullPrice); // 8 пункт
console.log(Math.ceil(servicePercentPrice)); // 9 пункт
console.log('Процент отката посреднику за работу ' + toIntermediary + ' рублей');*/