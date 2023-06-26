interface Props {
    children: string | JSX.Element | JSX.Element[],
    identify?: string
}

export default function ContainerSections({children, identify}: Props) {
    return (
        <div className={`relative flex flex-col item-left justify-center h-[100vh] ${identify == 'projects' ? 'pl-7' : 'p-7'}`} id={identify ? identify : ''}>
            {children}
        </div>
    )
}