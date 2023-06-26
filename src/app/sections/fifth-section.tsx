import OccupationCard from "../globals/occupation-card";

export default function FifthSection() {
    return (
        <div className="relative flex flex-col item-left justify-center h-[100vh] p-7 bg-[#433F3F]">
            <div className="mb-11">
                <OccupationCard 
                    year='2022' 
                    company='Media.Monks Brasil' 
                    occupation='Web Development Analyst'
                    description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc condimentum lobortis elit, quis pellentesque elit semper sit amet. Nulla sed ex ut urna ornare semper.'
                    descriptionTwo='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                    technologies={['React, TypeScript']}
                    isDark={true}
                />             
            </div>
            <OccupationCard 
                year='2022' 
                company='Media.Monks Brasil' 
                occupation='Web Development Analyst'
                description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc condimentum lobortis elit, quis pellentesque elit semper sit amet. Nulla sed ex ut urna ornare semper.'
                descriptionTwo='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                technologies={['React, TypeScript']}
                isDark={true}
            />
        </div>
    )
}