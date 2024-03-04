const Hero = () => {
    return (
        <div
            className="w-full bg-center bg-cover bg-no-repeat"
            name="home"
            style={{
                backgroundImage:
                    "url(/assets/dead.webp)"
            }}
        >
            <div className="flex items-center justify-center bg-black bg-opacity-50 w-full h-full py-72 px-5 sm:px-20">
                <div className="wrapper">
                </div>
            </div>
        </div>
    )
};

export default Hero;