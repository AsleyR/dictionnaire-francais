import { Word } from "@/app/(libs)/@types/index.t"
import capitalizeFirstLetter from "@/app/(libs)/capitalizeFirstLetter"

export default function WordUtilisation({ word }: { word: Word }) {
    const capitalizedVerbe = capitalizeFirstLetter(decodeURIComponent(word.verbe))

    function wordExamplesString(word: Word, capitalize: boolean = true, vi: boolean = false): string {
        let constructedWord = `${word.verbe}`

        // Assuming word.vi is not null
        if (vi) {
            constructedWord = `${constructedWord} ${word.vi}`

            return constructedWord
        }

        if (capitalize) {
            constructedWord = capitalizeFirstLetter(word.verbe)
        }

        if (word.qqch) {
            constructedWord = `${constructedWord} ${word.qqch}`
        }

        if (word.qqn) {
            constructedWord = `${constructedWord} ${word.qqn}`
        }

        return constructedWord
    }

    return (
        <div className="grid grid-auto gap-3">
            <h3>Usage</h3>
            <div className="flex flex-col gap-2 p-5 border border-gray-200 shadow-sm rounded">
                {
                    word.qqch || word.qqn ?
                        <p>{wordExamplesString(word)}</p>
                        : null
                }
                {
                    word.vi ? <p>{`${capitalizedVerbe} ${word.vi}`}</p> : null
                }
            </div>
        </div>
    )
}