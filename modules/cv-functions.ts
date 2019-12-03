import {WHITE, GREEN, RED, YELLOW, BLUE, ORANGE} from './constants'
import * as cv from 'opencv4nodejs'

export function getMaskRangesForColor (color: number): Range[] {
    const table = {}
    table[WHITE] = [
        {
            lower: [0, 0, 240],
            upper: [179, 20, 255]
        }
    ]
    table[GREEN] = [
        {
            lower: [41, 50, 50],
            upper: [80, 255, 255]
        }
    ]
    table[RED] = [
        {
            lower: [0, 50, 50],
            upper: [5, 255, 255]
        },
        {
            lower: [160, 50, 50],
            upper: [179, 255, 255]
        }
    ]
    table[YELLOW] = [
        {
            lower: [20, 50, 50],
            upper: [40, 255, 255]
        }
    ]
    table[BLUE] = [
        {
            lower: [85, 50, 50],
            upper: [130, 255, 255]
        }
    ]
    table[ORANGE] = [
        {
            lower: [6, 50, 50],
            upper: [19, 255, 255]
        }
    ]

    return table[color]
}

export function getImageMaskForRange (image: cv.Mat, lower: number[], upper: number[]): cv.Mat {
    return image.inRange(new cv.Vec3(lower[0], lower[1], lower[2]), new cv.Vec3(upper[0], upper[1], upper[2]))
}

export function getImageMaskForRanges (image: cv.Mat, ranges: Range[]): cv.Mat {
    // Ranges looks like this: [ { lower: [1,2,3], upper: [1,2,3] } ]
    let mask = null
    for (const range of ranges) {
        const maskToAdd = getImageMaskForRange(image, range.lower, range.upper)
        if (mask === null) {
            mask = maskToAdd
        } else {
            mask = mask.bitwiseOr(maskToAdd)
        }
    }
    return mask
}

export function getImageMaskForColor (image: cv.Mat, color: number): cv.Mat {
    return getImageMaskForRanges(image, getMaskRangesForColor(color))
}

export function multiChannelApplyMask (img: cv.Mat, mask): cv.Mat {
    const channels = img.splitChannels()
    const maskedChannels = channels.map(c => c.bitwiseAnd(mask))
    const output = new cv.Mat(maskedChannels)

    return output
}

interface Range {
    lower: number[]
    upper: number[]
}