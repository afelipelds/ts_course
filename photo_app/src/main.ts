import { User } from './user';
import { Album } from './album';
import { Picture } from './picture';
import { PhotoOrientation }  from './photo-orientation';

const user = new User(1, 'afelipelds', 'Andrés', true);
const album = new Album(10, 'Platzi pictures');
const album2 = new Album(20, 'My pictures');

const picture = new Picture(100, 'foto en el bosque', '12/17/2020', PhotoOrientation.Landscape);

//creando relaciones
user.addAlbum(album);
user.addAlbum(album2);
album.addPicture(picture);
album2.addPicture(picture);

console.log('user 1 exc -> ', user);

user.removeAlbum(album);

console.log('user 2 exc -> ', user);
