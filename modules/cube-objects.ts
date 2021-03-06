import {COLORS, CLOCKWISE, COUNTER_CLOCKWISE, CORNER_PIECE, EDGE_PIECE, CENTER_PIECE} from './constants'

import { getOppositeColor, incrementColor, isOddColor, getLetterForColor, getTerminalColorFunction } from './color-functions'

import { removeDuplicates, removeDuplicateArrays } from './array-functions'

import chalk from 'chalk'

class Turn {
    face: Face
    direction: number

    constructor (face: Face, direction: number) {
        this.face = face
        this.direction = direction
    }

    getFace (): Face {
        return this.face
    }

    getDirection (): number {
        return this.direction
    }
}
export class Tile {
    parent: Piece
    color: number
    face: Face

    constructor (parent: Piece, color: number, face: Face) {
        this.parent = parent
        this.color = color
        this.face = face
    }

    getColor (): number {
        return this.color
    }

    getFace (): Face {
        return this.face
    }

    setFace (face: Face): void {
        this.face = face
    }

    getParentPiece (): Piece {
        return this.parent
    }

    getOtherTilesOnPiece (): Tile[] {
        return this.getParentPiece().getTiles().filter(tile => tile !== this)
    }

    getPositionOnFace (): number {
        // const cube = this.parent.parent
        const piece = this.getParentPiece()

        // const surroundingFaces = COLORS.filter(color => color !== this.face.getId() && color !== getOppositeColor(this.face.getId())).map(id => cube.getFaceById(id))

        const otherTilesOnPiece = this.getOtherTilesOnPiece()
        const otherFacesOnPiece = otherTilesOnPiece.map(tile => tile.face.id)

        /*console.log('---');
        console.log('Face color:', this.face.getId());
        console.log('Tile color:', this.color);
        console.log('Piece type:', piece.getType());
        console.log('Other faces on piece:', otherFacesOnPiece);
        console.log('Surrounding faces: ', surroundingFaces.map(f=>f.id));*/

        const faceIsEven = !isOddColor(this.face.getId())

        if (piece.getType() === CENTER_PIECE) {
            return 4
        } else if (piece.getType() === EDGE_PIECE) {
            if (otherFacesOnPiece.includes(incrementColor(this.face.getId(), 1))) {
                // On top edge
                return 1
            }
            if (otherFacesOnPiece.includes(incrementColor(this.face.getId(), 2))) {
                // On right/left (when even) edge
                return faceIsEven ? 3 : 5
            }
            if (otherFacesOnPiece.includes(incrementColor(this.face.getId(), 4))) {
                // On bottom edge
                return 7
            }
            if (otherFacesOnPiece.includes(incrementColor(this.face.getId(), 5))) {
                // On left/right (when even) edge
                return faceIsEven ? 5 : 3
            }
        } else if (piece.getType() === CORNER_PIECE) {
            if (otherFacesOnPiece.includes(incrementColor(this.face.getId(), 1))) {
                // On top edge // Either 0 or 2 //
                if (otherFacesOnPiece.includes(incrementColor(this.face.getId(), 2))) {
                    // On right/left (when even) edge
                    return faceIsEven ? 0 : 2
                } else {
                    // On left/right (when even) edge
                    return faceIsEven ? 2 : 0
                }
            }
            if (otherFacesOnPiece.includes(incrementColor(this.face.getId(), 4))) {
                // On bottom edge // Either 6 or 8 //
                if (otherFacesOnPiece.includes(incrementColor(this.face.getId(), 5))) {
                    // On right/left (when even) edge
                    return faceIsEven ? 8 : 6
                } else {
                    // On left/right (when even) edge
                    return faceIsEven ? 6 : 8
                }
            }
        }
    }
}

export class Piece {
    parent: Cube
    tiles: Tile[]
    type: number

    constructor (parent: Cube, tiles: PreTile[]) {
        this.parent = parent
        this.tiles = tiles.map(tile => new Tile(this, tile.color, tile.face))
    }
    
    getTiles (): Tile[] {
        return this.tiles
    }
    
