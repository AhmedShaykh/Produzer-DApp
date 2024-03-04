import * as React from "react";
import Hero from "@/Components/Hero";
import Mission from "@/Components/Mission";
import Roadmap from "@/Components/Roadmap";
import Team from "@/Components/Team";
import Tokonomics from "@/Components/Tokonomics";
import Partners from "@/Components/Partners";
import Presale from "@/Components/Presale";
import Section from "@/Components/Section";

const Home = () => {
    return (
        <>
            <Hero />
            <Section />
            <Mission />
            <Roadmap />
            <Tokonomics />
            <Presale />
            <Team />
            <Partners />
        </>
    )
};

export default Home;