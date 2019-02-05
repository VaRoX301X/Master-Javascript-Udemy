'use strict';

/*
pide dos numeros y muestra todos los numeros entre esos dos
 */
var num1;
var num2;
var resultado = '';
var correcto = false;
do{
    do {
        num1 = prompt('escribe un numero(1):');
        num1 = Number(num1);
        num2 = prompt('escribe un numero(2):');
        num2 = Number(num2);
    } while ((isNaN(num1)) || (isNaN(num2)));
    if (num1 < num2){
        correcto = true;
        for (num1; num1<=num2; num1++){
            resultado = resultado + ' ' + num1;
        }
    } else alert("El primer numero debe ser menor");
} while (!correcto);
alert(resultado);



