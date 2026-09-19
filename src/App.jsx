import Skills from './components/Sessoes/SkillsSessao.jsx'
import Hero from './components/Hero.jsx'
import Sobre from './components/Sessoes/SobreSessao.jsx'
import Projetos from './components/Sessoes/ProjetosSessao.jsx'
import Educacao from './components/Sessoes/FormacaoSessao.jsx'
import Rodape from './components/Rodape.jsx'

export default function App() {
   return (
      <>
         <Hero />
         <main className='flex flex-col flex-1 py-7 gap-7'>
            <Skills />
            <Projetos />
            <Educacao />
            <Sobre />
         </main>
         <Rodape />
      </>
   )
}
