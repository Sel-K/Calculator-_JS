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

const isNumber = function(num) {
    return num
}

const asking = function() {
    title = prompt('Как называется ваш проект?', 'Калькулятов верстки');
    screens = prompt('Какие типы экранов нужно разработать?', 'Simple, Complex, Interactive');

    while(isNaN(screenPrice) || screenPrice.trim() === '' || screenPrice === null) {
        screenPrice = prompt('Сколько будет стоить данная работа?');
    }

    adaptiv = confirm('Нужен ли адаптив на сайте?');
}


const showTypeOff = function (variable) {
    console.log(variable, typeof variable);
}



// к 4 уроку пункт 1
function getFullPrice(a, b) {
    return a + b;
}

const getAllServicePrices = function () {
    let sum = 0;

    for (let i = 0; i < 2; i++) {
        if (i === 0){
            service1 = prompt('Какой дополнительный тип услуги нужен?', 'Отправка форм');
        } else if (i === 1){
            service2 = prompt('Какой дополнительный тип услуги нужен?', 'Карта');
        }
        sum += +prompt('Сколько это будет стоить?');
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

asking();
title = getTitle(title);
allServicePrices = getAllServicePrices();
fullPrice = getFullPrice(screenPrice, allServicePrices);
servicePercentPrice = getServicePercentPrices(fullPrice, toIntermediary = fullPrice * (rollback / 100));


console.log(title = getTitle(title));
console.log(screens.toLowerCase().split(' '));
 //toLowerCase - все буквы в нижнем регистре, .split - разбивает на массив строку
console.log("allServicePrices", allServicePrices);
console.log(fullPrice);
console.log(servicePercentPrice);
console.log(getRollbackMessage(fullPrice));
console.log(toIntermediary);