import React, { useState } from 'react';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="border-1 shadow-md p-4">
            <div className="container mx-auto flex justify-between items-center">
                <img
                    src={"https://coderower.com/images/logo.svg"}
                    alt="logo"
                    className="w-[200px]"
                />
                <div className="hidden md:flex space-x-16 items-center">
                    <a href="https://coderower.com/">Home</a>
                    <a href="https://coderower.com/about-us/">About</a>
                    <a href="https://coderower.com/about-us/#">Services</a>
                    <a href="https://coderower.com/get-in-touch/" className="border-2 border-black rounded-full p-2">
                        Contact Us
                    </a>
                </div>
            </div>
            <div className="md:hidden flex mx-auto">
                    <button
                        className="text-black focus:outline-none"
                        onClick={handleMenuToggle}
                    >
                        {menuOpen ? 'Close' : 'Menu'}
                    </button>
                    {menuOpen && (
                        <div className="mt-2 ">
                            {/* Add your responsive menu items here */}
                            <a href="https://coderower.com/" className="block text-black py-2">
                                Home
                            </a>
                            <a href="https://coderower.com/about-us/" className="block text-black py-2">
                                About
                            </a>
                            <a href="https://coderower.com/about-us/#" className="block text-black py-2">
                                Services
                            </a>
                            <a href="https://coderower.com/get-in-touch/" className="block text-black py-2">
                                Contact Us
                            </a>
                        </div>
                    )}
                </div>
        </nav>
    );
};

export default Navbar;
