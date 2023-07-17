'use client';
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation';

const navbar = () => {
  const pathname = usePathname();
  const ActiveClass = 'border-purple-500 text-purple-500';

  return (
    <header
      id="landing-header"
      className="h-16 px-10 flex items-center fixed top-0 w-full justify-between z-40 bg-white drop-shadow-md"
    >
      <div className="flex flex-grow basis-0">
        <Link href="/">NMA</Link>
      </div>
      <nav className="hidden xl:block sm:hidden h-full">
        <ul
          className=" h-full flex text-sm [&>li>a]:transition-colors [&>li]:flex [&>li]:items-center [&>li]:border-b-2 [&>li>a]:duration-200 [&>li>a]:text-current [&>li>a]:font-medium [&>li>a]:inline-block [&>li>a]:px-4 [&>li>a]:py-2"
        >
          <li className={`hover:border-purple-500 hover:text-purple-500 ${pathname === '/' ? ActiveClass : 'border-transparent'}`}><Link href="/">Inicio</Link></li>
          <li className={`hover:border-purple-500 hover:text-purple-500 ${pathname === '/services' ? ActiveClass : 'border-transparent'}`}><Link href="/services">Servicios</Link></li>
          <li className={`hover:border-purple-500 hover:text-purple-500 ${pathname === '/contact' ? ActiveClass : 'border-transparent'}`}><Link href="/contact">Contactanos</Link></li>
          <li className={`hover:border-purple-500 hover:text-purple-500 ${pathname === '/about' ? ActiveClass : 'border-transparent'}`}><Link href="/about">About</Link></li>
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
        <nav className="flex flex-grow justify-end basis-0">
          <ul className="flex items-center gap-5 text-sm [&>li>a]:transition-colors [&>li>a]:duration-300 [&>li>a]:font-medium [&>li>a]:inline-block [&>li>a]:px-4 [&>li>a]:py-2">
            <li className=""><a href="#" className='bg-purple-500 rounded-lg text-white hover:bg-purple-700'>Iniciar Sesión</a></li>
            <li className="">
              <button className="rounded-lg text-neutral-700 dark:text-neutral-300 focus:outline-none flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 20 20" fill="black">
                  <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </button>
            </li>
          </ul>
        </nav>



      </div>
    </header>
  )
}

export default navbar
