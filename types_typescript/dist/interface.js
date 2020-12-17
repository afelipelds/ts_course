"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscape"] = 0] = "Landscape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["Square"] = 2] = "Square";
    PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama";
})(PhotoOrientation || (PhotoOrientation = {}));
;
var makePictures = function (picture) {
    console.log('makePictures -> ', { picture: picture });
};
var myObjPicture = { title: 'Andrés', date: '10-07-2020' /* , orientation: PhotoOrientation.Square */ };
makePictures(myObjPicture);
function GeneratePicture(config) {
    var pic = { title: 'Default', date: '2020-12' };
    if (config.title) {
        pic.title = config.title;
    }
    if (config.date) {
        pic.date = config.date;
    }
    return pic;
}
var picture = GeneratePicture({ title: 'Trebol' });
console.log('picture -> ', picture);
var user;
user = { name: 'Andrés', age: 27, isPro: true };
// user.name = 'Felipe'; // This will not change the object, so is the reason for readonly
/** Error: (property) User.name?: string | undefined
  * Cannot assign to 'name' because it is a read-only property.
  *
  */ 
