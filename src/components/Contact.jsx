import React from 'react'
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from 'react-icons/ai'

const Contact = () => {
  return (
    <div className='max-w-[1200px] mx-auto glass' id="contact">
        <div className='mx-auto max-w-[600px] text-center p-6'>
            <h2 className='text-gray-500 text-3xl md:text-5xl mb-4 font-bold'>Conectemos</h2>
            <p className='text-gray-500 text-xl'>y empecemos a trabajar en cosas increíbles</p>
        </div>

        <div className='flex justify-center'>

          <div className='my-auto text-accent-secondary'>
              <a href="www.linkedin.com/in/gersombs" title='LinkedIn'><AiFillLinkedin className='w-[100px] h-auto mb-4' /></a>
              <a href="https://github.com/Gersombs" title='GitHub'><AiFillGithub className='w-[100px] h-auto mb-4' /></a>
              <a href="https://www.instagram.com/gersomb_s/" title='Instagram'><AiFillInstagram className='w-[100px] h-auto' /></a>
          </div>

          <div className='p-6 max-w-6xl'>
    <h2 className='mb-4 text-2xl font-bold text-'>¿Cuál es tu idea?</h2>
    <form action="https://getform.io/f/awnqyeeb" method="POST">
        <div className='space-y-4 mb-6 text-gray-400'>
            <input 
                type="text" 
                id="name" 
                name="name" 
                placeholder="Tu nombre ..." 
                className='w-full border-gray-400 py-2 px-4 border rounded-md' 
                required
            >
            </input>
            
            <input 
                type="email" 
                id="email" 
                name="email" 
                placeholder="Tu correo electrónico ..." 
                className='w-full border-gray-400 py-2 px-4 border rounded-md'
                pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[cC][oO][mM]"
                title="Por favor, ingresa un correo electrónico válido que termine en .com"
                required
                autocomplete="email"
            >
            </input>
            
            <textarea 
                type="textarea" 
                name="message" 
                rows="5" 
                placeholder="Tu mensaje ..." 
                className='w-full border-gray-400 py-2 px-4 border rounded-md' 
                required
            >
            </textarea>
        </div>
        <div className='text-center'>
            <button type="submit" className='w-full button-contact max-w-md px-6 py-3 rounded-xl font-semibold'>Enviar Mensaje</button>
        </div>
    </form>
</div>
        </div>
    </div>
  )
}

export default Contact