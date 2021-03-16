import React from 'react'
import { CardText } from '../../atoms/CardText/CardText'
import { Link } from '../../atoms/Link/Link'
import './TechTipsCard.scss'


const TechTipsCard = ({ cardInfo }) => {
    const { image, linkText, text } = cardInfo
    return (
        <div className="c-card">
            <img
                className="c-card__img"
                src={image}
                alt="an iphone on a macbook with dramatic lighting"
            />
            <div className="c-card__content">
                <CardText text={text} />
                <div className="c-card__footer">
                    <p className="c-card__read-time">
                        <span>15</span>
                        minute<br />read
                     </p>
                    <Link>{linkText}</Link>
                </div>
            </div>
        </div>
    )
}





export default TechTipsCard
