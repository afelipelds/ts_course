"use strict";
/***** Explícito */
var phone; // tipo de dato number
var myNumber = 321654987; // tipo de dato number pero hexadecimal
var isUserPro; // tipo de dato boolean
var user; // tipo de dato string
var id; // tipo de dato que puede tomar cualquier tipo (comunmente usado en retorno de funciones)
phone = 2345678;
phone = 2;
isUserPro = false;
// phone = "un número" // NO funcionará debido a que se declaro como number, arroja un error
/***** Inferido */
var phoneNumber = "esto es un número"; // tipo de dato string
var userPro = true;
/***** Data types */
// Number
var hex = 0x34b1; // tipo de dato number pero hexadecimal
var binary = 9; // tipo de dato number pero binario
var octal = 309; // tipo de dato number pero octal
octal = 220;
//Boolean
var isPro; // Tipo Boolean
isPro = true;
isPro = false;
// isPro = 21 // no funcionará por la declaración hecha anteriormente
//String
var myString = "this is my new string";
var myUser = "afelipelds";
var templateString = "This is a template string (fromES6). I can put inside:\n                                userName: " + myUser + "\n                                userPro: " + isPro + "\n                                number: " + myNumber + "\n                             ";
// console.log('templateString ', templateString)
//Any
var idUser;
idUser = 12;
/* . . . */
idUser = "this value changed";
idUser = true;
idUser = [1, 2, 3];
var surprise = "hello typescript";
// surprise.sayHello(); // output -> TypeError: surprise.sayHello is not a function
var res = surprise.substring(6); // output: typescript - Error si la línea anterior se ejecuta
// console.log('res', res)
/** Tipo explícito: any */
function showInfo(user) {
    "------------------------------   :      --------------\n  declaraci\u00F3n de la funci\u00F3n   declaraci\u00F3n  tipo de dato \n                               postfija  \n";
    // console.log(`User info: , ${user.id}, ${user.username}, ${user.firstName}`);
}
showInfo({ id: 123, username: "afelipelds", firstName: "Andrés" });
/** Tipo inferido: any */
function showFormattedInfo(user) {
    /* console.log('showFormattedInfo', `
          userId: ${user.userId},
          userName: ${user.userName},
          userFirstName: ${user.userFirstName}
      `) */
}
showFormattedInfo({ userId: 345, userName: "jaya", userFirstName: "Andrés" });
// Void
var unusable;
// unusable = null;  // en 'strict mode' no será posible definir `unusable = null` , puesto que null no representa un valor para void;
unusable = undefined;
// null y undefined son un subtipo de valores dle tipo void
//Never
function handleError(code, message) {
    // process code
    // return message
    throw new Error(message + ". Code: " + code);
}
try {
    handleError(404, "Not found");
}
catch (error) {
    // console.log(`este es el error -> ${error}`)
}
// descomentar para probar
/* function sumNumber(limit: number) {
    let sum = 0;
    while(true) {
        sum ++;
    }
    return sum
    //  Esto nunca va a ocurrir! pues es un ciclo infinito, el valor de sum jamás de va a retornar
}
sumNumber(10); } */
//Null
var nullVar;
nullVar = null;
// nullVar = 'hola';
// console.log('null vars -> ', nullVar)
//Undefined
var undfVar;
undfVar = undefined;
// undfVar = 234
// console.log('undefined vars -> ', undfVar)
//- De las maneras más practicas de solucionar problemas de valores null y undefined es con la opción de configuración --strictNullChecks y ayuda a evitar errores comunes en programación en el ámbito de Javascript
// Se deben evitar los valores de Undefined y Null - por el contrario se puede usar el flag `--strictNullChecks` en la línea de comandos o en el archivo tsconfig.json
// --strictNullChecks
//Object
/***
 * Object (JS) vs object (TS)
 * - Object (JS): Instancia de la clase Object de JS
 * - object (TS): tipo para valores no primitivos -> Este tipo de dato no puede acceder a las propiedades del objeto
 */
