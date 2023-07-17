import React from 'react'
import PricingCard from '@/components/card/pricingCard.jsx'

const title = () => {

  return (
    <>
      <div className='pt-20 flex justify-center flex-col items-center min-h-screen'>
        <p className="mb-2 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48">Pricing</p>
        <h1 className="mb-4 mx-3 text-4xl font-bold leading-none tracking-tight text-purple-600 md:text-5xl lg:text-6xl">Affordable pricing plans</h1>
        <p className="mb-6 mx-3 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48">Lorem ipsum dolor sit amet consectetur adipiscing elit tortor eu egestas morbi sem vulputate etiam facilisis pellentesque ut quis.</p>
        <div className='flex justify-center flex-wrap gap-5 mt-6'>
          <PricingCard title='Basic' price='$10' />
          <PricingCard title='Medium' price='$20' />
          <PricingCard title='Pro' price='$30' />
        </div>
      </div>

    </>
  )
}

export default title
