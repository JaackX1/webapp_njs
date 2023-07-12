import React from 'react'
import Image from 'next/image'

import imgfloat from '@/assets/img/floatIndex2.png';

const hero = () => {
  return (
    <section className='pt-16 flex w-full justify-center items-center min-h-screen'>
      <div className='max-w-[1480px] w-full px-4 flex justify-center gap-8 md:gap-4 flex-wrap md:flex-nowrap'>
        <div className='max-w-[600px] w-full '>
          <h1 className='text-purple-600 text-3xl md:text-7xl mb-5'>Expertos en <span className='font-bold'>Seguridad</span></h1>
          <p className='text-2xl'>Te brindamos la mejor asesoria profesional para evitar riesgos en tu empresa, con el mejor servicio personalizado</p>
          <a href="#" className='w-max m-5 bg-violet-500 hover:bg-violet-700 transition-all duration-500 py-3 px-8 block rounded-md text-xl text-white'>Cotizacion</a>
        </div>
        <div className='w-full max-w-[640px] object-cover flex justify-center items-center'>
          <Image src={imgfloat.src} alt='' width={1920} height={1080} className='animate-upDown'/>
        </div>
      </div>
    </section>
  )
}

export default hero
