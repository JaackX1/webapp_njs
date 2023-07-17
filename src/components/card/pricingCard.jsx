import React from 'react'
import CheckIcon from '@/components/icons/checkIcon.jsx';

const pricingCard = ({title, price}) => {
  return (
    <article className="mb-4 overflow-hidden rounded-2xl shadow-lg">
      <header className="px-6 py-8 bg-white sm:p-10 sm:pb-6">
        <h2 className="text-center px-4 py-1 text-base font-semibold leading-5 tracking-wide uppercase">
          {title}
        </h2>
        <h3 className="flex justify-center my-4 text-6xl font-extrabold leading-none">
          {price}
        </h3>
        <p className="text-center text-gray-500  px-4 py-1 text-xs font-semibold leading-5 tracking-wide uppercase">
          Billed monthly
        </p>
        <div className="mt-6 rounded-full shadow">
          <a href="#" className="flex items-center justify-center px-5 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out border border-transparent rounded-full bg-purple-500 hover:bg-purple-700 focus:outline-none focus:shadow-outline">
            Start plan
          </a>
        </div>
      </header>
      <hr />
      <footer className="px-6 pt-6 pb-8 bg-white sm:p-10 sm:pt-6">
        <ul>
          <li className="flex items-start mt-4">
            <CheckIcon />
            <p className="ml-3 text-base leading-6 text-gray-700">
              All analytics features
            </p>
          </li>
          <li className="flex items-start mt-4">
            <CheckIcon />
            <p className="ml-3 text-base leading-6 text-gray-700">
              Up to 250,000 tracked visits
            </p>
          </li>
          <li className="flex items-start mt-4">
            <CheckIcon />
            <p className="ml-3 text-base leading-6 text-gray-700">
              Normal support
            </p>
          </li>
          <li className="flex items-start mt-4">
            <CheckIcon />
            <p className="ml-3 text-base leading-6 text-gray-700">
              Mobile app
            </p>
          </li>
          <li className="flex items-start mt-4">
            <CheckIcon />
            <p className="ml-3 text-base leading-6 text-gray-700">
              Up to 3 team members
            </p>
          </li>
        </ul>

      </footer>
    </article>
  )
}

export default pricingCard
