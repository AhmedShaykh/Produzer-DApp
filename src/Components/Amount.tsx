import { motion } from "framer-motion";

const Amount = () => {
    return (
        <motion.div
            className="flex flex-col lg:flex-row justify-between gap-4 lg:gap-8 rounded-2xl mt-2 mb-8 md:my-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
                hidden: { opacity: 0, y: -150 },
                visible: { opacity: 1, y: 0 },
            }}
        >
            <div className="my-2 lg:my-1 w-[100%] lg:w-[50%] bg-[#0a0909] border border-gray-300 dark:border-stone-900 shadow-md shadow-orange-600 py-8 px-5 md:p-10">
                <h3 className="text-2xl my-1 orange">
                    APY RATE
                </h3>

                <div className="flex justify-between items-center w-[100%] mt-2">
                    <h2 className="text-2xl orange">
                        1.00%
                    </h2>

                    <select className="text-[#121212] dark:text-white border bg-white dark:bg-[#121212] border-gray-700 focus:border-zinc-900 text-lg outline-none py-2 leading-8">
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

            <div className="my-2 lg:my-1 w-[100%] lg:w-[50%] bg-[#0a0909] border border-gray-300 dark:border-stone-900 shadow-md shadow-orange-600 py-8 px-5 md:p-10">
                <div className="flex items-center gap-3">
                    <div className="flex flex-col w-[45%]">
                        <h3 className="text-2xl orange text-center lg:text-left">
                            STAKE AMOUNT
                        </h3>

                        <h2 className="text-2xl mt-3 orange text-center lg:text-left">
                            0
                        </h2>
                    </div>

                    <div className="flex flex-col w-[50%]">
                        <h3 className="text-2xl my-1 orange text-center lg:text-left">
                            TOKEN RATE
                        </h3>

                        <div className="flex justify-center lg:justify-start gap-2 mt-2">
                            <img src="/favicon.ico" alt="logo" width={35} />

                            <h2 className="text-2xl orange">
                                0.000 USDT
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
};

export default Amount;