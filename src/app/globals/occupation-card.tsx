import globalsStyle from "../utils/globals-style"

interface Props {
    year: string,
    company: string,
    occupation: string,
    description: string,
    descriptionTwo?: string,
    technologies: string[],
    isDark: boolean,
    mostRecent?: boolean,
}

export default function OccupationCard({year, company, occupation, description, descriptionTwo, technologies, isDark, mostRecent}: Props){
    let paragraphStyle = `font-light ${isDark? 'text-[#fff]' : 'text-[#756A6A]'} text-base mb-[10px]  ${globalsStyle.maxWidthParagraphSize}`;

    return (
        <div>
            <small className={`text-xs font-bold  ${isDark? 'text-[#fff]' : 'text-[#3E3E3E]'}`}>{`${year} | ${company}`}</small>
            { mostRecent ?  <h1 className={`mt-[6px] mb-2 text-[22px] font-light ${isDark? 'text-[#fff]' : 'text-[#756A6A]'}`}>{occupation}</h1> :  <h2 className={`mt-[6px] mb-2 text-[22px] font-light ${isDark? 'text-[#fff]' : 'text-[#756A6A]'}`}>{occupation}</h2> }
           

            <p className={paragraphStyle}>{description}</p>
            { descriptionTwo ? <p className={paragraphStyle}>{descriptionTwo}</p> : '' }

            <p className={`${isDark? 'text-[#fff]' : 'text-[#37352F]'} mt-[6px] text-sm ${globalsStyle.maxWidthParagraphSize}`}>{'Tecnologias: '+technologies.join(', ')}</p>
        </div>
    )
}