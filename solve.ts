import { WHITE, YELLOW, RED, ORANGE, BLUE, GREEN, COLORS, CLOCKWISE, COUNTER_CLOCKWISE, FACE_COUNT, PIECES_PER_FACE, CORNER_PIECE, EDGE_PIECE, CENTER_PIECE, SCRAMBLE_TEST_SET_1, SCRAMBLE_TEST_SET_2, SCRAMBLE_TEST_SET_3, SCRAMBLE_TEST_SET_4, SCRAMBLE_TEST_SET_5 } from './modules/constants';
import {Cube} from './modules/cube-objects';
import {getOppositeColor, getNameForColor} from './modules/color-functions';
import {getScrambleSets} from './modules/scramble-sets';
import chalk from 'chalk';

let scrambles = getScrambleSets([
    SCRAMBLE_TEST_SET_1,
    SCRAMBLE_TEST_SET_2,
    SCRAMBLE_TEST_SET_3,
    SCRAMBLE_TEST_SET_4,
    SCRAMBLE_TEST_SET_5
]);

//let scrambles = getScrambleSets([SCRAMBLE_TEST_SET_2]);
//let scrambles = getScrambleSets([SCRAMBLE_TEST_SET_5]);
//let scrambles = [`F' U R2 U2 F' L2 D2 L B' D F L2 F' D2 L2 F R2 L2 U2 F D2`]
let correctCount = 0;
let incorrectCount = 0;
let moveCounts = [];

for (let scrambleString of scrambles){
    //let scrambleString = `B2 L2 B2 D' U F2 D2 R' F D' B' L2 B' R' B L2 D' L2`;
    let solveTurnHistories = [];
    let color = WHITE;
    //for (let color of COLORS) {
        let cube = new Cube();
        cube.executeScrambleFromString(scrambleString);
        // cube.print();

        solveCross(cube, color);
        let correct = crossIsSolved(cube, color);
        //cube.print();
        cube.simplifyTurnHistory();
        if (!correct) {
            console.log('scrambleString', scrambleString);
            cube.print();
            console.log(`Final cross solution had ${cube.getTurnHistory().length} turns: ${cube.getTurnHistoryAsString()}`)
            console.log((correct ? chalk.green : chalk.red)(`crossIsSolved: ${correct}`))
        }
        
        if(correct) {
            correctCount++;
            solveTurnHistories.push(cube.getTurnHistory());
        } else {
            incorrectCount++;
        }
    //}

    if (solveTurnHistories.length > 0) {
        let quickestSolveMoves = solveTurnHistories.sort((a,b) => (b.length - a.length))[0]
        moveCounts.push(quickestSolveMoves.length);
    }
    //console.log(`\n\n\n`)
}
console.log(`\n`);
console.log(chalk.yellow(`${scrambles.length} SOLVES COMPLETED`))
console.log(chalk.yellow(`CORRECT: ${correctCount} | INCORRECT: ${incorrectCount}`))
console.log(chalk.yellow(`PERCENTAGE CORRECT: ${(correctCount/(correctCount+incorrectCount))*100}%`))
let movesCountsSum = moveCounts.reduce(function(a, b) { return a + b; });
console.log(chalk.yellow(`AVERAGE MOVE COUNT: ${movesCountsSum/moveCounts.length}`))

