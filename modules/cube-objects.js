import {WHITE, YELLOW, RED, ORANGE, BLUE, GREEN, COLORS, CLOCKWISE, COUNTER_CLOCKWISE, FACE_COUNT, PIECES_PER_FACE, CORNER_PIECE, EDGE_PIECE, CENTER_PIECE} from './constants.js';

import {getOppositeColor, incrementColor, isOddColor} from './color-functions.js';

import {removeDuplicates, removeDuplicateArrays} from './array-functions.js';

const chalk = require('chalk');

export class Cube {
    constructor () {
        this.faces = [];
        this.pieces = [];
        for(let i in COLORS) {
            this.faces.push(new Face(this, i));
            
            this.pieces.push(new CenterPiece(this, [{
                color: i,
                face: this.getFaceById(i)
            }]));
        }
        
        let faceBorders = [];
        for(let color1 of COLORS) {
            for(let color2 of COLORS) {
                if(color1 != color2
                   && getOppositeColor(color1) != color2
                   && faceBorders.filter(b => b.includes(color1) && b.includes(color2)).length == 0) {
                    faceBorders.push([color1, color2]);
                }
            }
        }
        
        faceBorders = removeDuplicateArrays(faceBorders);
        
        //console.log('FACE BORDERS', faceBorders);
        
        let cornerFaceTriplets = [];
        
        for(let border of faceBorders) {
            this.pieces.push(new EdgePiece(this, [
                { color: border[0], face: this.getFaceById(border[0]) },
                { color: border[1], face: this.getFaceById(border[1]) },
            ]));
            
            let border1 = border;
            
            for(let border2 of faceBorders) {
                if(border1 != border2
                   && (border2.includes(border1[0]) || border2.includes(border1[0]))
                   && cornerFaceTriplets.filter(b => b.includes(border1) && b.includes(border2)).length == 0) {
                    let toPush = removeDuplicates(border1.concat(border2));
                    let shouldPush = true;
                    for(let faceNum1 of toPush) {
                        for(let faceNum2 of toPush) {
                            if(faceNum1 == getOppositeColor(faceNum2)) {
                                shouldPush = false;
                            }
                        }
                    }
                    
                    if(shouldPush) {
                        cornerFaceTriplets.push(toPush);
                    }
                }
            }
        }
        
        cornerFaceTriplets = removeDuplicateArrays(cornerFaceTriplets);
        
        //console.log(cornerFaceTriplets.length, 'cornerFaceTriplets',cornerFaceTriplets);
        
        for(let triplet of cornerFaceTriplets) {
            this.pieces.push(new CornerPiece(this, [
                { color: triplet[0], face: this.getFaceById(triplet[0]) },
                { color: triplet[1], face: this.getFaceById(triplet[1]) },
                { color: triplet[2], face: this.getFaceById(triplet[2]) },
            ]));
        }
    }
    
    getPieces () {
        return this.pieces;
    }
    
    getFaces () {
        return this.faces;
    }
    
    getFaceById (id) {
        return this.faces[this.faces.map(face => face.getId()).indexOf(Number(id))];
    }
    
    getPieceWithFaces () {
        
    }
    
    executeAlgorithmFromString (alg) {
        // TODO: M/E/S moves
        // TODO: X/Y/Z moves
        // TODO: Change faceId based on orientation
        let parts = alg.split(' ')
        for(let part of parts) {
            let direction = part.length == 2 ? COUNTER_CLOCKWISE : CLOCKWISE;
            let repetitions = part.length == 2 && part[1] == '2' ? 2 : 1;
            let faceLetter = part[0];
            let faceId = this.getFaceIdFromLetter(faceLetter, 0);
            for(let i = 0; i < repetitions; i++) {
                this.getFaceById(faceId).turn(direction);
            }
        }
    }
    
    getFaceIdFromLetter (letter, topFaceId) {
        // TODO: Add letter => id maps all orientations 
        let table = {
            0: {
                'U': 0,
                'F': 1,
                'R': 2,
                'D': 3,
                'B': 4,
                'L': 5,
            }
        };
        return table[topFaceId][letter];
    }
}

export class Face {
    constructor (parent, id) {
        // The ID is the same as the color number of its center piece
        this.id = Number(id);
        this.parent = parent;
    }
    
    getId () {
        return this.id;
    }
    
    getPieces () {
        return this.parent.pieces.filter(piece => piece.getTiles().filter(tile => tile.getFace() == this).length > 0);
    }
    
    getTiles () {
        return this.getPieces().map(piece => piece.getTiles().filter(tile => tile.getFace() == this)[0]);
    }
    
    getPositionedTiles () {
        let positionedTiles = new Array(9);
        
        for(let tile of this.getTiles()) {
            //console.log('TILE FOR FACE', face.id, tile.getPositionOnFace());
            positionedTiles[tile.getPositionOnFace()] = tile;
        }
        
        return positionedTiles;
    }
    
    getOppositeFace () {
        return this.parent.faces[getOppositeColor(this.id)];
    }
    
    getTileAtPosition(position) {
        let tiles = this.getTiles();
        let toReturn = tiles[tiles.map(tile => tile.getPositionOnFace()).indexOf(position)];
        return typeof toReturn == 'undefined' ? null : toReturn;
    }
    
