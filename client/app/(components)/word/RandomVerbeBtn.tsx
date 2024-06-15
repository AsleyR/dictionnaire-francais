import getRandomVerbe from '@/app/(actions)/verbes/getRandomVerbe'
import React from 'react'

export default async function RandomVerbeBtn() {
    const randomVerbe = await getRandomVerbe().then((verbe) => verbe.verbe)

    return (
        <a href={`/dictionary/fr/${randomVerbe}`}
            className='w-fit border border-gray-300 hover:border-transparent hover:bg-black/60 hover:text-white duration-200 rounded shadow-sm p-3'
        >
            <p>{`J'ai de la chance`}</p>
        </a>
    )
}
