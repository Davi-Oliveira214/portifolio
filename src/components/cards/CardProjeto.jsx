import { IconExternalLink, IconBrandGithub } from '@tabler/icons-react'

export default function CardProjeto({ item }) {
   const { titulo, descricao, linguagem, gitHub, imagem, visita } = item.sobre

   return (
      <li className='w-90 h-87 overflow-hidden rounded-2xl bg-[rgba(31,81,122,0.12)] border-[3px] border-deep-space-blue-800'>
         <article className='flex flex-col w-full h-full'>
            <div className='relative w-full h-40 overflow-hidden'>
               <img
                  src={imagem}
                  alt={titulo}
                  className='h-full w-full object-cover object-top'
               />
               <ListaLinguagens lista={linguagem} />
            </div>
            <div className='flex flex-col gap-3 flex-1 w-full p-[15px_9px] text-extra-branco'>
               <p className='text-2xl font-medium italic'>{titulo}</p>
               <p className='text-lg w-full h-20 overflow-y-scroll scrollbar-thin scrollbar-thumb-deep-space-blue-900'>
                  {descricao}
               </p>
               <ol className='flex gap-3 pt-2 border-t border-[rgba(255,255,255,0.12)]'>
                  <Link
                     caminho={gitHub}
                     texto={'GitHub'}
                     Icone={IconBrandGithub}
                  />
                  {visita && (
                     <Link
                        caminho={visita}
                        texto={'Visitar'}
                        Icone={IconExternalLink}
                     />
                  )}
               </ol>
            </div>
         </article>
      </li>
   )
}

function ListaLinguagens({ lista }) {
   return (
      <ul className='absolute flex items-end w-full h-full px-3.5 py-3 gap-2.5 bg-[rgba(31,81,122,0.2)] bottom-0'>
         {lista.map((l) => (
            <Item key={`id-${l}`} linguagem={l} />
         ))}
      </ul>
   )
}

function Item({ linguagem }) {
   return (
      <li className='border-2 border-deep-space-blue-800 bg-[rgba(15,39,59,0.8)] rounded-md px-4 py-0.5'>
         <p className='text-[rgba(255,255,255,0.9)] font-bold text-lg whitespace-nowrap'>
            {linguagem}
         </p>
      </li>
   )
}

function Link({ caminho, texto, Icone }) {
   return (
      <li className='flex items-center gap-1.5'>
         {<Icone size={24} />}
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
