import ContainerSections from "../globals/container-sections";
import LinkNavigation from "../header/link";
import MainButton from "../globals/main-button";
import Title from "../globals/title";

export default function FirstSection() {
    return(
        <ContainerSections>
            <LinkNavigation target="" text="Contact 📬" />

            <Title text={'Olá! 👋🏻'} />

            <h2 className="text-base mb-8 font-light text-[#37352F] max-w-[275px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc <span className="border-b-2 border-[--blue]">condimentum</span> lobortis elit, quis pelentesque elit semper sit amet. Nulla sed ex ut urna ornare semper.</h2>
            <h2 className="text-base mb-8 font-light text-[#37352F] max-w-[275px]">Lorem <span className="border-b-2 border-[--blue]">ipsum dolor</span> sit amet, consectetur adipiscing elit.</h2>

            <MainButton target="about-me" />
        </ContainerSections>
    )
}