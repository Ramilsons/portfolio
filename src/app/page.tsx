'use client'
import { useEffect, useState } from "react";

import FirstSection from "./sections/first-section";
import SecondSection from "./sections/second-section";
import ThirdSection from "./sections/third-section";
import FourthSection from "./sections/fourth-section";
import FifthSection from "./sections/fifth-section";

export default function Home() {
    const [scrollPrevious, setScrollPrevious] = useState(0);

    function goToNextView() {
        console.log(scrollPrevious);
    }

    useEffect(() => {
        document.addEventListener('scroll', goToNextView)
    }, [])

    return (
        <main className="bg-[#fff] box-content scroll-smooth text-[#37352F]">
            <FirstSection /> 
            <SecondSection />
            <ThirdSection />
            <FourthSection />
            <FifthSection />
        </main>
    )
}
