"use client";
import { motion } from "framer-motion";
import Wrapper from "./Wrapper";
import Bridge from "./Bridge";

const BridgePage = () => {
    return (
        <div className="px-8 py-[3.5rem] sm:px-20 sm:py-20">
            <Wrapper>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, y: -150 },
                        visible: { opacity: 1, y: 0 },
                    }}
                >
                    <h1
                        className="max-w-6xl text-center text-[5rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] xl:text-[12rem] leading-[5rem] sm:leading-[6rem] md:leading-[8rem] lg:leading-[10rem] font-bold orange my-28 sm:my-20 md:mt-8 md:mb-16"
                    >
                        EXCHANGE YOUR ASSETS
                    </h1>
                </motion.div>

                <Bridge />
            </Wrapper>
        </div>
    )
};

export default BridgePage;