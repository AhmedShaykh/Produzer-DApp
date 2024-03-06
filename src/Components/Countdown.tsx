import { motion } from "framer-motion";

const Countdown = () => {

    const options: any = { weekday: "long", month: "long", day: "numeric", year: "numeric" };

    const today = new Date();

    const formattedDate = today.toLocaleDateString("en-US", options);

    return (
        <motion.div
            className="flex flex-col lg:flex-row justify-between gap-4 lg:gap-8 mt-8 mb-10 md:my-12 py-8 px-5 md:p-10
                bg-orange-600 border border-gray-300 dark:border-stone-700 shadow-md shadow-zinc-950 dark:shadow-slate-600"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
                hidden: { opacity: 0, y: -150 },
                visible: { opacity: 1, y: 0 },
            }}
        >
            <div className="my-2 w-full">
                <div className="flex justify-between items-center">
                    <h2 className="text-3xl">
                        LOCK PERIOD
                    </h2>

                    <select className=" text-[#121212] dark:text-white border bg-white dark:bg-[#121212] border-gray-700 focus:border-zinc-900 text-lg outline-none py-2 leading-8">
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

                <div className="my-8 flex flex-col justify-center items-center">
                    <h1 className="text-2xl my-3">
                        {formattedDate}
                    </h1>

                    <div className="my-4 flex justify-center items-center gap-3 md:gap-6">
                        <div className="flex flex-col gap-3 dark:bg-black bg-white py-2 md:py-3 w-16 md:w-20">
                            <h1 className="text-3xl text-center">
                                00
                            </h1>

                            <h3 className="text-center">
                                Days
                            </h3>
                        </div>

                        <div className="flex flex-col gap-3 dark:bg-black bg-white py-2 md:py-3 w-16 md:w-20">
                            <h1 className="text-3xl text-center">
                                00
                            </h1>

                            <h3 className="text-center">
                                Hours
                            </h3>
                        </div>

                        <div className="flex flex-col gap-3 dark:bg-black bg-white py-2 md:py-3 w-16 md:w-20">
                            <h1 className="text-3xl text-center">
                                00
                            </h1>

                            <h3 className="text-center">
                                Minutes
                            </h3>
                        </div>

                        <div className="flex flex-col gap-3 dark:bg-black bg-white py-2 md:py-3 w-16 md:w-20">
                            <h1 className="text-3xl text-center">
                                00
                            </h1>

                            <h3 className="text-center">
                                Seconds
                            </h3>
                        </div>
                    </div>

                    <h1 className="text-2xl mt-6">
                        TOKEN STAKED: 0
                    </h1>
                </div>
            </div>
        </motion.div>
    )
};

export default Countdown;