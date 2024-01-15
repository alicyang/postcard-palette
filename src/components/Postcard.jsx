import React from 'react'
import '../styling/Postcard.css'

export default function Postcard({onClick, isFrontSide}) {
    let postcard
    if (isFrontSide) {
        postcard = (
            <section className="postcard" onClick={onClick}>
            <div className="postcard-sections">
                <input type="text" className="message-input" /> 
                <img />
                <input type="text" className="address-input" /> 
                <img />
            </div>
            </section>
        )
    } else postcard = (
        <section className="postcard" onClick={onClick}>
            <img />
        </section> 
    )

    return (
        postcard
    )
}