import { FACE_COUNT, WHITE, YELLOW, RED, ORANGE, BLUE, GREEN } from './constants';

import chalk from 'chalk';

export function getOppositeColor (color: number): number {
    return (color + FACE_COUNT/2) % FACE_COUNT;
}

export function incrementColor (color: number, increment: number): number {
    let toReturn = (color + increment) % FACE_COUNT;
    return toReturn < 0 ? FACE_COUNT + toReturn : toReturn;
}

export function isOddColor (color: number): boolean {
    return color % 2 != 0;
}

export function getNameForColor (color: number): string {
    return ['White', 'Green', 'Red', 'Yellow', 'Blue', 'Orange'][color];
}

export function getTerminalColorFunction (color: number): Function {
    color = Number(color)
    switch (color) {
        case WHITE: return chalk.keyword('white')
        case YELLOW: return chalk.keyword('yellow')
        case RED: return chalk.keyword('red')
        case ORANGE: return chalk.keyword('darkorange')
        case BLUE: return chalk.keyword('cyan')
        case GREEN: return chalk.keyword('green')
        default: return chalk.keyword('white')
    }
}

export function getLetterForColor (color: number): string {
    color = Number(color)
    switch (color) {
        case WHITE: return 'W'
        case YELLOW: return 'Y'
        case RED: return 'R'
        case ORANGE: return 'O'
        case BLUE: return 'B'
        case GREEN: return 'G'
        default: return '?'
    }
}