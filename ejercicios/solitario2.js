// multiplicar 7 numeros y luego decir si es par o impar

let multiplicar = 1;

for( let i = 0; i <= 7; i++){
    
    let infoNumero = Number(prompt('Digita un numero'));

    multiplicar = multiplicar * infoNumero;

}

console.log(multiplicar);

if( multiplicar % 2 === 0){
    console.log('Es par');

}
else{console.log('No es par')}
