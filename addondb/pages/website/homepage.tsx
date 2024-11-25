//cd addondb
//npm install
//npm run dev
//to open window URL is: http://localhost:3000/website/homepage

import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Searchbar from '@/components/searchbar'
import  house  from 'bootstrap-icons/icons/house-door.svg'
import people from 'bootstrap-icons/icons/people.svg'
import magnifying from 'bootstrap-icons/icons/search.svg'
import linkedin from 'bootstrap-icons/icons/linkedin.svg'
import MainPanel from '@/components/MainPanel'





const home = () => {

  return (

    <div className='flex flex-col h-screen'>
        <Head>
            <title>Alumni Search</title>
        </Head>

        <div className = 'flex flex-col w-full h-full bg-white'>
            {/* Top Navbar  */}
            <div className = 'flex w-full bg-[#EED2CC] border-black h-47 justify-between items-center p-4' >
                <div className='flex itmes-center space-x-4'>
                <div className='w-[216px] h-[108px] bg-white rounded-[10px] border border-black' />
                </div>
                <div className='flex items-center space-x-2'>
                    <div className='w-[115px] h-[108px] bg-green-500 rounded-full' />
                    <div className='text-[#fd0707] text-[64px] font-extrabold font-serif'>RPI</div> 
                    <div className='relative'>
                        <div className="w-[12.28px] h-[0px] left-0 top-[0.35px] absolute origin-top-left rotate-[28.81deg] border-2 border-black"></div>
                        <div className="w-[12.08px] h-[0px] left-[10.76px] top-[6.41px] absolute origin-top-left rotate-[-32.04deg] border-2 border-black"></div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className='flex w-full flex-grow justify-center items-start '>
                
                
                {/* Sidebar */}
                <div className='w-[113px] h-full bg-[#E8998D] flex flex-col pt-2 items-end'>
                    <button className='w-[50px] h-[190px] rounded-l-lg bg-[#d9d9d9] flex justify-center items-center hover:bg-[#f4f4f4] click:translate-x-[-4px] transition-color duration-200 ' > 
                        <Image src={house} alt="House Icon" width={24} height={24} />
                    </button>
                    <button className='w-[50px] h-[190px] rounded-l-lg bg-[#d9d9d9] flex justify-center items-center hover:bg-[#f4f4f4] click:translate-x-[-4px] transition-color duration-200' >
                        <Image src={people} alt="House Icon" width={24} height={24} />
                    </button>
                    <button className='w-[50px] h-[190px] rounded-l-lg bg-[#d9d9d9] flex justify-center items-center hover:bg-[#f4f4f4] click:translate-x-[-4px] transition-color duration-200' >
                        <Image src={magnifying} alt="House Icon" width={24} height={24} />
                    </button>
                </div>

                {/* Main Panel */}
                <div className='flex-grow w-full ' >
                    <MainPanel />
                </div>
            </div> 
        </div>
    </div>

        

  )
}

export default home