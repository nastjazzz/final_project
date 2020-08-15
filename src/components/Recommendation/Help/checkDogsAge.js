export const checkDogsAge = (number) => {
    if (number < 1) {
        return `${number}м`
    } else if (number >= 1 && number < 5) {
        return `${number}г`
    } else {
        return `${number}л`
    }
}