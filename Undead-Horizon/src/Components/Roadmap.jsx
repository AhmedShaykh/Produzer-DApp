"use client";
import { Autoplay, FreeMode, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css";

const Roadmap = () => {
    return (
        <div className="pt-8 px-5 sm:px-20">
            <div className="wrapper pt-8" name="roadmap">
                <h1 className="text-center sm:text-5xl text-4xl font-bold text-white pb-2">
                    Roadmap
                </h1>

                <div className="mt-8 md:mt-12">
                    <Swiper
                        breakpoints={{
                            1000: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                        }}
                        freeMode={true}
                        loop={true}
                        navigation
                        style={{
                            "--swiper-pagination-color": "#fede00",
                            "--swiper-navigation-color": "#fede00",
                        }}
                        autoplay={{
                            delay: 6000,
                            disableOnInteraction: false,
                        }}
                        modules={[FreeMode, Pagination, Autoplay, Navigation]}
                    >
                        <SwiperSlide>
                            <div
                                className="border border-white max-w-6xl w-full bg-cover bg-center h-[500px]"
                                style={{
                                    backgroundImage:
                                        "url(/assets/hero2.webp)"
                                }}
                            >
                                <div className="bg-zinc-800 bg-opacity-60 w-full h-full px-3 md:px-4 py-4 flex flex-col gap-4 tracking-widest overflow-y-auto scrollbar-thumb-slate-500 scrollbar-track-transparent scrollbar-thin scrollbar-thumb-rounded">
                                    <h1 className="text-3xl md:text-4xl font-bold mb-3">
                                        Q1 - 2024 : Preparing for Launch
                                    </h1>

                                    <h3 className="text-xl md:text-2xl font-bold">
                                        Game Concept and Teasers:
                                    </h3>

                                    <p className="text-md font-semibold leading-5 tracking-wider md:tracking-widest text-slate-200">
                                        Announce the zombie game concept and generate interest through teasers.
                                    </p>

                                    <p className="text-md font-semibold leading-5 tracking-wider md:tracking-widest text-slate-200">
                                        Provide a brief overview of how crypto will be integrated into the game.
                                    </p>

                                    <h3 className="text-xl md:text-2xl font-bold">
                                        Presale Announcement:
                                    </h3>

                                    <p className="text-md font-semibold leading-5 tracking-wider md:tracking-widest text-slate-200">
                                        Officially announce the presale of exclusive in-game items, characters, or early access passes.
                                    </p>

                                    <p className="text-md font-semibold leading-5 tracking-wider md:tracking-widest text-slate-200 pb-4">
                                        Mention plans for listing the native cryptocurrency on popular exchanges post-launch.
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div
                                className="border border-white max-w-6xl w-full bg-cover bg-center h-[500px]"
                                style={{
                                    backgroundImage:
                                        "url(/assets/hero4.webp)"
                                }}
                            >
                                <div className="bg-zinc-800 bg-opacity-60 w-full h-full px-3 md:px-4 py-4 flex flex-col gap-4 tracking-widest overflow-y-auto scrollbar-thumb-slate-500 scrollbar-track-transparent scrollbar-thin scrollbar-thumb-rounded">
                                    <h1 className="text-3xl md:text-4xl font-bold mb-3">
                                        Q2 - 2024 : Presale Launch
                                    </h1>

                                    <h3 className="text-xl md:text-2xl font-bold">
                                        Presale Period:
                                    </h3>

                                    <p className="text-md font-semibold leading-5 tracking-wider md:tracking-widest text-slate-200">
                                        Open the presale period, allowing players to purchase Epidemic coins using fiat currency or popular cryptocurrencies.
                                    </p>

                                    <p className="text-md font-semibold leading-5 tracking-wider md:tracking-widest text-slate-200">
                                        Offer limited edition NFTs, early access passes, or other attractive items as incentives.
                                    </p>

                                    <h3 className="text-xl md:text-2xl font-bold">
                                        Presale Rewards and Bonuses:
                                    </h3>

                                    <p className="text-md font-semibold leading-5 tracking-wider md:tracking-widest text-slate-200">
                                        Reward early presale participants with additional in-game assets, special skins, or exclusive items.
                                    </p>

                                    <p className="text-md font-semibold leading-5 tracking-wider md:tracking-widest text-slate-200 pb-4">
                                        Announce that presale participants will receive a bonus upon the native cryptocurrency listing on exchanges
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div
                                className="border border-white max-w-6xl w-full bg-cover bg-center h-[500px]"
                                style={{
                                    backgroundImage:
                                        "url(/assets/hero.webp)"
                                }}
                            >
                                <div className="bg-zinc-800 bg-opacity-60 w-full h-full px-3 md:px-4 py-4 flex flex-col gap-4 tracking-widest overflow-y-auto scrollbar-thumb-slate-500 scrollbar-track-transparent scrollbar-thin scrollbar-thumb-rounded">
                                    <h1 className="text-3xl md:text-4xl font-bold mb-3">
                                        Q3 - 2024 : Initial Crypto Integration
                                    </h1>

                                    <h3 className="text-xl md:text-2xl font-bold">
                                        Beta Game Launch and Basic Mechanics:
                                    </h3>

                                    <p className="text-md font-semibold leading-5 tracking-wider md:tracking-widest text-slate-200">
                                        Release the basic version of the zombie game without crypto integration.
                                    </p>

                                    <p className="text-md font-semibold leading-5 tracking-wider md:tracking-widest text-slate-200">
                                        Introduce players to the storyline, characters, and basic gameplay mechanics.
                                    </p>

                                    <h3 className="text-xl md:text-2xl font-bold">
                                        Crypto Wallet Integration:
                                    </h3>

                                    <p className="text-md font-semibold leading-5 tracking-wider md:tracking-widest text-slate-200">
                                        Integrate a basic crypto wallet system into the game.
                                    </p>

                                    <p className="text-md font-semibold leading-5 tracking-wider md:tracking-widest text-slate-200">
                                        Allow players to create an in-game wallet to store and manage their crypto assets.
                                    </p>

                                    <h3 className="text-xl md:text-2xl font-bold">
                                        Native Token Introduction:
                                    </h3>

                                    <p className="text-md font-semibold leading-5 tracking-wider md:tracking-widest text-slate-200">
                                        Launch a native in-game cryptocurrency Epidemic coins  that players can earn through achievements, completing missions, and surviving zombie attacks.
                                    </p>

                                    <h3 className="text-xl md:text-2xl font-bold">
                                        Player-Owned Assets:
                                    </h3>

                                    <p className="text-md font-semibold leading-5 tracking-wider md:tracking-widest text-slate-200">
                                        Allow players to own and trade in-game assets as NFTs.
                                    </p>

                                    <p className="text-md font-semibold leading-5 tracking-wider md:tracking-widest text-slate-200">
                                        Enable the transfer of ownership using the native cryptocurrency.
                                    </p>

                                    <h3 className="text-xl md:text-2xl font-bold">
                                        Native Cryptocurrency Dex Listing:
                                    </h3>

                                    <p className="text-md font-semibold leading-5 tracking-wider md:tracking-widest text-slate-200 pb-4">
                                        List the native cryptocurrency on selected dex.
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div
                                className="border border-white max-w-6xl w-full bg-cover bg-center h-[500px]"
                                style={{
                                    backgroundImage:
                                        "url(/assets/hero4.webp)"
                                }}
                            >
                                <div className="bg-zinc-800 bg-opacity-60 w-full h-full px-3 md:px-4 py-4 flex flex-col gap-4 tracking-widest overflow-y-auto scrollbar-thumb-slate-500 scrollbar-track-transparent scrollbar-thin scrollbar-thumb-rounded">
                                    <h1 className="text-3xl md:text-4xl font-bold mb-3">
                                        Q4 - 2024 : Crypto Economy Expansion & Exchange Listing and full launch
                                    </h1>

                                    <h3 className="text-xl md:text-2xl font-bold">
                                        Marketplace Implementation:
                                    </h3>

                                    <p className="text-md font-semibold leading-5 tracking-wider md:tracking-widest text-slate-200">
                                        Introduce an in-game marketplace where players can buy and sell virtual items using the native cryptocurrency.
                                    </p>

                                    <p className="text-md font-semibold leading-5 tracking-wider md:tracking-widest text-slate-200">
                                        Include unique weapons, skins, and other customization options.
                                    </p>

                                    <h3 className="text-xl md:text-2xl font-bold">
                                        NFT Integration:
                                    </h3>

                                    <p className="text-md font-semibold leading-5 tracking-wider md:tracking-widest text-slate-200">
                                        Introduce Non-Fungible Tokens (NFTs) tied to rare in-game items, characters, or locations.
                                    </p>

                                    <p className="text-md font-semibold leading-5 tracking-wider md:tracking-widest text-slate-200">
                                        Allow players to trade these NFTs within the game.
                                    </p>

                                    <h3 className="text-xl md:text-2xl font-bold">
                                        Crypto Rewards for Achievements:
                                    </h3>

                                    <p className="text-md font-semibold leading-5 tracking-wider md:tracking-widest text-slate-200">
                                        Implement crypto rewards for completing challenging in-game achievements.
                                    </p>

                                    <p className="text-md font-semibold leading-5 tracking-wider md:tracking-widest text-slate-200">
                                        Encourage players to explore different aspects of the game to earn more crypto rewards.
                                    </p>

                                    <h3 className="text-xl md:text-2xl font-bold">
                                        Presale Item Distribution:
                                    </h3>

                                    <p className="text-md font-semibold leading-5 tracking-wider md:tracking-widest text-slate-200">
                                        Distribute exclusive presale items to players who participated.
                                    </p>

                                    <p className="text-md font-semibold leading-5 tracking-wider md:tracking-widest text-slate-200">
                                        Ensure a seamless integration of these items into the game.
                                    </p>

                                    <h3 className="text-xl md:text-2xl font-bold">
                                        Native Cryptocurrency Listing Preparation:
                                    </h3>

                                    <p className="text-md font-semibold leading-5 tracking-wider md:tracking-widest text-slate-200">
                                        Begin the process of preparing documentation, compliance checks, and required materials for listing the native cryptocurrency on exchanges
                                    </p>

                                    <h3 className="text-xl md:text-2xl font-bold">
                                        Native Cryptocurrency Exchange Listing:
                                    </h3>

                                    <p className="text-md font-semibold leading-5 tracking-wider md:tracking-widest text-slate-200">
                                        List the native cryptocurrency on selected exchanges.
                                    </p>

                                    <p className="text-md font-semibold leading-5 tracking-wider md:tracking-widest text-slate-200">
                                        Communicate the listing to the community and acknowledge the support of presale participants.
                                    </p>

                                    <h3 className="text-xl md:text-2xl font-bold">
                                        Exchange Listing Promotions:
                                    </h3>

                                    <p className="text-md font-semibold leading-5 tracking-wider md:tracking-widest text-slate-200">
                                        Conduct promotional activities around the exchange listing, such as trading competitions or exclusive rewards for users trading the native cryptocurrency.
                                    </p>

                                    <p className="text-md font-semibold leading-5 tracking-wider md:tracking-widest text-slate-200 pb-4">
                                        Launch game
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div
                                className="border border-white max-w-6xl w-full bg-cover bg-center h-[500px]"
                                style={{
                                    backgroundImage:
                                        "url(/assets/hero5.webp)"
                                }}
                            >
                                <div className="bg-zinc-800 bg-opacity-60 w-full h-full px-3 md:px-4 py-4 flex flex-col gap-4 tracking-widest overflow-y-auto scrollbar-thumb-slate-500 scrollbar-track-transparent scrollbar-thin scrollbar-thumb-rounded">
                                    <h1 className="text-3xl md:text-4xl font-bold mb-3">
                                        Q1 - 2025 : Community Engagement and Events
                                    </h1>

                                    <h3 className="text-xl md:text-2xl font-bold">
                                        PvP Tournaments and Challenges:
                                    </h3>

                                    <p className="text-md font-semibold leading-5 tracking-wider md:tracking-widest text-slate-200">
                                        Host PvP tournaments and community challenges with special rewards, including exclusive items or increased crypto rewards.
                                    </p>

                                    <h3 className="text-xl md:text-2xl font-bold">
                                        DAO Activation:
                                    </h3>

                                    <p className="text-md font-semibold leading-5 tracking-wider md:tracking-widest text-slate-200 pb-4">
                                        Activate the decentralized autonomous organization (DAO) and involve presale participants in decision-making processes using their native cryptocurrency holdings.
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div
                                className="border border-white max-w-6xl w-full bg-cover bg-center h-[500px]"
                                style={{
                                    backgroundImage:
                                        "url(/assets/hero6.webp)"
                                }}
                            >
                                <div className="bg-zinc-800 bg-opacity-60 w-full h-full px-3 md:px-4 py-4 flex flex-col gap-4 tracking-widest overflow-y-auto scrollbar-thumb-slate-500 scrollbar-track-transparent scrollbar-thin scrollbar-thumb-rounded">
                                    <h1 className="text-3xl md:text-4xl font-bold mb-3">
                                        Q2 - 2025: Crypto Economy Expansion
                                    </h1>

                                    <h3 className="text-xl md:text-2xl font-bold">
                                        Marketplace Expansion:
                                    </h3>

                                    <p className="text-md font-semibold leading-5 tracking-wider md:tracking-widest text-slate-200">
                                        Introduce additional in-game items to the marketplace, including those exclusive to presale participants.
                                    </p>

                                    <p className="text-md font-semibold leading-5 tracking-wider md:tracking-widest text-slate-200">
                                        Promote ongoing trade and transactions using the native cryptocurrency.
                                    </p>

                                    <h3 className="text-xl md:text-2xl font-bold">
                                        NFT Integration and Exclusive Drops:
                                    </h3>

                                    <p className="text-md font-semibold leading-5 tracking-wider md:tracking-widest text-slate-200">
                                        Continue introducing NFTs tied to rare in-game items, characters, or locations.
                                    </p>

                                    <p className="text-md font-semibold leading-5 tracking-wider md:tracking-widest text-slate-200 pb-4">
                                        Organize periodic exclusive NFT drops, providing scarcity and value to the items.
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div
                                className="border border-white max-w-6xl w-full bg-cover bg-center h-[500px]"
                                style={{
                                    backgroundImage:
                                        "url(/assets/hero7.webp)"
                                }}
                            >
                                <div className="bg-zinc-800 bg-opacity-60 w-full h-full px-3 md:px-4 py-4 flex flex-col gap-4 tracking-widest overflow-y-auto scrollbar-thumb-slate-500 scrollbar-track-transparent scrollbar-thin scrollbar-thumb-rounded">
                                    <h1 className="text-3xl md:text-4xl font-bold mb-3">
                                        Q3 - 2025: Advanced Crypto Features and Endgame
                                    </h1>

                                    <h3 className="text-xl md:text-2xl font-bold">
                                        Player-Owned Assets and Governance:
                                    </h3>

                                    <p className="text-md font-semibold leading-5 tracking-wider md:tracking-widest text-slate-200">
                                        Enable the ownership and trade of in-game assets as NFTs, with early access or exclusive benefits for presale participants.
                                    </p>

                                    <p className="text-md font-semibold leading-5 tracking-wider md:tracking-widest text-slate-200">
                                        Incorporate the presale community in governance decisions using their holdings.
                                    </p>

                                    <h3 className="text-xl md:text-2xl font-bold">
                                        Endgame Content and Challenges:
                                    </h3>

                                    <p className="text-md font-semibold leading-5 tracking-wider md:tracking-widest text-slate-200">
                                        Develop challenging endgame content with unique rewards for presale participants.
                                    </p>

                                    <p className="text-md font-semibold leading-5 tracking-wider md:tracking-widest text-slate-200 pb-4">
                                        Continue hosting events with crypto prizes for ongoing engagement.
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div
                                className="border border-white max-w-6xl w-full bg-cover bg-center h-[500px]"
                                style={{
                                    backgroundImage:
                                        "url(/assets/hero8.webp)"
                                }}
                            >
                                <div className="bg-zinc-800 bg-opacity-60 w-full h-full px-3 md:px-4 py-4 flex flex-col gap-4 tracking-widest overflow-y-auto scrollbar-thumb-slate-500 scrollbar-track-transparent scrollbar-thin scrollbar-thumb-rounded">
                                    <h1 className="text-3xl md:text-4xl font-bold mb-3">
                                        Q4 - 2025 : Continuous Improvement and Feedback (Ongoing)
                                    </h1>

                                    <h3 className="text-xl md:text-2xl font-bold">
                                        Regular Updates and Expansions:
                                    </h3>

                                    <p className="text-md font-semibold leading-5 tracking-wider md:tracking-widest text-slate-200">
                                        Plan regular updates and expansions to introduce new content, crypto-related features, and challenges.
                                    </p>

                                    <p className="text-md font-semibold leading-5 tracking-wider md:tracking-widest text-slate-200">
                                        Acknowledge and reward the ongoing support of presale participants.
                                    </p>

                                    <h3 className="text-xl md:text-2xl font-bold">
                                        Feedback Channels:
                                    </h3>

                                    <p className="text-md font-semibold leading-5 tracking-wider md:tracking-widest text-slate-200 pb-4">
                                        Maintain open channels for presale participants to provide feedback on crypto features, overall gameplay, and the exchange listing experience.
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    )
};

export default Roadmap;