"use client";
import { Button } from "@/Components/ui/button";
import { ArrowDownUp, ArrowLeftRight } from "lucide-react";

const Swapper = () => {
    return (
        <div className="py-8 px-5 md:p-10 mt-16 lg:mt-20 mb-12 lg:mb-10 bg-orange-600 border border-gray-300 dark:border-stone-700 shadow-md shadow-zinc-950 dark:shadow-slate-600">
            <div className="flex flex-col lg:flex-row justify-between gap-4 lg:gap-2 rounded-2xl my-1 md:my-3 mx-2 md:mx-4">
                <div className="my-2 lg:my-1">
                    <div className="flex lg:flex-row gap-3 lg:gap-0 flex-col items-center">
                        <input
                            className="w-[100%] lg:w-60 xl:w-[22rem] dark:text-[#121212] text-white border dark:bg-white bg-[#121212] border-gray-700 focus:border-zinc-900 text-lg outline-none py-2 px-3 leading-8"
                            placeholder="0.01"
                            type="number"
                        />

                        <select className="w-[100%] lg:w-[5.2rem] text-[#121212] dark:text-white border bg-white dark:bg-[#121212] border-gray-700 focus:border-zinc-900 text-lg outline-none py-2 leading-8">
                            <option className="!w-[100%]">
                                BTC
                            </option>

                            <option className="!w-[100%]">
                                ETH
                            </option>
                        </select>
                    </div>

                    <h3 className="mt-4 text-2xl">
                        You Pay
                    </h3>
                </div>

                <div className="flex justify-center my-0 lg:my-3">
                    <Button
                        className="hidden lg:block p-2 rounded-full cursor-pointer border border-gray-700 dark:text-white text-[#121212] hover:text-white hover:dark:text-[#121212] hover:bg-[#121212] dark:hover:bg-white dark:bg-[#121212] bg-white"
                    >
                        <ArrowLeftRight className="hover:bg-[#121212] dark:hover:bg-white" />
                    </Button>

                    <Button
                        className="block lg:hidden p-2 rounded-full cursor-pointer border border-gray-700 mb-6 dark:text-white text-[#121212] hover:text-white hover:dark:text-[#121212] hover:bg-[#121212] dark:hover:bg-white dark:bg-[#121212] bg-white"
                    >
                        <ArrowDownUp className="hover:bg-[#121212] dark:hover:bg-white" />
                    </Button>
                </div>

                <div className="my-2 lg:my-1">
                    <div className="flex lg:flex-row gap-3 lg:gap-0 flex-col items-center">
                        <input
                            className="w-[100%] lg:w-60 xl:w-[22rem] dark:text-[#121212] text-white border dark:bg-white bg-[#121212] border-gray-700 focus:border-zinc-900 text-lg outline-none py-2 px-3 leading-8"
                            placeholder="0.01"
                            type="number"
                        />

                        <select className="w-[100%] lg:w-[5.2rem] text-[#121212] dark:text-white border bg-white dark:bg-[#121212] border-gray-700 focus:border-zinc-900 text-lg outline-none py-2 leading-8">
                            <option className="!w-[100%]">
                                BNB
                            </option>
                            <option className="!w-[100%]">
                                SOL
                            </option>
                        </select>
                    </div>

                    <h3 className="mt-4 text-2xl">
                        You Receive
                    </h3>
                </div>
            </div>

            <div className="flex justify-center mt-8 md:mt-4 mb-2">
                <Button
                    className="text-xl p-6 mt-3 rounded-none dark:text-white text-[#121212] hover:text-white hover:dark:text-[#121212] hover:bg-[#121212] dark:hover:bg-white dark:bg-[#121212] bg-white"
                >
                    BUY NOW
                </Button>
            </div>
        </div>
    )
}

export default Swapper;