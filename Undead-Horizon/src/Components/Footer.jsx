"use client";
import { useEffect, useState } from "react";
import { FaTelegram, FaDiscord } from "react-icons/fa";
import { TwitterIcon } from "lucide-react";
import Link from "next/link";

const Footer = () => {

    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {

        if (window.pageYOffset > 0) {

            setIsVisible(true);

        } else {

            setIsVisible(false);

        }

    };

    const scrollToTop = () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });

    };

    useEffect(() => {

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };

    }, []);

    return (
        <div className="px-5 sm:px-20 py-6">
            <div className="flex flex-col gap-4 items-center my-4 wrapper">
                <button onClick={scrollToTop}>
                    <img
                        src={"/logo.png"}
                        alt="logo"
                        width={70}
                        height={70}
                    />
                </button>

                <h1 className="text-3xl font-bold text-center">
                    UNDEAD HORIZON
                </h1>

                <div className="flex justify-center items-center gap-12 md:gap-6 mt-3">
                    <Link
                        className="transition-transform duration-600 hover:scale-150"
                        href="https://twitter.com/thundeadhorizon"
                        target="_blank"
                    >
                        <img src="/x.svg" alt="X Logo" />
                    </Link>

                    <Link
                        className="transition-transform duration-600 hover:scale-150"
                        href="https://discord.gg/9SXmR3A2"
                        target="_blank"
                    >
                        <FaDiscord className="w-6 h-6 text-white" />
                    </Link>

                    <Link
                        className="transition-transform duration-600 hover:scale-150"
                        href="https://t.me/Undeadhorizon"
                        target="_blank"
                    >
                        <FaTelegram className="w-6 h-6 text-white" />
                    </Link>
                </div>

                <h2 className="text-center text-xl font-bold my-3 hover:scale-110 tracking-wider transition-transform duration-600">
                    Powered By: {""}

                    <Link
                        href={"http://www.brdigitech.com/"}
                        className="font-bold"
                        target="_blank"
                    >
                        Button R Digitech (bRd)
                    </Link>
                </h2>
            </div>
        </div>
    )
};

export default Footer;