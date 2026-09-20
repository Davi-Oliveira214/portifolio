export default function CardFormacao({ infomacoes }) {
   const { instituicao, curso, inicio, fim, descricao, aprendizados } =
      infomacoes

   return (
      <details className='flex flex-col w-full bordaPadrao bg-deep-space-blue-900 text-extra-branco snap-center'>
         <summary className='list-none flex flex-col px-3 py-2 bg-[rgba(7,19,28,0.6)] cursor-pointer'>
            <div className='flex justify-between'>
               <PeriodoFormacao inicio={inicio} fim={fim} />
               <Status fim={fim} />
            </div>
            <NomeInstituicao instituicao={instituicao} />
            <NomeCurso curso={curso} />
         </summary>
         <div className='flex flex-col gap-4 px-4 py-3'>
            <DescricaoFormacao texto={descricao} />
            <div className='flex flex-wrap gap-y-2.5 gap-x-4 justify-center'>
               {aprendizados.map((i) => (
                  <TagAprendizado key={`id-${i}`} texto={i} />
               ))}
            </div>
         </div>
      </details>
   )
}

function Status({ fim }) {
   let agora = new Date()
   const dataAtual = `${agora.getFullYear()}-${String(agora.getMonth() + 1).padStart(2, '0')}`

   const concluido = dataAtual >= fim

   let style = concluido
      ? 'text-hunter-green-700 bg-[rgba(36,66,54,0.2)] border-hunter-green-800'
      : 'text-charcoal-blue-950 bg-[rgba(255,255,255,0.2)] border-charcoal-blue-950'

   return (
      <p
         className={`capitalize font-bold p-[3px_7px] border-[3px] rounded-2xl ${style}`}
      >
         {concluido ? 'concluido' : 'cursando'}
      </p>
   )
}

function PeriodoFormacao({ inicio, fim }) {
   const inicioData = new Date(`${inicio}-01T00:00:00`).toLocaleDateString(
      'pt-BR',
      {
         month: 'numeric',
         year: 'numeric',
      },
   )

   const fimData = new Date(`${inicio}-01T00:00:00`).toLocaleDateString(
      'pt-BR',
      {
         month: 'numeric',
         year: 'numeric',
      },
   )

   return (
      <p className='w-max p-[3px_7px] text-sm text-deep-space-blue-700 bg-deep-space-blue-900 border border-deep-space-blue-800 rounded-2xl mb-1'>
         {`${inicioData} - ${fimData}`}
      </p>
   )
}

function DescricaoFormacao({ texto }) {
   return <p className='wrap-break-word'>{texto}</p>
}

function NomeInstituicao({ instituicao }) {
   return <p className='font-medium text-lg'>{instituicao}</p>
}

function NomeCurso({ curso }) {
   return (
      <p className='text-sm text-deep-space-blue-700 font-medium'>{curso}</p>
   )
}

function TagAprendizado({ texto }) {
   return (
      <p className='w-max capitalize font-bold bg-[rgba(12,23,19,0.3)] border-2 border-deep-space-blue-800 px-2 py-1 rounded-2xl text-center'>
         {texto}
      </p>
   )
}
