import {Cube} from './modules/cube-objects.js';
import {printCube} from './modules/print-cube.js';

var cube = new Cube();
        
console.log('Number of pieces:', cube.getPieces().length);

cube.executeAlgorithmFromString(`R U2 R' U' R U' R'`);
printCube(cube);