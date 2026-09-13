import { useState } from 'react'

function CardsInfo({ itens, click }) {
   return (
      <div
         onClick={click}
         className='fixed flex bg-[rgba(2,2,2,.2)] items-center w-full h-full top-0 left-0 px-4 backdrop-blur-md'
      >
         <div className='flex flex-row gap-20 overflow-x-auto scrollbar-none scroll-smooth snap-x snap-mandatory p-[0_6%]'>
            {itens.map((i) => (
               <div
                  className='min-h-80 flex-[0_0_350px] py-3 bg-deep-space-blue-900 rounded-2xl snap-center'
                  onClick={(e) => e.stopPropagation()}
                  key={i.titulo}
               >
                  <h3 className='text-3xl text-extra-branco text-center font-bold'>
                     {i.titulo}
                  </h3>
                  <div className='flex flex-col gap-2 text-center text-extra-branco'>
                     <img
                        src={i.imagem}
                        alt=''
                        className='w-full object-cover'
                     />
                     <h4 className='text-2xl font-bold'>{i.subtitulo}</h4>
                     <p className='text-lg px-1'>{i.texto}</p>
                  </div>
               </div>
            ))}
         </div>
      </div>
   )
}

export default function CardFundo({ itens, texto }) {
   const [ativo, isAtivo] = useState(false)
   return (
      <>
         <div
            className={`flex flex-col min-w-90 max-w-130 min-h-90 bg-charcoal-blue-900 rounded-2xl snap-center cursor-pointer`}
            onClick={() => isAtivo(!ativo)}
         >
            <h3 className='capitalize flex justify-center items-center w-full h-full text-6xl text-hunter-green-800 font-bold'>
               {texto}
            </h3>
         </div>

         {ativo && <CardsInfo itens={itens} click={() => isAtivo(!ativo)} />}
      </>
   )
}
