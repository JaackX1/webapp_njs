import React from 'react'

import Image from 'next/image'

import imgfloat from '@/assets/img/WavyIndex2.png';

const info = () => {
  return (
    <section className=' flex w-full justify-center items-center'>
      <div className='max-w-[1480px] w-full px-4 flex gap-8 md:gap-4 flex-wrap md:flex-nowrap'>
        <div className='max-w-[840px] w-full flex flex-col justify-center'>
          <h2 className='text-purple-600 text-3xl mb-5 uppercase'>Sobre nosotros</h2>
          <p className='text-xl my-3 text-[#5d5d5d]'>Expertos con más de 20 años en el rubro</p>
          <p className='text-lg text-[#8D8C88]'>Somos un grupo de más de 40 expertos en prevención de riesgos, presentes en todo el territorio nacional, brindando asesorías a pequeñas, medianas y grandes empresas de distintos rubros. Para las organizaciones que no cuentan con sus propios prevencionistas nos volvemos parte de ellos. Y en el caso en que ya cuentes con prevencionistas, somos tu apoyo y ejecutamos las actividades en distintos puntos de trabajo para que tengas el mayor alcance en tu organización.</p>
          <a href="#" className='my-10 w-max bg-violet-500 hover:bg-violet-700 transition-all duration-500 py-3 px-10 block rounded-md text-white text-2xl'>Contactanos</a>
        </div>
        <div className='w-full max-w-[640px] object-cover flex justify-center items-center'>
          <Image src={imgfloat.src} alt='' width={1920} height={1080}/>
        </div>
      </div>
    </section>
  )
}

export default info
