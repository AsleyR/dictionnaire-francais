export default function capitalizeFirstLetter(word: string): string {
    let firstCharCapitalize = word.charAt(0).toUpperCase()
    const remainingLetters = word.slice(1)

    const capitalizedWord = firstCharCapitalize + remainingLetters

    return (capitalizedWord)
}