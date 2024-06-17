import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Logo() {
    return (
        <Link href={'/'} className='flex'>
            <Image
                className='hidden md:block w-[18rem]'
                width={500}
                height={500}
                src={'/nav-logo.svg'}
                alt='Logo'
            />
            <h2 className='block md:hidden font-bold text-3xl'>DF</h2>
        </Link>
    )
}
