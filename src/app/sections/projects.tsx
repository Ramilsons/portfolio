import ContainerSections from "../globals/container-sections";
import MainEmoji from "../globals/main-emoji";
import Slider from "../globals/slider";
import Title from "../globals/title";

export default function ThirdSection() {
    let allProjects = [
        {
            name: 'Blog do Ramils',
            resume: 'Site onde posto meu artigos com dicas para Devs',
            icon: '✍🏼',
            languages: ['Next', 'Tailwind', 'PrismicCMS'],
            description: 'Criado com intuito de ajudar outros Devs com dicas à nível de código e também à nível de carreira.',
            link: 'https://blogramils.vercel.app/',
            imageName: 'blog.png'
        },
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
            imageName: 'fruits-web.png'
        },
        {
            name: 'Happy (NLW)',
            resume: 'Site que conecta pessoas à casas de acolhimento',
            icon: '',
            languages: ['Node', 'JavaScript', 'Express', 'Handlebars'],
            description: 'Realizado durante a semana NLW da RocketSeat. Site conta com cadastro e interação com mapa.',
            link: '',
            imageName: 'nlw.png'
        },
        {
            name: 'Portfólio',
            resume: 'Essa página aqui que você está navegando',
            icon: '',
            languages: ['TypeScript', 'Tailwind', 'Next', 'React'],
            description: 'Página conta com projetos, apresentação, experiência profisisonal e contato.',
            link: '',
            imageName: 'portfolio.png'
        },
        {
            name: 'Jogo da Memória',
            resume: 'Jogo da memória para jogar em dupla',
            icon: '🎮',
            languages: ['JavaScript', 'HTML','CSS'],
            description: 'Jogo da memória com o tema: animais. Fiz para me divertir e trabalhar a minha lógica.',
            link: 'https://memory-game-two-tau.vercel.app/',
            imageName: 'memory.png'
        },
        {
            name: 'Controle de Despesas',
            resume: 'Site para ajudar no controle na gestão das despesas',
            icon: '💸',
            languages: ['React', 'CSS'],
            description: 'Projeto desenvolvido durante um curso onde o desafio era criar a aperfeiçoar essa página.',
            link: 'https://controle-despesas-ramils.vercel.app/',
            imageName: 'control-prices.png'
        },
    ]

    return (
        <ContainerSections identify="projects">
            <MainEmoji text="📂" />
            <Title text={'Projetos'} />
            <Slider projects={allProjects} />
        </ContainerSections>
    )
}