/** Objects on TS */
var myObjectTS;
myObjectTS = {};
myObjectTS = {
    id: 1,
    name: "Andrés Eslava",
    username: "afelipelds",
    isPro: true,
};
// console.log('myObject en Typescript-> ', myObject) // tipo opbjeto de TS
/** Objects on JS */
var myObjectJS = {
    id: 1,
    name: "Andrés Eslava",
    username: "afelipelds",
    isPro: true,
};
var isInstanceOfJS = myObjectJS instanceof Object;
var isInstanceOfTS = myObjectTS instanceof Object;
// console.log('Instancia de un Objeto TS ? -> ',isInstanceOfTS); // Arroja true, porque persiste en ser un objeto, solo que no es primitivo
// console.log('Instancia de un Objeto JS ? -> ',isInstanceOfJS); // Arroja true, porque es un Objeto instancia de Js ( con valores primitivos de JS )
//Array ( [] - Array<type>)
//Tipo Explícito: []
var myFirstArray; // Se especifica que el tipo del arreglo contiene strings - Únicamente contiene Strings
myFirstArray = ["Andrés", "Jhon", "Iván", "Santo"];
// myFirstArray = [123, false, 'indicator'] // Error
//Tipo Inferido: []
var mySecondArray = [123, false, "indicator"];
mySecondArray = [true, "compulsive", 23];
mySecondArray = ["myString", false, 456];
// En los tipos inferidos de los arrays, la forma estructural de como se declara define los tipos
// que puede tener dentro el arreglo, en este caso es ( string | number | boolean ) y no importa el orden
// solo debe cumplir con que existan esos tres tipos de datos dentro del Array. Sino, arrojará Error
//Tipo Explícito: Array<TYPE>
var myNumbers;
myNumbers = [12, 34, 56];
// console.log('valores del arreglo myNumbers -> ', myNumbers[2])
// console.log('valores del arreglo myfirstArray -> ', myFirstArray[0])
mySecondArray.pop();
mySecondArray.unshift(678);
// console.log('valores del arreglo mySecondArray -> ', mySecondArray)
myFirstArray.sort();
// console.log('valores del arreglo myFirstArray -> ', myFirstArray)
//Tuple
// Es demasiado parecido a un Array y concretamente es un registro de datos, que pueden ser una estructura, una función, una variable, una constante
// Y dependiendo del tipo de datos que se encuentre en el registro de la tupla, se puede ejecutar métodos para el tipo de valor.
var userOfMine;
userOfMine = [3, "rosita"];
/* console.log(
    'substract of the string -> ', userOfMine[1].substr(3, 3), // Ejecuta los métodos del tipo de valor, en este caso un string
    'substract of the string -> ', userOfMine[0]  // Ejecuta métodos de los tipos de valor number
); */
//Múltiples tuplas explícitas
var tuples = [
    [1, "jhonsi", true],
    [2, "afelipelds", false],
    [4, "ivy", false],
];
tuples[2][1] = tuples[2][1].concat(" fullstack");
// console.log(tuples);
//ENUM
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscape"] = 0] = "Landscape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["Square"] = 2] = "Square";
    PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama";
})(PhotoOrientation || (PhotoOrientation = {}));
var myFirstScreen = PhotoOrientation.Square;
var mySecondScreen = PhotoOrientation["Panorama"];
var myThirdScreen = PhotoOrientation["Portrait"];
var myFourthScreen = PhotoOrientation.Landscape;
myFourthScreen = 4;
console.log(PhotoOrientation);
var Movement;
(function (Movement) {
    Movement[Movement["UP"] = 1] = "UP";
    Movement[Movement["DOWN"] = 2] = "DOWN";
    Movement[Movement["LEFT"] = 3] = "LEFT";
    Movement[Movement["RIGHT"] = 4] = "RIGHT";
})(Movement || (Movement = {}));
var sendMovement = function (movement) {
    console.log(movement);
};
sendMovement(Movement.UP);
sendMovement(Movement.RIGHT);
sendMovement(Movement.DOWN);
sendMovement(Movement.LEFT);
