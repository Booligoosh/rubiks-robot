export function removeDuplicates (array: unknown[]): any[] {
    // https://stackoverflow.com/questions/9229645/remove-duplicate-values-from-js-array/9229821#9229821
    return Array.from(new Set(array))
}

export function removeDuplicateArrays (arrayOfArrays: unknown[][]): any[][] {
    return removeDuplicates(arrayOfArrays.map((array: unknown[]) => JSON.stringify(array.sort())))
        .map((array: string) => JSON.parse(array))
}