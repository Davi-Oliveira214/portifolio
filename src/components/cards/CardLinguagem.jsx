import { useState } from 'react'

export default function CardLinguagem({ info }) {
   const { nome, img, sobre, cor } = info
   const [aberto, setAberto] = useState(false)

   return (
      <div
         className='relative flex group w-48'
         onMouseEnter={() => setAberto(true)}
         onMouseLeave={() => setAberto(false)}
         onTouchStart={() => setAberto(!aberto)}
      >
         <div className='flex flex-col w-full bg-charcoal-blue-900 py-2 gap-2.5 rounded-2xl'>
            <img src={img} alt='' className='mx-auto w-24' />
            <p className='text-2xl text-extra-branco text-center font-bold'>
               {nome}
            </p>
         </div>
         <Info linguagem={nome} sobre={sobre} cor={cor} aberto={aberto} />
      </div>
   )
}

function Info({ linguagem, sobre, cor, aberto }) {
   return (
      <div
         className={`absolute ${aberto ? 'flex' : 'hidden'} flex-col justify-center inset-0 bg-charcoal-blue-900 px-1.5 gap-2.5 rounded-2xl`}
      >
         <p className='text-center text-xl font-bold' style={{ color: cor }}>
            {linguagem}
         </p>
         <p className='text-center text-extra-branco text-sm'>{sobre}</p>
      </div>
   )
}
