import livraria from '../assets/img/projetos/livraria.png'
import restaurante from '../assets/img/projetos/restaurante.png'
import { linguagens } from './techs'

export const projetos = [
   {
      projeto: 'Livraria Java',

      sobre: {
         titulo: 'Livraria Back-End',

         descricao:
            'Projeto desenvolvido para aprender Spring Boot e PostgreSQL na prática. Uma API REST de gerenciamento de livros que permite cadastrar, buscar, atualizar e remover livros do acervo, com suporte a filtros por título, autor, gênero e outros campos, além de tratamento padronizado de erros e histórico de registros com ordenação flexível.',

         linguagem: [linguagens[0].img, linguagens[9].img, linguagens[6].img],

         gitHub: 'https://github.com/Davi-Oliveira214/livraria-java',

         imagem: livraria,

         visita: '',
      },
   },
   {
      projeto: 'Restaurante-FullStack',

      sobre: {
         titulo: 'Restaurante FullStack',

         descricao:
            'Aplicação full stack de gerenciamento de restaurante, desenvolvida para consolidar Spring Boot e aprender React e Tailwind CSS na prática. O backend oferece cadastro e login de usuários, gerenciamento de pratos e agendamento de mesas com verificação de conflitos de horário. O frontend apresenta a página inicial com carrossel de pratos, com as telas de cadastro, login e reserva ainda em desenvolvimento.',

         linguagem: [
            linguagens[0].img,
            linguagens[9].img,
            linguagens[6].img,
            linguagens[7].img,
            linguagens[8].img,
         ],

         gitHub: 'https://github.com/Davi-Oliveira214/Restaurante-Java-React',

         imagem: restaurante,

         visita: '',
      },
   },
]
