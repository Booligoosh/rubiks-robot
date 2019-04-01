import {WHITE, GREEN, RED, YELLOW, BLUE, ORANGE, COLORS} from './modules/constants.js';
import {getNameForColor} from './modules/color-functions.js';
import sleep from './modules/sleep.js';
import * as cv from 'opencv4nodejs';

readCube();

async function readCube() {

    // Webcamera no 0 is used to capture the frames 
    //let cap = new cv.VideoCapture(0);

    //await sleep(1000); // https://stackoverflow.com/q/28566972/

    //let frame = cap.read();
    let frame = cv.imread('./cube-test.jpg');
    // Converts image from BGR to HSV
    let hsv = frame.cvtColor(cv.COLOR_BGR2HSV);
    
    cv.imshowWait('original', frame);
    
    for(let color of COLORS) {
        if(typeof getMaskRangesForColor(color) !== 'undefined') {
            cv.imshowWait(getNameForColor(color), getImageMaskForColor(hsv, color));
        }
    }

    // Destroys all of the HighGUI windows. 
    cv.destroyAllWindows();

    // release the captured frame 
    //cap.release();
}

function getImageMaskForColor(image, color) {
    return getImageMaskForRanges(image, getMaskRangesForColor(color));
}

function getImageMaskForRanges(image, ranges) {
    // Ranges looks like this: [ { lower: [1,2,3], upper: [1,2,3] } ]
    let mask = null;
    for (let range of ranges) {
        let maskToAdd = getImageMaskForRange(image, range.lower, range.upper);
        if (mask == null) {
            mask = maskToAdd;
        } else {
            mask = mask.bitwiseOr(maskToAdd);
        }
    }
    return mask;
}

function getImageMaskForRange(image, lower, upper) {
    return image.inRange(new cv.Vec3(...lower), new cv.Vec3(...upper));
}

function multiChannelApplyMask(img, mask) {
    let channels = img.splitChannels();
    let maskedChannels = channels.map(c => c.bitwiseAnd(mask));
    let output = new cv.Mat(maskedChannels);

    return output;
}

function getMaskRangesForColor(color) {
    let table = {};
    table[WHITE] = [
        {
            lower: [0, 0, 240],
            upper: [179, 20, 255]
        }
    ];
    table[GREEN] = [
        {
            lower: [41, 50, 50],
            upper: [80, 255, 255]
        }
    ];
    table[RED] = [
        {
            lower: [0, 50, 50],
            upper: [5, 255, 255]
        },
        {
            lower: [160, 50, 50],
            upper: [179, 255, 255]
        }
    ];
    table[YELLOW] = [
        {
            lower: [20, 50, 50],
            upper: [40, 255, 255]
        }
    ];
    table[BLUE] = [
        {
            lower: [85, 50, 50],
            upper: [130, 255, 255]
        }
    ];
    table[ORANGE] = [
        {
            lower: [6, 50, 50],
            upper: [19, 255, 255]
        }
    ];
    
    return table[color];
}