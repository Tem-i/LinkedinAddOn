import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import User from '@/components/User'
import Searchbar from '@/components/searchbar'
import  house  from 'bootstrap-icons/icons/house-door.svg'
import people from 'bootstrap-icons/icons/people.svg'
import magnifying from 'bootstrap-icons/icons/search.svg'



const home = () => {
  return (

    <div className='flex flex-col h-screen'>
        <Head>
            <title>Alumni Search</title>
        </Head>

        <div className = 'flex flex-col w-full h-full bg-white'>
            {/* Top Navbar  */}
            <div className = 'flex w-full bg-green-500 border border-black h-47 justify-between items-center p-4' >
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
                <div className='w-[113px] h-full bg-green-500 border flex flex-col pt-2 items-end'>
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
                <div className='flex-grow flex flex-col w-full h-full bg-[#dedede] space-y-4 p-4'>
                    <Searchbar />
                    <div className='bg-[#f17c4a]/25 w-full h-[37px]'>
                        <div className='flex space-x-4'>
                            <div className="text-black text-base font-['Red Hat Mono']">name</div>
                            <div className="text-black text-base font-['Red Hat Mono']">status</div>
                            <div className="text-black text-base font-['Red Hat Mono']">location</div>
                        </div>
                    </div>

                    
                    <div className='bg-white/25 w-full h-[654x] p-4'>
                        {/* convert to component */}
                        {/* <div className='flex space-x-4 bg-[#d9d9d9] w-full h-[49px] mt-2'>
                            <div className="text-black text-base font-['Red Hat Mono']">John Doe</div>
                            <div className="text-black text-base font-['Red Hat Mono']">Alumni</div>
                            <div className="text-black text-base font-['Red Hat Mono']">Troy, NY</div>
                        </div> */}
                        <User />
                        <User />
                        <User />
                    </div>
                </div>
                    {/* Visual Display */}
                    {/* <div className='flex flex-col items-center w-[143px] h-94px] p-4 bg-[#626262] rounded-[20px] text-center text-[13px] font-serif'>
                        <div className='bg-[d9d9d9] w-[29px h-[26px] rounded-full'></div>
                        <span>visual display</span>
                    </div> */}
            </div> 
        </div>
    </div>

        

  )
}

export default home