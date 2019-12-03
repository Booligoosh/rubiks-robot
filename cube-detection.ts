import {WHITE, GREEN, RED, YELLOW, BLUE, ORANGE, COLORS} from './modules/constants'
import {getNameForColor} from './modules/color-functions'
import {getMaskRangesForColor, getImageMaskForColor} from './modules/cv-functions'
import sleep from './modules/sleep'
import * as cv from 'opencv4nodejs'

async function readCube () {

    // Webcamera no 0 is used to capture the frames 
    //let cap = new cv.VideoCapture(0);

    //await sleep(1000); // https://stackoverflow.com/q/28566972/

    //let frame = cap.read();
    const frame = cv.imread(`./cube-test.jpg`)
    // Converts image from BGR to HSV
    const hsv = frame.cvtColor(cv.COLOR_BGR2HSV)
    
    cv.imshowWait(`original`, frame)
    
    for(const color of COLORS) {
        if(typeof getMaskRangesForColor(color) !== `undefined`) {
            cv.imshowWait(getNameForColor(color), getImageMaskForColor(hsv, color))
        }
    }

    // Destroys all of the HighGUI windows. 
    cv.destroyAllWindows()

    // release the captured frame 
    //cap.release();
}

readCube()