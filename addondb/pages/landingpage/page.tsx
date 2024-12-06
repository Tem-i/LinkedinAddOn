import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <div>
      {/*make background white */}
      <div className='bg-white h-screen w-screen'>
        {/* Top border */}
        <div className='h-16 flex items-center justify-between px-6 space-x-3 shadow-md'>
          {/* Content inside the top border */}
          <div className='flex flex-row space-x-3 items-center'>
            {/* Three bars to the left of the border */}
            <div>
              <Image src='/Group13.svg' alt='hamburgermenu' width={24} height={24}/>
            </div>  
            {/* Logo */}
            <div className='text-black font-bold text-4xl'>
              AlumniNet
            </div>
          </div>

          {/* Buttons in the top border */}
          <div className='space-x-5'> 
            <button className='bg-[#e8998d] rounded-3xl px-6 py-1 text-black'> 
              Messages
            </button>
            <button className='bg-[#e8998d] rounded-3xl px-6 py-1 text-black'> 
              Library
            </button>
            <button className='bg-[#e8998d] rounded-3xl px-6 py-1 text-black'> 
              Mentoring
            </button>
            <button className='bg-[#e8998d] rounded-3xl px-6 py-1 text-black'> 
              Profile
            </button>
            <button className='bg-[#e8998d] rounded-3xl px-8 py-2 text-black'> 
              Log In
            </button>
          </div>
        </div>

        {/* Main content */}
        <div className='text-black flex flex-col justify-center items-center mt-12 space-y-8'>
          {/* Main Text */}
          <div className='text-center'>
            <p className='font-normal text-5xl'>
              "Empowering Undergraduates, Building Futures"
            </p>
            <p className='text-3xl mt-4'>
              Start building connections today!
            </p>
          </div>

          {/* Search Bar */}
          <div className='w-full flex justify-center'>
            <div className='flex items-center bg-gray-100 rounded-full shadow-md px-4 py-2 w-3/4 max-w-3xl'>
              <input 
                type='text' 
                className='bg-gray-100 flex-grow text-xl outline-none' 
                placeholder='What are you looking for?'
              />

              {/* button within the search bar */}
              <button className='flex items-center justify-center text-white bg-[#e8998d] rounded-full h-10 w-10'>
                {/* magnifying glass image on the button */}
                <Image src='/search.svg' alt='search-icon' width={24} height={24}/>
              </button>

            </div>
          </div>

          {/* Additional Description */}
          <div className='text-center'>
            <p className='text-gray-500 text-lg'>
              Get started by choosing which features apply to you:
            </p>
          </div>
        </div>
      </div>  
    </div>
  )
}

export default page
