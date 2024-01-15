import React from 'react'
import Navbar from "./components/Navbar"
import NextButton from "./components/ButtonLink"
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom"
import Home from './pages/home'
import Task1 from './pages/task1'
import Task2 from './pages/task2'
import Task3 from './pages/task3'


export default function App() {
    const [isFrontSide, setIsFrontSide] = React.useState(true)

    function flip() {
        setIsFrontSide(prevSide => !prevSide)
    }

    return (
        <>
           <Router>
                <Navbar />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/task1" element={<Task1 onClick={flip} isFrontSide={isFrontSide} />} />
                    <Route path="/task2" element={<Task2 onClick={flip} isFrontSide={isFrontSide} />} />
                    <Route path="/task3" element={<Task3 onClick={flip} isFrontSide={isFrontSide} />} />
                </Routes>
            </Router> 
        </>
    )
}
