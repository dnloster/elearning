import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Authors from "~/components/Authors";
import Courses from "~/components/Courses";
import Hero from "~/components/Hero";

const Home = () => {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <>
            <Hero />
            <div className="container mx-auto ml-[320px]">
                <Courses animation="fade-left" offset="500" easing="ease-in-sine" />
                <Authors animation="fade-up-left" offset="500" easing="ease-in-sine" />
            </div>
        </>
    );
};

export default Home;
