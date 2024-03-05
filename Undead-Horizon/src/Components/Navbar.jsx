"use client";
import React, { useState } from "react";
import { Button } from "@/Components/ui/button";
import { NAV_ITEMS } from "@/static";
import { Menu as MenuIcon, X } from "lucide-react";
import { Link as Links } from "react-scroll";
import { BookCheck } from "lucide-react";
import Link from "next/link";


const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="fixed w-full z-20 px-5 sm:px-20 top-0 bg-opacity-20 shadow-lg backdrop-blur-lg border-opacity-20">
            <div className="flex flex-wrap items-center justify-between wrapper">
                <div className="flex flex-col items-center mt-3 mb-6 pl-8 lg:pl-0">
                    <Link href={"/"}>
                        <img
                            className="w-14 md:w-20 h-16 md:h-24"
                            src="/logo.png"
                            alt="logo"
                        />
                    </Link>

                    <h5 className="absolute mt-14 md:mt-20">
                        Epidemic Coin
                    </h5>
                </div>

                <div className="flex lg:order-2 rtl:space-x-reverse">
                    <a
                        href="Coinsult.pdf"
                        download="/Coinsult.pdf"
                    >
                        <Button
                            className="text-sm md:text-md font-bold tracking-widest rounded-none bg-[#FEDE00] hover:bg-black text-black hover:text-[#FEDE00] px-2 md:px-3 py-3 md:py-4"
                        >
                            <BookCheck className="mr-3 hidden md:block" strokeWidth={3} />
                            <BookCheck className="mr-2 block md:hidden" strokeWidth={3} />

                            AUDIT
                        </Button>
                    </a>

                    <div className="lg:hidden">
                        <button
                            className="p-2 text-gray-700 rounded-md outline-none"
                            onClick={toggleMenu}
                        >
                            {isMenuOpen ? <X className="h-6 w-6 text-white" />
                                : <MenuIcon className="h-6 w-6 text-white" />}
                        </button>
                    </div>
                </div>

                <div
                    className={`text-lg items-center justify-between ${isMenuOpen ? "flex" : "hidden"} 
                        w-full lg:flex lg:w-auto md:order-1`}
                    id="navbar-sticky"
                >
                    <div
                        className="flex flex-col lg:flex-row items-center w-full p-2 lg:p-0 mt-1 lg:mt-0 font-medium gap-4 lg:gap-1 xl:gap-2"
                    >
                        {NAV_ITEMS.map((item, idx) => {
                            return (
                                <Links
                                    key={idx}
                                    to={item.route}
                                    className={`py-2 px-2 text-md font-semibold hover:text-red-600 hover:cursor-pointer text-white`}
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    duration={300}
                                >
                                    {item.label}
                                </Links>
                            )
                        })}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;