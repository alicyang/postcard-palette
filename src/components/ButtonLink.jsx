import React from 'react'
import { NavLink as Link } from "react-router-dom";

export default function NextButton({to, buttonText}) {
    console.log(buttonText)
    return (
        <Link to={to}><button>{buttonText}</button></Link>
    )
}