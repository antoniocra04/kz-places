import React from 'react'

import { SliceSection } from '../components/SliceSection'
import { Statistics } from '../components/Statistics'

import { mainSliceSection } from '../configs/SliceSection'

const index: React.FC = () => {
    return (
        <>
            <SliceSection
                text={mainSliceSection.text}
                title={mainSliceSection.title}
                img={mainSliceSection.img}
            />
            <Statistics />
        </>
    )
}

export default index
