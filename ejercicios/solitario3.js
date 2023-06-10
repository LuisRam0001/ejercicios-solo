

//Escribe un programa que le pida al usuario ingresar un número.
//
//Si el número es múltiplo de 3 debe imprimir en la consola ping.
//Si el número es múltiplo de 5 debe imprimir en la consola pong.
//Si el número es múltiplo tanto de 3 como de 5 debe imprimir en la consola pingpong.
//Si no cumple ninguna de las condiciones anteriores debe imprimir el mismo número.



let numero = Number(prompt('Ingrese un numero'));

if(numero % 3 === 0 && numero % 5 === 0){
    console.log('Pingpong');
}

else if( numero % 3 === 0){
    console.log('Ping')
}

else if (numero % 5 === 0){
    console.log('pong')
}

else{
    console.log(numero)
}




