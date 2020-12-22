"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("./user");
const album_1 = require("./album");
const picture_1 = require("./picture");
const photo_orientation_1 = require("./photo-orientation");
const user = new user_1.User(1, 'afelipelds', 'Andrés', true);
const album = new album_1.Album(10, 'Platzi pictures');
const album2 = new album_1.Album(20, 'My pictures');
const picture = new picture_1.Picture(100, 'foto en el bosque', '12/17/2020', photo_orientation_1.PhotoOrientation.Landscape);
//creando relaciones
user.addAlbum(album);
user.addAlbum(album2);
album.addPicture(picture);
album2.addPicture(picture);
console.log('user 1 exc -> ', user);
user.removeAlbum(album);
console.log('user 2 exc -> ', user);
