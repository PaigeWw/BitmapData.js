'use strict';

var BitmapData = require('./js/BitmapData'),
    Point = require('./js/Point'),
    Rectangle = require('./js/Rectangle'),
    ColorTransform = require('./js/ColorTransform'),
    Matrix = require('./js/Matrix'),
    Simplex = require('./js/Simplex'),
    ColorMatrixFilter = require('./js/filters/ColorMatrixFilter'),
    Difference = require('./js/modes/Difference');


module.export = {
    BitmapData: BitmapData,
    Point: Point,
    Rectangle: Rectangle,
    ColorTransform: ColorTransform,
    Matrix: Matrix,
    Simplex: Simplex,
    Filters: {
        ColorMatrixFilter: ColorMatrixFilter
    },
    Modes: {
        Difference: Difference
    }
};
