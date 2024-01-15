import React from 'react'
import ButtonLink from '../components/ButtonLink'
import '../styling/Home.css'


export default function Home() {
    return (
        <main className="home">
            <h1 className="title">Welcome to Postcard Palette</h1>
            <ButtonLink to="/task1" buttonText="Create a postcard" />
        </main>
    )
}
