import { contato } from '../data/contato.js'

export default function Rodape() {
   return (
      <footer
         className='flex flex-col w-full min-h-20 bg-deep-space-blue-900 px-3.5'
         id='contato'
      >
         <div className='flex justify-between gap-3 py-5'>
            <Logo />

            <ul className='flex gap-4 items-end'>
               {contato.map((i) => (
                  <Item
                     key={i.id}
                     link={i.link}
                     nome={i.nome}
                     Icone={i.Icone}
                  />
               ))}
            </ul>
         </div>

         <div className='flex justify-between items-center border-t border-[rgba(255,255,255,0.12)] py-2.5'>
            <p className='text-[rgba(255,255,255,0.3)]'>2026 Davi. Oliveira</p>
            <ul className='flex gap-3'>
               <Ferramentas nome={'react'} />
               <Ferramentas nome={'tailwind'} />
               <Ferramentas nome={'vite'} />
            </ul>
         </div>
      </footer>
   )
}

function Ferramentas({ nome }) {
   return (
      <li className='px-2 py-0.5 w-max h-max rounded-md border-[0.5px] border-[rgba(31,81,122,0.9)]'>
         <p className='capitalize text-[rgba(31,81,122,0.7)] text-sm'>{nome}</p>
      </li>
   )
}

function Item({ link, Icone, nome }) {
   return (
      <li className='p-1.5 border-[0.5px] bg-[rgba(31,81,122,0.3)] hover:bg-[rgba(31,81,122,0.5)] rounded-md text-extra-branco cursor-pointer'>
         <a
            href={link}
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center gap-2'
            aria-label={nome}
         >
            {<Icone />}
         </a>
      </li>
   )
}

function Logo() {
   return (
      <div className='flex flex-col w-max whitespace-nowrap'>
         <p className='text-xl font-bold italic text-extra-branco'>
            Davi. Oliveira
         </p>
         <p className='text-sm font-medium text-deep-space-blue-700'>
            Estudante FullStack
         </p>
      </div>
   )
}
