import ContainerSections from "../globals/container-sections";
import MainEmoji from "../globals/main-emoji";
import Slider from "../globals/slider";
import Title from "../globals/title";

export default function ThirdSection() {
    let allProjects = [
        {
            name: 'JRT Medicamentos',
            resume: 'App para alertar usuários à tomar o medicamento no horário correto',
            icon: '💊',
            languages: ['Typescript', 'Node', 'React Native', 'Express', 'MongoDB'],
            description: 'Compatível com IOs e Android. Integrado para mandar SMS no número do usuário.',
            link: 'https://drive.google.com/file/d/1P4f7rxz23cU2P_ITbgQRZkiVwTH-8WHh/view?usp=sharing',
            imageName: 'jrt.png'
        },
        {
            name: 'Vai uma fruta aí?',
            resume: 'Site com informações das importância e dos benefícios das frutas',
            icon: '🍏',
            languages: ['HTML', 'JavaScript', 'CSS'],
            description: 'Realizado para participação do processo seletivo da Media.Monks onde vários fatores foram análisados, entre eles o SEO.',
            link: 'https://ramilsons.github.io/ProcessoSeletivo/',
            imageName: 'fruits.png'
        },
        {
            name: 'Controle de Despesas',
            resume: 'Site para ajudar no controle na gestão das despesas',
            icon: '💸',
            languages: ['React', 'CSS'],
            description: 'Projeto desenvolvido durante um curso onde o desafio era criar a aperfeiçoar essa página.',
            link: 'https://controle-despesas-ramils.vercel.app/',
            imageName: 'project-control.png'
        }
    ]

    return (
        <ContainerSections identify="projects">
            <MainEmoji text="📂" />
            <Title text={'Projetos'} />
            <Slider projects={allProjects} />
        </ContainerSections>
    )
}