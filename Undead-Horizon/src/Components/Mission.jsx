import React from "react";

const Mission = () => {
    return (
        <div className="pb-8 px-5 sm:px-20">
            <div
                className="mx-auto flex px-5 pt-8 sm:pt-16 flex-col items-center wrapper"
                name="mission"
            >
                <div className="flex flex-col gap-4 justify-center items-center text-center max-w-5xl">
                    <h1 className="sm:text-5xl text-4xl font-bold text-white">
                        Mission
                    </h1>

                    <h1 className="sm:text-3xl text-2xl font-bold text-red-600 mt-4 mb-2 tracking-wider">
                        Survive and Thrive: Build Your Future in the Unforgiving Undead Horizon!
                    </h1>

                    <p className="text-md font-medium mt-2 md:mt-4 text-slate-200 leading-6 tracking-wider md:tracking-widest">
                        {`At Undead Horizon, our mission is to immerse players in a terrifying world of survival and
                        adventure amidst a zombie apocalypse. We aim to provide an immersive experience,
                        challenging players to utilize their skills, strategies, and courage to survive against unthinkable threats.`}
                    </p>

                    <p className="text-md font-medium mt-2 text-slate-200 leading-6 tracking-wider md:tracking-widest">
                        {`Through deep storylines, stunning visuals, and engaging gameplay, we aim to bring together a community of survivors who support, compete, and collaborate to restore the world and survive.`}
                    </p>

                    <p className="text-md font-medium mt-2 text-slate-200 leading-6 tracking-wider md:tracking-widest">
                        {`The game introduces a groundbreaking economy through its in-game cryptocurrency,
                        Epidemic Coin,enabling players to engage in trade, forge alliances, or betray one another
                        for profit. With every encounter, players must decide whether to collaborate for survival.`}
                    </p>

                    <p className="text-md font-semibmedium mb-4 text-slate-200 leading-6 tracking-wider md:tracking-widest">
                        {`Our mission is to create a platform where adventurers from around the globe come together to prove that even amid darkness, hope and courage prevail, all powered by the innovative use of Epidemic Coin cryptocurrency`}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Mission;