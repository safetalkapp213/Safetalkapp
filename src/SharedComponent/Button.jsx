import React from 'react'

const Button = ({children, variant='primary', onClick, className = ""}) => {

    const baseStyles = "px-4 py-2 rounded font-medium transition-colors duration-200";

    const variants = {
        primary:"bg-gradient-to-r from-green-400 to-blue-500 hover:bg-green-500 text-white rounded-full px-6",
        secondary: "bg-white text-primary border border-primary hover:bg-mint",
        outline: "bg-white hover:bg-green-500 text-black rounded-full px-6",
        primaryLg: "bg-primary text-white hover:bg-primary/90 text-xl w-full justify-center",
        secondaryLg: "bg-white text-primary border border-primary hover:bg-mint text-xl w-full justify-center",
        outlineLg: "border border-charcoal text-charcoal hover:bg-gray-100 text-xl w-full justify-center",
    }

    return (
        <button
            onClick={onClick}
            className={`${baseStyles} ${variants[variant] ?? ""} ${className}`}
        >
            {children}
        </button>
    )
}

export default Button
