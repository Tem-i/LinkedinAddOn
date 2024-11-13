import React from 'react'
import Head from 'next/head'
import Image from 'next/image'

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
            <div className='flex w-full flex-grow justify-center items-start p-4 space-x-4'>
                {/* Sidebar */}
                <div className='w-[113px] h-[815px] bg-green-500 border p-2 flex flex-col space-y-8 items-center'>
                    <div className='w-6 h-6 bg-white' />
                    <div className='w-6 h-6 bg-white' />
                    <div className='w-6 h-6 bg-white' />
                </div>
                {/* Main Panel */}
                <div className='flex flex-col w-[862px] bg-[#dedede] space-y-4 p-4'>
                    <div className='bg-[#f17c4a]/25 w-full h-[37px]' />
                    <div className='bg-white/25 w-full h-[654x] p-4'>
                        <div className='flex space-x-4'>
                            <div className="text-black text-base font-['Red Hat Mono']">name</div>
                            <div className="text-black text-base font-['Red Hat Mono']">status</div>
                            <div className="text-black text-base font-['Red Hat Mono']">location</div>
                        </div>
                        {/* convert to component */}
                        <div className='flex space-x-4 bg-[#d9d9d9] w-full h-[49px] mt-2'>
                            <div className="text-black text-base font-['Red Hat Mono']">John Doe</div>
                            <div className="text-black text-base font-['Red Hat Mono']">Alumni</div>
                            <div className="text-black text-base font-['Red Hat Mono']">Troy, NY</div>
                        </div>
                    </div>
                </div>
                    {/* Visual Display */}
                    <div className='flex flex-col items-center w-[143px] h-94px] p-4 bg-[#626262] rounded-[20px] text-center text-[13px] font-serif'>
                        <div className='bg-[d9d9d9] w-[29px h-[26px] rounded-full'></div>
                        <span>visual display</span>
                    </div>
            </div>
            
        </div>

        {/* <div className="w-full h-full relative bg-white">
            <div className="w-full h-full left-0 top-0 absolute bg-white" />
            <div className="w-[1440px] h-[47px] left-0 top-[32px] absolute bg-[#d9d9d9] border border-black" />
            <div className="w-[1281px] h-[815px] left-[113px] top-[148px] absolute bg-[#d9d9d9] border border-white" />
            <div className="w-[216px] h-[108px] left-[28px] top-[9px] absolute bg-white rounded-[10px] border border-black" />
            <div className="w-[115px] h-[108px] left-[1254px] top-[7px] absolute bg-[#d9d9d9] rounded-full" />
            <div className="w-[101px] h-[52px] left-[1266px] top-[24px] absolute text-[#fd0707] text-[64px] font-extrabold font-['Inconsolata']">RPI </div>
            <div className="w-[21px] h-[6.41px] left-[1373px] top-[58px] absolute">
            <div className="w-[12.28px] h-[0px] left-0 top-[0.35px] absolute origin-top-left rotate-[28.81deg] border-2 border-black"></div>
            <div className="w-[12.08px] h-[0px] left-[10.76px] top-[6.41px] absolute origin-top-left rotate-[-32.04deg] border-2 border-black"></div>
            </div>
            <div className="w-[651px] h-[42px] left-[136px] top-[161px] absolute bg-[#f4f4f4] rounded-[15px]" />
            <div className="left-[158px] top-[175px] absolute text-black text-xs font-normal font-['Inter']">search</div>
            <div className="w-[113px] h-[815px] left-0 top-[148px] absolute bg-[#f07b49] border">
            <div className="w-6 h-6 left-[78px] top-[96px] absolute" />
            <div className="w-6 h-6 left-[78px] top-[286px] absolute" />
            <div className="w-6 h-6 left-[78px] top-[476px] absolute" />
            </div>
            <div className="w-[862px] h-[690px] left-[167px] top-[245px] absolute bg-[#dedede]" />
            <div className="w-[1227px] h-[37px] left-[167px] top-[244px] absolute bg-[#f17c4a]/25" />
            <div className="w-[1227px] h-[654px] left-[167px] top-[281px] absolute bg-white/25" />
            <div className="w-[61px] h-[26px] left-[188px] top-[256px] absolute text-black text-base font-normal font-['Red Hat Mono']">name </div>
            <div className="w-[61px] h-[26px] left-[472px] top-[255px] absolute text-black text-base font-normal font-['Red Hat Mono']">status </div>
            <div className="w-20 h-[26px] left-[857px] top-[255px] absolute text-black text-base font-normal font-['Red Hat Mono']">location </div>
            <div className="w-[1225px] h-[49px] left-[169px] top-[283px] absolute bg-[#d9d9d9]" />
            <div className="w-[81px] left-[183px] top-[306px] absolute text-black text-base font-normal font-['Red Hat Mono']">John Doe</div>
            <div className="w-[81px] left-[467px] top-[306px] absolute text-black text-base font-normal font-['Red Hat Mono']">Alumni</div>
            <div className="w-[81px] left-[857px] top-[301px] absolute text-black text-base font-normal font-['Red Hat Mono']">Troy, NY</div>
            <div className="w-[85px] h-8 left-[1288px] top-[246px] absolute bg-[#626262] rounded-[20px]" />
            <div className="w-[29px] h-[26px] left-[1340px] top-[249px] absolute bg-[#d9d9d9] rounded-full" />
            <div className="w-[143px] left-[1283px] top-[227px] absolute text-black text-[13px] font-normal font-['Red Hat Mono']">visual display</div>
            <div className="w-[94px] h-[94px] left-[89px] top-[16px] absolute" />
    </div> */}

    
        {/* <div>
            <div className='w-1440 h-47 bg-#d9d9d9 border border-black' />
            <div className='w-216 h-108 bg-white rounded-10 border border-black '>
                <div className='w-94 h-94 relative'>
                <Image
                    src = "/placeholderLogo.svg"
                    alt='placeholder logo'
                    width={94}
                    height={94}
                    priority
                />
                </div>
            </div>
        </div> */}




        {/*Header*/}
        {/* <header className='flex justify-between items-center px-4 py-2 bg-amber-300'>
            <div className='font-bold'>Logo</div>
            <div className='text-xl font-bold rext-red-600'>RPI</div>
        </header> */}

        {/* Sidebar */}
        {/* <aside className='flex flex-col items-center w-16 bg-orange-500 py-4 space-y-4'>
            <div>🏠</div>
            <div>👥</div>
            <div>🔍</div>
        </aside>

        <main className="flex flex-1 flex-col p-4 bg-gray-100">
            <div className="flex items-center space-x-2 mb-4">
                <input 
                    type = "text"
                    placeholder = "Search"
                    className = 'w-full max-w-md p-2 border rounded focus:outline-none focus:ring focus:border-blue-300' 
                />
                <button className="p-2 bg-gray-200 rounded">
                    <span>🔍</span>
                </button>
            </div>

        </main> */}
    </div>
  )
}

export default home