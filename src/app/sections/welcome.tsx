import ContainerSections from "../globals/container-sections";
import MainButton from "../globals/main-button";
import Title from "../globals/title";

import globalsStyle from "../globals/globals-style";

export default function FirstSection() {
    return(
        <ContainerSections identify="welcome">
            <Title text={'Olá! 👋🏻'} />

            <h2 className={`text-base mb-8 font-light text-[#37352F] ${globalsStyle.maxWidthParagraphSize}`}>Meu nome é Ramilson, tenho 22 anos e moro em Araçariguama-SP. Atuo profissionalmente há mais de dois anos como <span className="border-b-2 border-[--blue]">Desenvolvedor Front-End</span>.</h2>
            <h2 className={`text-base mb-8 font-light text-[#37352F] ${globalsStyle.maxWidthParagraphSize}`}>Além do meu conhecimento em programação Web, também possuo experiência acadêmica no Desenvolvimento <span className="border-b-2 border-[--blue]">Mobile</span>.</h2>

            <MainButton target="about-me" />
        </ContainerSections>
    )
}