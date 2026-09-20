import {
   IconUser,
   IconHome,
   IconBrandGithub,
   IconPhone,
} from '@tabler/icons-react'
import { useEffect, useRef, useState } from 'react'

const itensMenu = [
   { Icon: IconHome, topico: 'inicio' },
   { Icon: IconBrandGithub, topico: 'projetos' },
   { Icon: IconUser, topico: 'sobre' },
   { Icon: IconPhone, topico: 'contato' },
]

export default function Header() {
   const [visivel, setVisivel] = useState(false)
   const clicouMenu = useRef(false)
   const timeoutClique = useRef(null)

   useEffect(() => {
      let timeout

      const aoRolar = () => {
         if (clicouMenu.current) return

         setVisivel(true)
         clearTimeout(timeout)
         timeout = setTimeout(() => setVisivel(false), 250)
      }

      window.addEventListener('scroll', aoRolar)
      return () => {
         window.removeEventListener('scroll', aoRolar)
         clearTimeout(timeout)
      }
   }, [])

   const aoClicarMenu = () => {
      clicouMenu.current = true
      clearTimeout(timeoutClique.current)
      timeoutClique.current = setTimeout(() => {
         clicouMenu.current = false
      }, 1000)
   }

   return (
      <nav
         className={`z-50 fixed h-screen right-0 px-5 ${
            !visivel ? 'animate-abrirMenu' : 'animate-esconderMenu'
         }`}
      >
         <ul className='flex flex-col gap-4 justify-center h-full'>
            {itensMenu.map(({ Icon, topico }) => (
               <ItemMenu
                  key={topico}
                  Icon={Icon}
                  topico={topico}
                  onClick={aoClicarMenu}
               />
            ))}
         </ul>
      </nav>
   )
}

function ItemMenu({ Icon, topico, onClick }) {
   return (
      <li className='relative group flex items-center'>
         <span className='hidden group-hover:flex absolute right-14 px-2 py-0.5 text-sm text-extra-branco capitalize bordaPadrao bg-deep-space-blue-900/95'>
            {topico}
         </span>

         <a
            href={`#${topico}`}
            onClick={onClick}
            className='p-1.5 border-2 rounded-lg bg-deep-space-blue-900/80 border-deep-space-blue-700 hover:border-hunter-green-700 backdrop-blur-sm transition-colors duration-200'
         >
            <Icon size={26} color='white' />
         </a>
      </li>
   )
}
