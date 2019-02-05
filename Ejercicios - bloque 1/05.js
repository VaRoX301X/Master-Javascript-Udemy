'use strict';

/*
muestra todos los numeros divisores de un numero prompt
 */

var num1;
var resultado = '';
do {
    num1 = prompt('escribe un numero:');
    num1 = Number(num1);
} while (isNaN(num1));
for (var i = 1; i<=num1; i++){
    if (num1%i===0){
        resultado = resultado + ' ' + i;
    }
}
alert('Los divisores de ' + num1 + ' son:' + resultado);