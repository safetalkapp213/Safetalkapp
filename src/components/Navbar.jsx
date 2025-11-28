import React, { useState, useEffect } from 'react';
import logo from "../assets/safetalk-logo.png"
import menu from "../assets/menu.svg"
import Button from "./Button"

function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    // Close menu when clicking outside or on resize
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsOpen(false);
            }
        };

        const handleClickOutside = (event) => {
            if (!event.target.closest('nav') && !event.target.closest('button')) {
                setIsOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            window.removeEventListener('resize', handleResize);
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <header className="relative flex justify-between items-center p-4 bg-white shadow-sm">
            {/* Logo */}
            <div>
                <img src={logo} alt="SafeTalk Logo" className="h-10 w-auto" />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex">
                <ul className="flex items-center space-x-4">
                    <li><a href="#" className="hover:text-blue-600 transition-colors text-lg">Find Therapists</a></li>
                    <li><Button variant="outline">Log In</Button></li>
                    <li><Button variant="primary">Sign Up</Button></li>
                </ul>
            </nav>

            {/* Mobile Menu Button */}
            <button
                className="block md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
                aria-expanded={isOpen}
            >
                <img src={menu} alt="Menu" className="h-6 w-6" />
            </button>

            {/* Mobile Dropdown Menu */}
            <div className={`
                absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-200 
                transition-all duration-300 ease-in-out overflow-hidden
                md:hidden z-50
                ${isOpen ? 'max-h-96 opacity-100 visible' : 'max-h-0 opacity-0 invisible'}
            `}>
                <nav className="p-4">
                    <ul className="flex flex-col space-y-3">
                        <li className='text-center'>
                            <a 
                                href="#" 
                                className="block py-2 px-4 hover:bg-gray-50 rounded-lg transition-colors text-xl"
                                onClick={() => setIsOpen(false)}
                            >
                                Find Therapists
                            </a>
                        </li>
                        <li className="pt-2 border-t border-gray-100">
                            <Button 
                                variant="outlineLg"
                                onClick={() => setIsOpen(false)}
                            >
                                Log In
                            </Button>
                        </li>
                        <li>
                            <Button 
                                variant="primaryLg" 
                                onClick={() => setIsOpen(false)}
                            >
                                Sign Up
                            </Button>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Navbar