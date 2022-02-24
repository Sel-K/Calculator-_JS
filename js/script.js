'use strict';

let title;
let screens;
let screenPrice;
let adaptiv;
let rollback = 77;
let allServicePrices;
let fullPrice;
let toIntermediary;//% отката посреднику
let servicePercentPrice;
let service1;
let service2;

const showTypeOff = function (variable) {
    console.log(variable, typeof variable);
}

const isNumber = function (num) {
    return !isNaN(parseFloat(num) && isFinite(num));
}

const asking = function () {
    title = prompt('Как называется ваш проект?', 'Калькулятов верстки');
    screens = prompt('Какие типы экранов нужно разработать?', 'Simple, Complex, Interactive');

    do {
        screenPrice = +prompt('Сколько будет стоить данная работа?');
    } while (!isNumber(screenPrice));

    /*
        while(!isNumber(screenPrice)) {
            screenPrice = prompt('Сколько будет стоить данная работа?');
        }*/

    adaptiv = confirm('Нужен ли адаптив на сайте?');
}


function getFullPrice(a, b) {
    return a + b;
}

const getAllServicePrices = function () {
    let sum = 0;

    for (let i = 0; i < 2; i++) {
        let sum1 = 0;
        if (i === 0) {
            service1 = prompt('Какой дополнительный тип услуги нужен?', 'Отправка форм');
        } else if (i === 1) {
            service2 = prompt('Какой дополнительный тип услуги нужен?', 'Карта');
        }
        do {
            sum1 = +prompt('Сколько это будет стоить?');
        } while (!isNumber(sum1));

        sum += +sum1;
    }
    return sum;
}

function getServicePercentPrices(a, b) {
    return a - b;
}

function getTitle(title) {

    title = title.trim();
    return title[0].toUpperCase() + title.slice(1).toLowerCase();
}

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

asking();
title = getTitle(title);
allServicePrices = getAllServicePrices();
fullPrice = getFullPrice(screenPrice, allServicePrices);
servicePercentPrice = getServicePercentPrices(fullPrice, toIntermediary = fullPrice * (rollback / 100));

showTypeOff(title);
showTypeOff(screenPrice);
showTypeOff(adaptiv);

console.log(title = getTitle(title));

console.log(screens.toLowerCase().split(' '));
//toLowerCase - все буквы в нижнем регистре, .split - разбивает на массив строку
console.log('allServicePrices', allServicePrices);
console.log('fullPrice', fullPrice);
console.log('servicePercentPrice', servicePercentPrice);
console.log(getRollbackMessage(fullPrice));
console.log(toIntermediary);