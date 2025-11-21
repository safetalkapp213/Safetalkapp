import React, { useState } from 'react';
import logo from "../assets/safetalk-logo.png"
import menu from "../assets/menu.svg"
import Button from "./Button"

function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <header className="flex justify-between items-center p-4">
            <div>
                <img src={logo} alt="SafeTalk Logo" className="h-10 w-auto" />
            </div>
            <button 
                className="block md:hidden"
                onClick={()=> {
                    setIsOpen(!isOpen)
                    className="hidden"
                }}>
                <img src={menu} alt="hamburger Menu" className="h-10 w-auto" />
            </button>

            <nav className="hidden md:flex">
            <ul className="flex items-center space-x-4">
                <li><a href="#">Find Therapists</a></li>
                <li><Button variant="outline">Log In</Button></li>
                <li><Button variant="primary">Sign In</Button></li>
            </ul>
            </nav>

            {isOpen && (
            <nav className="md:hidden mt-2">
                <ul className="flex flex-col space-y-2">
                <li><a href="#">Find Therapists</a></li>
                <li><Button variant="outline">Log In</Button></li>
                <li><Button variant="primary">Sign In</Button></li>
                </ul>
            </nav>
            )}


        </header>
    )
}

export default Navbar