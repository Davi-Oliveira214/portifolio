export default function TituloSessao({ texto }) {
   return (
      <h2
         className={`relative inline-block text-4xl w-max text-extra-branco font-bold after:content-[] after:absolute after:left-0 after:-bottom-1 after:h-1 after:w-full after:bg-extra-branco after:rounded-full mb-4`}
      >
         {texto}
      </h2>
   )
}
