import Titulo from '../Titulos'
import { projetos } from '../../data/projetos'
import CardProjeto from '../cards/CardProjeto'

export default function Projetos() {
   return (
      <section className='w-full px-4 mb-2'>
         <Titulo texto={'Projetos'} />
         <ul className='flex w-full overflow-x-scroll gap-4 px-3.5 scrollbar-none scroll-smooth snap-x snap-mandatory'>
            {projetos.map((i) => (
               <CardProjeto key={i.projeto} item={i} />
            ))}
         </ul>
      </section>
   )
}
