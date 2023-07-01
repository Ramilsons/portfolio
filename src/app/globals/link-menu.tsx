import Link from "next/link"

interface Props {
    name: string,
    link: string,
    changeVisibilityMenu:  React.Dispatch<React.SetStateAction<boolean>>
}

export default function LinkMenu({name, link, changeVisibilityMenu}: Props) {
    return(
        <Link href={{hash: link}} key={link}  onClick={() => changeVisibilityMenu(false)} className="w-[100%] block mb-4 h-[25px] text-left text-[#37352F] font-semibold text-[14px]">{name}</Link>
    )
}