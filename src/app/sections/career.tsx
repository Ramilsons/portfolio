import MainEmoji from "../globals/main-emoji";
import Title from "../globals/title";
import OccupationCard from "../globals/occupation-card";

import globalStyle from "../globals/globals-style";

export default function FourthSection() {
    return (
        <div className={globalStyle.darkText} id="career">
            <div className="sm:w-[90%] ml-[auto] mr-[auto]">
                <MainEmoji text="💼"/>
                <Title text={'Carreira'} isDark={true} />
                <OccupationCard 
                    year='2023' 
                    company='Media.Monks Brasil' 
                    occupation='Web Development Analyst'
                    description='Responsável pela criação de blogs, análise e melhoria de
                    performance de sites, criação de códigos para testes
                    A/B e suporte no desenvolvimento da área com a
                    criação de documentações, capacitação de analistas e
                    participação em propostas comerciais.
                    '
                    technologies={['Next', 'React', 'VTEX', 'TypeScript', 'Sass']}
                    isDark={true}
                />
            </div>
        </div>
    )
}