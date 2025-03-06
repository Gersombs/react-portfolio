import React from 'react'

const Footer = () => {
  return (
    <div className="max-w-[1200px] p-8 mx-auto text-center">
    <div className="text-gray-300 text-sm">
      &copy; <span id="current-year">{new Date().getFullYear()}</span> Gersom Bahena. Todos los derechos reservados.
    </div>
  </div>
  )
}

export default Footer