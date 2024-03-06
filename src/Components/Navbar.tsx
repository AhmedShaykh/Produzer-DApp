"use client";
import React, { useState } from "react";
import { ModeToggle } from "./ModeToggle";
import { NavItems, NavSubItems } from "./NavItem";
import Wrapper from "./Wrapper";
import ConnectWallet from "./ConnectWallet";
import { Menu as MenuIcon, X } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="sticky w-full z-20 px-8 py-6 sm:px-20 top-0 bg-white dark:bg-[#121212] border-b border-neutral-300 dark:border-stone-700">
            <Wrapper>
                <div className="flex flex-wrap items-center justify-between mx-auto">
                    <Link href={"/"}>
                        <h1 className="text-2xl font-semibold tracking-wide dark:text-white text-gray-900">
                            THE PRODUZER
                        </h1>
                    </Link>

                    <div className="flex md:order-2 space-x-2 md:space-x-0 rtl:space-x-reverse">
                        <ModeToggle />

                        <div className="md:hidden">
                            <button
                                className="p-2 text-gray-700 rounded-md outline-none"
                                onClick={toggleMenu}
                            >
                                {isMenuOpen ? <X className="h-6 w-6 text-black dark:text-white" /> : <MenuIcon className="h-6 w-6 text-black dark:text-white" />}
                            </button>
                        </div>
                    </div>

                    <div
                        className={`text-lg items-center justify-between ${isMenuOpen ? "flex" : "hidden"} 
                        w-full md:flex md:w-auto md:order-1`}
                        id="navbar-sticky"
                    >
                        <motion.div
                            className="flex flex-col items-center w-full p-4 md:p-0 mt-4 font-medium md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.5 }}
                            variants={{
                                hidden: { opacity: 0, y: 50 },
                                visible: { opacity: 1, y: 0 },
                            }}
                        >
                            <NavItems />
                            <NavSubItems />

                            <ConnectWallet />
                        </motion.div>
                    </div>
                </div>
            </Wrapper>
        </nav>
    );
};

export default Navbar;