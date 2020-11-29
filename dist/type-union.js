"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/********** Union Types */
var idUser;
idUser = 100;
idUser = '200';
function getUserById(id) {
    console.log("Obteniendo el ID del usuario con uni\u00F3n de tipos. El usuario es " + id);
}
getUserById(idUser);
//////////// Redeclarando, las cosas serían así : 
var idOfUser;
idOfUser = 'true';
function gettingUserById(id) {
    console.log("Obteniendo el usuario por ID con Alias. El usuario es: " + id);
}
gettingUserById(idOfUser);
// let smallPictuare: SquareSize = '300x300'; // Error
var smallPictuare = '100x100';
var mediumPictuare = '500x500';
var HighPictuare = '1000x1000';
var PicturesRelations;
(function (PicturesRelations) {
    PicturesRelations["small"] = "75x75";
    PicturesRelations["medium"] = "240x180";
    PicturesRelations["large"] = "500x375";
    PicturesRelations["extraLarge"] = "1024x768";
    PicturesRelations["superLarge"] = "3072x2304";
})(PicturesRelations || (PicturesRelations = {}));
;
/** SQUARE PICTUARES SIZES*/
var smallSquarePic = '50x50';
var mediumSquarePic = '300x300';
var largeSquarePic = '500x500';
var extraLargeSquarePic = '1024x1024';
var superLargeSquarePic = '3000x3000';
/** STANDARD PICTURES SIZES */
var smallPicture = PicturesRelations['small'];
var mediumPicture = PicturesRelations['medium'];
var largePicture = PicturesRelations['large'];
var extraLargePicture = PicturesRelations['extraLarge'];
var superLargePicture = PicturesRelations['superLarge'];
console.log(PicturesRelations);
