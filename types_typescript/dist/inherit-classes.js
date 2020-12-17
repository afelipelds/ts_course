"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscape"] = 0] = "Landscape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["Square"] = 2] = "Square";
    PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama";
})(PhotoOrientation || (PhotoOrientation = {}));
;
//superclase
var Item = /** @class */ (function () {
    function Item(id, title) {
        this._id = id;
        this._title = title;
    }
    Object.defineProperty(Item.prototype, "id", {
        get: function () { return this._id; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Item.prototype, "title", {
        // set id(id: number) {this._id = id} // La definición de _id es inservible.
        get: function () { return this._title; },
        set: function (t) { this._title = t; },
        enumerable: false,
        configurable: true
    });
    return Item;
}());
// clase picture
var Picture = /** @class */ (function (_super) {
    __extends(Picture, _super);
    function Picture(id, title, orientation) {
        var _this = _super.call(this, id, title) || this;
        _this._orientation = orientation;
        return _this;
    }
    Picture.prototype.toString = function () {
        return "[id: " + this._id + ", title: " + this._title + ", orientation: " + this._orientation + "]";
    };
    Picture.photoOrientation = PhotoOrientation;
    return Picture;
}(Item));
// clase album
var Album = /** @class */ (function (_super) {
    __extends(Album, _super);
    function Album(id, title) {
        var _this = _super.call(this, id, title) || this;
        _this._pictures = [];
        return _this;
    }
    Object.defineProperty(Album.prototype, "picture", {
        get: function () { return this._pictures; },
        set: function (pic) { this._pictures = pic; },
        enumerable: false,
        configurable: true
    });
    Album.prototype.addPicture = function (picture) {
        this._pictures.push(picture);
    };
    return Album;
}(Item));
var album = new Album(100, 'Photos of mine');
var newPic = new Picture(2, 'my new pic!', PhotoOrientation.Panorama);
var new2Pic = new Picture(3, 'my 2nd new pic!', PhotoOrientation.Portrait);
var new3Pic = new Picture(4, 'my 3rd new pic!', PhotoOrientation.Portrait);
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
