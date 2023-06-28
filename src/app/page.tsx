'use client'
import useScrollSnap from "react-use-scroll-snap";
import FirstSection from "./sections/first-section";
import SecondSection from "./sections/second-section";
import ThirdSection from "./sections/third-section";
import FourthSection from "./sections/fourth-section";
import FifthSection from "./sections/fifth-section";
import SixthSection from './sections/sixth-section';

export default function Home() {

    return (
        <main className="bg-[#fff] box-content scroll-smooth text-[#37352F]">
            <FirstSection /> 
            <SecondSection />
            <ThirdSection />
            <FourthSection />
            <FifthSection />
            <SixthSection />
        </main>
    )
}
