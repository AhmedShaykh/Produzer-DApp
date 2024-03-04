import { TEAM } from "@/static";

const Team = () => {
    return (
        <div className="py-6 sm:pt-12 sm:pb-8 px-5 sm:px-20">
            <div name="team">
                <h1 className="sm:text-5xl text-4xl font-bold text-center text-white pt-7">
                    Team
                </h1>

                <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-12 lg:px-6">
                    <div className="grid gap-8 lg:gap-16 grid-cols-1 lg:grid-cols-3">
                        {TEAM.map((item, i) => (
                            <div
                                className="text-center"
                                key={i}
                            >
                                <img
                                    className="mx-auto mb-4 w-50 h-50"
                                    src={item.img}
                                    alt={item.name}
                                />

                                <h3 className="mb-1 text-2xl font-bold text-white">
                                    {item.name}
                                </h3>

                                <p className="tracking-widest text-center text-lg font-semibold">
                                    {item.position}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Team;