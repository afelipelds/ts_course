export {}

/********** Union Types */
let idUser: number | string;
idUser = 100;
idUser = '200';

function getUserById(id: number | string) {
    console.log(`Obteniendo el ID del usuario con unión de tipos. El usuario es ${id}`);
}
getUserById(idUser);

////////////////////////////////////////////////////////////
/** Alias Types: Typescript */
type IdUser= number | string; /* Esto evita la redundacia ocurrida en las líneas 4 & 9, 
                               * al declarar idUser y el parámetro que se envía a getUserById. 
                              */
type Username = string;

//////////// Redeclarando, las cosas serían así : 
let idOfUser: IdUser;
idOfUser = 3;
const gettingUserById: any = (id:IdUser) => {
    console.log(`Obteniendo el usuario por ID con Alias. El usuario es: ${id}`)
}
gettingUserById(idOfUser);


/** Literal Types */
// Se define que las imágenes para un app 
// solamente puden tener tamaños de
// 100x100 | 500x500 | 1000x1000

type SquareSize = '100x100' | '500x500' | '1000x1000';

// let smallPictuare: SquareSize = '300x300'; // Error
let smallPictuare: SquareSize = '100x100';
let mediumPictuare: SquareSize = '500x500';
let HighPictuare: SquareSize = '1000x1000';


type PicturesSizes = '50x50' | '300x300' | '500x500' | '1024x1024' | '3000x3000';
enum PicturesRelations {
    small = '75x75',
    medium = '240x180',
    large = '500x375',
    extraLarge = '1024x768',
    superLarge = '3072x2304'
};

/** SQUARE PICTUARES SIZES*/
const smallSquarePic: PicturesSizes = '50x50';
const mediumSquarePic: PicturesSizes = '300x300';
const largeSquarePic: PicturesSizes = '500x500';
const extraLargeSquarePic: PicturesSizes = '1024x1024';
const superLargeSquarePic: PicturesSizes = '3000x3000';

/** STANDARD PICTURES SIZES */
const smallPicture: PicturesRelations = PicturesRelations['small'];
const mediumPicture: PicturesRelations = PicturesRelations['medium'];
const largePicture: PicturesRelations = PicturesRelations['large'];
const extraLargePicture: PicturesRelations = PicturesRelations['extraLarge'];
const superLargePicture: PicturesRelations = PicturesRelations['superLarge'];

console.log(PicturesRelations);