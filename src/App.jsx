import Skills from './components/Sessoes/SkillsSessao.jsx'
import Hero from './components/Hero.jsx'
import Sobre from './components/Sessoes/SobreSessao.jsx'
import Projetos from './components/Sessoes/ProjetosSessao.jsx'
import Educacao from './components/Sessoes/FormacaoSessao.jsx'

export default function App() {
   return (
      <>
         <Hero />
         <Skills />
         <Sobre />
         <Projetos />
         <Educacao />
      </>
   )
}
