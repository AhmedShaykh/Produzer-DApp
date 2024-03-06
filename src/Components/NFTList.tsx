"use client";
import Wrapper from "./Wrapper";
import { motion } from "framer-motion";
import { Button } from "./ui/button";

const NFTList = () => {
    return (
        <div className="px-8 py-8 sm:py-12 sm:px-20">
            <Wrapper>
                <h1 className="text-5xl text-center mt-8 mb-4 lg:my-8">
                    EXPLORE AWESOME ARTWORKS
                </h1>

                <div className="flex flex-col lg:flex-row justify-center gap-6 lg mt-8 lg:mt-16 mb-16">
                    <div className="flex flex-col items-center lg:items-start w-full lg:w-1/4">
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
                                className="w-96 lg:w-full h-88 lg:h-96 object-cover object-center my-4"
                                src={"https://templates.casloop.net/theproduzer/wp-content/uploads/sites/8/2023/06/futuristic-woman-touching-shoulder-under-neon-ligh-2022-12-01-18-11-32-utc-683x1024.jpg"}
                                alt="TEENAGE VISION"
                            />

                            <div className="flex flex-col items-center gap-1 mt-3">
                                <h4 className="text-3xl lg:text-4xl text-center">
                                    TEENAGE VISION
                                </h4>

                                <Button className="text-lg lg:text-xl p-5 lg:p-6 mt-3 rounded-none hover:bg-orange-600 dark:hover:bg-orange-600 bg-[#121212] dark:bg-white">
                                    BUY NOW
                                </Button>
                            </div>
                        </motion.div>
                    </div>

                    <div className="flex flex-col items-center lg:items-start w-full lg:w-1/4">
                        <motion.div
                            className="mb-0"
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
                                src={"https://templates.casloop.net/theproduzer/wp-content/uploads/sites/8/2023/06/model-in-futuristic-coat-under-colorful-illuminati-2022-12-01-18-11-40-utc-683x1024.jpg"}
                                alt="TRILOGY JOURNEY"
                            />

                            <div className="flex flex-col items-center gap-1 mt-3">
                                <h4 className="text-3xl lg:text-4xl text-center">
                                    TRILOGY JOURNEY
                                </h4>

                                <Button className="text-lg lg:text-xl p-5 lg:p-6 mt-3 rounded-none hover:bg-orange-600 dark:hover:bg-orange-600 bg-[#121212] dark:bg-white">
                                    BUY NOW
                                </Button>
                            </div>
                        </motion.div>
                    </div>

                    <div className="flex flex-col items-center lg:items-start w-full lg:w-1/4">
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
                                className="w-96 lg:w-full h-88 lg:h-96 object-cover object-center my-4"
                                src={"https://templates.casloop.net/theproduzer/wp-content/uploads/sites/8/2023/06/woman-in-stylish-glasses-on-a-red-background-2022-08-31-22-48-44-utc-683x1024.jpg"}
                                alt="VENICE UNVEILED"
                            />

                            <div className="flex flex-col items-center gap-1 mt-3">
                                <h4 className="text-3xl lg:text-4xl text-center">
                                    VENICE UNVEILED
                                </h4>

                                <Button className="text-lg lg:text-xl p-5 lg:p-6 mt-3 rounded-none hover:bg-orange-600 dark:hover:bg-orange-600 bg-[#121212] dark:bg-white">
                                    BUY NOW
                                </Button>
                            </div>
                        </motion.div>
                    </div>

                    <div className="flex flex-col items-center lg:items-start w-full lg:w-1/4">
                        <motion.div
                            className="mb-0"
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
                                src={"https://templates.casloop.net/theproduzer/wp-content/uploads/sites/8/2023/06/cyberpunk-girl-in-leather-clothes-2022-02-09-21-21-54-utc-683x1024.jpg"}
                                alt="LOST IN JAPAN"
                            />

                            <div className="flex flex-col items-center gap-1 mt-3">
                                <h4 className="text-3xl lg:text-4xl text-center">
                                    LOST IN JAPAN
                                </h4>

                                <Button className="text-lg lg:text-xl p-5 lg:p-6 mt-3 rounded-none hover:bg-orange-600 dark:hover:bg-orange-600 bg-[#121212] dark:bg-white">
                                    BUY NOW
                                </Button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </Wrapper>
        </div>
    )
};

export default NFTList;