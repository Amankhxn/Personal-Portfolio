import React from 'react'

const Button = ({ children, classname, size = "default" , ...props }) => {

    const baseClass = "overflow-hidden rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-primary bg-primary text-primary-foreground hover:bg-primary/90 cursor-pointer shadow-lg shadow-primary/25 ";

    const sizeClass = {
        sm: "px-4 py-2 text-sm",
        default: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg"
    }

    const classes = `${baseClass} ${sizeClass[size]} ${classname}`;
    return (
        <button {...props} className={classes}  >
            <span className='flex justify-center items-center gap-2'>
                {children}
            </span>
        </button>
    )
}

export default Button
