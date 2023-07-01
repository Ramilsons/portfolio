import CardWithLink from "../globals/card-with-link";
import ContainerSections from "../globals/container-sections";
import MainButton from "../globals/main-button";
import Title from "../globals/title";
import links from "../utils/all-links";

import globalsStyle from "../utils/globals-style";

export default function FirstSection() {
    return(
        <ContainerSections identify="welcome">
            <div className="lg:flex lg:items-end justify-between lg:gap-2">
                <section className="lg:w[50%]">
                    <Title text={'Olá! 👋🏻'} />

                    <h2 className={`text-base mb-8 font-light text-[#37352F] ${globalsStyle.maxWidthParagraphSize}`}>Meu nome é Ramilson, tenho 22 anos e moro em Araçariguama-SP. Atuo profissionalmente há mais de dois anos como <span className="border-b-2 border-[--blue]">Desenvolvedor Front-End</span>.</h2>
                    <h2 className={`text-base mb-8 font-light text-[#37352F] ${globalsStyle.maxWidthParagraphSize}`}>Além do meu conhecimento em programação Web, também possuo experiência acadêmica no Desenvolvimento <span className="border-b-2 border-[--blue]">Mobile</span>.</h2>

                    <MainButton target="about-me" />
                </section>
                <section className="hidden lg:flex gap-5 w-[45%]">
                    <div className="flex flex-col gap-5 w-[50%] mt-[-1.25rem]">
                        <CardWithLink label={links[1].name} target={links[1].link} image="gradient-at.png" content="Sobre mim" />
                        <CardWithLink label={links[4].name} target={links[4].link} image="contact-at.png" />
                    </div>
                    <div className="flex flex-col gap-5 w-[50%]">
                        <CardWithLink label={links[2].name} target={links[2].link} image="projects-at.png" content="Conheça meus projetos" />
                        <CardWithLink label={links[3].name} target={links[3].link} image="gradient-green-at.png" content="Carreira" />
                    </div>
                </section>
            </div>
        </ContainerSections>
    )
}