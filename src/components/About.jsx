import React from 'react'
import notebook from '../assets/notebookM.png'
import mobile from '../assets/mobileR.png'

const About = () => {
  return (
    <div className='text-white gap-4 max-w-[1200px] mx-auto my-12 grid sm:grid-cols-3' id="about">

        <div className='sm:col-span-2 glass sm:py-16 my-auto text-left p-4'>
            <div className='max-w-[80%] mx-auto'>
                <h2 className='text-3xl font-bold mb-4'>Transformo ideas en experiencias digitales</h2>
                <p className='text-gray-200'>Como desarrollador y diseñador web, optimizo sitios con código limpio y rendimiento ágil, mientras diseño interfaces intuitivas que capturan la esencia de tu marca.</p>
            </div>    
        </div>


        <div className='hidden md:block sm:col-span-1 glass overflow-hidden'>
            <img className='w-[200px] md:w-[500px] absolute' src={notebook} alt='Notebook'/>
        </div>


        <div className='hidden md:block sm:col-span-1 glass overflow-hidden'>
            <img className='w-[200px] md:w-[500px] absolute' src={mobile} alt='mobile'/>
        </div>

        <div className='md:hidden relative overflow-hidden h-[200px] glass'>
            <img className='absolute w-[400px]' src={notebook} alt='Notebook'/>
            <img className='w-[200px] right-0 absolute' src={mobile} alt='mobile'/>
        </div>


        <div className='sm:col-span-2 glass sm:py-16 my-auto text-left p-4'>
            <div className='max-w-[80%] mx-auto'>
                <h2 className='text-3xl font-bold mb-4'>Diseño con propósito, impacto visual</h2>
                <p className='text-gray-200'>Desde estructuras técnicas sólidas hasta identidades visuales impactantes: creo soluciones donde la funcionalidad y la estética trabajan en equipo. </p>
            </div>    
        </div>

    </div>
  )
}

export default About