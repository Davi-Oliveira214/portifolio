import { IconExternalLink, IconBrandGithub } from '@tabler/icons-react'

export default function CardProjeto({ item }) {
   const { titulo, descricao, linguagem, gitHub, imagem, visita } = item.sobre

   return (
      <li className='h-90 md:h-70 bg-[rgba(31,81,122,0.12)] bordaPadrao snap-center'>
         <article className='flex flex-col md:flex-row w-full h-full'>
            <div className='relative w-full h-40 md:h-full md:w-[45%] overflow-hidden'>
               <img
                  src={imagem}
                  alt={titulo}
                  className='h-full w-full object-cover object-top'
               />
               <ListaLinguagens linguagens={linguagem} />
            </div>
            <div className='flex flex-col gap-3 flex-1 w-full p-[15px_9px] text-extra-branco/50'>
               <h3 className='text-2xl font-bold italic text-extra-branco'>
                  {titulo}
               </h3>
               <p className='text-lg w-full h-20 md:flex-1 overflow-y-scroll scrollbar-thin scrollbar-thumb-deep-space-blue-900 rounded-sm'>
                  {descricao}
               </p>
               <ul className='flex gap-3 pt-2 border-t border-[rgba(255,255,255,0.12)]'>
                  <LinkExterno
                     caminho={gitHub}
                     texto='GitHub'
                     Icone={IconBrandGithub}
                  />
                  {visita && (
                     <LinkExterno
                        caminho={visita}
                        texto='Visitar'
                        Icone={IconExternalLink}
                     />
                  )}
               </ul>
            </div>
         </article>
      </li>
   )
}

function ListaLinguagens({ linguagens }) {
   return (
      <ul className='absolute flex items-end w-full overflow-x-scroll scrollbar-none h-full px-3.5 py-3 gap-2.5 bg-[rgba(31,81,122,0.2)] bottom-0'>
         {linguagens.map((img, i) => (
            <IconeLinguagem key={i} img={img} />
         ))}
      </ul>
   )
}

function IconeLinguagem({ img }) {
   return (
      <li className='border-2 border-deep-space-blue-800 bg-[rgba(15,39,59,0.8)] rounded-md px-4 py-0.5'>
         <img
            src={img}
            alt=''
            className='min-w-7 object-cover brightness-0 invert'
         />
      </li>
   )
}

function LinkExterno({ caminho, texto, Icone }) {
   return (
      <li className='flex items-center gap-1.5'>
         <Icone size={24} />
         <a
            href={caminho}
            target='_blank'
            rel='noopener noreferrer'
            className='text-sm'
         >
            {texto}
         </a>
      </li>
   )
}
