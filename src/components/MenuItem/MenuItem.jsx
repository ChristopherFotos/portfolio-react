import React from 'react'

export default function MenuItem(props) {
    return ( 
            <span className="main__nav-item" onClick={props.slide} data-item={props.data}>
                <img src={props.img} data-item={props.data} alt="" className="main__nav-icon" />
                <p className='main__nav-text' data-item={props.data}>{props.text}</p>
            </span>
    )
}
