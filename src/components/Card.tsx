import React from 'react'
import './Card.scss'

const Card: React.FC<Props> = props => (
    <div className="Card">
        <div className="c-header">
            <img src={props.icon} alt={props.title} />
            {props.title}
        </div>
        {props.children}
    </div>
)

interface Props {
    title: string
    icon: string
}

export default Card