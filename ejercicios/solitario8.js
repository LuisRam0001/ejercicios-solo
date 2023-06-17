//Problema:
//Escribe un programa que calcule el factorial de un número dado. El factorial de un número entero positivo n se define como el producto de todos los números enteros positivos desde 1 hasta n.
//Por ejemplo, el factorial de 5 (representado como 5!) se calcula como: 5 x 4 x 3 x 2 x 1 = 120.
//Tu objetivo es escribir un programa que tome un número entero positivo como entrada y muestre el factorial correspondiente.
//Recuerda que puedes utilizar un bucle for para iterar desde 1 hasta el número dado, acumulando el producto en una variable.
//¡Buena suerte resolviendo el problema!




let numero = Number(prompt('Ingresa un numero'));
let factorial = 1;

for( let i = 1; i <= numero; i++){
    factorial *= i
}
console.log(factorial);

