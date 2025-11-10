/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Menu, X } from "lucide-react";
import logo from "@/public/img/bigRedDot.webp";
import Image from "next/image";

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
            href: "/about",
            // submenu: [
            //     { name: "History", href: "/about/history" },
            //     { name: "At a Glance", href: "/about/ataglance" },

            // ]
        },


        // {
        //     title: "Gallery",
        //     href: "#",
        //     submenu: [
        //         { name: "Images", href: "/gallery/images" },
        //         { name: "Videos", href: "/gallery/videos" }
        //     ]
        // },
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
        <li key={index} className="relative group  text-lg">
            {item.submenu ? (
                <>
                    <Link href={item.href} className="flex  items-center mr-3 py-2 hover:text-gray-300 transition-colors ">
                        {item.title}
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
                <Link href={item.href} className="flex gap-1 items-center mr-3 py-2 hover:text-gray-300 transition-colors ">
                    {item.title}
                </Link>
            )}
        </li>
    );

    const navMenu = (
        <div>
            <ul className="flex flex-col md:flex-row lg:flex-row gap-3 md:gap-0 lg:gap-5 items-center content-center">
                {navItems.map(renderNavItem)}
            </ul>
        </div>
    );

    return (
        <nav
            className={`fixed top-0 left-0 w-full h-20 z-9999 transition-all duration-500 
                ${isScrolled ? "bg-black bg-opacity-95 shadow-lg" : "bg-transparent" }`}
        >

            <div className={`container mx-auto h-20 flex justify-between items-center content-center transition-all duration-300 px-4 lg:px-0`}>
                <div className="flex gap-20">
                    {/* Logo */}
                    <Link href="/">
                        <h2 className={`hidden lg:text-4xl font-bold transition-all lg:flex items-center gap-2 duration-300 ${isScrolled ? 'text-white' : 'text-white'
                            }`}>
                            <Image src={logo} className="h-4 lg:h-8 w-4 lg:w-8" alt="logo" />
                            to Dart</h2>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex uppercase">
                        <div className={`transition-all duration-300 ${isScrolled ? 'text-white' : 'text-white'
                            }`}>
                            {navMenu}
                        </div>
                    </div>
                </div>
                <div>

                    {/* Login Button - Desktop */}
                    <Link href="/login" className="hidden lg:flex">
                        <h2 className={`flex gap-2 items-center transition-all duration-300 hover:text-gray-300 bg-white rounded-full border border-red-500 p-3 ${isScrolled ? 'text-black' : 'text-black'
                            }`}>
                            Log In <ArrowRight className="h-4 w-4" />
                        </h2>
                    </Link>
                </div>

                {/* Mobile Header */}
                <div className="lg:hidden flex items-center justify-between w-full">
                    <Link href="/">
                        <h2 className={`lg:text-4xl font-bold transition-all flex items-center gap-2 duration-300 
                        ${isScrolled ? 'text-white' : 'text-white'}`}>

                            <Image src={logo} className="h-4 lg:h-8 w-4 lg:w-8" alt="logo" />
                            to Dart
                        </h2>
                    </Link>
                    <button
                        className={`p-2 transition-all duration-300 ${isScrolled ? 'text-white hover:text-gray-300' : 'text-white hover:text-gray-300'
                            }`}
                        onClick={toggleNavbar}
                    >
                        {isClick ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isClick && (
                <div className="lg:hidden absolute top-20 left-0 w-full bg-white shadow-lg flex flex-col items-center">
                    <div className="p-6">
                        <div className="text-black">
                            {navMenu}
                        </div>
                        <Link href="/login" className="block mt-6 ">
                            <h2 className="flex gap-2 items-center text-black font-semibold border border-red-500 rounded-full p-3 shadow-md">
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