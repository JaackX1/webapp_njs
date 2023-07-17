'use client';
import React from 'react'
import HabilitiesCard from '@/components/card/habilitiesCard.jsx';
import LikeIcon from '@/components/icons/likeIcon.jsx'

const habilities = () => {
  return (
    <>
      <div className='h-[500px] bg-white flex justify-center items-center gap-5'>
        <HabilitiesCard title='Great Support' IconComponent={LikeIcon}/>
        <HabilitiesCard title='Smart Work' IconComponent={LikeIcon}/>
        <HabilitiesCard title='Efficiency' IconComponent={LikeIcon}/>
      </div>
    </>

  )
}

export default habilities
