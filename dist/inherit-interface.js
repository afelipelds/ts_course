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
var album = {
    id: 1,
    title: 'Meetups',
    description: 'Community events around the world'
};
var picture = {
    id: 2,
    title: 'Family',
    orientation: PhotoOrientation.Landscape
};
var newPicture = {};
newPicture.id = 3;
newPicture.title = 'titleOfPicture';
console.log('album', album);
console.log('picture', picture);
console.log('newPicture', newPicture);
