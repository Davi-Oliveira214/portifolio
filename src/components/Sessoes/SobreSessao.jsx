import { useEffect, useState } from 'react'
import foto from '../../assets/img/foto.jpg'
import img2 from '../../assets/img/img2.png'
import livraria from '../../assets/img/livraria.png'
import Titulo from '../Titulos.jsx'

export default function SobreSessao() {
   return (
      <section className='w-full px-4 flex flex-col gap-3'>
         <Titulo texto='Sobre mim' />
         <FotoPerfil />
      </section>
   )
}

function FotoPerfil() {
   const imagens = [foto, img2, livraria]
   const [atual, setAtual] = useState(0)

   useEffect(() => {
      const id = setInterval(
         () => setAtual((prev) => (prev >= imagens.length - 1 ? 0 : prev + 1)),
         3000,
      )
      return () => clearInterval(id)
   }, [imagens.length])

   return (
      <div className='flex flex-col w-full md:flex-row gap-5'>
         <TextoCard />
         <div className='relative w-full md:w-full h-100 rounded-2xl overflow-hidden border-2 border-deep-space-blue-800'>
            {imagens.map((img, i) => (
               <img
                  key={i}
                  src={img}
                  alt='Foto de perfil'
                  className={`absolute inset-0 h-full w-full object-cover object-[20%_30%] transition-opacity duration-1000 ease-in-out ${
                     i === atual ? 'opacity-100' : 'opacity-0'
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
                        i === atual
                           ? 'w-4 bg-deep-space-blue-900'
                           : 'w-1.5 bg-deep-space-blue-800'
                     }`}
                  />
               ))}
            </div>
         </div>
      </div>
   )
}

function TextoCard() {
   return (
      <div className='border-l-[3px] border-deep-space-blue-800 bg-[rgba(31,81,122,0.12)] rounded-r-2xl px-4 py-3'>
         <p className='text-extra-branco/85 text-lg leading-relaxed'>
            Gosto de transformar ideias em projetos funcionais, explorando novas
            tecnologias e buscando sempre aprimorar minhas habilidades.
         </p>
      </div>
   )
}
