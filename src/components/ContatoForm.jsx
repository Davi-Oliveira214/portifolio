import { useState } from 'react'

const tipos = [
   {
      id: 'elogio',
      label: 'Elogio',
      placeholder: 'Conte o que você curtiu...',
   },
   {
      id: 'critica',
      label: 'Crítica',
      placeholder: 'Nos diga o que pode melhorar...',
   },
   {
      id: 'sugestao',
      label: 'Sugestão',
      placeholder: 'Descreva sua ideia...',
   },
   {
      id: 'outro',
      label: 'Outro',
      placeholder: 'Escreva sua mensagem...',
   },
]

export default function ContactForm() {
   const [tipo, setTipo] = useState('elogio')
   const [severidade, setSeveridade] = useState('media')
   const [form, setForm] = useState({
      name: '',
      email: '',
      subject: '',
      message: '',
   })
   const [status, setStatus] = useState(null)
   const [errorMsg, setErrorMsg] = useState('')

   const tipoAtual = tipos.find((t) => t.id === tipo)

   const handleChange = (e) => {
      setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
   }

   const enviar = async (e) => {
      e.preventDefault()
      if (!form.name || !form.email || !form.message) {
         setErrorMsg('Preencha nome, e-mail e mensagem.')
         setStatus('error')
         return
      }

      setStatus('loading')
      setErrorMsg('')

      const payload = {
         ...form,
         subject: form.subject || `[${tipoAtual.label}] Contato pelo site`,
         type: tipo,
         ...(tipo === 'bug' && { severity: severidade }),
      }

      let resp
      try {
         resp = await fetch(import.meta.env.VITE_API_URL_SPRING, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
         })

         if (resp.status === 400) {
            setErrorMsg('Por favor, preencha todos os campos corretamente.')
            setStatus('error')
            return
         }

         if (!resp.ok) throw new Error(`Erro no servidor: ${resp.status}`)

         const data = await resp.json()
         if (data.status === 200) {
            setStatus('success')
            setForm({ name: '', email: '', subject: '', message: '' })
         } else {
            setStatus('error')
            setErrorMsg('Ocorreu um erro. Tente novamente.')
         }
      } catch {
         const formData = new FormData()
         Object.entries(payload).forEach(([k, v]) => formData.append(k, v))
         formData.append('access_key', import.meta.env.VITE_KEY_FORM)

         try {
            resp = await fetch(import.meta.env.VITE_API_URL, {
               method: 'POST',
               body: formData,
            })

            const data = await resp.json()
            if (data.success) {
               setStatus('success')
               setForm({ name: '', email: '', subject: '', message: '' })
            } else {
               setStatus('error')
               setErrorMsg('Não foi possível enviar. Tente novamente.')
            }
         } catch {
            setStatus('error')
            setErrorMsg('Erro de conexão. Verifique sua internet.')
         }
      }
   }

   return (
      <form
         onSubmit={enviar}
         className='flex flex-col w-full bg-deep-space-blue-950/60 p-5 md:p-6 rounded-2xl border-2 border-deep-space-blue-800 text-extra-branco'
      >
         <div className='flex items-center justify-between mb-4 border-b border-deep-space-blue-800/60 pb-3'>
            <h2 className='text-2xl font-bold fonte text-center w-full'>
               Entre em contato
            </h2>
         </div>

         <div className='grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4'>
            {tipos.map((t) => {
               const ativo = tipo === t.id
               return (
                  <button
                     key={t.id}
                     type='button'
                     onClick={() => setTipo(t.id)}
                     className={`py-2 px-2 rounded-xl text-sm font-medium border-2 transition-all cursor-pointer ${
                        ativo
                           ? 'border-deep-space-blue-700 bg-deep-space-blue-800/80 text-extra-branco'
                           : 'border-deep-space-blue-800/60 bg-deep-space-blue-900/40 text-extra-branco/60 hover:text-extra-branco hover:border-deep-space-blue-700/50'
                     }`}
                  >
                     {t.label}
                  </button>
               )
            })}
         </div>

         <div className='flex flex-col gap-3'>
            <input type='hidden' name='type' value={tipo} />

            <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
               <Campo
                  tipo='text'
                  nome='name'
                  label='Nome'
                  value={form.name}
                  onChange={handleChange}
               />
               <Campo
                  tipo='email'
                  nome='email'
                  label='E-mail'
                  value={form.email}
                  onChange={handleChange}
               />
            </div>

            <Campo
               tipo='text'
               nome='subject'
               label='Assunto'
               value={form.subject}
               onChange={handleChange}
            />

            <div className='flex flex-col gap-1'>
               <label
                  htmlFor='message'
                  className='text-lg font-medium text-extra-branco/80'
               >
                  Mensagem
               </label>
               <textarea
                  id='message'
                  name='message'
                  required
                  value={form.message}
                  onChange={handleChange}
                  placeholder={tipoAtual.placeholder}
                  maxLength={1000}
                  className='w-full rounded-xl border border-deep-space-blue-800 bg-deep-space-blue-900/50 px-3 py-2 outline-none focus:border-hunter-green-700 transition-colors h-28 resize-none placeholder:text-extra-branco/30'
               />
               <span className='text-[10px] text-right text-extra-branco/40'>
                  {form.message.length}/1000
               </span>
            </div>
         </div>

         <button
            type='submit'
            disabled={status === 'loading'}
            className='mt-4 py-2.5 px-4 rounded-xl border border-hunter-green-700/80 bg-hunter-green-800/40 hover:bg-hunter-green-800/70 text-extra-branco transition-all text-sm font-semibold cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed'
         >
            {status === 'loading' ? 'Enviando...' : 'Enviar Mensagem'}
         </button>

         {status === 'success' && (
            <p className='mt-3 text-center text-lg text-green-400 font-medium'>
               Mensagem enviada com sucesso! Obrigado pelo contato.
            </p>
         )}
         {status === 'error' && (
            <p className='mt-3 text-center text-lg text-red-400 font-medium'>
               {errorMsg}
            </p>
         )}
      </form>
   )
}

function Campo({ tipo, nome, label, value, onChange }) {
   return (
      <div className='flex flex-col gap-1'>
         <label
            htmlFor={nome}
            className='text-lg font-medium text-extra-branco/90'
         >
            {label}
         </label>
         <input
            type={tipo}
            id={nome}
            name={nome}
            required
            value={value}
            onChange={onChange}
            className='w-full rounded-xl border border-deep-space-blue-800 bg-deep-space-blue-900/50 px-3 py-2 outline-none focus:border-hunter-green-700 transition-colors placeholder:text-extra-branco/30'
         />
      </div>
   )
}
