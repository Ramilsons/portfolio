import Image from "next/image";
import LinkMenu from "./link-menu";

interface Props {
    changeVisibilityMenu:  React.Dispatch<React.SetStateAction<boolean>>,
    isVisible: boolean
}

export default function Menu({isVisible, changeVisibilityMenu}: Props) {
    let links = [
        {
            name: 'Boas vindas',
            link: '#welcome',
        },
        {
            name: 'Sobre mim',
            link: '#about-me',
        },
        {
            name: 'Projetos',
            link: '#projects',
        },
        {
            name: 'Carreira',
            link: '#career',
        },
        {
            name: 'Contato',
            link: '#contact',
        }
    ]

    return (
        <div className={isVisible ? 'xl:hidden' : 'hidden'}>
            <div className="z-50 opacity-60 fixed h-[100vh] w-[100vw] bg-black" onClick={() => changeVisibilityMenu(false)} />
            <div className="z-[60] bg-white w-[67vw] ml-auto h-[100vh] fixed right-0 top-0 pl-12 pr-4">
                <Image className="ml-auto pt-8" alt="clique para fechar o menu" width={36} height={36} src="/images/close.png" onClick={() => changeVisibilityMenu(false)} />
                <div className="pt-8">
                    {links.map((e) => {
                        return (
                            <LinkMenu key={e.link} changeVisibilityMenu={changeVisibilityMenu} name={e.name} link={e.link} />
                        )
                    })}

                </div>
            </div>
        </div>
    )
}