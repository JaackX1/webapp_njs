import React from 'react'

const navbar = () => {
  return (
    <header
      id="landing-header"
      className="h-16 px-10 flex items-center fixed top-0 w-full justify-between z-40 bg-white drop-shadow-md"
    >
      <div className="flex flex-grow basis-0">
        <a href="./">NMA</a>
      </div>
      <nav className="hidden xl:block sm:hidden h-full">
        <ul
          className=" h-full flex text-sm [&>li>a]:transition-colors [&>li]:flex [&>li]:items-center [&>li]:border-b-2 [&>li]:border-transparent [&>li>a]:duration-200 [&>li>a]:text-current [&>li>a]:font-medium [&>li>a]:inline-block [&>li>a]:px-4 [&>li>a]:py-2"
        >
          <li className='hover:border-purple-500 hover:text-purple-500'><a href="#">Inicio</a></li>
          <li className='hover:border-purple-500 hover:text-purple-500'><a href="#">Servicios</a></li>
          <li className='hover:border-purple-500 hover:text-purple-500'><a href="#">Contactanos</a></li>
          <li className='hover:border-purple-500 hover:text-purple-500'><a href="#">About</a></li>
        </ul>
      </nav>
      <nav className="flex flex-grow justify-end basis-0">
        <ul
          className="flex text-sm [&>li>a]:transition-colors [&>li>a]:duration-300 [&>li>a]:font-medium [&>li>a]:inline-block [&>li>a]:px-4 [&>li>a]:py-2"
        >
          <li className="hidden xl:block sm:hidden"><a href="#" className='bg-purple-500 rounded-lg text-white hover:bg-purple-700'>Iniciar Sesión</a></li>
        </ul>
      </nav>
      <div className='xl:hidden'>
        Mobile
      </div>
    </header>
  )
}

export default navbar
