import React from 'react'
import su1 from '@/assets/img/logos/su1.png'
import su2 from '@/assets/img/logos/su2.png'
import aa1 from '@/assets/img/logos/aa1.jpg'
import aa2 from '@/assets/img/logos/aa2.jpg'
import n1 from '@/assets/img/logos/n1.png'
import n2 from '@/assets/img/logos/n2.jpg'
import jo1 from '@/assets/img/logos/jo1.png'
import jo2 from '@/assets/img/logos/jo2.png'
import as1 from '@/assets/img/logos/as1.jpg'
import as2 from '@/assets/img/logos/as2.png'
import nv1 from '@/assets/img/logos/nv1.png'
import nv2 from '@/assets/img/logos/nv2.png'

const clients = () => {
  return (
    <section className=' mb-60 flex w-full justify-center items-center'>
      <div className='max-w-[1480px] w-full px-4 text-center'>
        <h2 className='my-5 uppercase text-3xl text-purple-600 font-semibold'>Nuestros Clientes</h2>
        <ul className='[&>li]:inline-block [&>li]:w-[200px] [&>li]:h-[150px] [&>li]:relative [&>li]:cursor-pointer [&>li]:m-[10px]
        [&>li]:min-w-[100px] [&>li>img]:w-full [&>li>img]:h-full'>
          <li className='group overflow-hidden'>
            <img src={su1.src} alt="" className='transition-transform duration-500 ease-in-out group-hover:-translate-y-full'/>
            <img src={su2.src} alt="" className='transition-transform duration-500 ease-in-out group-hover:-translate-y-full'/>
          </li>
          <li className='group overflow-hidden'>
            <img src={aa1.src} alt="" className='transition-transform duration-500 ease-in-out group-hover:-translate-y-full'/>
            <img src={aa2.src} alt="" className='transition-transform duration-500 ease-in-out group-hover:-translate-y-full'/>
          </li>
          <li className='group overflow-hidden'>
            <img src={n1.src} alt="" className='transition-transform duration-500 ease-in-out group-hover:-translate-y-full'/>
            <img src={n2.src} alt="" className='transition-transform duration-500 ease-in-out group-hover:-translate-y-full'/>
          </li>
          <li className='group overflow-hidden'>
            <img src={jo1.src} alt="" className='transition-transform duration-500 ease-in-out group-hover:-translate-y-full'/>
            <img src={jo2.src} alt="" className='transition-transform duration-500 ease-in-out group-hover:-translate-y-full'/>
          </li>
          <li className='group overflow-hidden'>
            <img src={as1.src} alt="" className='transition-transform duration-500 ease-in-out group-hover:-translate-y-full'/>
            <img src={as2.src} alt="" className='transition-transform duration-500 ease-in-out group-hover:-translate-y-full'/>
          </li>
          <li className='group overflow-hidden'>
            <img src={nv1.src} alt="" className='transition-transform duration-500 ease-in-out group-hover:-translate-y-full'/>
            <img src={nv2.src} alt="" className='transition-transform duration-500 ease-in-out group-hover:-translate-y-full'/>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default clients
