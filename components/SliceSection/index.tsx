import React from 'react'

import { Title } from '../Title/index'

interface ISliceSection {
    title: string
    text: string
    img: string
}

export const SliceSection: React.FC<ISliceSection> = (props) => {
    return (
        <section className="slice-section">
            <section className="slice-section__text-section">
                <Title text={props.title} color="#ffffff" />
                <p className="slice-section__text">{props.text}</p>
            </section>
            <section
                style={{ backgroundImage: `url(${props.img})` }}
                className="slice-section__img-section"
            ></section>
        </section>
    )
}
