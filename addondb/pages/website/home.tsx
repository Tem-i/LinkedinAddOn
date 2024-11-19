import React from 'react'
import Head from 'next/head'

const home = () => {
  return (
    <div className='flex flex-col h-screen'>
        <Head>
            <title>Home</title>
        </Head>

    <div className="w-full h-full relative bg-white">
    <div className="w-full h-[47px] left-0 top-[32px] absolute bg-[#d9d9d9] border border-black" />
    <div className="w-[90%] max-w-[1281px] h-[90%] max-h-[1187px] left-[5%] top-[148px] absolute bg-[#d9d4d4] border border-white" />
    <div className="w-[216px] h-[108px] left-[28px] top-[9px] absolute bg-white rounded-[10px] border border-black" />
    <div className="w-[115px] h-[108px] left-[1254px] top-[7px] absolute bg-red rounded-full" />
    <div className="w-[101px] h-[52px] left-[1266px] top-[24px] absolute text-[#fd0707] text-[64px] font-extrabold font-['Inconsolata']">RPI </div>
    <div className="w-[21px] h-[6.41px] left-[1373px] top-[58px] absolute">
        <div className="w-[12.28px] h-[0px] left-0 top-[0.35px] absolute origin-top-left rotate-[28.81deg] border-2 border-black"></div>
        <div className="w-[12.08px] h-[0px] left-[10.76px] top-[6.41px] absolute origin-top-left rotate-[-32.04deg] border-2 border-black"></div>
    </div>
    <div className="w-[147.14px] h-[89px] left-[49px] top-[28px] absolute text-black text-[23px] font-normal font-['Inter']">Linkedin Add (or logo)</div>

    {/* Sidebar */}
    <div className="w-[113px] h-full left-0 top-[148px] absolute bg-[#f07b49] border">
        <div className="w-[35px] h-[175px] left-[78px] top-[96px] absolute bg-white rounded-tl-md rounded-bl-md" />
        <div className="w-[35px] h-[175px] left-[78px] top-[286px] absolute bg-white ounded-tl-md rounded-bl-md" />
        <div className="w-[35px] h-[175px] left-[78px] top-[476px] absolute bg-white ounded-tl-md rounded-bl-md" />
    </div>

    
</div>

</div>

    
  )
}

export default home