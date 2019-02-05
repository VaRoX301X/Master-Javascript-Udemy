'use strict';

/*
    calculadora, pide dos numeros por pantalla y muestra el resultado de sumar, restar, multiplicar y dividir
 */
var num1;
var num2;
var resultado = '';

do {
    num1 = prompt('escribe un numero(1):');
    num1 = Number(num1);
    num2 = prompt('escribe un numero(2):');
    num2 = Number(num2);
} while ((isNaN(num1)) || (isNaN(num2)));
resultado = resultado + 'Calculadora de ' + num1 + ' y ' + num2;
resultado = resultado + '\nSuma: ' + (num1 + num2);
resultado = resultado + '\nResta: ' + (num1 - num2);
resultado = resultado + '\nMultiplicacion: ' + (num1 * num2);
resultado = resultado + '\nDivision: ' + (num1 / num2);
alert(resultado);