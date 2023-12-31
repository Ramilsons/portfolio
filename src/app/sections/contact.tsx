import MainEmoji from "../globals/main-emoji";
import Title from "../globals/title";
import LinkNavigation from "../globals/header/link";
import DownloadLink from "../globals/footer/download-link";
import globalStyle from "../utils/globals-style";

export default function SixthSection() {
    return(
        <div className="relative flex flex-col item-left justify-center h-[100vh] p-7 bg-[#F1F1F1;] snap-start lg:pl-0" id="contact">
            <div className={`sm:w-[90%] sm:ml-[auto] sm:mr-[auto] ${globalStyle.maxWidthScreen}`}>
                <MainEmoji text="💬" />
                <Title text="E aí? Bora codar?" />

                <LinkNavigation target="mailto:ramilsonfelixsilva9@gmail.com.br" text="E-mail" headerLink={false} />
                <LinkNavigation target="https://github.com/Ramilsons" text="Github" headerLink={false} />
                <LinkNavigation target="https://www.linkedin.com/in/ramilson-silva-66b181153/" text="LinkedIn" headerLink={false} />
                <DownloadLink fileName="Ramilson_PT" text="Download do CV (PT)" target="/cv/ramilson-pt.pdf" />
                <DownloadLink fileName="Ramilson_EN" text="Download do CV (EN)" target="/cv/ramilson-en.pdf" />
            </div>
        </div>
    )
}