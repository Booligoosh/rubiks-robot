import {WHITE, YELLOW, RED, ORANGE, BLUE, GREEN} from './constants.js';

import chalk from 'chalk';

function getTerminalColorFunction (color) {
    if (color == WHITE) {
        return chalk.keyword('white');
    } else if (color == YELLOW) {
        return chalk.keyword('yellow');
    } else if (color == RED) {
        return chalk.keyword('red');
    } else if (color == ORANGE) {
        return chalk.keyword('darkorange');
    } else if (color == BLUE) {
        return chalk.keyword('cyan');
    } else if (color == GREEN) {
        return chalk.keyword('green');
    } else {
        return chalk.keyword('white');
    }
}

function getLetterForColor (color) {    
    if (color == WHITE) {
        return 'W';
    }
    if (color == YELLOW) {
        return 'Y';
    }
    if (color == RED) {
        return 'R';
    }
    if (color == ORANGE) {
        return 'O';
    }
    if (color == BLUE) {
        return 'B';
    }
    if (color == GREEN) {
        return 'G';
    }
}

export function printCube (cube) {
    const divider = `\n-------------`;
    let toPrint = ``;
    
    for(let face of cube.getFaces()) {
        toPrint += '\n';
        let tiles = face.getPositionedTiles();
        
        for(let i = 0; i < tiles.length; i++) {
            let tile = tiles[i];
            let color = typeof tile == 'undefined' ? ' ' : tile.color;
            if(i == 0 || i == 3 || i == 6) {
                toPrint += divider;
                toPrint += `\n|`;
            }
            toPrint += ` ${getTerminalColorFunction(color)(color)} |`
            if(i == 8) {
                toPrint += divider;
            }
        }
    }
    toPrint += `\n`;
    
    console.log(toPrint);
}