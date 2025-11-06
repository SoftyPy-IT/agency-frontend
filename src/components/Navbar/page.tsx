/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown, Hamburger, X } from "lucide-react";

const Navbar = () => {
    const [isClick, setIsClick] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleNavbar = () => {
        setIsClick(!isClick);
    };

    // Scroll effect
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navItems = [
        {
            title: "Home",
            href: "/",
            submenu: null
        },
        {
            title: "About Us",
            href: "#",
            submenu: [
                { name: "History", href: "/about/history" },
                { name: "At a Glance", href: "/about/ataglance" },
     
            ]
        },
        {
            title: "Administration",
            href: "#",
            submenu: [
                { name: "Governing Body", href: "/administration/governingBody" },
                { name: "Message", href: "/administration/message" },
               
            ]
        },
        
        {
            title: "Gallery",
            href: "#",
            submenu: [
                { name: "Images", href: "/gallery/images" },
                { name: "Videos", href: "/gallery/videos" }
            ]
        },
        {
            title: "Contact",
            href: "/contact",
            submenu: null
        },
        {
            title: "Notice",
            href: "/notice",
            submenu: null
        }
    ];

    const renderNavItem = (item: any, index: number) => (
        <li key={index} className="relative group">
            {item.submenu ? (
                <>
                    <Link href={item.href} className="flex gap-1 items-center mr-3 py-2 hover:text-gray-300 transition-colors">
                        {item.title} <ChevronDown className="h-4 w-4" />
                    </Link>
                    <ul className="submenu absolute top-full left-0 bg-white text-black rounded shadow-lg min-w-48 z-50 hidden group-hover:block">
                        {item.submenu.map((subItem: any, subIndex: number) => (
                            <li key={subIndex}>
                                <Link href={subItem.href} className="block px-4 py-2 hover:bg-gray-100 transition-colors">
                                    {subItem.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </>
            ) : (
                <Link href={item.href} className="flex gap-1 items-center mr-3 py-2 hover:text-gray-300 transition-colors">
                    {item.title}
                </Link>
            )}
        </li>
    );

    const navMenu = (
        <div>
            <ul className="flex flex-col md:flex-row lg:flex-row gap-3 md:gap-0 lg:gap-0 items-center content-center">
                {navItems.map(renderNavItem)}
            </ul>
        </div>
    );

    return (
        <nav className={`h-20 z-50 w-full fixed transition-all duration-500 ${
            isScrolled 
                ? 'bg-black shadow-lg bg-opacity-95' 
                : 'bg-transparent'
        }`}>
            <div className={`container mx-auto h-20 flex items-center justify-between transition-all duration-300 px-4 lg:px-0`}>
                {/* Logo */}
                <Link href="/">
                    <h2 className={`text-2xl font-bold transition-all duration-300 ${
                        isScrolled ? 'text-white' : 'text-white'
                    }`}>Digital Agency</h2>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden lg:flex">
                    <div className={`transition-all duration-300 ${
                        isScrolled ? 'text-white' : 'text-white'
                    }`}>
                        {navMenu}
                    </div>
                </div>

                {/* Login Button - Desktop */}
                <Link href="/login" className="hidden lg:flex">
                    <h2 className={`flex gap-2 items-center transition-all duration-300 hover:text-gray-300 ${
                        isScrolled ? 'text-white' : 'text-white'
                    }`}>
                        Log In <ArrowRight className="h-4 w-4" />
                    </h2>
                </Link>

                {/* Mobile Header */}
                <div className="lg:hidden flex items-center justify-between w-full">
                    <Link href="/">
                        <h2 className={`text-2xl font-bold transition-all duration-300 ${
                            isScrolled ? 'text-white' : 'text-white'
                        }`}>Digital Agency</h2>
                    </Link>
                    <button 
                        className={`p-2 transition-all duration-300 ${
                            isScrolled ? 'text-white hover:text-gray-300' : 'text-white hover:text-gray-300'
                        }`}
                        onClick={toggleNavbar}
                    >
                        {isClick ? <X /> : <Hamburger />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isClick && (
                <div className="lg:hidden absolute top-20 left-0 w-full bg-white shadow-lg">
                    <div className="p-6">
                        <div className="text-black">
                            {navMenu}
                        </div>
                        <Link href="/login" className="block mt-6">
                            <h2 className="flex gap-2 items-center text-black font-semibold">
                                Log In <ArrowRight className="h-4 w-4" />
                            </h2>
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;