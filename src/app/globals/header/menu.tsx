import Image from "next/image";
import LinkMenu from "./link-menu";
import links from "@/app/utils/all-links";

interface Props {
    changeVisibilityMenu:  React.Dispatch<React.SetStateAction<boolean>>,
    isVisible: boolean
}

export default function Menu({isVisible, changeVisibilityMenu}: Props) {
    return (
        <div className={isVisible ? 'lg:hidden' : 'hidden'}>
            <div className="z-50 opacity-60 fixed h-[100vh] w-[100vw] cursor-pointer bg-black" onClick={() => changeVisibilityMenu(false)} />
            <div className="z-[60] bg-white w-[67vw] ml-auto h-[100vh] max-w-[400px] fixed right-0 top-0 pl-12 pr-4">
                <Image className="ml-auto pt-8 cursor-pointer" alt="clique para fechar o menu" width={36} height={36} src="/images/close.png" onClick={() => changeVisibilityMenu(false)} />
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