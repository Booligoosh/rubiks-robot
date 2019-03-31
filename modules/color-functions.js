import {FACE_COUNT} from './constants.js';

export function getOppositeColor (color) {
    return (color + FACE_COUNT/2) % FACE_COUNT;
}

export function incrementColor (color, increment) {
    let toReturn = (color + increment) % FACE_COUNT;
    return toReturn < 0 ? FACE_COUNT + toReturn : toReturn;
}

export function isOddColor (color) {
    return color % 2 != 0;
}