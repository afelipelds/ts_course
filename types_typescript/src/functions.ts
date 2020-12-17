// Crear una fotografía
type SquareSize = '100x100' | '500x500' | '1000x1000';

function createPicture(title: string, date: string, size: SquareSize) {
    console.log('creating picture ... result: ',title, date, size);
}
createPicture('MyPhoto','02-12-2020','500x500');


//Parámetros opcionales en funciones
function takePicture(title?: string, date?: string, size?: SquareSize) {
    console.log('creating picture ... result: ',title, date, size);
}
takePicture('newPost','03-12-2020', '500x500');
takePicture('newPost','03-12-2020');
takePicture('newPost','100x100');
takePicture('newPost');


//Flat Array Functions
let createPic = (title: string, date: string, size: SquareSize): object => {
    return {
        title,
        date,
        size
    };
}

let picture = createPic('Platzi session', '10-03-2020', '1000x1000');
console.log('picture ', picture);


/// CASES OF USE
function handleErrors(code: number, message: string): never | string {
    if(message === 'error') {
        throw new Error(`${message} - Code error: ${code}`);
    } else {
        return 'An error has occur.';
    }
}

// for solutions
try {
    let result = handleErrors(200, 'OK'); // return String
    console.log('result 1 -> ', result);
    result = handleErrors(404, 'error') // return Never
    console.log('result 2 -> ', result);
} catch (error) { }