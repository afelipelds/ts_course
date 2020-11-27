/***** Explícito */
let phone: number; // tipo de dato number
let myNumber: number = 321654987; // tipo de dato number pero hexadecimal
let isUserPro: boolean; // tipo de dato boolean
let user: string; // tipo de dato string
let id: any; // tipo de dato que puede tomar cualquier tipo (comunmente usado en retorno de funciones)

phone = 2345678;
phone = 2;
isUserPro = false;
// phone = "un número" // NO funcionará debido a que se declaro como number, arroja un error

/***** Inferido */
let phoneNumber = "esto es un número"; // tipo de dato string
let userPro = true;

/***** Data types */

// Number
let hex: Number = 0x34b1; // tipo de dato number pero hexadecimal
let binary: Number = 0b1001; // tipo de dato number pero binario
let octal: Number = 0o465; // tipo de dato number pero octal

octal = 0o334;

//Boolean
let isPro: Boolean; // Tipo Boolean
isPro = true;
isPro = false;
// isPro = 21 // no funcionará por la declaración hecha anteriormente

//String
let myString: String = "this is my new string";
let myUser: String = "afelipelds";
let templateString: String = `This is a template string (fromES6). I can put inside:
                                userName: ${myUser}
                                userPro: ${isPro}
                                number: ${myNumber}
                             `;
// console.log('templateString ', templateString)

//Any
let idUser: any;
idUser = 12;
/* . . . */
idUser = "this value changed";
idUser = true;
idUser = [1, 2, 3];

let surprise: any = "hello typescript";
// surprise.sayHello(); // output -> TypeError: surprise.sayHello is not a function
const res = surprise.substring(6); // output: typescript - Error si la línea anterior se ejecuta
// console.log('res', res)

/** Tipo explícito: any */
function showInfo(user: any): any {
  `------------------------------   :      --------------
  declaración de la función   declaración  tipo de dato 
                               postfija  
`;
  // console.log(`User info: , ${user.id}, ${user.username}, ${user.firstName}`);
}
showInfo({ id: 123, username: "afelipelds", firstName: "Andrés" });

/** Tipo inferido: any */
function showFormattedInfo(user: any) {
  /* console.log('showFormattedInfo', `
        userId: ${user.userId},
        userName: ${user.userName},
        userFirstName: ${user.userFirstName}
    `) */
}
showFormattedInfo({ userId: 345, userName: "jaya", userFirstName: "Andrés" });

// Void
let unusable: void;
// unusable = null;  // en 'strict mode' no será posible definir `unusable = null` , puesto que null no representa un valor para void;
unusable = undefined;
// null y undefined son un subtipo de valores dle tipo void

//Never
function handleError(code: number, message: string): never {
  // process code

  // return message
  throw new Error(`${message}. Code: ${code}`);
}

try {
  handleError(404, "Not found");
} catch (error) {
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
let nullVar: null;
nullVar = null;
// nullVar = 'hola';
// console.log('null vars -> ', nullVar)

//Undefined
let undfVar: undefined;
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
let myObjectTS: object;
myObjectTS = {};
myObjectTS = {
  id: 1,
  name: "Andrés Eslava",
  username: "afelipelds",
  isPro: true,
};
// console.log('myObject en Typescript-> ', myObject) // tipo opbjeto de TS

/** Objects on JS */
const myObjectJS = {
  id: 1,
  name: "Andrés Eslava",
  username: "afelipelds",
  isPro: true,
};

const isInstanceOfJS: boolean = myObjectJS instanceof Object;
const isInstanceOfTS: boolean = myObjectTS instanceof Object;
// console.log('Instancia de un Objeto TS ? -> ',isInstanceOfTS); // Arroja true, porque persiste en ser un objeto, solo que no es primitivo
// console.log('Instancia de un Objeto JS ? -> ',isInstanceOfJS); // Arroja true, porque es un Objeto instancia de Js ( con valores primitivos de JS )

//Array ( [] - Array<type>)

//Tipo Explícito: []
let myFirstArray: string[]; // Se especifica que el tipo del arreglo contiene strings - Únicamente contiene Strings
myFirstArray = ["Andrés", "Jhon", "Iván", "Santo"];
// myFirstArray = [123, false, 'indicator'] // Error

//Tipo Inferido: []
let mySecondArray = [123, false, "indicator"];
mySecondArray = [true, "compulsive", 23];
mySecondArray = ["myString", false, 456];
// En los tipos inferidos de los arrays, la forma estructural de como se declara define los tipos
// que puede tener dentro el arreglo, en este caso es ( string | number | boolean ) y no importa el orden
// solo debe cumplir con que existan esos tres tipos de datos dentro del Array. Sino, arrojará Error

//Tipo Explícito: Array<TYPE>
let myNumbers: Array<number>;
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
let userOfMine: [number, string];
userOfMine = [3, "rosita"];

/* console.log(
    'substract of the string -> ', userOfMine[1].substr(3, 3), // Ejecuta los métodos del tipo de valor, en este caso un string 
    'substract of the string -> ', userOfMine[0]  // Ejecuta métodos de los tipos de valor number
); */

//Múltiples tuplas explícitas
let tuples: Array<[number, string, boolean]> = [
  [1, "jhonsi", true],
  [2, "afelipelds", false],
  [4, "ivy", false],
];

tuples[2][1] = tuples[2][1].concat(" fullstack");

// console.log(tuples);

//ENUM
enum PhotoOrientation {
  Landscape,
  Portrait,
  Square,
  Panorama,
}

let myFirstScreen: PhotoOrientation = PhotoOrientation.Square;
let mySecondScreen: PhotoOrientation = PhotoOrientation["Panorama"];
let myThirdScreen: PhotoOrientation = PhotoOrientation["Portrait"];
let myFourthScreen = PhotoOrientation.Landscape;
myFourthScreen = 4;

console.log(
  PhotoOrientation
);


enum Movement {	
    UP = 1,	
    DOWN = 2,	
    LEFT = 3, 	
    RIGHT = 4,	
}	

const sendMovement = function( movement: number ) {	
    console.log(movement)
}	

sendMovement(Movement.UP)
sendMovement(Movement.RIGHT)
sendMovement(Movement.DOWN)
sendMovement(Movement.LEFT)