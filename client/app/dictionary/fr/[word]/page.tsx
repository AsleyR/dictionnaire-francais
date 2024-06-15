import VerbeInfoBlockContainer from '@/app/(components)/word/VerbeInfoBlockContainer'
import capitalizeFirstLetter from '@/app/(libs)/capitalizeFirstLetter'
import React from 'react'
import getVerbeByVerbe from '@/app/(actions)/verbes/getVerbeByVerbe'
import WordUtilisation from '@/app/(components)/word/WordUtilisation'
import Link from 'next/link'

interface WordPageProps {
    params: {
        word: string
    }
}

async function page({ params }: WordPageProps) {
    const decodedParams = decodeURIComponent(params.word || "")

    const verbe = await getVerbeByVerbe(decodedParams).catch(err => null)

    if (!verbe) {
        return (
            <div className="flex flex-col text-center gap-10 md:gap-5 px-5 pt-[5rem] pb-[4rem]">
                <h2 className='font-bold text-2xl md:text-3xl'>Malheureusement, la page associée à ce verbe n'existe pas.</h2>
                <div className="flex justify-center">
                    <Link href={'/'}
                        className='text-sm md:text-base p-3 w-fit border border-gray-300 hover:border-transparent hover:bg-black/60 hover:text-white duration-200 rounded shadow-sm'>
                        Page d'accueil
                    </Link>
                </div>
            </div>
        )
    }

    const capitalizedVerbe = capitalizeFirstLetter(decodeURIComponent(params.word))

    return (
        <div className='px-mobilex md:px-normalx pt-[3rem] text-xl space-y-5 pb-[4rem]'>
            <h1 className='font-bold text-2xl'>{capitalizedVerbe}</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                <VerbeInfoBlockContainer
                    header={"Quelque Chose"}
                    body={verbe.qqch}
                />
                <VerbeInfoBlockContainer
                    header={"Quelqu'un"}
                    body={verbe.qqn}
                />
                <VerbeInfoBlockContainer
                    header={"Verbe Infinitif"}
                    body={verbe.vi}
                />
                <VerbeInfoBlockContainer
                    header={"Remarques"}
                    body={verbe.remarques}
                />
            </div>

            <WordUtilisation word={verbe} />
        </div>
    )
}

export default page