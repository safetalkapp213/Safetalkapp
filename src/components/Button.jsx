import React from 'react'

const Button = ({children, variant='primary', onClick}) => {
    const baseStyles = "px-4 py-2 rounded font-medium transition-colors duration-200";

    const variants = {
        primary:"bg-primary text-white hover:bg-primary/90",
        secondary: "bg-white text-primary border border-primary hover:bg-mint",
        outline: "border border-charcoal text-charcoal hover:bg-gray-100"
    }

  return (
    <button onClick={onClick} className={`${baseStyles} ${variants[variant]}`}>{children}</button>
  )
}

export default Button