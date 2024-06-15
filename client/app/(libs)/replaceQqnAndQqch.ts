
// Replaces all instances of "qqn" with "quelqu'un" and "qqch" with "quelque chose"
export default function replaceQqnAndQqch(word: string) {
    let newWord = word

    if (word.includes('qqn')) {
        newWord = word.replace("qqn", "quelqu'un")
    }

    if (word.includes('qqch')) {
        newWord = word.replace("qqch", "quelque chose")
    }

    return newWord
}