export const dayLeft = (end_date: string) => {
    const ONE_DAY = 1000 * 60 * 60 * 24
    const dueDate = end_date?.split('/')?.reverse()?.join('-')
    const endDate = new Date(dueDate).getTime()
    const present = new Date().getTime()
    const diff =  endDate - present

    return Math.round(diff / ONE_DAY)
}