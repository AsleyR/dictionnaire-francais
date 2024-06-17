import Link from 'next/link'
import React from 'react'
import NavbarSearch from './NavbarSearch'
import MobileNavbarSearch from './MobileNavbarSearch'
import Logo from './Logo'

function Navbar() {
    return (
        <nav className='sticky z-10 top-0 grid grid-cols-2 h-[5rem] px-mobilex md:px-normalx items-center drop-shadow-sm border-b border-gray-300 bg-[#f8f9fa] text-gray-900'>
            <div className="w-fit">
                <Logo />
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