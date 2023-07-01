interface Props {
    children: string | JSX.Element | JSX.Element[],
    identify?: string
}

export default function ContainerSections({children, identify}: Props) {
    return (
        <div className={`relative flex flex-col item-left justify-center h-[100vh] snap-start ${identify == 'projects' ? 'pl-7 sm:ml-[5%]' : 'p-7 sm:w-[90%] ml-[auto] mr-[auto]'}`} id={identify ? identify : ''}>
            {children}
        </div>
    )
}