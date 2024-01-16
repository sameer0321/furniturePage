import React from "react";
import SecondSection from "../components/SecondSection";
import Slider1 from "../components/Slider1";
import Slider2 from "../components/Slider2";
import ProductsSection from "../components/ProductsSection";
import Slider3 from "../components/Slider3";
import FestivalSection from "../components/FestivalSection";
import WoodenSofaSection from "../components/WoodenSofaSection";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <>
            <SecondSection />
            <Slider1 />
            <ProductsSection />
            <WoodenSofaSection />
            <Slider2 />
            <FestivalSection />
            <Slider3 />
            <Footer/>
        </>
    );
};

export default Home;