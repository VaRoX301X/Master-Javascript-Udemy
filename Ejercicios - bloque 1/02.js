'use strict';

/*
usando un bucle, mostrar la suma y la media de los numeros introducidos
 hasta introducir un numero negativo y ahi mostrar el resultado
 */

var suma = 0;
var media = 0;
var contador = 0;
var introducido = 0;
do {
    do {
        introducido = prompt('escribe un numero:');
        introducido = Number(introducido);
        alert(introducido);
    } while ((isNaN(introducido)));
    if (introducido >= 0){
        suma += introducido;
        contador++;
    } else {
        //calculo de la media
        media = suma/contador;
        alert('La suma total es:' + suma + ' \nLa media es: ' + media);
    }


} while (introducido>=0);