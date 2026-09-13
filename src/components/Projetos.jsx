import { useState } from 'react'
import Titulo from './Titulos'
import { projetos } from '../data/projetos'

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

function CardProjeto({
   titulo,
   sobre,
   linguagem,
   ferramentas,
   gitHub,
   imgs,
   host = null,
}) {
   const [isImage, setImage] = useState(false)
   return (
      <>
         <div
            className={`w-97 h-90 rounded-2xl overflow-hidden bg-charcoal-blue-900 text-extra-branco snap-center`}
            onClick={() => setImage(!isImage)}
         >
            <div
               className={`${!isImage ? 'flex' : 'hidden'} flex-col h-full justify-between gap-7 px-3 py-2`}
            >
               <h3 className='text-center text-3xl'>{titulo}</h3>
               <p
                  className='text-xl h-28 overflow-y-scroll scrollbar-thumb-deep-space-blue-950'
                  onClick={(e) => e.stopPropagation()}
               >
                  {sobre}
               </p>
               <ol className='grid text-lg gap-1.5'>
                  <li>
                     <span className='font-bold'>Linguagens:</span> {linguagem}
                  </li>
                  <li>
                     <span className='font-bold'>Ferramentas:</span>{' '}
                     {ferramentas}
                  </li>
                  <li
                     className='grid grid-cols-2'
                     onClick={(e) => e.stopPropagation()}
                  >
                     <p>
                        <span className='font-bold'>GitHub:</span>{' '}
                        <a
                           href={gitHub}
                           target='_blank'
                           rel='noopener noreferrer'
                        >
                           {titulo}
                        </a>
                     </p>
                     <p>
                        Visitar:
                        {host ? (
                           <a
                              href={host}
                              target='_blank'
                              rel='noopener noreferrer'
                           >
                              {titulo}
                           </a>
                        ) : (
                           ' Sem visitas'
                        )}
                     </p>
                  </li>
               </ol>
            </div>
            <img
               src={imgs}
               alt=''
               className={`${isImage ? '' : 'hidden'} w-full h-full`}
            />
         </div>
      </>
   )
}
