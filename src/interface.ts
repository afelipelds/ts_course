export {}

enum PhotoOrientation {
    Landscape,
    Portrait,
    Square,
    Panorama,
};

interface Picture {
    title: string,
    date: string,
    orientation?: PhotoOrientation
}

let makePictures = (picture: Picture) => {
    console.log('makePictures -> ', { picture });
};
let myObjPicture = { title: 'Andrés', date:'10-07-2020'/* , orientation: PhotoOrientation.Square */ };

makePictures(myObjPicture); 


/** Interfaces: properties */
interface PictureConfig {
    title?: string;
    date?: string;
    orientation?: PhotoOrientation
}

function GeneratePicture(config: PictureConfig) {
    const pic = {title: 'Default', date:'2020-12' }
    if(config.title) {
        pic.title = config.title;
    }
    if(config.date) {
        pic.date = config.date;
    }

    return pic;
}

let picture = GeneratePicture({title: 'Trebol'})
console.log('picture -> ', picture)

interface User {
    readonly name?: string;
    readonly age?: number;
    isPro?: boolean;
}

let user: User;
user = {name: 'Andrés', age: 27, isPro: true}
// user.name = 'Felipe'; // This will not change the object, so is the reason for readonly
 /** Error: (property) User.name?: string | undefined
   * Cannot assign to 'name' because it is a read-only property. 
   * 
   */