
import React from "react"
import { Nav, NavLink, NavMenu } from "./NavbarElements"
 
export default function Navbar() {
    return (
        <Nav>
            <NavMenu>
                <NavLink to="/task1" >1</NavLink>
                <NavLink to="/task2" >2</NavLink>
                <NavLink to="/task3" >3</NavLink>
            </NavMenu>
        </Nav>
    )
}