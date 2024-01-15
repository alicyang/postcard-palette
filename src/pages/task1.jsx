import React from 'react'
import Postcard from '../components/Postcard'

export default function Task1({onClick, isFrontSide}) {
    return (
        <main>
            <Postcard onClick={onClick} isFrontSide={isFrontSide} />
        </main>
    )
}