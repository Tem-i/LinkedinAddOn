import React from 'react'
import Image from 'next/image'

const page = () => {
  const handleButtonClick = (feature) => {
    console.log(`Feature selected: ${feature}`);
    // Add your navigation or functionality here.
  };

  const features = [
    'Undergraduate',
    'Graduate',
    'Recent Graduate',
    'Internship Seeker',
    'Entry-Level Job Seeker',
    'Exploring Opportunities',
    'Networking',
    'Mentorship & Career Guidance',
    'Resume & Interview Prep',
    'Building Career Skills',
    'Exploring Career Paths',
  ];

  return (
    <div>
      {/* Background */}
      <div className='bg-white h-screen w-screen'>
        {/* Top Border */}
        <div className='h-16 flex items-center justify-between px-6 space-x-3 shadow-md'>
          {/* Top Content */}
          <div className='flex flex-row space-x-3 items-center'>
            <div>
              <Image src='/Group13.svg' alt='hamburgermenu' width={24} height={24} />
            </div>
            <div className='text-black font-bold text-4xl'>AlumniNet</div>
          </div>

          {/* Buttons */}
          <div className='space-x-5'>
            <button className='bg-[#e8998d] rounded-3xl px-6 py-1 text-black'>Messages</button>
            <button className='bg-[#e8998d] rounded-3xl px-6 py-1 text-black'>Library</button>
            <button className='bg-[#e8998d] rounded-3xl px-6 py-1 text-black'>Mentoring</button>
            <button className='bg-[#e8998d] rounded-3xl px-6 py-1 text-black'>Profile</button>
            <button className='bg-[#e8998d] rounded-3xl px-8 py-2 text-black'>Log In</button>
          </div>
        </div>

        {/* Main Content */}
        <div className='text-black flex flex-col justify-center items-center mt-12 space-y-8'>
          {/* Main Text */}
          <div className='text-center'>
            <p className='font-normal text-5xl'>"Empowering Undergraduates, Building Futures"</p>
            <p className='text-3xl mt-4'>Start building connections today!</p>
          </div>

          {/* Search Bar */}
          <div className='w-full flex justify-center'>
            <div className='flex items-center bg-gray-100 rounded-full shadow-md px-4 py-2 w-3/4 max-w-3xl'>
              <input
                type='text'
                className='bg-gray-100 flex-grow text-xl outline-none'
                placeholder='What are you looking for?'
              />
              <button className='flex items-center justify-center text-white bg-[#e8998d] rounded-full h-10 w-10'>
                <Image src='/search.svg' alt='search-icon' width={24} height={24} />
              </button>
            </div>
          </div>

          {/* Feature Buttons */}
          <div className='text-center'>
            <p className='text-gray-500 text-lg'>Get started by choosing which features apply to you:</p>
            <div className='flex flex-wrap justify-center gap-4 mt-6'>
              {features.map((feature) => (
                <button
                  key={feature}
                  onClick={() => handleButtonClick(feature)}
                  className='bg-gray-200 hover:bg-[#e8998d] text-black py-2 px-4 rounded-full shadow-md text-lg'
                >
                  {feature}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
