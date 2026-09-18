export default function TituloSessao({ texto }) {
   return (
      <h2
         className={`relative inline-block text-4xl w-max text-extra-branco font-bold mb-4`}
      >
         {texto}
      </h2>
   )
}
