// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
    return array[0]
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array[array.length-1]
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  var SumaDeArray = [];
  for(var i = 0; i < array.length; i ++) {
  SumaDeArray[i] = array[i] + 1;
  }
  return SumaDeArray;
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  return array;
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array;
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  return palabras.join(` `);
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  for(var i = 0; i < array.length; i ++){
    if(array[i] === elemento){
    return true;
    }
  }
  return false;
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var suma = 0                                // creamos una variable que tiene valor 0
  for(var i = 0; i < numeros.length; i++){    // creamos un ciclo for para que recorra toda la array
    suma =  numeros[i] + suma                 // invocamos la variable suma y luego le sumamos los elementos del array que quedara en el scope local con el valor asignado mientras el for recorre el array se ira sumando 
  }
  return suma                                 // luego retornamos la variable suma que gracias al ciclo for y se sumo elemento por elemento en la variable
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var MiPromedio = 0                                   // creamos la variable donde almacenaremos nuestro valor
  for(var i = 0; i < resultadosTest.length; i ++){     // creamos un ciclo for para recorrer el array asi invocar a todos los elementos
    MiPromedio = MiPromedio + resultadosTest[i]        // usamos nuestra variable para sumar nuestros elementos del array 
  }
 return MiPromedio / resultadosTest.length;            // retornamos nuestra variable con todos los elementos sumados y lo dividimos por la cantidad de elementos que tiene nuestro array
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  var numeroMasGrande = numeros[0]
  for(var i = 0; i < numeros.length; i ++){
    if(numeroMasGrande < numeros[i]){
      numeroMasGrande = numeros[i]
    }
  }
  return numeroMasGrande
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  if(arguments.length < 1){
    return 0
  }
  var resultado = 1
  for(var i = 0; i < arguments.length; i ++){
    resultado = resultado * arguments[i]
  }
  return resultado
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  var mayorque = 18
  var ArrayConMayores = []
  for(var i = 0; i < arreglo.length; i ++){
    if(arreglo[i] > mayorque){
      ArrayConMayores.push(arreglo[i])
    }
  }
  return ArrayConMayores.length
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí:
    if(numeroDeDia === 1 || numeroDeDia === 7){
      return `Es fin de semana`
    }
  return `Es dia Laboral`
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aqui:
  let num = n.toString()
  if(num.charAt(0) === `9`){
    return true
  }
  return false
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí 
  var Igualdad = arreglo[0]
  for(var i = 0; i < arreglo.length; i++){
    if(Igualdad !== arreglo[i]){
    return false
    }
  }
  return true 
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  var MisMeses = [];
  for(let i = 0; i<array.length; i++){
    if(array[i] === `Enero` || array[i] === `Marzo` || array[i] === `Noviembre` ){
    MisMeses.push(array[i])
    }
  }
  if(MisMeses.length < 3){
    return `No se encontraron los meses pedidos`
  }
  else {
  return MisMeses;
  }
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  var MayoresQueCien = []
    for(var i = 0; i<array.length; i++){
      if(array[i] > 100){
        MayoresQueCien.push(array[i])
      }
    }
    return MayoresQueCien
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  var array = []                      //primero creamos una variable array donde almacenaremos nuestras sumas +2
  var suma2 = numero                  // esta sera nuestra variable numero donde almacenaremos al numero + 2
  for(var i = 0; i<10; i++){          // creamos un ciclo for para usar los numeros de la array.numeros con la condicion que pare en 10
    suma2 = suma2 + 2                 // sumamos +2 nuestra variable donde almacenaremos el resultado
    if(suma2 === i) break;           
    else {
      array.push(suma2);
    }
  } 
  if(i<10){
    return `Se interrumpió la ejecución`
  }
  else {
    return array
  }
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  var array = []                      
  var suma2 = numero                 
  for(var i = 0; i<10; i++){                     
    if(i === 5) continue;           
    else {
      suma2 = suma2 + 2;
      array.push(suma2);
    }
  }
  return array
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
