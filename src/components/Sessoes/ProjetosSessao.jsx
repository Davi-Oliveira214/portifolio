import Titulo from '../Titulos'
import { projetos } from '../../data/projetos'
import CardProjeto from '../cards/CardProjeto'

export default function Projetos() {
   return (
      <div className='w-full px-4 mb-2'>
         <Titulo texto={'Projetos'} />
         <div className='flex w-full overflow-x-scroll gap-4 px-2.5 scrollbar-none scroll-smooth snap-x snap-mandatory'>
            {projetos.map((i) => (
               <CardProjeto
                  key={i.projeto}
                  titulo={i.sobre.titulo}
                  ferramentas={i.sobre.ferramentas}
                  gitHub={i.sobre.gitHub}
                  imgs={i.sobre.imagem}
                  linguagem={i.sobre.liguagens}
                  sobre={i.sobre.sobre}
                  host={i.sobre.link}
               />
            ))}
         </div>
      </div>
   )
}
