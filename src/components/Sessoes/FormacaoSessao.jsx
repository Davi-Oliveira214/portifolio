import { formacao } from '../../data/formacao'
import CardFormacao from '../cards/CardFormacao'
import Titulo from '../Titulos'

export default function FormacaoSessao() {
   return (
      <div className='w-full px-4' id='formacao'>
         <Titulo texto={'Formação'} />
         <div className='flex px-2 py-3 gap-3 flex-wrap max-h-60 overflow-y-scroll scrollbar-thin scrollbar-thumb-deep-space-blue-900 snap-mandatory snap-y scroll-smooth'>
            {formacao.map((f) => (
               <CardFormacao key={f.id} infomacoes={f} />
            ))}
         </div>
      </div>
   )
}
