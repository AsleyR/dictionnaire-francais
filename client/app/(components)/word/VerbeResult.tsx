import { Word } from '@/app/(libs)/@types/index.t'
import capitalizeFirstLetter from '@/app/(libs)/capitalizeFirstLetter'
import Link from 'next/link'
import React from 'react'

export default function VerbeResult({ verbe }: { verbe: Word }) {
    return (
        <div
            className="grid grid-auto w-full hover:bg-gray-100 duration-200 border border-gray-200 rounded shadow-sm"
        >
            <Link className='w-full p-3' href={`/dictionary/fr/${verbe.verbe}`}>
                <h3 className='font-bold text-lg'>{capitalizeFirstLetter(verbe.verbe)}</h3>
            </Link>
        </div>
    )
}
