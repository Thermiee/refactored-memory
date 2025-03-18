export const formatDateForComparison = (dateString: string) => {
    if (!dateString) return null

    try {
        if (dateString.includes("-")) {
            const parts = dateString.split("-")
            // Convert DD-MM-YYYY to Date object
            if (parts.length === 3 && parts[2].length === 4) {
                const [day, month, year] = parts
                const formattedDate = new Date(Number(year), Number(month) - 1, Number(day))
                formattedDate.setHours(0, 0, 0, 0)
                return formattedDate
            }
        }
        // Handle YYYY-MM-DD from input
        const inputDate = new Date(dateString)
        inputDate.setHours(0, 0, 0, 0)
        return inputDate
    } catch (error) {
        console.error("Error parsing date:", dateString, error)
        return null
    }
}