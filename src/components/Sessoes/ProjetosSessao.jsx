import Titulo from '../Titulos'
import { projetos } from '../../data/projetos'
import CardProjeto from '../cards/CardProjeto'

export default function Projetos() {
   return (
      <section className='w-full px-4 mb-2' id='projetos'>
         <Titulo texto={'Projetos'} />
         <ul
            style={{ '--colunas': projetos.length }}
            className='grid grid-rows-1 grid-cols-[repeat(var(--colunas),minmax(calc(100vw-40px),1fr))] md:grid-cols-[repeat(var(--colunas),minmax(calc(48rem-2vw),1fr))] w-full overflow-x-scroll gap-7 md:gap-5 px-3.5 scrollbar-none scroll-smooth snap-x snap-mandatory'
         >
            {projetos.map((i) => (
               <CardProjeto key={i.projeto} item={i} />
            ))}
         </ul>
      </section>
   )
}
