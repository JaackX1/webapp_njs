import React from 'react'

const heroBanner = () => {
  return (
    <div className={`[&>p]:relative [&>h1]:relative flex justify-center flex-col items-center bg-[url(https://fastly.picsum.photos/id/494/1920/1080.jpg?hmac=GOST5DoMXWyG34kKGV9C1iRNBeHDQeKY06bGB42jWqU)] bg-cover bg-no-repeat bg-center
      h-[400px] w-full relative before:absolute before:content-[''] before:top-0 before:left-0 before:w-full before:h-full before:bg-purple-900/80`}>
      <h1 className="mb-4 mx-3 text-4xl font-bold leading-none tracking-tight text-white md:text-5xl lg:text-6xl
        drop-shadow-[0px_0px_10px_rgba(0,0,0,0.35)]">About Us</h1>
      <p className="mb-6 mx-3 text-lg font-normal text-white lg:text-xl sm:px-16 xl:px-48
        drop-shadow-[0px_0px_10px_rgba(0,0,0,0.35)]">Lorem ipsum dolor sit amet consectetur adipiscing elit tortor eu egestas morbi sem vulputate etiam facilisis pellentesque ut quis.</p>
    </div>
  )
}

export default heroBanner
