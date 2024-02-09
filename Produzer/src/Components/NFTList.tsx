"use client";
import { NFT } from "@/static";
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

                <motion.div
                    className="flex flex-col"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, y: 100 },
                        visible: { opacity: 1, y: 0 },
                    }}
                >
                    <div className="flex flex-col lg:flex-row justify-center gap-6 lg mt-2 lg:mt-8 mb-16">
                        {NFT.map((data, index) => (
                            <div
                                className="flex flex-col w-full lg:w-1/4"
                                key={index}
                            >
                                <img
                                    className="w-full h-96 object-cover object-center my-4"
                                    src={data.image}
                                    alt={data.title}
                                />

                                <div className="flex flex-col items-center gap-1 mt-3">
                                    <h4 className="text-3xl lg:text-4xl text-center">
                                        {data.title}
                                    </h4>

                                    <Button className="text-lg lg:text-xl p-5 lg:p-6 mt-3 rounded-none hover:bg-orange-600 dark:hover:bg-orange-600 bg-[#121212] dark:bg-white">
                                        BUY NOW
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </Wrapper>
        </div>
    )
};

export default NFTList;