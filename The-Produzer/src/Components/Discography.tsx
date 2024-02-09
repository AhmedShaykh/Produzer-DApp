"use client";
import { DISCOGRAPHY } from "@/static";
import Wrapper from "./Wrapper";
import { motion } from "framer-motion";

const Discography = () => {
    return (
        <div className="px-8 py-8 sm:py-12 sm:px-20">
            <Wrapper>
                <div className="flex flex-col items-center mt-8 mb-4 lg:my-8">
                    <h1 className="text-5xl">
                        DISCOGRAPHY
                    </h1>

                    <h3 className="text-2xl text-center">
                        A COLLECTION OF SONIC ADVENTURES
                    </h3>
                </div>

                <motion.div
                    className="flex flex-col items-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, y: 100 },
                        visible: { opacity: 1, y: 0 },
                    }}
                >
                    <div className="flex flex-col lg:flex-row justify-center gap-6 mt-2 lg:mt-8 mb-16">
                        {DISCOGRAPHY.map((data, index) => (
                            <div
                                className="flex flex-col w-full lg:w-1/5"
                                key={index}
                            >
                                <img
                                    className="w-full h-96 object-cover object-center my-4"
                                    src={data.image}
                                    alt={data.title}
                                />

                                <div className="flex flex-col items-center gap-1">
                                    <h2 className="text-5xl">
                                        {data.year}
                                    </h2>

                                    <h4 className="text-2xl text-center">
                                        {data.title}
                                    </h4>

                                    <p className="text-md text-center">
                                        {data.info}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </Wrapper>
        </div>
    )
};

export default Discography;