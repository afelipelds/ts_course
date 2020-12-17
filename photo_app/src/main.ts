import { User, Album, Picture, PhotoOrientation } from './photo-app';

const user = new User(1, 'afelipelds', 'Andrés', true);
const album = new Album(10, 'Platzi pictures');
const picture = new Picture(100, 'foto en el bosque', '12/17/2020', PhotoOrientation.Landscape);

//creando relaciones
user.addAlbum(album);
album.addPicture(picture);

console.log('user -> ', user);