function solveCross (cube, crossColor) {

    let crossEdgePieces = cube.getPieces().filter(piece => piece.getType() == EDGE_PIECE && piece.hasColor(crossColor));
    crossEdgePieces = crossEdgePieces.sort((piece1, piece2) => {
        if (piece1.getTileWithoutColor(crossColor).getFace().getId() !== crossColor && piece1.getTileWithoutColor(crossColor).getFace().getId() !== getOppositeColor(crossColor)) {
            return -1
        } else {
            return 1
        }
        //piece2.getTileWithoutColor(crossColor).getFace().getId() !== crossColor && piece2.getTileWithoutColor(crossColor).getFace().getId() !== getOppositeColor(crossColor)
    })
    crossEdgePieces = crossEdgePieces.sort((piece1, piece2) => Number(piece2.getTileWithColor(crossColor).getFace().getId() === crossColor) - Number(piece1.getTileWithColor(crossColor).getFace().getId() === crossColor))
    console.log(crossEdgePieces.map(piece => piece.getTileWithoutColor(crossColor).getColor()))

    let piecesAlreadyInCross = crossEdgePieces.filter(piece => piece.getTileWithColor(crossColor).getFace().getId() === crossColor);
    
    let piecesOfficiallyInCross = getPiecesInCross(crossEdgePieces, crossColor);
    console.log(piecesOfficiallyInCross.map(piece => piece.getTileWithoutColor(crossColor).getColor()))
    
    for (let piece of crossEdgePieces) {
        console.log('---', piece.getTileWithoutColor(crossColor).getColor(), '-', cube.getTurnHistoryAsString(), '-', piecesOfficiallyInCross.map(piece => piece.getTileWithoutColor(crossColor).getColor()), '-', getPiecesInCross(crossEdgePieces, crossColor).map(piece => piece.getTileWithoutColor(crossColor).getColor()), '-')
        let crossTile = piece.getTileWithColor(crossColor);
        let nonCrossTile = piece.getTileWithoutColor(crossColor);

        if(getPiecesInCross(crossEdgePieces, crossColor).length > 2) {
            piecesOfficiallyInCross = getPiecesInCross(crossEdgePieces, crossColor).filter(piece => {
                let otherCrossPieces = getPiecesInCross(crossEdgePieces, crossColor).filter(p => p !== piece);
                let isCorrect = false;
                let referencePiece = otherCrossPieces[0];
                if (referencePiece.getTileWithoutColor(crossColor).getColor() === getOppositeColor(piece.getTileWithoutColor(crossColor).getColor())) {
                    // Opposite
                    if (referencePiece.getTileWithoutColor(crossColor).getFace().getId() === getOppositeColor(piece.getTileWithoutColor(crossColor).getFace().getId())) {
                        isCorrect = true
                    }
                } else {
                    for (let i in otherCrossPieces) {
                        let referencePiece = otherCrossPieces[i];
                        let shouldBeOnRight = crossColorShouldBeOnRightOfOtherCrossColor(referencePiece.getTileWithoutColor(crossColor).getColor(), nonCrossTile.getColor());
                        let isOnRight = crossPieceIsOnRightOfOtherCrossPiece(referencePiece, piece, crossColor);
                        console.log(piece.getTileWithoutColor(crossColor).getColor(), referencePiece.getTileWithoutColor(crossColor).getColor(), {shouldBeOnRight, isOnRight})
                        if (shouldBeOnRight == isOnRight) {
                            isCorrect = true;
                        }
                    }
                }
                return isCorrect;
            });
        }
        console.log(piecesOfficiallyInCross.map(piece => piece.getTileWithoutColor(crossColor).getColor()));

        if (crossTile.getFace().getId() == crossColor) {
            // Already in cross
            console.log('Already in cross');
            if (piecesOfficiallyInCross.filter(p => p !== piece).length > 0) {
                let referencePiece = piecesOfficiallyInCross.filter(p => p !== piece)[0];
                let shouldBeOnRight = crossColorShouldBeOnRightOfOtherCrossColor(referencePiece.getTileWithoutColor(crossColor).getColor(), nonCrossTile.getColor());
                let isOnRight = crossPieceIsOnRightOfOtherCrossPiece(referencePiece, piece, crossColor);
                //console.log(referencePiece.getTileWithoutColor(crossColor).getColor(), piece.getTileWithoutColor(crossColor).getColor())
                //console.log({shouldBeOnRight, isOnRight})
                if (shouldBeOnRight !== isOnRight) {
                    //console.log('I', piecesOfficiallyInCross)
                    if (piecesOfficiallyInCross.includes(piece)) {
                        console.log('Includes piece')
                        piecesOfficiallyInCross.splice(piecesOfficiallyInCross.indexOf(piece), 1);
                    }
                    nonCrossTile.getFace().turn(CLOCKWISE)
                    rotateCrossFaceSoColorCanBeInserted(cube, crossTile, nonCrossTile, crossEdgePieces, crossColor, piecesOfficiallyInCross)
                    rotateFaceUntilOntop(crossTile, nonCrossTile, crossEdgePieces, crossColor)
                }
                //piecesOfficiallyInCross.push(piece)
            }
            
            if (!piecesOfficiallyInCross.includes(piece)) {
                piecesOfficiallyInCross.push(piece);
            }
        } else if (nonCrossTile.getFace().getId() !== crossColor && nonCrossTile.getFace().getId() !== getOppositeColor(crossColor)) {
            // Edge/center pair has the non-cross colors aligned
            console.log('Edge/center pair has the non-cross colors aligned')
            rotateCrossFaceSoColorCanBeInserted(cube, crossTile, nonCrossTile, crossEdgePieces, crossColor, piecesOfficiallyInCross)
            rotateFaceUntilOntop(crossTile, nonCrossTile, crossEdgePieces, crossColor)
            piecesOfficiallyInCross.push(piece)
        } else {
            console.log('Edge/center pair doesn\'t have the non-cross colors aligned', nonCrossTile.getFace().getId())

            if (nonCrossTile.getFace().getId() === getOppositeColor(crossColor)) {
                while (crossEdgePieces.filter(piece => piece.getTileWithColor(crossColor).getFace().getId() === crossColor && piece.getTileWithoutColor(crossColor).getFace() === crossTile.getFace()).length > 0) {
                    cube.getFaceById(crossColor).turn(CLOCKWISE)
                }
            }

            while (nonCrossTile.getFace().getId() === crossColor || nonCrossTile.getFace().getId() === getOppositeColor(crossColor)) {
                crossTile.getFace().turn(CLOCKWISE)
            }
            rotateCrossFaceSoColorCanBeInserted(cube, crossTile, nonCrossTile, crossEdgePieces, crossColor, piecesOfficiallyInCross)
            rotateFaceUntilOntop(crossTile, nonCrossTile, crossEdgePieces, crossColor)
            piecesOfficiallyInCross.push(piece)
        }
    }
    
    if (piecesOfficiallyInCross.length > 0) {
        let piece = piecesOfficiallyInCross[0];
        while (piece.getTileWithoutColor(crossColor).getColor() !== piece.getTileWithoutColor(crossColor).getFace().getId()) {
            cube.getFaceById(crossColor).turn(CLOCKWISE);
        }
    }
}

