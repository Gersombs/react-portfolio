import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { Link } from 'react-scroll'
import logo from '../assets/logo.png'

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

  return (
    <div className='h-[96px] glass-nav px-8 md:backdrop-blur-xl text-gray-300 max-w-[1200px] flex justify-between items-center mx-auto'>

<img src={logo} alt="Logo" className='h-10 cursor-default'/>

        <ul className='hidden md:flex gap-10 text-xl cursor-pointer '>
            <li className='nav-link'><Link to="home" spy={true} smooth={true} offset={-15} duration={500}>Inicio</Link></li>
            <li className='nav-link'><Link to="about" spy={true} smooth={true} offset={-15} duration={500}>Acerca de</Link></li>
            <li className='nav-link'><Link to="work" spy={true} smooth={true} offset={-15} duration={500}>Portafolio</Link></li>
            <li className='nav-link'><Link to="contact" spy={true} smooth={true} offset={-15} duration={500}>Contacto</Link></li>
        </ul>

        <div onClick={handleNav} className='block md:hidden text-gray-300  right-10 top-10 z-50 cursor-pointer nav-link'>
            {nav ? <AiOutlineClose size={30}/> : <AiOutlineMenu size={30}/>}
        </div>

        <div className={nav ? 'text-gray-300 z-40 absolute left-0 top-0 w-full bg-[#232323] ease-in-out duration-500' : 'fixed left-[-100%]'}>
            <ul className='p-8 text-4xl ml-20 cursor-pointer hover:'>
                <li className='p-2 nav-link'><Link to="home" spy={true} smooth={true} offset={-15} duration={500}>Inicio</Link></li>
                <li className='p-2 nav-link'><Link to="about" spy={true} smooth={true} offset={-15} duration={500}>Acerca de</Link></li>
                <li className='p-2 nav-link'><Link to="work" spy={true} smooth={true} offset={-15} duration={500}>Portafolio</Link></li>
                <li className='p-2 nav-link'><Link to="contact" spy={true} smooth={true} offset={-15} duration={500}>Contacto</Link></li>
            </ul>
        </div>

    </div>
  )
}

export default Navbar