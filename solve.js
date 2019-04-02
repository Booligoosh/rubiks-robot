import {WHITE, YELLOW, RED, ORANGE, BLUE, GREEN, COLORS, CLOCKWISE, COUNTER_CLOCKWISE, FACE_COUNT, PIECES_PER_FACE, CORNER_PIECE, EDGE_PIECE, CENTER_PIECE} from './modules/constants.js';
import {Cube} from './modules/cube-objects.js';
import {printCube} from './modules/print-cube.js';
import {getOppositeColor, getNameForColor} from './modules/color-functions.js';

let cube = new Cube();
        
console.log('Number of pieces:', cube.getPieces().length);

//cube.executeAlgorithmFromString(`R U2 R' U' R U' R'`);

cube.scramble();

printCube(cube);

let crossColor = WHITE;

let crossEdgePieces = cube.getPieces().filter(piece => piece.getType() == EDGE_PIECE && piece.hasColor(crossColor));

for(let piece of crossEdgePieces) {
    let crossTile = piece.getTiles().filter(tile => tile.getColor() == crossColor)[0];
    let nonCrossTile = piece.getTiles().filter(tile => tile.getColor() != crossColor)[0];
    
    if(nonCrossTile.getFace().getId() == nonCrossTile.getColor()) {
        // Edge/center pair has the non-cross colors aligned
        while(crossTile.getFace().getId() != crossColor) {
            nonCrossTile.getFace().turn(CLOCKWISE);
        }
    } else if (false) {
        
    }
}


printCube(cube);

console.log('Final turns:', cube.getTurnHistoryAsString());