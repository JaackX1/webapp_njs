import React from 'react'

const contact = () => {
  return (
    <>
      <div className="min-h-max bg-gray-100 text-gray-900 flex justify-center">
        <div className="max-w-screen-xl mx-0 my-20 sm:m-20 bg-white sm:rounded-lg flex justify-center flex-1 overflow-hidden drop-shadow-xl">
          <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
            <div className="my-7 flex flex-col items-center ">
              <h1 className="text-2xl xl:text-3xl font-extrabold">
                Contáctanos
              </h1>
              <form>
                <div className="w-full flex-1 mt-8">
                  <div className="mx-auto max-w-xs">
                    <div>
                      <label htmlFor="tel" className='block text-base font-semibold'>Nombre:</label>
                      <input
                        className="w-full px-8 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                        type="text"
                        placeholder="Escriba su nombre"
                      />
                    </div>
                    <div className='mt-5'>
                      <label htmlFor="tel" className='block text-base font-semibold'>Teléfono:</label>
                      <input
                        className="w-full px-8 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                        placeholder="+56 9 8765 4321"
                        type="text"
                        pattern="[0-9]{9}"
                        maxLength="9"
                      />
                    </div>
                    <div className='mt-5'>
                      <label htmlFor="tel" className='block text-base font-semibold'>E-mail:</label>
                      <input
                        className="w-full px-8 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                        type="email"
                        placeholder="ejemplo@gmail.com"
                      />
                    </div>
                    <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem] mt-5">
                      <input
                        className="accent-purple-700 relative float-left mt-[0.25rem] mr-[6px] -ml-[1.5rem] h-[1.125rem] w-[1.125rem]"
                        type="checkbox"
                        id="checkboxTerms"
                        name="checkboxTerms"
                      />
                      <label className="mt-6 text-xs text-gray-600 text-center">
                        Al continuar estas aceptando los
                        <a href="#" className="border-b border-gray-500 border-dotted hover:text-purple-700 hover:border-purple-700"> términos y condiciones </a>
                        y
                        <a href="#" className="border-b border-gray-500 border-dotted hover:text-purple-700 hover:border-purple-700"> la politica de privacidad. </a>
                      </label>
                    </div>

                    <div className="my-5 border-b text-center">
                      <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="mt-5 bg-purple-500 hover:bg-purple-700 tracking-wide font-semibold text-gray-100 w-full py-4 rounded-lg hover:bg-panal-yellow transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                    >
                      <span className="ml-3">
                        Enviar
                      </span>
                    </button>

                  </div>

                </div>
              </form>

            </div>
          </div>
          <div className="flex-1 bg-indigo-100 text-center hidden lg:flex">
            <div className="w-full bg-contain bg-center bg-no-repeat">
              <img src="https://w0.peakpx.com/wallpaper/481/651/HD-wallpaper-purple-moon-moon-water-purple-shine-clouds-night.jpg" alt="" className='object-cover h-full' />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default contact
