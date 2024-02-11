"use client";
import Wrapper from "./Wrapper";
import { motion } from "framer-motion";

const About = () => {
    return (
        <div className="px-8 py-4 md:py-12 sm:px-20">
            <Wrapper>
                <div className="flex flex-col lg:flex-row justify-center gap-12 lg:gap-6 mt-12 mb-16 md:my-24">
                    <div className="flex flex-col items-center w-full lg:w-1/3">
                        <motion.div
                            className="mt-0 lg:mt-24"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.1 }}
                            transition={{ duration: 0.5 }}
                            variants={{
                                hidden: { opacity: 0, y: -150 },
                                visible: { opacity: 1, y: 0 },
                            }}
                        >
                            <img
                                className="w-full h-96 object-cover object-center my-2"
                                src={"https://templates.casloop.net/theproduzer/wp-content/uploads/sites/8/2023/06/synthesizer-keyboard-digital-recording-home-music-2021-09-03-09-02-09-utc-2-800x533.jpg"}
                                alt="TRANSFORMATION"
                            />

                            <h2 className={`text-4xl text-center`}>
                                TRANSFORMATION
                            </h2>

                            <p className={`text-xl text-center`}>
                                FROM HUMBLE BEGINNINGS TO MUSICAL MASTERY
                            </p>
                        </motion.div>
                    </div>

                    <div className="flex flex-col items-center w-full lg:w-1/3">
                        <motion.div
                            className="mb-0 mt-0"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.1 }}
                            transition={{ duration: 0.5 }}
                            variants={{
                                hidden: { opacity: 0, y: 150 },
                                visible: { opacity: 1, y: 0 },
                            }}
                        >
                            <img
                                className="w-full h-96 object-cover object-center my-2"
                                src={"https://templates.casloop.net/theproduzer/wp-content/uploads/sites/8/2023/06/synthesizer-keyboard-digital-recording-home-music-2021-09-03-06-01-14-utc-2-800x533.jpg"}
                                alt="PURSUING THE PASSION"
                            />

                            <h2 className={`text-4xl text-center`}>
                                PURSUING THE PASSION
                            </h2>

                            <p className={`text-xl text-center`}>
                                DELVE INTO THE STORY BEHIND MY UNWAVERING PASSION FOR MUSIC
                            </p>
                        </motion.div>
                    </div>

                    <div className="flex flex-col items-center w-full lg:w-1/3">
                        <motion.div
                            className="mt-0 lg:mt-24"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.1 }}
                            transition={{ duration: 0.5 }}
                            variants={{
                                hidden: { opacity: 0, y: -150 },
                                visible: { opacity: 1, y: 0 },
                            }}
                        >
                            <img
                                className="w-full h-96 object-cover object-center my-2"
                                src={"https://templates.casloop.net/theproduzer/wp-content/uploads/sites/8/2023/06/music-concept-background-2022-08-18-17-09-28-utc-2-800x533.jpg"}
                                alt="MUSICAL EXPLORATION"
                            />

                            <h2 className={`text-4xl text-center`}>
                                MUSICAL EXPLORATION
                            </h2>

                            <p className={`text-xl text-center`}>
                                UNVEILING BOUNDLESS CREATIVE HORIZONS
                            </p>
                        </motion.div>
                    </div>
                </div>
            </Wrapper>
        </div>
    )
};

export default About;