import { useState } from 'react'
import foto from '../../assets/img/foto.jpg'
import CardSobre from '../cards/CardSobre.jsx'
import Titulo from '../Titulos.jsx'
import { sobre } from '../../data/sobre.js'

export default function SobreSessao() {
   const [texto, isTexto] = useState(false)
   return (
      <div className='w-full mt-10 px-4 py-2'>
         <Titulo texto={'Sobre'} />
         <div className='flex flex-col w-full gap-3 lg:justify-center'>
            <div className='flex md:flex-row justify-between relative rounded-2xl overflow-hidden border-2 border-deep-space-blue-800 md:border-0'>
               <div
                  className={`${texto ? 'flex absolute inset-0' : 'hidden'} md:flex flex-col items-center justify-center gap-10 w-full md:w-[55%] min-h-full p-6 md:p-8 bg-deep-space-blue-950/95 md:bg-deep-space-blue-950/90 text-md text-center text-extra-branco backdrop-blur-sm rounded-2xl shadow-lg cursor-pointer transition-all duration-300 md:pointer-events-none`}
                  onClick={() => isTexto(!texto)}
               >
                  <p>
                     Sou desenvolvedor amo tecnologia e desenvolvimento web.
                     Gosto de transformar ideias em projetos funcionais,
                     buscando sempre aprender novas ferramentas e aprimorar
                     minhas habilidades.
                  </p>

                  <p>
                     Este portfólio reúne um pouco dos meus conhecimentos,
                     projetos e interesses.
                  </p>
               </div>
               <img
                  src={foto}
                  alt=''
                  className='h-100 w-full md:w-[40%] object-cover object-[0%_35%] border-2 border-deep-space-blue-900 rounded-2xl overflow-hidden md:pointer-events-none'
                  onClick={() => isTexto(!texto)}
               />
            </div>
            <div className='flex gap-5 p-[8px_14px] max-w-full overflow-scroll scroll-smooth scrollbar-none snap-x snap-mandatory rounded-2xl lg:border-[3px] lg:border-deep-space-blue-900'>
               {sobre.map((iten) => (
                  <CardSobre
                     key={iten.categoria}
                     itens={iten.itens}
                     texto={iten.categoria}
                  />
               ))}
            </div>
         </div>
      </div>
   )
}
