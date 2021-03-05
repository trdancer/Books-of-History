export const SET_DATE_MONTH = 'SET_DATE_MONTH'
export const SET_DATE_DAY = 'SET_DATE_DAY'
export const setDateDayCreator = (day) => {
    return {
        type : SET_DATE_DAY,
        payload : day
    }
}
export const setDateMonthCreator = (month) => {
    return {
        type : SET_DATE_MONTH,
        payload : month
    }
}