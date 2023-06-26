import { useState } from "react";

import Image from "next/image";

interface Props {
    project: {
        name: string,
        resume: string,
        icon: string,
        languages: string[],
        description: string
    }
}

export default function EachSlideCard({project}: Props){
    const [toggleMoreDetails, setToggleMoreDetails] = useState(false);

    return (
        <li className="w-[275px] border-[1px] rounded-[5px]" onClick={ () => setToggleMoreDetails(!toggleMoreDetails)}>
            <div>
                <Image 
                    src='/images/placeholder-image.png' 
                    width="275" 
                    height="190" 
                    alt={project.description} 
                    className={toggleMoreDetails ? 'hidden' : 'h-[190px]'}
                />
                <div className={toggleMoreDetails ? 'bg-[#F7F7F7] p-5 text-sm h-[190px]' : 'hidden'}>
                    <p>{project.description}</p>
    
                    <h6 className='text-xs font-bold mt-2'>Used technologies:</h6>
                    <p>{project.languages.join(', ')}</p>
                </div>
                <div className="h-17 p-5">
                    <div className="flex items-center text-sm gap-5 mb-2">
                        <span className="text-xl">{project.icon}</span>
                        <h4>{project.name}</h4>
                    </div>
                    <h6 className="text-xs font-semibold">{project.resume}</h6>
                </div>
            </div>
        </li>
    )
}