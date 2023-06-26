import ContainerSections from "../globals/container-sections";
import MainEmoji from "../globals/main-emoji";
import Slider from "../globals/slider";
import Title from "../globals/title";

export default function ThirdSection() {
    let allProjects = [
        {
            name: 'JRT Medicaments',
            resume: 'App to alert user on hour medicament',
            icon: '💊',
            languages: ['Typescript', 'Node', 'React Native', 'MongoDB'],
            description: '*****'
        },
        {
            name: 'JRT Medicaments',
            resume: 'App to alert user on hour medicament',
            icon: '💊',
            languages: ['Typescript', 'Node', 'React Native', 'MongoDB'],
            description: '*****'
        },
        {
            name: 'JRT Medicaments',
            resume: 'App to alert user on hour medicament',
            icon: '💊',
            languages: ['Typescript', 'Node', 'React Native', 'MongoDB'],
            description: '*****'
        }
    ]

    return (
        <ContainerSections identify="projects">
            <MainEmoji text="📂" />
            <Title text={'Projects'} />
            <Slider projects={allProjects} />
        </ContainerSections>
    )
}