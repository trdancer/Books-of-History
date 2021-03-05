export const numberToMonth = (number) => {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    return months[number-1]
}
export const numberDaysinMonth = (number) => {
    const days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    return days[number-1]
}