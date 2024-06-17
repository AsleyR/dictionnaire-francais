import React from 'react'

function Footer() {
    return (
        <footer className='bg-blue-900 text-gray-100 py-[1rem] border-t border-gray-300 text-center grid justify-center shadow-lg'>
            <p className=''>Site web developpé par <a className='text-purple-300 hover:underline duration-200' target={'_blank'} href='https://asleyrobleto.com'>Asley Robleto</a>. 2024.</p>
            <p>Voir le <a href='https://github.com/AsleyR/dictionnaire-francais' target={'_blank'} className='text-purple-300 hover:underline duration-200'>repo</a> du projet.</p>
        </footer>
    )
}

export default Footer