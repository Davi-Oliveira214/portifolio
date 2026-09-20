import { useState } from 'react'

export default function CardLinguagem({ info }) {
   const { nome, img, sobre, cor } = info
   const [hover, setHover] = useState(false)

   return (
      <article
         className='relative w-55 py-3 px-2 bg-charcoal-blue-900 rounded-2xl'
         onMouseEnter={() => setHover(true)}
         onMouseLeave={() => setHover(false)}
         onTouchStart={() => setHover((prev) => !prev)}
      >
         <figure className='flex flex-col items-center gap-2.5'>
            <img src={img} alt={nome} className='w-24' />
            <figcaption className='text-2xl text-extra-branco font-bold'>
               {nome}
            </figcaption>
         </figure>
         <Tooltip nome={nome} sobre={sobre} cor={cor} visivel={hover} />
      </article>
   )
}

function Tooltip({ nome, sobre, cor, visivel }) {
   return (
      <div
         role='tooltip'
         className={`absolute inset-0 ${visivel ? 'flex' : 'hidden'} flex-col justify-center gap-2.5 bg-charcoal-blue-900 rounded-2xl`}
      >
         <p className='text-center text-xl font-bold' style={{ color: cor }}>
            {nome}
         </p>
         <p className='text-center text-extra-branco text-sm'>{sobre}</p>
      </div>
   )
}
