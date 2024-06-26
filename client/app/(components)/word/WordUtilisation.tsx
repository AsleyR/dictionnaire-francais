import { Word } from "@/app/(libs)/@types/index.t"
import capitalizeFirstLetter from "@/app/(libs)/capitalizeFirstLetter"
import replaceQqnAndQqch from "@/app/(libs)/replaceQqnAndQqch"

export default function WordUtilisation({ word }: { word: Word }) {
    const capitalizedVerbe = capitalizeFirstLetter(decodeURIComponent(word.verbe))

    function wordExamplesString(word: Word, vi: boolean = false, capitalize: boolean = true): string {
        let constructedWord = `${word.verbe}`

        if (capitalize) {
            constructedWord = capitalizeFirstLetter(word.verbe)
        }

        // Assuming word.vi is not null
        if (word.prepositions.vi && vi) {
            const replaceQqchAndQqchWord = replaceQqnAndQqch(word.prepositions.vi)
            constructedWord = `${constructedWord} ${replaceQqchAndQqchWord}`

            return constructedWord
        }

        if (word.prepositions.qqch) {
            const replaceQqchWord = replaceQqnAndQqch(word.prepositions.qqch)
            constructedWord = `${constructedWord} ${replaceQqchWord}`
        }

        if (word.prepositions.qqn) {
            const replaceQqnhWord = replaceQqnAndQqch(word.prepositions.qqn)
            constructedWord = `${constructedWord} ${replaceQqnhWord}`
        }

        return constructedWord
    }

    return (
        <div className="grid grid-auto gap-3">
            <h3>Usage</h3>
            <div className="flex flex-col gap-2 p-5 border border-gray-200 shadow-sm rounded">
                {
                    word.prepositions.qqch || word.prepositions.qqn ?
                        <p>{wordExamplesString(word, false)}</p>
                        : null
                }
                {
                    word.prepositions.vi ? <p>{`${wordExamplesString(word, true)}`}</p> : null
                }
            </div>
        </div>
    )
}