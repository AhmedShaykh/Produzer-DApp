"use client";
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

                <div className="flex flex-col lg:flex-row justify-center gap-6 mt-12 lg:mt-16 mb-16">
                    <div className="flex flex-col items-center w-full lg:w-1/5">
                        <motion.div
                            className="mt-0 lg:mt-24"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.1 }}
                            transition={{ duration: 0.5 }}
                            variants={{
                                hidden: { opacity: 0, x: -80 },
                                visible: { opacity: 1, x: 0 },
                            }}
                        >
                            <img
                                className="w-96 lg:w-full h-88 lg:h-96 object-cover object-center my-4"
                                src={"https://templates.casloop.net/theproduzer/wp-content/uploads/sites/8/2023/06/david-bust-with-vr-glasses-and-purple-light-2022-01-07-19-46-57-utc-800x1008.jpg"}
                                alt="TIME TRAVELER"
                            />

                            <div className="flex flex-col items-center gap-1">
                                <h2 className="text-5xl">
                                    2019
                                </h2>

                                <h4 className="text-2xl text-center">
                                    TIME TRAVELER
                                </h4>

                                <p className="text-md text-center">
                                    Mini Album (self published)
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    <div className="flex flex-col items-center w-full lg:w-1/5">
                        <motion.div
                            className="mb-0 lg:mb-4"
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
                                className="w-96 lg:w-full h-88 lg:h-96 object-cover object-center my-4"
                                src={"https://templates.casloop.net/theproduzer/wp-content/uploads/sites/8/2023/06/futuristic-woman-touching-shoulder-under-neon-ligh-2022-12-01-18-11-32-utc-683x1024.jpg"}
                                alt="TIME TRAVELER"
                            />

                            <div className="flex flex-col items-center gap-1">
                                <h2 className="text-5xl">
                                    2020
                                </h2>

                                <h4 className="text-2xl text-center">
                                    TEENAGE VISION
                                </h4>

                                <p className="text-md text-center">
                                    Album (self published)
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    <div className="flex flex-col items-center w-full lg:w-1/5">
                        <motion.div
                            className="mt-0 lg:mt-24"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.1 }}
                            transition={{ duration: 0.5 }}
                            variants={{
                                hidden: { opacity: 0, y: -50 },
                                visible: { opacity: 1, y: 0 },
                            }}
                        >
                            <img
                                className="w-96 lg:w-full h-88 lg:h-96 object-cover object-center my-4"
                                src={"https://templates.casloop.net/theproduzer/wp-content/uploads/sites/8/2023/06/model-in-futuristic-coat-under-colorful-illuminati-2022-12-01-18-11-40-utc-683x1024.jpg"}
                                alt="TIME TRAVELER"
                            />

                            <div className="flex flex-col items-center gap-1">
                                <h2 className="text-5xl">
                                    2021
                                </h2>

                                <h4 className="text-2xl text-center">
                                    TRILOGY JOURNEY
                                </h4>

                                <p className="text-md text-center">
                                    First Single with USA major label
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    <div className="flex flex-col items-center w-full lg:w-1/5">
                        <motion.div
                            className="mb-0 lg:mb-4"
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
                                className="w-96 lg:w-full h-88 lg:h-96 object-cover object-center my-4"
                                src={"https://templates.casloop.net/theproduzer/wp-content/uploads/sites/8/2023/06/woman-in-stylish-glasses-on-a-red-background-2022-08-31-22-48-44-utc-683x1024.jpg"}
                                alt="TIME TRAVELER"
                            />

                            <div className="flex flex-col items-center gap-1">
                                <h2 className="text-5xl">
                                    2022
                                </h2>

                                <h4 className="text-2xl text-center">
                                    VENICE UNVEILED
                                </h4>

                                <p className="text-md text-center">
                                    Album (major label)
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    <div className="flex flex-col items-center w-full lg:w-1/5">
                        <motion.div
                            className="mt-0 lg:mt-24"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.1 }}
                            transition={{ duration: 0.5 }}
                            variants={{
                                hidden: { opacity: 0, x: 80 },
                                visible: { opacity: 1, x: 0 },
                            }}
                        >
                            <img
                                className="w-96 lg:w-full h-88 lg:h-96 object-cover object-center my-4"
                                src={"https://templates.casloop.net/theproduzer/wp-content/uploads/sites/8/2023/06/cyberpunk-girl-in-leather-clothes-2022-02-09-21-21-54-utc-683x1024.jpg"}
                                alt="TIME TRAVELER"
                            />

                            <div className="flex flex-col items-center gap-1">
                                <h2 className="text-5xl">
                                    2023
                                </h2>

                                <h4 className="text-2xl text-center">
                                    LOST IN JAPAN
                                </h4>

                                <p className="text-md text-center">
                                    Album (major label)
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </Wrapper>
        </div>
    )
};

export default Discography;