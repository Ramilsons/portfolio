import ContainerSections from "../globals/container-sections";
import MainEmoji from "../globals/main-emoji";
import Title from "../globals/title";
import Paragraph from "../globals/paragraph";

export default function SecondSection() {
    return (
        <ContainerSections identify="about-me">
            <MainEmoji text="📝"/>
            <Title text={'Sobre mim'} />
            <Paragraph text={'Meu primeiro contato com a programação foi em um curso técnico. Desde lá, me preocupo em desenvolver soluções que garentem uma boa experiência e ótima performance.'} />
            <Paragraph text={'Após isso, me graduei em Sistemas para Internet pela Faculdade de Tecnologia de São Roque (FATEC). Sigo estudando e me aprimorando!'} />
        </ContainerSections>
    )
}