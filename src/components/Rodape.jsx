import { contato } from '../data/contato.js'
import ContactForm from './ContatoForm.jsx'

export default function Rodape() {
   return (
      <footer
         className='flex flex-col w-full bg-deep-space-blue-900 px-4'
         id='contato'
      >
         <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 py-6 items-start'>
            <ContactForm />

            <div className='flex flex-col gap-3 justify-between h-full py-0.5'>
               <Logo />
               <ul className='flex gap-3'>
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
         </div>

         <div className='flex justify-between items-center border-t border-extra-branco/8 py-3'>
            <p className='text-extra-branco/30'>2026 Davi. Oliveira</p>
            <ul className='flex gap-2'>
               <Ferramenta nome='react' />
               <Ferramenta nome='tailwind' />
               <Ferramenta nome='vite' />
            </ul>
         </div>
      </footer>
   )
}

function Ferramenta({ nome }) {
   return (
      <li className='px-2 py-0.5 rounded border-[0.5px] border-deep-space-blue-800/70'>
         <p className='capitalize text-deep-space-blue-800/70'>{nome}</p>
      </li>
   )
}

function Item({ link, Icone, nome }) {
   return (
      <li className='p-1.5 border-[0.5px] border-deep-space-blue-800/50 bg-deep-space-blue-800/30 hover:bg-deep-space-blue-800/50 rounded-md text-extra-branco cursor-pointer transition-colors'>
         <a
            href={link}
            target='_blank'
            rel='noopener noreferrer'
            aria-label={nome}
         >
            <Icone />
         </a>
      </li>
   )
}

function Logo() {
   return (
      <div className='flex flex-col'>
         <p className='text-xl md:text-2xl font-bold italic text-extra-branco'>
            Davi. Oliveira
         </p>
         <p className='text-sm md:text-xl font-medium text-deep-space-blue-700'>
            Estudante FullStack
         </p>
      </div>
   )
}
