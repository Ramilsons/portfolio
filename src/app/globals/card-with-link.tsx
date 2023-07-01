import Image from "next/image"
import Link from "next/link"

interface Props {
    target: string,
    label: string,
    image?: string,
    content?: string,
}


export default function CardWithLink({target, label, image, content}: Props) {
    let alt;
    let classText;

    if(label == 'Projetos'){
        alt = 'Foto de <a href="https://unsplash.com/@altumcode?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">AltumCode</a> na <a href="https://unsplash.com/pt-br/fotografias/dMUt0X3f59Q?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>';
        classText = 'text-[#000] text-xl font-normal bg-[#fff] w-[80%] leading-5 pl-[16px] pr-[16px] pt-[10px] pb-[10px] rounded-[35px]'
    }else{
        alt = `Clique para ir para a seção ${label}`;
        classText = 'text-[#fff] text-3xl font-medium'
    }


    return (
        <Link href={{hash: target}} className="relative" title={`Clique para ir para a seção ${label}`}>
            <Image alt={alt} src={`/images/${image}`} width={'300'} height={'180'} className="cursor-pointer hover:scale-[1.1] w-[100%] min-h-[190px] bg-[#E9F7FF] rounded-[12px]" />
            <p className={`absolute text-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  mr-[auto] ml-[auto] ${classText}`}>{content ? content : ''}</p>
        </Link>
    )
}