    turn (direction) {
        if(isOddColor(this.id)) {
            direction = direction == CLOCKWISE ? COUNTER_CLOCKWISE : CLOCKWISE;
        }
        let tilesOnFace = this.getTiles();
        for(let tile of tilesOnFace) {
            let piece = tile.getParentPiece();
            let otherTilesOnPiece = tile.getOtherTilesOnPiece();
            /*console.log('Tile face:', tile.getFace().id);
            console.log('Tile color:', tile.getColor());
            console.log('Tile position on face:', tile.getPositionOnFace());
            console.log('Other tiles on piece:', otherTilesOnPiece.map(t=>t.face.id));
            console.log('Other colors on piece:', otherTilesOnPiece.map(t=>t.color));*/
            for(let otherTile of otherTilesOnPiece) {
                
                //console.log(otherTile.getPositionOnFace(), otherTile);
                
                let increment = (direction == CLOCKWISE ? -1 : 1);
                
                otherTile.face = this.parent.getFaceById(incrementColor(otherTile.face.id, increment));
                
                if(otherTile.face.id == this.id || otherTile.face.id == getOppositeColor(this.id)) {
                otherTile.face = this.parent.getFaceById(incrementColor(otherTile.face.id, increment));
                }
                
                //console.log('Face changed to:', otherTile.face.id, otherTile.getPositionOnFace());
            }
        }
    }
}

export class Piece {
    constructor (parent, tiles) {
        this.parent = parent;
        this.tiles = tiles.map(tile => new Tile(this, tile.color, tile.face));
    }
    
    getTiles () {
        return this.tiles;
    }
    
    getType () {
        return this.type;
    }
}

export class CornerPiece extends Piece {
    constructor (parent, tiles) {
        super(parent, tiles);
        this.type = CORNER_PIECE;
        if(this.tiles.length != 3) {
            throw new Error(chalk.red('Corner pieces must have 3 tiles!'));
        }
    }
}

export class EdgePiece extends Piece {
    constructor (parent, tiles) {
        super(parent, tiles);
        this.type = EDGE_PIECE;
        if(this.tiles.length != 2) {
            throw new Error(chalk.red('Edge pieces must have 2 tiles!'));
        }
    }
}

export class CenterPiece extends Piece {
    constructor (parent, tiles) {
        super(parent, tiles);
        this.type = CENTER_PIECE;
        if(this.tiles.length != 1) {
            throw new Error(chalk.red('Center pieces must have 1 tile!'));
        }
    }
}

export class Tile {
    constructor (parent, color, face) {
        this.parent = parent;
        this.color = color;
        this.face = face;
    }
    
    getColor () {
        return this.color;
    }
    
    getFace () {
        return this.face;
    }
    
    setFace (face) {
        this.face = face;
    }
    
    getParentPiece () {
        return this.parent;
    }
    
    getOtherTilesOnPiece () {
        return this.getParentPiece().getTiles().filter(tile => tile != this);
    }
    
    getPositionOnFace () {
        let cube = this.parent.parent;
        let piece = this.getParentPiece();
        
        let surroundingFaces = COLORS.filter(color => color != this.face.getId() && color != getOppositeColor(this.face.getId())).map(id => cube.getFaceById(id));
        
        let otherTilesOnPiece = this.getOtherTilesOnPiece();
        let otherFacesOnPiece = otherTilesOnPiece.map(tile => tile.face.id);
        
        /*console.log('---');
        console.log('Face color:', this.face.getId());
        console.log('Tile color:', this.color);
        console.log('Piece type:', piece.getType());
        console.log('Other faces on piece:', otherFacesOnPiece);
        console.log('Surrounding faces: ', surroundingFaces.map(f=>f.id));*/
        
        let faceIsEven = !isOddColor(this.face.getId());
        
        if(piece.getType() == CENTER_PIECE) {
            return 4;
        } else if (piece.getType() == EDGE_PIECE) {
            if(otherFacesOnPiece.includes(incrementColor(this.face.getId(), 1))) {
                // On top edge
                return 1;
            }
            if(otherFacesOnPiece.includes(incrementColor(this.face.getId(), 2))) {
                // On right/left (when even) edge
                return faceIsEven ? 3 : 5;
            }
            if(otherFacesOnPiece.includes(incrementColor(this.face.getId(), 4))) {
                // On bottom edge
                return 7;
            }
            if(otherFacesOnPiece.includes(incrementColor(this.face.getId(), 5))) {
                // On left/right (when even) edge
                return faceIsEven ? 5 : 3;
            }
        } else if (piece.getType() == CORNER_PIECE) {
            if(otherFacesOnPiece.includes(incrementColor(this.face.getId(), 1))) {
                // On top edge // Either 0 or 2 //
                if(otherFacesOnPiece.includes(incrementColor(this.face.getId(), 2))) {
                    // On right/left (when even) edge
                    return faceIsEven ? 0 : 2;
                } else {
                    // On left/right (when even) edge
                    return faceIsEven ? 2 : 0;
                }
            }
            if(otherFacesOnPiece.includes(incrementColor(this.face.getId(), 4))) {
                // On bottom edge // Either 6 or 8 //
                if(otherFacesOnPiece.includes(incrementColor(this.face.getId(), 5))) {
                    // On right/left (when even) edge
                    return faceIsEven ? 8 : 6;
                } else {
                    // On left/right (when even) edge
                    return faceIsEven ? 6 : 8;
                }
            }
        }
    }
}