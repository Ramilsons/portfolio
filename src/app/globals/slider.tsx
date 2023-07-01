"use client"
import { useState } from "react";

import Image from "next/image";
import EachSlideCard from "./each-slide-card";

interface Props {
    projects: Array<Type>;
}

interface Type {
    name: string,
    resume: string,
    icon: string,
    languages: string[],
    description: string
}

export default function Slider({projects}: Props) {
    const [showGif, setShowGif] = useState(true);
    const [showClickIcon, setShowClickIcon] = useState(true);

    return (
        <div className="overflow-scroll scroll-smooth snap-mandatory w-[100%] relative" onScroll={() => setShowGif(false)} onClick={() => setShowClickIcon(false)}>
            <Image 
                src="/images/click-icon.png"
                alt="click for more details"
                className={`sticky w-[28px] h-[28px] top-9 left-[230px] ${showClickIcon ? '' : 'opacity-0'}`}
                width={28}
                height={32}
            />
            <ul className="w-max flex gap-4 pr-4">
                { 
                    projects.map((eachProject) => {
                        return (
                            <EachSlideCard key={eachProject.name} project={eachProject} />
                        )
                    }) 
                }
            </ul>
            <div className={`w-[100%] relative justify-center mt-[-10px] h-[30px] ${showGif ? '' : 'opacity-0'}`}>
                <Image src='/images/horizontal-scroll.png' className="sticky left-[45vw]"  alt="Scrolling to view another projects" width={30} height={30} />
            </div>
        </div>
    )
}