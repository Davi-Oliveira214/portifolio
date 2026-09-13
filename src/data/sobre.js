import imagem from '../assets/img/image.png'
import { linguagens } from './techs'

export const sobre = [
   {
      categoria: 'hobbies',
      itens: [
         {
            titulo: 'Livros',
            imagem: '',
            subtitulo: 'Leitura',
            texto: 'Senhor dos Anéis, A Queda de Gondolin, Petrus Logus, Crime e Castigo.',
         },
         {
            titulo: 'Jogos',
            imagem: '',
            subtitulo: 'Jogar',
            texto: 'Gosto de jogar nas horas vagas, principalmente jogos que envolvem estratégia e desafios.',
         },
         {
            titulo: 'Tecnologia',
            imagem: '',
            subtitulo: 'Programação',
            texto: 'Tenho interesse por tecnologia e gosto de aprender novas ferramentas e linguagens, além de criar meus próprios aplicativos e sites.',
         },
         {
            titulo: 'Música',
            imagem: '',
            subtitulo: 'Ouvir música',
            texto: 'Gosto de ouvir música durante meu tempo livre e enquanto realizo atividades ou programo.',
         },
      ],
   },

   {
      categoria: 'habilidades',
      itens: [
         {
            titulo: 'Java',
            imagem: linguagens[0].img,
            subtitulo: 'Backend',
            texto: 'Desenvolvimento de APIs e funcionalidades de backend utilizando Java com Spring Boot.',
         },
         {
            titulo: 'JavaScript',
            imagem: linguagens[1].img,
            subtitulo: 'Linguagem',
            texto: 'Utilização de JavaScript para criar aplicações e funcionalidades dinâmicas.',
         },
         {
            titulo: 'React',
            imagem: linguagens[6].img,
            subtitulo: 'Frontend',
            texto: 'Desenvolvimento de interfaces utilizando React e componentes reutilizáveis.',
         },
         {
            titulo: 'Tailwind CSS',
            imagem: linguagens[7].img,
            subtitulo: 'Estilização',
            texto: 'Criação de interfaces responsivas utilizando classes utilitárias do Tailwind CSS.',
         },
      ],
   },

   {
      categoria: 'tecnologias',
      itens: [
         {
            titulo: 'HTML',
            imagem: linguagens[2].img,
            subtitulo: 'Frontend',
            texto: 'Estruturação semântica de páginas web.',
         },
         {
            titulo: 'CSS',
            imagem: linguagens[3].img,
            subtitulo: 'Frontend',
            texto: 'Criação e estilização de interfaces responsivas.',
         },
         {
            titulo: 'Git',
            imagem: '',
            subtitulo: 'Versionamento',
            texto: 'Utilização do Git para controle de versão dos projetos.',
         },
         {
            titulo: 'GitHub',
            imagem: '',
            subtitulo: 'Projetos',
            texto: 'Utilização do GitHub para armazenar e compartilhar projetos.',
         },
      ],
   },
   {
      categoria: 'objetivos',
      itens: [
         {
            titulo: 'Aprendizado',
            imagem: '',
            subtitulo: 'Evolução',
            texto: 'Continuar aprendendo e aprimorando meus conhecimentos em desenvolvimento de software.',
         },
         {
            titulo: 'Projetos',
            imagem: '',
            subtitulo: 'Prática',
            texto: 'Criar projetos para colocar meus conhecimentos em prática e desenvolver novas habilidades.',
         },
         {
            titulo: 'Carreira',
            imagem: '',
            subtitulo: 'Desenvolvimento profissional',
            texto: 'Evoluir profissionalmente na área de desenvolvimento de software.',
         },
      ],
   },
]
