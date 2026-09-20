import { useEffect, useState } from 'react'
import banner1 from '../assets/img/hero/banner1.png'
import banner2 from '../assets/img/hero/banner2.png'
import banner3 from '../assets/img/hero/banner3.png'

export default function Hero() {
   return (
      <section className='flex relative h-120' id='inicio'>
         <div className='z-10 flex flex-col justify-evenly h-full w-full px-3 lg:px-5 py-15 md:w-[55%] rounded-br-full bg-deep-space-blue-900'>
            <BannerDisponibilidade />
            <Apresentacao />
            <ListaTecnologias />
         </div>
         <MarcaDagua />
         <ImagemFundo />
      </section>
   )
}

function BannerDisponibilidade() {
   return (
      <div className='flex items-center gap-2 mb-5 w-fit px-3 py-1 bordaPadrao border-hunter-green-700'>
         <span className='w-1.5 h-1.5 rounded-full bg-dark-slate-grey-800' />
         <span className='text-[11px] text-hunter-green-700 uppercase tracking-widest font-semibold'>
            Disponível para projetos
         </span>
      </div>
   )
}

function ListaTecnologias() {
   const tecnologias = ['React', 'Tailwind CSS', 'Java']

   return (
      <ul className='flex flex-wrap gap-2 mt-7'>
         {tecnologias.map((tech) => (
            <li
               key={tech}
               className='px-3 py-1 text-xs text-extra-branco/80 border border-extra-branco/10 rounded-full bg-extra-branco/5'
            >
               {tech}
            </li>
         ))}
      </ul>
   )
}

function MarcaDagua() {
   return (
      <div className='z-10 flex flex-col italic absolute bottom-0 right-3 md:bottom-7 md:right-7 font-bold text-extra-branco text-center text-3xl opacity-28'>
         <span>React</span>
         <span>&</span>
         <span>Tailwind CSS</span>
      </div>
   )
}

function ImagemFundo() {
   const imagens = [banner1, banner2, banner3]
   const [indice, setIndice] = useState(0)

   useEffect(() => {
      const intervalo = setInterval(
         () => setIndice((prev) => (prev + 1) % imagens.length),
         5500,
      )

      return () => clearInterval(intervalo)
   }, [])

   return (
      <div className='absolute w-full h-full overflow-hidden'>
         <div
            className='hidden md:flex h-full transition-transform duration-2000 ease-in-out'
            style={{ transform: `translateX(-${indice * 100}%)` }}
         >
            {imagens.map((img, i) => (
               <img
                  key={i}
                  src={img}
                  alt=''
                  className='z-0 w-full h-full object-cover shrink-0'
               />
            ))}
         </div>
         <div className='absolute w-full h-full z-0 bg-linear-to-t from-deep-space-blue-950 bottom-0' />
      </div>
   )
}

function Apresentacao() {
   return (
      <div>
         <h1 className='text-5xl lg:text-7xl text-extra-branco font-bold italic'>
            Davi Oliveira
         </h1>
         <p className='text-3xl lg:text-4xl font-bold text-hunter-green-700'>
            Estudante FullStack
         </p>
         <p className='mt-5 max-w-80 lg:max-w-96 text-sm sm:text-base wrap-break-word text-extra-branco/65 leading-relaxed'>
            Estudante da Fatec Itaquera focado em backend com Java e Spring
            Boot, criando frontends modernos com React e Tailwind CSS.
         </p>
      </div>
   )
}
