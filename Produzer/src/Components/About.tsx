"use client";
import { ABOUT } from "@/static";
import Wrapper from "./Wrapper";
import { motion } from "framer-motion";

const About = () => {
    return (
        <div className="px-8 py-4 md:py-12 sm:px-20">
            <Wrapper>
                <motion.div
                    className="flex flex-col items-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, y: -100 },
                        visible: { opacity: 1, y: 0 },
                    }}
                >
                    <div className="flex flex-col lg:flex-row justify-center gap-12 lg:gap-6 mt-12 mb-16 md:my-24">
                        {ABOUT.map((data, index) => (
                            <div
                                className="flex flex-col w-full lg:w-1/3"
                                key={index}
                            >
                                <img
                                    className="w-full h-96 object-cover object-center my-2"
                                    src={data.image}
                                    alt={data.title}
                                />

                                <h2
                                    className={`text-4xl text-center`}
                                >
                                    {data.title}
                                </h2>

                                <p
                                    className={`text-xl text-center`}
                                >
                                    {data.info}
                                </p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </Wrapper>
        </div>
    )
};

export default About;