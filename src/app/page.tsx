'use client'
import Welcome from "./sections/welcome";
import About from "./sections/about-me";
import Projects from "./sections/projects";
import Career from "./sections/career";
import SecondCareer from "./sections/career-second-page";
import Contact from './sections/contact';
import Menu from "./globals/menu";
import LinkNavigation from "./globals/link";

import { useState } from "react";
import Image from "next/image";

export default function () {
    const [showMenu, setShowMenu] = useState(false);
    
    return (
        <main className="bg-[#fff] box-content scroll-smooth text-[#37352F] h-[100vh] snap-y snap-mandatory overflow-y-scroll">
            <header className="fixed right-0 top-0 pr-7 pt-7 z-10 flex gap-5 items-center">
                <LinkNavigation target="#contact" text="Contato 📬" headerLink={true} />
                <Image alt="clique para abrir o menu" src={'/images/menu.png'} width={36} height={36} onClick={() => { setShowMenu(true) }} />
            </header>

            <Menu changeVisibilityMenu={setShowMenu} isVisible={showMenu} />
            <Welcome /> 
            <About />
            <Projects />
            <Career />
            <SecondCareer />
            <Contact />
        </main>
    )
}
