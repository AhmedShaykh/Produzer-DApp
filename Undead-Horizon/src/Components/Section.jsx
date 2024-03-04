"use client";
import { Button } from "@/Components/ui/button";
import { BookText } from "lucide-react";
import Link from "next/link";

const Section = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mt-16 mb-4">
            <a
                href="Undead_Horizon.pdf"
                download="/Undead_Horizon.pdf"
            >
                <Button
                    className="text-sm md:text-md w-60 md:w-auto font-bold tracking-widest rounded-none bg-red-600 hover:bg-[#FEDE00] text-white hover:text-black px-3 py-6 md:px-5 md:py-7"
                >
                    <BookText className="mr-4" strokeWidth={3} />

                    WHITEPAPER
                </Button>
            </a>

            <Link
                href={"https://etherscan.io/token/0x0D948f0D79c99651dB069985cd6ea416ba207002"}
                target="_blank"
            >
                <Button
                    className="text-sm md:text-md w-60 md:w-auto font-bold tracking-widest rounded-none bg-red-600 hover:bg-[#FEDE00] text-white hover:text-black px-3 py-6 md:px-5 md:py-7"
                >
                    CONTRACT ADDRESS
                </Button>
            </Link>
        </div>
    )
};

export default Section;