"use client";
import Wrapper from "./Wrapper";
import { motion } from "framer-motion";

const Header = () => {
    return (
        <div className="px-8 py-[3.5rem] sm:px-20 sm:py-20">
            <Wrapper>
                <motion.div
                    className="flex flex-col items-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, y: -100 },
                        visible: { opacity: 1, y: 0 },
                    }}
                >
                    <h1 className="text-center text-2xl sm:text-3xl md:text-4xl font-semibold mt-8 mb-5 sm:my-4 tracking-wider ">
                        UNLEASH YOUR MUSICAL IMAGINATION WITH THE PRODUZER
                    </h1>

                    <h1
                        className="max-w-6xl text-center text-[5rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] xl:text-[12rem] leading-[4rem] sm:leading-[6rem] md:leading-[8rem] lg:leading-[10rem] font-bold orange my-4"
                    >
                        LABORATORY OF RHYTHM
                    </h1>
                </motion.div>
            </Wrapper>
        </div>
    )
};

export default Header;