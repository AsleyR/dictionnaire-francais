"use client"

import { faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

interface SearchBarValues {
    values: {
        search_query: string
    }
}

function SearchBar() {
    const router = useRouter()

    const [values, setValues] = useState<SearchBarValues['values']>({
        'search_query': ""
    })

    const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
        setValues({
            'search_query': e.currentTarget.value
        })
    }

    const handleDeleteBtn = () => {
        setValues({
            'search_query': ""
        })

        // Get text input and focus on it
        document.getElementById('search_query')?.focus()
    }

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        setValues({
            'search_query': ""
        })

        router.push(`/dictionary/fr?search_query=${values.search_query}`)
    }

    return (
        <form action=""
            onSubmit={onSubmit}
            className='grid grid-cols-[1fr_min-content] text-xl'
        >
            <div className="flex px-2 space-x-2 bg-white border-y border-l border-gray-300 items-center rounded-l-md">
                <input
                    id='search_query'
                    type="text"
                    name='search_query'
                    onChange={handleInputChange}
                    value={values.search_query}
                    className='px-2 py-3 w-full focus:outline-none rounded-md'
                    placeholder='Rechercher un mot...'
                />
                <button type="button" className={values.search_query.length != 0 ? `text-gray-900 hover:text-gray-500 p-2` : "text-white"}
                    onClick={handleDeleteBtn}
                    disabled={values.search_query ? false : true}
                >
                    <FontAwesomeIcon
                        className='w-5 h-5'
                        icon={faXmark}
                    />
                </button>
            </div>
            <button type='submit'
                className="bg-blue-600 hover:bg-blue-700 text-gray-50 py-3 px-4 rounded-r shadow-sm duration-300"
            >
                <FontAwesomeIcon
                    className='w-5 h-5'
                    icon={faMagnifyingGlass}
                />
            </button>
        </form>
    )
}

export default SearchBar