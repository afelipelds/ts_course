export {}

enum PhotoOrientation {
    Landscape,
    Portrait,
    Square,
    Panorama,
};
//superclase
abstract class Item {
    protected readonly _id: number;
    protected _title: string;

    constructor(id: number, title: string) {
        this._id = id;
        this._title = title;
    }

    get id() { return this._id }
    // set id(id: number) {this._id = id} // La definición de _id es inservible.
    
    get title() { return this._title }
    set title(t: string) {this._title = t}
}
// clase picture
class Picture extends Item {
    public static photoOrientation = PhotoOrientation;
    private _orientation: PhotoOrientation;
    public constructor( id: number, title: string, orientation: PhotoOrientation ) {
        super(id, title);
        this._orientation = orientation;
    }

    private toString() {
        return `[id: ${this._id}, title: ${this._title}, orientation: ${this._orientation}]`
    }
}
// clase album
class Album extends Item{
    private _pictures: Picture[];

    public constructor( id: number, title: string ) {
        super(id, title);
        this._pictures = [];
    }

    get picture() { return this._pictures }
    set picture(pic:Picture[]) {this._pictures = pic}

    public addPicture(picture: Picture) {
        this._pictures.push(picture);
    }
}

let album: Album = new Album(100, 'Photos of mine');
const newPic: Picture = new Picture(2, 'my new pic!', PhotoOrientation.Panorama);
const new2Pic: Picture = new Picture(3, 'my 2nd new pic!', PhotoOrientation.Portrait);
const new3Pic: Picture = new Picture(4, 'my 3rd new pic!', PhotoOrientation.Portrait);

// Primer estado del álbum
console.log('album inicial-> ', album);

//cambiar id de álbum ó fotos
/* new2Pic.id = 300;   Se hacen inútiles debido
new3Pic.id = 400;      a la propiedad de readonly   */

//cambiar titulo de álbum
album.title = 'Mi nuevo álbum de fotos !';

//agregar más fotos a mi álbum
album.addPicture(newPic);
album.addPicture(new2Pic);
album.addPicture(new3Pic); 
console.log('album modificado -> ', album);

// const item = new Item(1, 'Test Title'); // Realmente no tiene sentido usar ésto,
// console.log('item', item)               // pues Item es muuy general.

console.log('PhotoOrientation', PhotoOrientation);