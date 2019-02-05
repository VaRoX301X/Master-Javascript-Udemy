'use strict';

/*
tabla de multiplicar de un numero introducido por pantalla
 */
var num1;
var resultado = '';
do {
    num1 = prompt('Tabla de multiplicar del numero:');
    num1 = Number(num1);
} while (isNaN(num1));
resultado = 'Tabla de multiplicar del ' + num1;
for (var i = 0; i<=10; i++){
    resultado = resultado + '\n' + num1 + 'x' + i + ': ' + (num1*i);
}
alert(resultado);