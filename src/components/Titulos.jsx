export default function TituloSessao({ texto }) {
   return (
      <h2
         className={`relative text-4xl text-extra-branco font-bold mb-3.5 w-max after:absolute after:bottom-0 after:bg-deep-space-blue-800/90 after:w-[35%] after:h-0.5 after:left-0 `}
      >
         {texto}
      </h2>
   )
}
