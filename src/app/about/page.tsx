import React from 'react'
import Tools from '@/components/PageSection/about/tools.jsx'
import HeroBanner from '@/components/PageSection/about/heroBanner.jsx'
import InfoSection from '@/components/PageSection/about/info.jsx'
import Habilities from '@/components/PageSection/about/habilities.jsx'

const page = () => {
  return (
    <div className='pt-16 min-h-screen'>
      <HeroBanner/>
      <InfoSection></InfoSection>
      <Habilities></Habilities>
      <Tools></Tools>
    </div>
  )
}

export default page
