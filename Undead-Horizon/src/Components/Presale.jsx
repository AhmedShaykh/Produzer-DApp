import { Progress } from "@/Components/ui/progress";
import { Button } from "@/Components/ui/button";

const Presale = () => {
    return (
        <div className="pb-12 pt-6 px-5 sm:px-20">
            <div
                className="wrapper"
                name="presale"
            >
                <div className="flex flex-col gap-12 justify-center items-center pt-6 text-center">
                    <h1 className="sm:text-5xl text-4xl text-center font-bold text-white">
                        Presale
                    </h1>

                    <div
                        className="flex flex-col justify-center items-center rounded-lg p-4 md:p-8 w-full max-w-4xl mx-auto bg-cover bg-center"
                        style={{
                            backgroundImage:
                                "url(/assets/presale.jpg)"
                        }}
                    >
                        <div className="w-full h-[150px] md:h-auto overflow-y-auto scrollbar-thumb-slate-700 scrollbar-track-transparent scrollbar-thin scrollbar-thumb-rounded">
                            <div className="flex justify-between items-center w-full my-2">
                                <div className="flex flex-col items-start justify-center gap-1">
                                    <h5 className="text-md md:text-lg text-white font-bold">
                                        Current Stage
                                    </h5>

                                    <h4 className="text-md md:text-lg text-white font-bold">
                                        Stage 1
                                    </h4>
                                </div>

                                <div className="flex flex-col items-end justify-center gap-1">
                                    <h5 className="text-md md:text-lg text-white font-bold">
                                        Available Supply
                                    </h5>

                                    <h4 className="text-md md:text-lg text-white font-bold">
                                        100,000,000
                                    </h4>
                                </div>
                            </div>

                            <Progress
                                className="my-2 md:my-4 h-3 md:h-4"
                                value={10}
                            />

                            <div className="flex justify-between items-center w-full mt-2 mb-3">
                                <div className="flex flex-col items-start justify-center gap-1">
                                    <h5 className="text-md md:text-lg text-white font-bold">
                                        Next Stage Price
                                    </h5>

                                    <h4 className="text-md md:text-lg text-white font-bold">
                                        0.01
                                    </h4>
                                </div>

                                <div className="flex flex-col items-end justify-center gap-1">
                                    <h5 className="text-md md:text-lg text-white font-bold">
                                        Token Sold
                                    </h5>

                                    <h4 className="text-md md:text-lg text-white font-bold">
                                        1.00
                                    </h4>
                                </div>
                            </div>

                            <div className="flex justify-between items-center w-full mt-4 mb-3">
                                <div className="flex flex-col items-start justify-center gap-1">
                                    <h5 className="text-md md:text-lg text-white font-bold">
                                        Current Stage
                                    </h5>

                                    <h4 className="text-md md:text-lg text-white font-bold">
                                        Stage 2
                                    </h4>
                                </div>

                                <div className="flex flex-col items-end justify-center gap-1">
                                    <h5 className="text-md md:text-lg text-white font-bold">
                                        Available Supply
                                    </h5>

                                    <h4 className="text-md md:text-lg text-white font-bold">
                                        10,000,000
                                    </h4>
                                </div>
                            </div>

                            <Progress
                                className="my-2 md:my-4 h-3 md:h-4"
                                value={20}
                            />

                            <div className="flex justify-between items-center w-full my-2">
                                <div className="flex flex-col items-start justify-center gap-1">
                                    <h5 className="text-md md:text-lg text-white font-bold">
                                        Next Stage Price
                                    </h5>

                                    <h4 className="text-md md:text-lg text-white font-bold">
                                        0.02
                                    </h4>
                                </div>

                                <div className="flex flex-col items-end justify-center gap-1">
                                    <h5 className="text-md md:text-lg text-white font-bold">
                                        Token Sold
                                    </h5>

                                    <h4 className="text-md md:text-lg text-white font-bold">
                                        2.00
                                    </h4>
                                </div>
                            </div>
                        </div>

                        <div className="w-full">
                            <h1 className="text-center text-xl md:text-2xl text-white font-bold mt-3 md:mt-6 mb-2">
                                BUY BEFORE PRICE INCREASE!
                            </h1>

                            <h1 className="text-center text-lg md:text-xl text-white font-bold mt-2 mb-1">
                                <span className="text-2xl">$</span> 0.01 = 1 EDC
                            </h1>


                            <h1 className="text-center text-md md:text-lg text-white font-bold my-1">
                                Your Purchased EDC : 0
                            </h1>

                            <div className="flex flex-col justify-center items-center gap-2 mt-3 md:mt-5 mb-2">
                                <div className="flex justify-center items-center gap-4">
                                    <img
                                        className="w-12 md:w-16 h-12 md:h-16"
                                        src={"/assets/ETH.png"}
                                        alt="ETH Icon"
                                    />

                                    <h1 className="text-center text-lg md:text-xl text-white font-bold">
                                        ETH
                                    </h1>
                                </div>

                                <h1 className="text-center text-md md:text-lg text-white font-bold my-2">
                                    Your Wallet : 0.000 ETH
                                </h1>
                            </div>

                            <div className="mt-2 mb-2 w-full flex flex-col gap-1 md:gap-3">
                                <div className="my-1">
                                    <h1 className="text-md md:text-lg text-left text-white font-bold my-2">
                                        Amount Of ETH
                                    </h1>

                                    <input
                                        className="w-[100%] text-white border font-medium bg-[#121212] border-gray-700 focus:border-zinc-900 text-md md:text-lg outline-none py-1 md:py-2 px-2 md:px-3 leading-8"
                                        placeholder="0.1 ETH"
                                        type="number"
                                    />
                                </div>

                                <div className="my-1">
                                    <h1 className="text-md md:text-lg text-left text-white font-bold my-2">
                                        Tokens
                                    </h1>

                                    <input
                                        className="w-[100%] text-white border font-medium bg-[#121212] border-gray-700 focus:border-zinc-900 text-md md:text-lg outline-none py-1 md:py-2 px-2 md:px-3 leading-8"
                                        placeholder="10 EDC"
                                        type="number"
                                    />
                                </div>

                                <Button
                                    className="text-md md:text-lg my-2 font-bold tracking-widest rounded-none bg-red-600 hover:bg-black text-white hover:text-[#FEDE00] py-5 md:py-7"
                                >
                                    BUY EDC
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Presale;