export function removeDuplicates(array) {
    // https://stackoverflow.com/questions/9229645/remove-duplicate-values-from-js-array/9229821#9229821
    return Array.from(new Set(array));
}

export function removeDuplicateArrays(arrayOfArrays) {
    return removeDuplicates(arrayOfArrays.map(array => JSON.stringify(array.sort()))).map(array => JSON.parse(array));
}