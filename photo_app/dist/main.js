"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var photo_app_1 = require("./photo-app");
var user = new photo_app_1.User(1, 'afelipelds', 'Andrés', true);
var album = new photo_app_1.Album(10, 'Platzi pictures');
var picture = new photo_app_1.Picture(100, 'foto en el bosque', '12/17/2020', photo_app_1.PhotoOrientation.Landscape);
//creando relaciones
user.addAlbum(album);
album.addPicture(picture);
console.log('user -> ', user);
