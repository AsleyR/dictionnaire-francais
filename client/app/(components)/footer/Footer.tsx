import React from 'react'

function Footer() {
    return (
        <footer className='bg-[#54595D] py-[1rem] text-center text-gray-50 grid justify-center drop-shadow-lg'>
            <p className=''>Site web developpé par <a className='text-blue-400 hover:underline duration-200' target={'_blank'} href='https://asleyrobleto.com'>Asley Robleto</a>. 2024.</p>
            <p>Voir le <a href='https://github.com/AsleyR/dictionnaire-francais' target={'_blank'} className='text-blue-400 hover:underline duration-200'>repo</a> du projet.</p>
        </footer>
    )
}

export default Footer