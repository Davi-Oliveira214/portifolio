import java from '../assets/svg/java.svg'
import js from '../assets/svg/js.svg'
import php from '../assets/svg/php.svg'
import html5 from '../assets/svg/html5.svg'
import css3 from '../assets/svg/css3.svg'
import mySql from '../assets/svg/mysql.svg'
import postgreSql from '../assets/svg/postgresql.svg'
import reactjs from '../assets/svg/react.svg'
import tailwindcss from '../assets/svg/tailwindcss.svg'
import spring from '../assets/svg/spring.svg'
import git from '../assets/svg/git.svg'
import gitHub from '../assets/svg/github.svg'

export const linguagens = [
   {
      id: 'java',
      nome: 'Java',
      img: java,
      sobre: 'Linguagem orientada a objetos usada para back-end robusto e aplicações empresariais.',
      cor: '#d00000',
   },
   {
      id: 'php',
      nome: 'PHP',
      img: php,
      sobre: 'Linguagem de script para web usada no back-end, muito comum em sistemas de gerenciamento de conteúdo e aplicações web dinâmicas.',
      cor: '#777BB4',
   },
   {
      id: 'javascript',
      nome: 'JavaScript',
      img: js,
      sobre: 'Linguagem da web que adiciona interatividade e lógica ao site.',
      cor: '#F0DB4F',
   },
   {
      id: 'html5',
      nome: 'HTML5',
      img: html5,
      sobre: 'Linguagem de marcação que estrutura o conteúdo de páginas web.',
      cor: '#e85d04',
   },
   {
      id: 'css3',
      nome: 'CSS3',
      img: css3,
      sobre: 'Linguagem de estilo responsável pela aparência visual e responsividade das páginas.',
      cor: '#264DE4',
   },
   {
      id: 'mysql',
      nome: 'MySql',
      img: mySql,
      sobre: 'Banco de dados relacional muito usado em aplicações web para armazenar e consultar dados.',
      cor: '#00758F',
   },
   {
      id: 'postgresql',
      nome: 'PostgreSql',
      img: postgreSql,
      sobre: 'Banco de dados relacional avançado, com suporte a tipos complexos.',
      cor: '#336791',
   },
   {
      id: 'react_js',
      nome: 'React JS',
      img: reactjs,
      sobre: 'Biblioteca JavaScript para construir interfaces de usuário reutilizáveis.',
      cor: '#61DAFB',
   },
   {
      id: 'tailwindcss',
      nome: 'Tailwindcss',
      img: tailwindcss,
      sobre: 'Framework CSS utilitário que permite estilizar diretamente no HTML com classes prontas.',
      cor: '#06B6D4',
   },
   {
      id: 'spring_boot',
      nome: 'Spring Boot',
      img: spring,
      sobre: 'Framework Java para criar APIs e aplicações back-end de forma rápida e produtiva.',
      cor: '#6DB33F',
   },
   {
      id: 'git',
      nome: 'Git',
      img: git,
      sobre: 'Sistema de controle de versão que registra o histórico de alterações do código.',
      cor: '#F05032',
   },
   {
      id: 'github',
      nome: 'GitHub',
      img: gitHub,
      sobre: 'Plataforma online para hospedar repositórios Git e colaborar em projetos.',
      cor: '#FFFFFF',
   },
]

export function getLinguagem(ids) {
   return ids.map((id) => linguagens.find((l) => l.id === id).img)
}
