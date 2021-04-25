import React from 'react'

interface ITitle {
    text: string
    color: string
}

export const Title: React.FC<ITitle> = (props) => {
    return (
        <h2 className="title" style={{ color: props.color }}>
            {props.text}
        </h2>
    )
}