    getType (): number {
        return this.type
    }
    
    hasColor (color: number): boolean {
        return this.getTiles().filter(tile => tile.getColor() === color).length > 0
    }

    getTileWithColor (color: number): Tile {
        if (this.hasColor(color)) {
            return this.getTiles().filter(tile => tile.getColor() === color)[0]
        }
    }

    getTileWithoutColor (color: number): Tile {
        if (this.hasColor(color)) {
            return this.getTiles().filter(tile => tile.getColor() !== color)[0]
        }
    }
}

export class CornerPiece extends Piece {
    constructor (parent: Cube, tiles: PreTile[]) {
        super(parent, tiles)
        this.type = CORNER_PIECE
        if(this.tiles.length !== 3) {
            throw new Error(chalk.red(`Corner pieces must have 3 tiles!`))
        }
    }
}

export class EdgePiece extends Piece {
    constructor (parent: Cube, tiles: PreTile[]) {
        super(parent, tiles)
        this.type = EDGE_PIECE
        if(this.tiles.length !== 2) {
            throw new Error(chalk.red(`Edge pieces must have 2 tiles!`))
        }
    }
}

export class CenterPiece extends Piece {
    constructor (parent: Cube, tiles: PreTile[]) {
        super(parent, tiles)
        this.type = CENTER_PIECE
        if(this.tiles.length !== 1) {
            throw new Error(chalk.red(`Center pieces must have 1 tile!`))
        }
    }
}

export class Face {
    id: number
    parent: Cube

    constructor (parent: Cube, id: number) {
        // The ID is the same as the color number of its center piece
        this.id = id
        this.parent = parent
    }

    getId (): number {
        return this.id
    }

    getPieces (): Piece[] {
        return this.parent.pieces.filter(piece => piece.getTiles().filter(tile => tile.getFace() === this).length > 0)
    }

    getTiles (): Tile[] {
        return this.getPieces().map(piece => piece.getTiles().filter(tile => tile.getFace() === this)[0])
    }

    getPositionedTiles (): Tile[] {
        const positionedTiles = new Array(9)

        for (const tile of this.getTiles()) {
            //console.log('TILE FOR FACE', face.id, tile.getPositionOnFace());
            positionedTiles[tile.getPositionOnFace()] = tile
        }

        return positionedTiles
    }

    getOppositeFace (): Face {
        return this.parent.faces[getOppositeColor(this.id)]
    }

    getTileAtPosition (position: number): Tile {
        const tiles = this.getTiles()
        const toReturn = tiles.find(tile => tile.getPositionOnFace() === position)
        return typeof toReturn === `undefined` ? null : toReturn
    }

    turn (direction: number): void {

        if (this.parent.recordingTurnHistory) {
            this.parent.turnHistory.push(new Turn(this, direction))
        }

        if (isOddColor(this.id)) {
            direction = direction === CLOCKWISE ? COUNTER_CLOCKWISE : CLOCKWISE
        }
        const tilesOnFace = this.getTiles()
        for (const tile of tilesOnFace) {
            // const piece = tile.getParentPiece()
            const otherTilesOnPiece = tile.getOtherTilesOnPiece()
            /*console.log('Tile face:', tile.getFace().id);
            console.log('Tile color:', tile.getColor());
            console.log('Tile position on face:', tile.getPositionOnFace());
            console.log('Other tiles on piece:', otherTilesOnPiece.map(t=>t.face.id));
            console.log('Other colors on piece:', otherTilesOnPiece.map(t=>t.color));*/
            for (const otherTile of otherTilesOnPiece) {

                //console.log(otherTile.getPositionOnFace(), otherTile);

                const increment = (direction === CLOCKWISE ? -1 : 1)

                otherTile.face = this.parent.getFaceById(incrementColor(otherTile.face.id, increment))

                if (otherTile.face.id === this.id || otherTile.face.id === getOppositeColor(this.id)) {
                    otherTile.face = this.parent.getFaceById(incrementColor(otherTile.face.id, increment))
                }

                //console.log('Face changed to:', otherTile.face.id, otherTile.getPositionOnFace());
            }
        }
    }
}

