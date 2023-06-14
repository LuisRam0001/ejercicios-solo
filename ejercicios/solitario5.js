

//Pide una nota (número). Muestra la calificación según la nota:
//
//0-3: Muy deficiente
//3-5: Insuficiente
//5-6: Suficiente
//6-7: Bien
//7-9: Notable
//9-10: Sobresaliente


let opcion;

do{
   let nota = Number(prompt('Digita una nota'));
if(nota > 0 && nota <= 3){
   
   alert('Muy deficiente');
}
else if(nota > 3 && nota <= 5) {
    alert('Insuficiente');
}
else if( nota > 5 && nota <= 6) {
    alert('Suficiente');
}
else if(nota > 6 && nota <= 7 ){
    alert('bien');
}
else if(nota >7 && nota <= 9 ){
   alert('notable');
}
else if( nota >= 9 ){
   alert('Sobresaliente');
}
      opcion=prompt('desea continuar s/n');
    
}

while( opcion === 's');    