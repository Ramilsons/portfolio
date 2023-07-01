import OccupationCard from "../globals/occupation-card";

import globalStyle from "../utils/globals-style";

export default function FifthSection() {
    return (
        <div className={globalStyle.darkText}>
            <div className={`sm:w-[90%] ml-[auto] mr-[auto] ${globalStyle.maxWidthScreen} lg:ml-0 lg:mr-0`}>
                <div className="mb-11">
                    <OccupationCard 
                        year='2022' 
                        company='Media.Monks Brasil' 
                        occupation='Web Development Analyst Junior'
                        description='Responsável pela evolução de projetos e-commerces
                        e blogs, com foco em melhorar a experiência dos
                        usuário, criação de novas funcionalidades e melhoria
                        na performance do site.'
                        descriptionTwo='Além disso, mantendo comunicação
                        constante com os clientes para o andamento do
                        projeto.'
                        technologies={['React', 'JavaScript', 'HTML', 'CSS']}
                        isDark={true}
                    />             
                </div>
                <OccupationCard 
                    year='2022' 
                    company='Media.Monks Brasil' 
                    occupation='Web Development Stategist'
                    description='Responsável pela solução de problemas em sites,
                    aplicação de boas práticas de SEO e CRO nos e-commerces e automação de processos para
                    diminuição do trabalho manual do time'
                    technologies={['HTML', 'JavaScript', 'CSS', 'PHP']}
                    isDark={true}
                />
            </div>
        </div>
    )
}