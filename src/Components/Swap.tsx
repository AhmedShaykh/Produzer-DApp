"use client";
import Swapper from "./Swapper";
import Wrapper from "./Wrapper";
import { motion } from "framer-motion";

const Swap = () => {
    return (
        <div className="px-8 py-8 sm:py-12 sm:px-20">
            <Wrapper>
                <h1 className="text-5xl text-center mt-8 mb-4 lg:my-8">
                    BUY, SELL & SWAP
                </h1>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, y: 100 },
                        visible: { opacity: 1, y: 0 },
                    }}
                >
                    <Swapper />
                </motion.div>
            </Wrapper>
        </div>
    )
};

export default Swap;