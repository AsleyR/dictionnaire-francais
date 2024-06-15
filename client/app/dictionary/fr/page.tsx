import getVerbesByQuery from '@/app/(actions)/verbes/getVerbesByQuery'
import { Word } from '@/app/(libs)/@types/index.t'
import Link from 'next/link'
import React from 'react'

interface DictionarySearchResults {
    searchParams: {
        search_query?: string
    }
}

function RenderVerbesResults(props: { verbes: Word[] }) {
    return (
        <ul className='grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center'>
            {
                props.verbes.map((verb, index) => {
                    return (
                        <li key={`${index}-verbe-result`}
                            className="w-full p-3 hover:bg-gray-100 duration-200 border border-gray-200 rounded shadow-sm"
                        >
                            <Link href={`/dictionary/fr/${verb.verbe}`}>
                                <h3 className='font-bold text-lg'>{verb.verbe}</h3>
                            </Link>
                        </li>
                    )
                })
            }
        </ul>
    )
}

function RenderSearchResultsString({ search_query }: { search_query?: string }) {
    return (
        <h2 className='text-2xl'>
            {
                search_query && search_query.length !== 0 ?
                    `Résultats de rechereche "${search_query}"`
                    :
                    "Résultats de recherche"
            }
        </h2>
    )
}

async function page({ searchParams }: DictionarySearchResults) {
    const decodedSearchQuery = decodeURIComponent(searchParams.search_query || "")

    const verbes = await getVerbesByQuery(decodedSearchQuery).catch(err => null)

    if (!verbes || verbes.length === 0) {
        return (
            <div className='flex flex-col space-y-5 px-mobilex md:px-normalx pt-[3rem] pb-[4rem]'>
                <RenderSearchResultsString search_query={decodedSearchQuery} />
                <h3 className='font-bold text-xl text-center'>Aucun résultat trouvé</h3>
            </div>
        )
    }


    return (
        <div className='flex flex-col space-y-5 px-mobilex md:px-normalx pt-[3rem] pb-[4rem]'>
            <RenderSearchResultsString search_query={decodedSearchQuery} />
            <RenderVerbesResults verbes={verbes} />
        </div>
    )
}

export default page