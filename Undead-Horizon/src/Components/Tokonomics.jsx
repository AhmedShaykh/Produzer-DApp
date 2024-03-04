"use client";
import DonutChart from "./Chart";
import DonutChart2 from "./Chart2";
import DonutChart3 from "./Chart3";

const Tokonomics = () => {
    return (
        <div className="py-12 px-5 sm:px-20">
            <div
                className="flex flex-col justify-center items-center"
                name="tokonomics"
            >
                <h1 className="sm:text-5xl text-4xl font-bold text-white my-8">
                    Tokonomics
                </h1>

                <h3 className="sm:text-2xl text-xl font-bold text-white my-3">
                    Epidemic coin (EDC)
                </h3>

                <h3 className="sm:text-2xl text-xl font-bold text-white my-3">
                    Total Supply 1,000,000,000
                </h3>

                <h1 className="text-2xl sm:text-3xl font-bold text-white mt-12 mb-4">
                    Token Distribution
                </h1>

                <div className="block md:hidden">
                    <DonutChart />
                </div>

                <div className="hidden md:block lg:hidden">
                    <DonutChart2 />
                </div>

                <div className="hidden lg:block">
                    <DonutChart3 />
                </div>
            </div>

            <div className="flex flex-col max-w-3xl mx-auto">
                <div className="mt-12 mb-4">
                    <h3 className="sm:text-2xl text-xl font-bold text-white my-3">
                        Presale:
                    </h3>

                    <p className="text-slate-200 leading-6 tracking-wider">
                        This allows early investors to get in on the ground floor and secure their investment..
                    </p>
                </div>

                <div className="my-4">
                    <h3 className="sm:text-2xl text-xl font-bold text-white my-3">
                        Liquidity:
                    </h3>

                    <p className="text-slate-200 leading-6 tracking-wider">
                        {`This ensures there's enough liquidity in the market for smooth trading and make sure that
                        the launch price is bigger than the presale price.`}
                    </p>
                </div>

                <div className="my-4">
                    <h3 className="sm:text-2xl text-xl font-bold text-white my-3">
                        Marketing:
                    </h3>

                    <p className="text-slate-200 leading-6 tracking-wider">
                        Our marketing budget is carefully allocated to ensure maximum visibility and engagement.
                        This includes promoting our project on social media platforms, sponsoring relevant events
                        and conferences, collaborating with influencers, and launching targeted advertising campaigns. Through this strategic allocation of resources, we aim to expand our reach, attract
                        new community members, and increase awareness of our project.
                    </p>
                </div>

                <div className="my-4">
                    <h3 className="sm:text-2xl text-xl font-bold text-white my-3">
                        Rewards:
                    </h3>

                    <p className="text-slate-200 leading-6 tracking-wider">
                        Games should incorporate robust reward mechanisms that acknowledge and compensate
                        players for their achievements. This could include in-game currencies for buying rare
                        items, or other valuable assets within the game.
                    </p>
                </div>

                <div className="my-4">
                    <h3 className="sm:text-2xl text-xl font-bold text-white my-3">
                        Staking:
                    </h3>

                    <p className="text-slate-200 leading-6 tracking-wider">
                        Staking our crypto helps secure and stabilize the network while earning rewards for our involvement. It strengthens the blockchain infrastructure and promotes decentralization while
                        also providing a passive income stream for long-term investments.
                    </p>
                </div>

                <div className="my-4">
                    <h3 className="sm:text-2xl text-xl font-bold text-white my-3">
                        Team:
                    </h3>

                    <p className="text-slate-200 leading-6 tracking-wider">
                        {`Allocating funds for recruitment is vital for our project's advancement. By hiring skilled individuals, we enhance our team's capabilities and foster innovation. Each new member contributes to a diverse environment, ensuring we're well-equipped to tackle challenges and
                        achieve our goals.`}
                    </p>
                </div>

                <div className="my-4">
                    <h3 className="sm:text-2xl text-xl font-bold text-white my-3">
                        Buy & Sell Tax:
                    </h3>

                    <p className="text-slate-200 leading-6 tracking-wider">
                        {`Buy and sell taxes are just another way for betas to control your hard-earned gains. It's a
                        total buzzkill for alpha investors, that’s why taxes on Epidemic coin are 0%.`}
                    </p>
                </div>

                <div className="mt-4 mb-0 md:mb-4">
                    <h3 className="sm:text-2xl text-xl font-bold text-white my-3">
                        Advisors & Ambassador Program:
                    </h3>

                    <p className="text-slate-200 leading-6 tracking-wider">
                        {`Allocating funds to Advisors & Ambassador Program is essential for leveraging expertise
                        and expanding our project's reach. Advisors provide valuable guidance and industry insights,
                        while ambassadors help promote our project and engage with the community. Investing in these programs
                        trengthens our network, enhances credibility, and fosters sustainable growth.`}
                    </p>
                </div>
            </div>
        </div>
    )
};

export default Tokonomics;