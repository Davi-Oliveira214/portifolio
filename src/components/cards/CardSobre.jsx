import { useRef, useState } from 'react'

function FundoOpen({ itens, click }) {
   return (
      <div
         onClick={click}
         className='fixed flex flex-col justify-center gap-10 bg-[rgba(2,2,2,.2)]  w-full h-full top-0 left-0 px-4 backdrop-blur-md z-10'
      >
         <div className='flex flex-row gap-20 overflow-x-auto scrollbar-none scroll-smooth snap-x snap-mandatory p-[0_6%]'>
            {itens.map((i) => (
               <Card key={i.titulo} info={i} />
            ))}
         </div>
         <p className='text-extra-branco w-full text-center left-0 text-lg'>
            Arraste para os lados
         </p>
      </div>
   )
}

function Card({ info }) {
   return (
      <div
         className={`min-h-80 flex-[0_0_350px] py-3 bg-deep-space-blue-900 rounded-2xl snap-center`}
         onClick={(e) => e.stopPropagation()}
      >
         <h3 className='text-3xl text-extra-branco text-center font-bold'>
            {info.titulo}
         </h3>
         <div className='flex flex-col gap-2 text-center text-extra-branco'>
            <img src={info.imagem} alt='' className='w-full h-38' />
            <h4 className='text-2xl font-bold'>{info.subtitulo}</h4>
            <p className='text-lg px-1'>{info.texto}</p>
         </div>
      </div>
   )
}

export default function CardSobre({ itens, texto }) {
   const [ativo, isAtivo] = useState(false)
   return (
      <>
         <div
            className={`flex flex-col min-w-90 max-w-130 min-h-90 bg-charcoal-blue-900 rounded-2xl snap-center cursor-pointer border-4 border-deep-space-blue-800`}
            onClick={() => isAtivo(!ativo)}
         >
            <h3 className='capitalize flex justify-center items-center w-full h-full text-6xl text-deep-space-blue-700 font-bold'>
               {texto}
            </h3>
         </div>

         {ativo && <FundoOpen itens={itens} click={() => isAtivo(!ativo)} />}
      </>
   )
}