export class Cube {
    faces: Face[]
    pieces: Piece[]
    recordingTurnHistory: boolean
    turnHistory: Turn[]

    constructor () {
        this.faces = []
        this.pieces = []
        for (const i of COLORS) {
            this.faces.push(new Face(this, i))

            this.pieces.push(new CenterPiece(this, [{
                color: i,
                face: this.getFaceById(i)
            }]))
        }

        this.recordingTurnHistory = true
        this.turnHistory = []

        let faceBorders = []
        for (const color1 of COLORS) {
            for (const color2 of COLORS) {
                if (color1 !== color2
                    && getOppositeColor(color1) !== color2
                    && faceBorders.filter(b => b.includes(color1) && b.includes(color2)).length === 0) {
                    faceBorders.push([color1, color2])
                }
            }
        }

        faceBorders = removeDuplicateArrays(faceBorders)

        //console.log('FACE BORDERS', faceBorders);

        let cornerFaceTriplets = []

        for (const border of faceBorders) {
            this.pieces.push(new EdgePiece(this, [
                { color: border[0], face: this.getFaceById(border[0]) },
                { color: border[1], face: this.getFaceById(border[1]) },
            ]))

            const border1 = border

            for (const border2 of faceBorders) {
                if (border1 !== border2
                    && (border2.includes(border1[0]) || border2.includes(border1[0]))
                    && cornerFaceTriplets.filter(b => b.includes(border1) && b.includes(border2)).length === 0) {
                    const toPush = removeDuplicates(border1.concat(border2))
                    let shouldPush = true
                    for (const faceNum1 of toPush) {
                        for (const faceNum2 of toPush) {
                            if (faceNum1 === getOppositeColor(faceNum2)) {
                                shouldPush = false
                            }
                        }
                    }

                    if (shouldPush) {
                        cornerFaceTriplets.push(toPush)
                    }
                }
            }
        }

        cornerFaceTriplets = removeDuplicateArrays(cornerFaceTriplets)

        //console.log(cornerFaceTriplets.length, 'cornerFaceTriplets',cornerFaceTriplets);

        for (const triplet of cornerFaceTriplets) {
            this.pieces.push(new CornerPiece(this, [
                { color: triplet[0], face: this.getFaceById(triplet[0]) },
                { color: triplet[1], face: this.getFaceById(triplet[1]) },
                { color: triplet[2], face: this.getFaceById(triplet[2]) },
            ]))
        }
    }

    getPieces (): Piece[] {
        return this.pieces
    }

    getFaces (): Face[] {
        return this.faces
    }

    getFaceById (id: number): Face {
        return this.faces[this.faces.map(face => face.getId()).indexOf(id)]
    }

    // getPieceWithFaces (): Piece {
    // To-do
    // }

    executeAlgorithmFromString (alg: string): void {
        // TODO: M/E/S moves
        // TODO: X/Y/Z moves
        // TODO: Change faceId based on orientation
        const parts = alg.split(` `)
        for (const part of parts) {
            const direction = part.length === 2 ? COUNTER_CLOCKWISE : CLOCKWISE
            const repetitions = part.length === 2 && part[1] === `2` ? 2 : 1
            const faceLetter = part[0]
            const faceId = this.getFaceIdFromLetter(faceLetter, 0)
            for (let i = 0; i < repetitions; i++) {
                this.getFaceById(faceId).turn(direction)
            }
        }
    }

    getFaceIdFromLetter (letter: string, topFaceId: number): number {
        // TODO: Add letter => id maps all orientations 
        const table = {
            0: {
                'U': 0,
                'F': 1,
                'R': 2,
                'D': 3,
                'B': 4,
                'L': 5,
            }
        }
        return table[topFaceId][letter]
    }

