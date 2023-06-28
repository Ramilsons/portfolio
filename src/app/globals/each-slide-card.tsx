import { useState } from "react";

import Image from "next/image";

interface Props {
    project: {
        imageName?: string,
        name: string,
        resume: string,
        languages: string[],
        description: string,
        link?: string,
    }
}

export default function EachSlideCard({project}: Props){
    const [toggleMoreDetails, setToggleMoreDetails] = useState(false);

    return (
        <li key={project.imageName} className="w-[275px] border-[1px] rounded-[5px]" onClick={ () => setToggleMoreDetails(!toggleMoreDetails)}>
            <div>
                <Image 
                    src={`/images/${project.imageName}`}
                    width="275" 
                    height="190" 
                    alt={project.description} 
                    className={toggleMoreDetails ? 'hidden' : 'h-[190px] object-cover'}
                />
                <div className={toggleMoreDetails ? 'bg-[#F7F7F7] p-5 text-sm h-[190px]' : 'hidden'}>
                    <p>{project.description}</p>
    
                    <h6 className='text-xs font-bold mt-2'>Tecnologias usadas:</h6>
                    <p className="mb-4">{project.languages.join(', ')}</p>

                    {project.link ? <a href={project.link} target="_blank" className="pt-4 text-[var(--blue)]">Acessar</a> : ''}
                </div>
                <div className="h-17 p-5">
                    <div className="flex items-center text-sm gap-5 mb-2">
                        <h4>{project.name}</h4>
                    </div>
                    <h6 className="text-xs font-semibold">{project.resume}</h6>
                </div>
            </div>
        </li>
    )
}