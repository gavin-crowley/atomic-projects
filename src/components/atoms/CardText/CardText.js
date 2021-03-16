import React from 'react'
import './CardText.scss'

export const CardText = ({ text }) => {
    const { h2, p } = text
    return (
        <>
            <h2 className="c-card__title">{h2}</h2>
            <p className="c-card__body">
                {p}
            </p>
        </>
    )
}

