let title = 'Calculator_JS';
let screens = 'Simple, Complex, Interactive';
let screenPrice = 13;
let rollback = 77;
let fullPrice = 65431385797865445654n;
let adaptive = true;

console.log(typeof 'Calculator_JS');
console.log(typeof 65431385797865445654n);
console.log(typeof true);
console.log(screens.length); //показывает длинну строки
console.log('Стоимость вёрстки экранов ' + screenPrice + ' рублей/ долларов/гривен/юани');
console.log('Стоимость разработки сайта ' + fullPrice + ' рублей/ долларов/гривен/юани');
console.log(screens.toLowerCase().split(' ')); //toLowerCase - все буквы в нижнем регистре, .split - разбивает на массив строку//
console.log('Процент отката посреднику за работу ' + Number(fullPrice) * (rollback/100)); //сначала приводим в одинаковое значение обычное число(rollback) и bigInt(fullPrice) с помощью Number

alert('Hello, my JS!');

let a = 'GitBash ';
let b = 'is killing me!';
console.log(a + b);