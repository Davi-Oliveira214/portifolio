import { useState } from 'react'

export default function CardProjeto({
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
            className={`w-97 min-h-95 rounded-2xl overflow-hidden bg-charcoal-blue-900 text-extra-branco snap-center`}
            onClick={() => setImage(!isImage)}
         >
            <div
               className={`${!isImage ? 'flex' : 'hidden'} flex-col h-full justify-between gap-7 px-3 py-2`}
            >
               <h3 className='text-center text-3xl italic'>{titulo}</h3>
               <p
                  className='text-xl h-28 overflow-y-scroll scrollbar-thumb-deep-space-blue-950 scrollbar-thin'
                  onClick={(e) => e.stopPropagation()}
               >
                  {sobre}
               </p>
               <ol className='grid text-lg gap-1.5'>
                  <li>
                     <Info tipo={'linguagens'} texto={linguagem} />
                  </li>
                  <li>
                     <Info tipo={'ferramnetas'} texto={ferramentas} />
                  </li>
                  <li
                     className='grid grid-rows-2 mt-2'
                     onClick={(e) => e.stopPropagation()}
                  >
                     <p className='font-bold italic'>Links</p>
                     <div className='grid grid-cols-2'>
                        <p className=''>
                           <span className='font-bold'>GitHub:</span>{' '}
                           <Link caminho={gitHub} texto={titulo} />
                        </p>
                        <p>
                           Visitar:
                           {host ? (
                              <Link caminho={host} texto={titulo} />
                           ) : (
                              ' Sem visitas'
                           )}
                        </p>
                     </div>
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

function Link({ caminho, texto }) {
   return (
      <a
         href={caminho}
         target='_blank'
         rel='noopener noreferrer'
         className='underline text-deep-space-blue-700'
      >
         {texto}
      </a>
   )
}

function Info({ tipo, texto }) {
   return (
      <p className='capitalize'>
         <span className='font-bold'>{tipo + ': '}</span>
         {texto}
      </p>
   )
}
