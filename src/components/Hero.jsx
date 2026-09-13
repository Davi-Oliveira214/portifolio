export default function Hero() {
   return (
      <div className='flex relative'>
         <div className='flex flex-col justify-center h-[45vh] w-full px-3 md:w-[90%] lg:w-[95%] rounded-br-full bg-deep-space-blue-900'>
            <h1 className='text-5xl text-extra-branco font-bold italic'>
               Davi De Jesus
            </h1>
            <p className='text-3xl font-bold text-hunter-green-700'>
               Estudante FullStack
            </p>
         </div>

         <div className='flex flex-col italic absolute bottom-0 right-0 mr-4 font-bold text-extra-branco text-center text-3xl opacity-28'>
            <span>React</span>
            <span>&</span>
            <span>Tailwindcss</span>
         </div>
      </div>
   )
}
