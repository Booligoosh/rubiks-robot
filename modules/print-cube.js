import {WHITE, YELLOW, RED, ORANGE, BLUE, GREEN} from './constants.js';

import chalk from 'chalk';

function getTerminalColorFunction(color) {
    color = Number(color)
    switch (color) {
        case WHITE:  return chalk.keyword('white')
        case YELLOW: return chalk.keyword('yellow')
        case RED:    return chalk.keyword('red')
        case ORANGE: return chalk.keyword('darkorange')
        case BLUE:   return chalk.keyword('cyan')
        case GREEN:  return chalk.keyword('green')
        default:     return chalk.keyword('white')
    }
}

function getLetterForColor(color) {   
    color = Number(color)
    switch (color) {
        case WHITE:  return 'W'
        case YELLOW: return 'Y'
        case RED:    return 'R'
        case ORANGE: return 'O'
        case BLUE:   return 'B'
        case GREEN:  return 'G'
        default:     return '?'
    }
}

export function printCube (cube, useLetters = false) {
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
            toPrint += ` ${getTerminalColorFunction(color)(useLetters ? getLetterForColor(color) : color)} |`
            if(i == 8) {
                toPrint += divider;
            }
        }
    }
    toPrint += `\n`;
    
    console.log(toPrint);
}