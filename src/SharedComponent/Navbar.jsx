    import React, { useState, useEffect } from "react";
    import logo from "../assets/safetalk-logo.png";
    import menu from "../assets/menu.svg";
    import Button from "./Button";

    function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    // Background change 
    useEffect(() => {
        const handleScroll = () => {
        if (window.scrollY > 30) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close menu on desktop resize
    useEffect(() => {
        const handleResize = () => {
        if (window.innerWidth >= 768) {
            setIsOpen(false);
        }
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <header
        className={`
            fixed top-0 left-0 right-0 z-50 transition-all duration-300
            ${isScrolled ? "bg-gray-100 shadow-md py-2" : "bg-transparent py-4"}
        `}
        >
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
            {/* Logo */}
            <img src={logo} alt="SafeTalk Logo" className="h-10 w-auto" />

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-6">
            <a
                href="#"
                className="hover:text-blue-600 transition-colors text-lg font-medium"
            >
                Find Therapists
            </a>
            <Button variant="outline">Log In</Button>
            <Button variant="primary">Sign Up</Button>
            </nav>

            {/* Mobile Button */}
            <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-200 transition"
            onClick={() => setIsOpen(!isOpen)}
            >
            <img src={menu} alt="Menu" className="h-7 w-7" />
            </button>
        </div>

        {/* Mobile Dropdown */}
        <div
            className={`
            md:hidden bg-white overflow-hidden transition-all duration-300 shadow-md
            ${isOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"}
            `}
        >
            <nav className="px-4 py-3">
            <ul className="flex flex-col gap-4">
                <li className="text-center">
                <a
                    href="#"
                    className="block py-2 text-lg hover:text-blue-600 transition font-medium"
                    onClick={() => setIsOpen(false)}
                >
                    Find Therapists
                </a>
                </li>

                <li>
                <Button variant="outlineLg" onClick={() => setIsOpen(false)}>
                    Log In
                </Button>
                </li>
                <li>
                <Button variant="primaryLg" onClick={() => setIsOpen(false)}>
                    Sign Up
                </Button>
                </li>
            </ul>
            </nav>
        </div>
        </header>
    );
    }

    export default Navbar;
