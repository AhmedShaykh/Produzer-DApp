import { Button } from "@/Components/ui/button";
import { ArrowDownUp } from "lucide-react";
import { motion } from "framer-motion";

const Bridge = () => {
    return (
        <motion.div
            className="flex flex-col items-center gap-4 lg:gap-8 mt-8 mb-10 md:my-12 py-8 px-5 md:p-10 bg-orange-600
            border border-gray-300 dark:border-stone-700 shadow-md shadow-zinc-950 dark:shadow-slate-600"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
                hidden: { opacity: 0, y: 150 },
                visible: { opacity: 1, y: 0 },
            }}
        >
            <div className="my-3 w-full md:w-auto">
                <h1 className="text-5xl md:text-6xl font-semibold mt-4 mb-12 text-center">
                    EXCHANGE
                </h1>

                <div className="mt-2 mb-10">
                    <h3 className="text-3xl my-2">
                        FROM
                    </h3>

                    <div className="flex lg:flex-row gap-6 lg:gap-0 flex-col items-center">
                        <input
                            className="w-[100%] md:w-[22.8rem] dark:text-[#121212] text-white border dark:bg-white bg-[#121212] border-gray-700 focus:border-zinc-900 text-lg outline-none py-2 px-3 leading-8"
                            placeholder="SELECT CHAIN AND TOKEN "
                            type="number"
                        />

                        <select className="w-[100%] lg:w-[5.2rem] text-[#121212] dark:text-white border bg-white dark:bg-[#121212] border-gray-700 focus:border-zinc-900 text-lg outline-none py-2 leading-8">
                            <option className="!w-[100%]">
                                ETH
                            </option>

                            <option className="!w-[100%]">
                                BNB
                            </option>

                            <option className="!w-[100%]">
                                SOL
                            </option>

                            <option className="!w-[100%]">
                                MATIC
                            </option>
                        </select>
                    </div>
                </div>

                <div className="flex justify-center">
                    <Button
                        className="p-2 rounded-full cursor-pointer border border-gray-700 dark:text-white text-[#121212] hover:text-white hover:dark:text-[#121212] hover:bg-[#121212] dark:hover:bg-white dark:bg-[#121212] bg-white"
                    >
                        <ArrowDownUp className="hover:bg-[#121212] dark:hover:bg-white" />
                    </Button>
                </div>

                <div className="mb-3 mt-6">
                    <h3 className="text-3xl my-2">
                        TO
                    </h3>

                    <div className="flex lg:flex-row gap-6 lg:gap-0 flex-col items-center">
                        <input
                            className="w-[100%] md:w-[22.8rem] dark:text-[#121212] text-white border dark:bg-white bg-[#121212] border-gray-700 focus:border-zinc-900 text-lg outline-none py-2 px-3 leading-8"
                            placeholder="SELECT CHAIN AND TOKEN "
                            type="number"
                        />

                        <select className="w-[100%] lg:w-[5.2rem] text-[#121212] dark:text-white border bg-white dark:bg-[#121212] border-gray-700 focus:border-zinc-900 text-lg outline-none py-2 leading-8">
                            <option className="!w-[100%]">
                                SOL
                            </option>

                            <option className="!w-[100%]">
                                MATIC
                            </option>

                            <option className="!w-[100%]">
                                AVAX
                            </option>

                            <option className="!w-[100%]">
                                OKX
                            </option>
                        </select>
                    </div>
                </div>

                <div className="flex justify-center mt-6 mb-2">
                    <Button
                        className="text-xl p-6 mt-3 w-full rounded-none dark:text-white text-[#121212] hover:text-white hover:dark:text-[#121212] hover:bg-[#121212] dark:hover:bg-white dark:bg-[#121212] bg-white"
                    >
                        EXCHANGE
                    </Button>
                </div>
            </div>
        </motion.div>
    )
};

export default Bridge;