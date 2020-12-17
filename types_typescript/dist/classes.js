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
var Picture = /** @class */ (function () {
    //constructor
    function Picture(id, title, orientation) {
        this._id = id;
        this._title = title;
        this._orientation = orientation;
    }
    //Performance
    Picture.prototype.toString = function () {
        return "[id: " + this._id + ", title: " + this._title + ", orientation: " + this._orientation + "]";
    };
    return Picture;
}());
var Album = /** @class */ (function () {
    function Album(id, title) {
        this._id = id;
        this._title = title;
        this._pictures = [];
    }
    Object.defineProperty(Album.prototype, "id", {
        get: function () { return this._id; },
        set: function (id) { this._id = id; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Album.prototype, "title", {
        get: function () { return this._title; },
        set: function (t) { this._title = t; },
        enumerable: false,
        configurable: true
    });
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
}());
var album = new Album('stories-1', 'Photos of mine');
var newPic = new Picture(2, 'my new pic!', PhotoOrientation.Panorama);
var new2Pic = new Picture(3, 'my 2nd new pic!', PhotoOrientation.Portrait);
var new3Pic = new Picture(4, 'my 3rd new pic!', PhotoOrientation.Portrait);
album.addPicture(newPic);
album.addPicture(new2Pic);
album.addPicture(new3Pic);
console.log('album -> ', album);
