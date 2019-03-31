import {CLOCKWISE, COUNTER_CLOCKWISE} from './modules/constants.js';
import {Cube, Face} from './modules/cube-objects.js';
import {printCube} from './modules/print-cube.js';

var cube = new Cube();
        
console.log('Number of pieces:', cube.getPieces().length);

cube.executeAlgorithmFromString(`R U2 R' U' R U' R'`);
printCube(cube);