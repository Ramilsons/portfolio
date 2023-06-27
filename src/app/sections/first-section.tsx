import ContainerSections from "../globals/container-sections";
import LinkNavigation from "../globals/link";
import MainButton from "../globals/main-button";
import Title from "../globals/title";

export default function FirstSection() {
    return(
        <ContainerSections>
            <LinkNavigation target="#contact" text="Contato 📬" headerLink={true} />

            <Title text={'Olá! 👋🏻'} />

            <h2 className="text-base mb-8 font-light text-[#37352F] max-w-[275px]">Meu nome é Ramilson, tenho 22 anos e atuo profissionalmente há mais de dois anos como <span className="border-b-2 border-[--blue]">Desenvolvedor Front-End</span>.</h2>
            <h2 className="text-base mb-8 font-light text-[#37352F] max-w-[275px]">Além do meu conhecimento em programação Web, também possuo experiência acadêmica no Desenvolvimento <span className="border-b-2 border-[--blue]">Mobile</span>.</h2>

            <MainButton target="about-me" />
        </ContainerSections>
    )
}