import React from 'react'
import { useRouter } from 'next/router'

interface IList {
    places: Array<{
        id: number
        title: string
        subtitle: string
        year: string
        geo: string
        discription: string
    }>
}

export const List: React.FC<IList> = (props) => {
    const router = useRouter()

    return (
        <div className="list">
            {props.places.map((place) => (
                <div
                    onClick={() => router.push(`/place/${place.id}`)}
                    key={place.id}
                    className="list__item"
                >
                    <div className="list__item-title">{place.title}</div>
                    <div className="list__item-subtitle">{place.subtitle}</div>
                </div>
            ))}
        </div>
    )
}
