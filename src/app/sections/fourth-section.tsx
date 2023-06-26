import ContainerSections from "../globals/container-sections";
import MainEmoji from "../globals/main-emoji";
import Title from "../globals/title";
import OccupationCard from "../globals/occupation-card";

export default function FourthSection() {
    return (
        <ContainerSections>
            <MainEmoji text="💼"/>
            <Title text={'Career'} />
            <OccupationCard 
                year='2023' 
                company='Media.Monks Brasil' 
                occupation='Web Development Analyst'
                description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc condimentum lobortis elit, quis pellentesque elit semper sit amet. Nulla sed ex ut urna ornare semper.'
                descriptionTwo='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                technologies={['React, TypeScript']}
                isDark={false}
            />
        </ContainerSections>
    )
}