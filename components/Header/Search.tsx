import React from 'react'
import { useRouter } from 'next/router'

import { places } from '../../configs/places'

export const Search: React.FC = () => {
    const [searchValue, setSearchValue] = React.useState('')

    const router = useRouter()

    const searchRef = React.useRef<HTMLDivElement>()
    const inputRef = React.useRef<HTMLInputElement>()

    React.useEffect(() => {
        if (searchValue === '' || inputRef.current !== document.activeElement) {
            searchRef.current.style.visibility = 'hidden'
        } else {
            searchRef.current.style.visibility = 'visible'
        }
    }, [searchValue])

    const goBySearch = (id) => {
        inputRef.current.blur()
        setSearchValue('')
        router.push(`/place/${id}`)
    }

    return (
        <>
            <input
                ref={inputRef}
                type="text"
                placeholder="Поиск"
                className="header__input"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
            />
            <div ref={searchRef} className="search">
                {places
                    .filter((p) => p.title.indexOf(searchValue) !== -1)
                    .map((place) => (
                        <p
                            onClick={() => goBySearch(place.id)}
                            key={place.id}
                            className="search__item"
                        >
                            {place.title}
                        </p>
                    ))}
            </div>
        </>
    )
}

// Сделай ог блюр при переходе по сылке
