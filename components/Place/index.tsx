import React from 'react'

import { Title } from '../Title'

interface IPlace {
    id: number
    title: string
    subtitle: string
    year: string
    geo: string
    discription: string
}

export const Place: React.FC<IPlace> = (props) => {
    return (
        <div className="place">
            <Title text={props.title} color={'#242424'} />
            <p className="place__info-text">
                Год: <span className="place__info-subtext">{props.year}</span>
            </p>
            <p className="place__info-text">
                Местоположение:{' '}
                <span className="place__info-subtext">{props.geo}</span>
            </p>
            <p className="place__info-text">
                Описание:{' '}
                <span className="place__info-subtext">{props.discription}</span>
            </p>
        </div>
    )
}
