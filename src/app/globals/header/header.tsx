'use client';
import { useState, useEffect } from "react";

import Image from "next/image";

import LinkNavigation from "./link";
import Menu from "./menu";

interface Props {
    onDarkSection: boolean;
}

export default function Header({ onDarkSection }: Props) {
    const [showMenu, setShowMenu] = useState(false);
    const [headerPadding, setHeaderPadding] = useState(false);

    useEffect(() => {
        let componentsWidth:number;

        componentsWidth = document.querySelector<HTMLElement>('#welcome')?.offsetWidth ?? 0;
        
        if(componentsWidth >= 1240){
            setHeaderPadding(true);
        }  
    }, [])
    
    return (
        <div className={`${headerPadding ? 'w-[100vw] fixed max-w-[1240px] right-[50%] left-[50%] z-30 pr-14' : ''}`}>
            <header className={`fixed right-0 top-0 pr-[1.25rem] pt-7 z-10 flex gap-5 items-center sm:right-[5vw] sm:pt-[3vw] ${headerPadding ? 'lg:static ml-auto mr-auto justify-center' : ''}`}>
                <LinkNavigation target="#contact" text="Contato 📬" headerLink={true} onDarkView={onDarkSection} />
                <Image className="lg:hidden cursor-pointer" alt="clique para abrir o menu" src={ onDarkSection ? '/images/white-menu.png' : '/images/menu.png'} width={36} height={36} onClick={() => { setShowMenu(true) }} />
            </header>
            <Menu changeVisibilityMenu={setShowMenu} isVisible={showMenu} />
        </div>
    )
}