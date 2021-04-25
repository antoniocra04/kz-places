import React from 'react'
import { useRouter } from 'next/router'

import { Place } from '../../components/Place'

import { places } from '../../configs/places'

const place: React.FC = () => {
    const router = useRouter()
    const { id } = router.query

    //@ts-ignore
    const place = places.filter((p) => p.id === parseInt(id))
    return (
        <>
            <Place {...place[0]} />
        </>
    )
}

export default place
