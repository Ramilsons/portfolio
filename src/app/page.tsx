'use client'
import Welcome from "./sections/welcome";
import About from "./sections/about-me";
import Projects from "./sections/projects";
import Career from "./sections/career";
import SecondCareer from "./sections/career-second-page";
import Contact from './sections/contact';
import Header from "./globals/header/header";
import globalsStyle from "./utils/globals-style";
import { useEffect, useState } from "react";

export default function () {
    const [onDarkSection, setOnDarkSection] = useState(false);

    useEffect(() => {
        document.getElementById('scrollView')?.addEventListener('scroll', () => {
            const distanceTopFirstSectionCareer = document.getElementById('career')?.getBoundingClientRect().top || 0;
            const distanceTopSecondSectionCareer = document.getElementById('secondCareer')?.getBoundingClientRect().top || 0;

            if(distanceTopFirstSectionCareer <= 0 && distanceTopSecondSectionCareer >= ((window.screen.availHeight * -1) + 60)){
                setOnDarkSection(true);
            }else{
                setOnDarkSection(false);
            }
        });
    });

    return (
        <main id="scrollView" className="bg-[#fff] box-content scroll-smooth text-[#37352F] h-[100vh] relative snap-y snap-mandatory overflow-y-scroll">
            <Header onDarkSection={onDarkSection} />
            <Welcome /> 
            <About />
            <Projects />
            <div className={`lg:h-[100vh] lg:bg-[#433F3F]  snap-start`}>
                <div className={`lg:flex lg:items-center justify-center lg:h-[100vh] lg:ml-auto lg:mr-auto`}>
                    <div className={`lg:flex lg:items-end justify-between lg:w-[90%] ${globalsStyle.maxWidthScreen}`}>
                        <Career />
                        <SecondCareer />
                    </div>
                </div>
            </div>
            <Contact />
        </main>
    )
}