    scrambleRandomly (): void {
        // Scramble 3 from worldcubeassociation.org/regulations/history/files/scrambles/scramble_cube.htm
        this.executeScrambleFromString(`D2 F' D F L B2 L R2 D' U F R F U' L' B L2 F2 L' B F2 D U2 F2 L' U2 B' F L R'`)
    }

    executeScrambleFromString (scrambleString: string): void {
        this.recordingTurnHistory = false
        this.executeAlgorithmFromString(scrambleString)
        this.recordingTurnHistory = true
    }

    getTurnHistory (): Turn[] {
        return this.turnHistory
    }

    getTurnHistoryAsString (): string {
        return this.getTurnHistory().map(turn => [`U`, `F`, `R`, `D`, `B`, `L`][turn.getFace().getId()] + (turn.getDirection() === COUNTER_CLOCKWISE ? `'` : ``)).join(` `)
    }

    simplifyTurnHistory (silent = true): void {
        const turnHistory = this.getTurnHistory()
        const originalLength = turnHistory.length
        const newTurnHistory = []
        for (let index = 0; index < turnHistory.length; null) {
            const turn = turnHistory[index]
            let finalDirection = 0
            let movesSimplified = 0

            for (let i = 0; index + i < turnHistory.length && turnHistory[index + i].getFace() === turn.getFace(); i++) {
                finalDirection += turnHistory[index + i].getDirection()
                movesSimplified++
            }
            // console.log('---')
            // console.log(turnHistory.map(turn => ['U','F','R','D','B','L'][turn.getFace().getId()]).join())
            // console.log(newTurnHistory.map(turn => ['U','F','R','D','B','L'][turn.getFace().getId()]).join())
            // console.log(index, ['U','F','R','D','B','L'][turn.getFace().getId()], movesSimplified, finalDirection, turnHistory.slice(index, index + 3).map(turn => ['U','F','R','D','B','L'][turn.getFace().getId()]), ['U','F','R','D','B','L'][turn.getFace().getId()]);

            finalDirection = finalDirection % 4
            if (finalDirection > 2) {
                finalDirection -= 4
            } else if (finalDirection < -2) {
                finalDirection += 4
            }

            // console.log(index, movesSimplified, finalDirection);

            if (finalDirection === 0) {
                // Do nothing
            } else if (finalDirection === 2 || finalDirection === -2) {
                newTurnHistory.push(new Turn(turn.getFace(), finalDirection / 2))
                newTurnHistory.push(new Turn(turn.getFace(), finalDirection / 2))
            } else {
                newTurnHistory.push(new Turn(turn.getFace(), finalDirection))
            }

            index += movesSimplified
        }

        this.turnHistory = newTurnHistory

        if (!silent) {
            console.log(`Removed ${originalLength - turnHistory.length} moves by simplification.`)
        }
    }

    getEfficiencyScoreFromTurnHistory (): number {
        // Most efficient: 1x90deg or 2x90deg where the faces are opposite
        // Second most efficient: 1x180deg or 2x180deg where the faces are opposite
        // Third most efficient: 2x90deg where the faces aren't opposite
        return 0
    }

    print (useLetters = true): void {
        const topDivider =    `\n┌───┬───┬───┐`
        const middleDivider = `\n├───┼───┼───┤`
        const bottomDivider = `\n└───┴───┴───┘`
        let toPrint = ``

        for (const face of this.getFaces()) {
            toPrint += `\n`
            const tiles = face.getPositionedTiles()

            for (let i = 0; i < tiles.length; i++) {
                const tile = tiles[i]
                if (i === 0) {
                    toPrint += topDivider
                    toPrint += `\n│`
                }
                if (i === 3 || i === 6) {
                    toPrint += middleDivider
                    toPrint += `\n│`
                }
                if (tile) {
                    toPrint += ` ${getTerminalColorFunction(tile.color)(useLetters ? getLetterForColor(tile.color) : tile.color)} |`
                } else {
                    toPrint += `   │`
                }
                if (i === 8) {
                    toPrint += bottomDivider
                }
            }
        }
        toPrint += `\n`

        console.log(toPrint)
    }
}

interface PreTile {
    color: number
    face: Face
}