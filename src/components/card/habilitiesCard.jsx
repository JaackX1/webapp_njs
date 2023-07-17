import React from 'react'

const habilitiesCard = ({title, IconComponent}) => {
  return (
    <div className='w-[370px] p-5 flex justify-center items-center flex-col'>
          <div
            className="bg-purple-500/30 rounded-full w-16 h-16 flex justify-center items-center text-purple-500 drop-shadow-2xl"
          >
            <IconComponent/>
          </div>
          <h3 className="uppercase mt-6 text-2xl font-bold mb-3">
            {title}
          </h3>
          <p className="font-light text-sm text-gray-500 mb-3 text-center">
            We get insulted by others, lose trust for those others. We get back
            stabbed by friends. It becomes harder for us to give others a hand.
          </p>
          <a className="flex items-center hover:text-purple-600 transition-all" href="/">
            More about us icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
  )
}

export default habilitiesCard
