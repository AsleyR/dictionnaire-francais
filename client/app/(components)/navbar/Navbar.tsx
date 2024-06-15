import Link from 'next/link'
import React from 'react'
import NavbarSearch from './NavbarSearch'
import MobileNavbarSearch from './MobileNavbarSearch'

function Navbar() {
    return (
        <nav className='sticky z-10 top-0 grid grid-cols-2 h-[5rem] px-mobilex md:px-normalx items-center drop-shadow-sm border-b border-gray-300 bg-[#f8f9fa] text-gray-900'>
            <div className="w-fit">
                <Link href={'/'} className='flex'>
                    <h2 className='hidden md:block font-bold text-2xl'>Dictionnaire Français</h2>
                    <h2 className='block md:hidden font-bold text-3xl'>DF</h2>
                </Link>
            </div>
            <div className="">
                <ul className='flex space-x-5 md:space-x-7 items-center justify-end text-lg'>
                    <div className="lg:hidden">
                        <MobileNavbarSearch />
                    </div>
                    <div className="hidden lg:block">
                        <NavbarSearch />
                    </div>
                    {/* <li>
                        <Link href={'/'} className='hover:text-gray-500 transition-all'>Log In</Link>
                    </li> */}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar