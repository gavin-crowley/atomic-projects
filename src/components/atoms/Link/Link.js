import React from 'react'
import './Link.scss'


export const Link = (props) => {
    return (
        <a
            className='c-btn'
            href={props.href}
            target={props.target}
            {...props}>
            {props.children}
        </a>
    );

};