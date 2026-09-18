import { useEffect, useRef } from 'react'

import Linguagem from '../cards/CardLinguagem'
import { linguagens } from '../../data/techs'
import TituloSessao from '../Titulos'

export default function SkillsSessao({ titulo = 'Conhecimentos' }) {
   const divRef = useRef(null)

   useEffect(() => {
      const limparEvento = eventoCarrossel(divRef)

      return () => {
         if (limparEvento) limparEvento()
      }
   }, [])

   return (
      <div className='flex flex-col gap-5 px-4'>
         <TituloSessao texto={titulo} />
         <div className='w-full overflow-x-hidden mask-l-from-80% mask-r-from-80%'>
            <div
               className={`flex gap-3.5 w-max px-5 animate-scrollInfinito`}
               ref={divRef}
            >
               {linguagens.map((iten) => (
                  <Linguagem key={`origin-${iten.id}`} info={iten} />
               ))}

               {linguagens.map((iten) => (
                  <Linguagem key={`clone-${iten.id}`} info={iten} />
               ))}
            </div>
         </div>
      </div>
   )
}

function eventoCarrossel(ref) {
   const elemento = ref.current
   if (!elemento) return

   const pausarAnimacao = () => {
      elemento.style.animationPlayState = 'paused'
   }

   const rodarAnimacao = () => {
      elemento.style.animationPlayState = 'running'
   }

   const rodarPausarMobile = (e) => {
      if (window.innerWidth >= 768) return

      const estaPausado = elemento.style.animationPlayState === 'paused'
      e.preventDefault()

      !estaPausado ? pausarAnimacao() : rodarAnimacao()
   }

   const handleMouseEnter = () => {
      if (window.innerWidth >= 768) pausarAnimacao()
   }

   const handleMouseLeave = () => {
      if (window.innerWidth >= 768) rodarAnimacao()
   }

   const filhas = Array.from(elemento.children)
   filhas.forEach((filha) => {
      filha.addEventListener('mouseenter', handleMouseEnter)

      filha.addEventListener('mouseleave', handleMouseLeave)

      filha.addEventListener('touchstart', rodarPausarMobile, {
         passive: false,
      })
   })

   return () => {
      filhas.forEach((filha) => {
         filha.removeEventListener('mouseenter', handleMouseEnter)
         filha.removeEventListener('mouseleave', handleMouseLeave)
         filha.removeEventListener('touchstart', rodarPausarMobile)
      })
   }
}