function rotateFaceUntilOntop (crossTile, nonCrossTile, crossEdgePieces, crossColor) {
    while(crossTile.getFace().getId() !== crossColor) {
        nonCrossTile.getFace().turn(CLOCKWISE);
    }
}

function rotateCrossFaceSoColorCanBeInserted (cube, crossTile, nonCrossTile, crossEdgePieces, crossColor, piecesOfficiallyInCross) {

    if (piecesOfficiallyInCross.length === 0) {
        // No pieces in cross so no need to rotate
        console.log('No pieces in cross so no need to rotate', piecesOfficiallyInCross);
    } else if (piecesOfficiallyInCross.filter(piece => piece.getTileWithoutColor(crossColor).getColor() === getOppositeColor(nonCrossTile.getColor())).length > 0) {
        // A piece with the opposite non-cross color is already in the cross
        let oppositeColorPiece = piecesOfficiallyInCross.filter(piece => piece.getTileWithoutColor(crossColor).getColor() === getOppositeColor(nonCrossTile.getColor()))[0];
        console.log('A piece with the opposite non-cross color is already in the cross', nonCrossTile.getColor(), oppositeColorPiece.getTileWithoutColor(crossColor).getColor(), 'hi', piecesOfficiallyInCross.map(piece => piece.getTileWithoutColor(crossColor).getColor()));

        if (nonCrossTile.getColor() === 1 && oppositeColorPiece.getTileWithoutColor(crossColor).getColor() === 4) {
            //console.log(cube.getTurnHistoryAsString())
            //cube.print();
        }

        while (oppositeColorPiece.getTileWithoutColor(crossColor).getFace().getId() !== getOppositeColor(nonCrossTile.getFace().getId())) {
            cube.getFaceById(crossColor).turn(CLOCKWISE);
        }
    } else {
        // No pieces with the opposite non-cross color are already in the cross
        console.log('No pieces with the opposite non-cross color are already in the cross', nonCrossTile.getColor(), nonCrossTile.getFace().getId());

        // Take any piece in the cross
        let referencePiece = piecesOfficiallyInCross[0];
        console.log('Current piece color', nonCrossTile.getColor())
        console.log('Reference piece color', referencePiece.getTileWithoutColor(crossColor).getColor())
        while (referencePiece.getTileWithoutColor(crossColor).getFace().getId() !== getOppositeColor(nonCrossTile.getFace().getId())) {
            cube.getFaceById(crossColor).turn(CLOCKWISE);
        }

        let crossFaceTurnsAwayFromOpposite = 0;
        let referencePieceColor = referencePiece.getTileWithoutColor(crossColor).getColor()
        let nonCrossColor = nonCrossTile.getColor();

        if (crossColorShouldBeOnRightOfOtherCrossColor(referencePieceColor, nonCrossColor)) {
            crossFaceTurnsAwayFromOpposite = 3;
        } else {
            crossFaceTurnsAwayFromOpposite = 1;
        }

        console.log({crossFaceTurnsAwayFromOpposite});

        for (let i = 0; i < crossFaceTurnsAwayFromOpposite; i++) {
            cube.getFaceById(crossColor).turn(CLOCKWISE);
        }
    }
}

function crossColorShouldBeOnRightOfOtherCrossColor (crossColor1, crossColor2) {
    return (crossColor1 == GREEN && crossColor2 == RED) ||
    (crossColor1 == RED && crossColor2 == BLUE) ||
    (crossColor1 == BLUE && crossColor2 == ORANGE) ||
    (crossColor1 == ORANGE && crossColor2 == GREEN)
}

function crossPieceIsOnRightOfOtherCrossPiece (crossPiece1, crossPiece2, crossColor) {
    return crossColorShouldBeOnRightOfOtherCrossColor(crossPiece1.getTileWithoutColor(crossColor).getFace().getId(), crossPiece2.getTileWithoutColor(crossColor).getFace().getId())
}

function getPiecesInCross (crossEdgePieces, crossColor) {
    return crossEdgePieces.filter(piece => piece.getTileWithColor(crossColor).getFace().getId() == crossColor);
}

function crossIsSolved (cube, crossColor) {
    let isSolved = true;
    let crossEdgePieces = cube.getPieces().filter(piece => piece.getType() === EDGE_PIECE && piece.hasColor(crossColor));
    let piecesInCross = getPiecesInCross(crossEdgePieces, crossColor);
    if (piecesInCross.length !== 4) {
        isSolved = false;
    } else {
        //console.log(chalk.green('4 pieces are in cross'));
        for (let piece of piecesInCross) {
            if (piece.getTileWithoutColor(crossColor).getColor() !== piece.getTileWithoutColor(crossColor).getFace().getId()) {
                isSolved = false;
            }
        }
    }
    
    return isSolved;
}