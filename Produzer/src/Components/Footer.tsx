import Wrapper from "./Wrapper";
import Link from "next/link";

const Footer = () => {
    return (
        <div className="px-8 py-8 sm:px-20 sm:py-16">
            <Wrapper>
                <div className="flex flex-col items-center">
                    <Link href={"/"}>
                        <h1 className="text-center text-2xl font-semibold tracking-wide">
                            THE PRODUZER
                        </h1>
                    </Link>

                    <p className="max-w-xl text-md my-5 text-center">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                    </p>

                    <h3 className="text-center text-xl font-semibold tracking-wider">
                        MUSICIAN BASED IN BROOKLYN - NEWYORK | UNITED STATE
                    </h3>
                </div>
            </Wrapper>
        </div>
    )
};

export default Footer;