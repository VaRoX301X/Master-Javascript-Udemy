'use strict'

/*
    pedir dos numeros y decir cual es mayor, menor o iguales
 */
var correcto = false;

do {
    var num1 = parseInt(prompt('Escribe un numero', 0));
    var num2 = parseInt(prompt('Escribe otro numero', 0));
    if (num1 <= 0 || num2 <= 0 || num1 == NaN || num2 == NaN) {
        alert('NUMEROS INCORRECTOS');
    } else {
        correcto = true;
        if (num1 > num2) {
            alert(num1 + '>' + num2);
        } else if (num1 < num2) {
            alert(num1 + '<' + num2);
        } else alert(num1 + '=' + num2);
    }
} while (!correcto);
