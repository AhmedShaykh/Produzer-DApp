import { Button } from "@/Components/ui/button";
import { motion } from "framer-motion";

const Stake = () => {
    return (
        <motion.div
            className="py-8 px-5 md:p-10 mt-10 bg-[#0a0909] border border-gray-300 dark:border-stone-900 shadow-md shadow-orange-600"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
                hidden: { opacity: 0, y: 150 },
                visible: { opacity: 1, y: 0 },
            }}
        >
            <div
                className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-2 my-6 md:my-4 mx-2 md:mx-4"
            >
                <div className="my-2 lg:my-1">
                    <h3 className="text-2xl mb-3 orange">
                        SELECT COIN AND STAKE
                    </h3>

                    <div className="flex lg:flex-row gap-6 lg:gap-0 flex-col items-center">
                        <input
                            className="w-[100%] lg:w-[14.8rem] xl:w-[22.8rem] dark:text-[#121212] text-white border dark:bg-white bg-[#121212] border-gray-700 focus:border-zinc-900 text-lg outline-none py-2 px-3 leading-8"
                            placeholder="Amount"
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

                <div className="my-2 lg:my-1">
                    <h3 className="text-2xl mb-3 orange">
                        SELECT LOCK PERIOD
                    </h3>

                    <select className="w-[100%] lg:w-80 xl:w-[28rem] text-[#121212] dark:text-white border bg-white dark:bg-[#121212] border-gray-700 focus:border-zinc-900 text-lg outline-none py-2 leading-8">
                        <option className="!w-[100%]">
                            1 Month
                        </option>

                        <option className="!w-[100%]">
                            3 Month
                        </option>

                        <option className="!w-[100%]">
                            6 Month
                        </option>

                        <option className="!w-[100%]">
                            12 Month
                        </option>

                        <option className="!w-[100%]">
                            18 Month
                        </option>
                    </select>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row justify-between gap-4 mt-12 mb-8 md:my-8 mx-2 md:mx-4">
                <Button
                    className="w-full lg:w-80 xl:w-[28rem] text-xl p-6 rounded-none dark:text-white text-[#121212] hover:text-white hover:dark:text-[#121212] hover:bg-orange-600 dark:hover:bg-white dark:bg-[#121212] bg-white"
                >
                    STAKE
                </Button>

                <Button
                    className="w-full lg:w-80 xl:w-[28rem] text-xl p-6 rounded-none dark:text-white text-[#121212] hover:text-white hover:dark:text-[#121212] hover:bg-orange-600 dark:hover:bg-white dark:bg-[#121212] bg-white"
                >
                    WITHDRAW STAKE
                </Button>
            </div>
        </motion.div>
    )
};

export default Stake;