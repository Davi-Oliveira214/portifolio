import Linguagem from '../cards/CardLinguagem'
import { linguagens } from '../../data/techs'
import TituloSessao from '../Titulos'

export default function SkillsSessao({ titulo = 'Conhecimentos' }) {
   return (
      <div className='flex flex-col gap-5 my-2 px-4'>
         <TituloSessao texto={titulo} />
         <div className='w-full overflow-hidden mask-l-from-80% mask-r-from-80%'>
            <div className='flex gap-3.5 w-max px-5 animate-scrollInfinito'>
               {linguagens.map((iten) => (
                  <Linguagem
                     key={`origin-${iten.id}`}
                     icone={iten.img}
                     linguagem={iten.nome}
                  />
               ))}

               {linguagens.map((iten) => (
                  <Linguagem
                     key={`clone-${iten.id}`}
                     icone={iten.img}
                     linguagem={iten.nome}
                  />
               ))}
            </div>
         </div>
      </div>
   )
}
