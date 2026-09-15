export default function CardLinguagem({ icone, linguagem }) {
   return (
      <div className='flex flex-col min-w-48 bg-charcoal-blue-900 py-2 gap-2.5 rounded-2xl'>
         <img src={icone} alt='' className='mx-auto w-24' />
         <p className='text-2xl text-extra-branco text-center font-bold'>
            {linguagem}
         </p>
      </div>
   )
}
