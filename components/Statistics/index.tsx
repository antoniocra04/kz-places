import React from 'react'

import { Title } from '../Title/index'

import { statisticsFieds } from '../../configs/Statistics'

export const Statistics: React.FC = () => {
    return (
        <section className="statistics">
            <Title text="Статистика" color="#242424" />
            <p className="statistics__text">
                Немного основных характеристик о Казахстане
            </p>
            <section className="statistics__items">
                {statisticsFieds.map((stat, index) => (
                    <div key={index} className="statistics__item">
                        <div className="statistics__item-title">
                            {stat.title}
                        </div>
                        <div className="statistics__item-subtitle">
                            {stat.subtitle}
                        </div>
                    </div>
                ))}
            </section>
        </section>
    )
}
