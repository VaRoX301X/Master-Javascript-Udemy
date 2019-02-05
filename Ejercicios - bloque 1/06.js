'use strict';

/*
que nos diga si un numero es par o impar
 */
var num1;
do {
    num1 = prompt('escribe un numero:');
    num1 = Number(num1);
} while (isNaN(num1));
if (num1%2 === 0){
    alert(num1 + ' es par');
} else alert(num1 + ' es impar');