import React from 'react'

import { Title } from '../components/Title'
import { List } from '../components/List'

import { places as info } from '../configs/places'

const places: React.FC = () => {
    return (
        <div className="places">
            <Title text="Список сокральных мест" color="#242424" />
            <List places={info} />
        </div>
    )
}

export default places
