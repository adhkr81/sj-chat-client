
export function createRoom (a , b) {
    if (a < b) {
        return `${a}_${b}`
    } else {
        return `${b}_${a}`
    }
}

export function myNameFirst (arr, me) {    
    const result = arr.reduce((acc, element) => {
        if (element === me) {
        return [element, ...acc];
        }
        return [...acc, element];
    }, []);

    return result
}  