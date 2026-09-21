import { useEffect, useState } from 'react'
import banner1 from '../../assets/img/hero/banner1.png'
import banner2 from '../../assets/img/hero/banner2.png'
import banner3 from '../../assets/img/hero/banner3.png'
import livraria from '../../assets/img/projetos/livraria.png'
import Titulo from '../Titulos.jsx'
import { sobre } from '../../data/sobre.js'

export default function SobreSessao() {
   return (
      <section className='w-full px-4 flex flex-col gap-3' id='sobre'>
         <Titulo texto='Sobre mim' />
         <FotoPerfil />
         <GridSobre />
      </section>
   )
}

function FotoPerfil() {
   const imagens = [banner1, banner2, banner3, livraria]
   const [indiceAtual, setIndiceAtual] = useState(0)

   useEffect(() => {
      const intervalo = setInterval(
         () => setIndiceAtual((prev) => (prev + 1) % imagens.length),
         3000,
      )

      return () => clearInterval(intervalo)
   }, [])

   return (
      <div className='relative w-full h-100 bordaPadrao'>
         {imagens.map((img, i) => (
            <img
               key={i}
               src={img}
               alt='Foto de perfil'
               className={`absolute inset-0 h-full w-full object-cover object-[0%_25%] transition-opacity duration-1000 ease-in-out ${
                  i === indiceAtual ? 'opacity-100' : 'opacity-0'
               }`}
            />
         ))}

         <div className='absolute inset-0 bg-linear-to-t from-deep-space-blue-950/90 via-transparent to-transparent pointer-events-none' />

         <div className='absolute bottom-3.5 left-4'>
            <h2 className='text-extra-branco text-xl font-bold'>
               Davi De Jesus
            </h2>
            <p className='text-deep-space-blue-700 text-sm mt-0.5'>
               Estudante FullStack
            </p>
         </div>

         <div className='absolute bottom-4 right-4 flex gap-1.5 items-center'>
            {imagens.map((_, i) => (
               <span
                  key={i}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                     i === indiceAtual
                        ? 'w-4 bg-deep-space-blue-900'
                        : 'w-1.5 bg-deep-space-blue-800'
                  }`}
               />
            ))}
         </div>
      </div>
   )
}

function GridSobre() {
   return (
      <div className='grid grid-cols-1 gap-5 md:grid-cols-2 md:grid-rows-2'>
         {sobre.map(({ id, titulo, texto }) => {
            const impar = id % 2 !== 0
            const bordaClasse = impar
               ? 'border-l-4 rounded-l-2xl'
               : 'border-r-4 rounded-r-2xl'

            return (
               <div
                  key={id}
                  className={`${bordaClasse} md:bordaPadrao border-deep-space-blue-800 bg-[rgba(31,81,122,0.12)] px-4 py-3`}
               >
                  <h3 className='text-3xl text-extra-branco text-center mb-2'>
                     {titulo}
                  </h3>
                  <p className='text-extra-branco/85 text-lg leading-relaxed'>
                     {texto}
                  </p>
               </div>
            )
         })}
      </div>
   )
}
