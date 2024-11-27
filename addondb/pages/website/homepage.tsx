import React, {useState} from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Searchbar from '@/components/searchbar'
import  house  from 'bootstrap-icons/icons/house-door.svg'
import people from 'bootstrap-icons/icons/people.svg'
import magnifying from 'bootstrap-icons/icons/search.svg'
import linkedin from 'bootstrap-icons/icons/linkedin.svg'
import SearchPanel from '@/components/SearchPanel'
import CommunityPanel from '@/components/CommunityPanel'
import HomePanel from '@/components/HomePanel'





const home = () => {
    //state for active tab
    const [activeTab, setActiveTab] = useState('community') //for debugging default is set to community should be home
    


    //function to handle tab click
    const handleTabClick = (tab) => {
        setActiveTab(tab)
    }

  return (

    <div className='flex flex-col h-screen overflow-x-hidden overflow-y-hidden '>
        <Head>
            <title>Alumni Search</title>
        </Head>

        <div className = 'flex flex-col w-full h-full bg-white'>
            {/* Top Navbar  */}
            <div className = 'flex w-full bg-[#EED2CC] border-black h-[10%] justify-between items-center p-4' >
                <div className='flex itmes-center space-x-4'>
                    <div className=' flex items-center justify-center w-[15%] h-[108%] ' > 
                        <div className='invert' >
                            <Image src={linkedin} alt='linkedin logo' width={200} height={200}  />
                        </div>
                    </div>
                </div>
                <div className='flex items-center space-x-2'>
                    {/* <div className='w-[115px] h-[108px] bg-green-500 rounded-full' /> */}
                    <div className='text-[#fd0707] text-[4rem] font-extrabold font-serif'>RPI</div> 
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
                    {/* home tab  */}
                    <button 
                    className={`w-[50px] h-[190px] rounded-l-lg flex justify-center items-center hover:bg-[#f4f4f4] transition-color duration-200 ${
                        activeTab === 'home' ? 'bg-[#f4f4f4]' : 'bg-[#d9d9d9]'
                      }`}
                      onClick={() => handleTabClick('home')}
                    >
                        <Image src={house} alt="House Icon" width={24} height={24} />
                    </button>

                    {/* community tab  */}
                    <button 
                        className={`w-[50px] h-[190px] rounded-l-lg flex justify-center items-center hover:bg-[#f4f4f4] transition-color duration-200 ${
                            activeTab === 'community' ? 'bg-[#f4f4f4]' : 'bg-[#d9d9d9]'
                          }`}
                          onClick={() => handleTabClick('community')}
                    >
                        <Image src={people} alt="House Icon" width={24} height={24} />
                    </button>

                    {/* Search tab */}
                    <button className={`w-[50px] h-[190px] rounded-l-lg flex justify-center items-center hover:bg-[#f4f4f4] transition-color duration-200 ${
                        activeTab === 'search' ? 'bg-[#f4f4f4]' : 'bg-[#d9d9d9]'
                    }`}
                    onClick={() => handleTabClick('search')}
                    >
                        <Image src={magnifying} alt="House Icon" width={24} height={24} />
                    </button>
                </div>

                <div className='flex-grow'>
                    {activeTab === 'home' && <HomePanel />}
                    {activeTab === 'community' && <CommunityPanel />}
                    {activeTab === 'search' && <SearchPanel />}
                </div>    
            </div> 
        </div>
    </div>

        

  )
}

export default home