import ContainerSections from "../globals/container-sections";
import MainEmoji from "../globals/main-emoji";
import Title from "../globals/title";
import Paragraph from "../globals/paragraph";

export default function SecondSection() {
    return (
        <ContainerSections identify="about-me">
            <MainEmoji text="📝"/>
            <Title text={'About me'} />
            <Paragraph text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc condimentum lobortis elit, quis pellentesque elit semper sit amet. Nulla sed ex ut urna ornare semper.'} />
            <Paragraph text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'} />
        </ContainerSections>
    )
}