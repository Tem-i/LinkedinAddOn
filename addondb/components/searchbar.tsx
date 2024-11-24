import React from 'react'
import { useState } from 'react'

function Searchbar() {
    const [inputValue, setInputValue] = useState('')
    const [showFilter, setShowFilter] = useState(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value)
    }

    const toggleFilterPopup = () => {

        setShowFilter((prev) => !prev)
    }

  return (
    <div>
        <div className='flex items-center w-[651px] h-[42px] bg-[#f4f4f4] rounded-[15px] p-2 space-x-2'>
      {/* Search Input */}
      <input 
          className='flex-grow bg-transparent outline-none text-sm px-4 text-black'
          type='text'
          placeholder='Search...'
          value={inputValue}
          onChange={handleChange}
      />  

      {/* Filter Button */}
      <button 
          onClick={toggleFilterPopup} 
          className='bg-[#D9D9D9] text-white px-4 py-1 rounded-md hover:bg-[#C6C4C4]'>
         
        

        <svg

            xmlns = "http://www.w3.org/2000/svg"
            fill = "none"
            viewBox = "0 0 24 24"
            strokeWidth = {2}
            stroke= "currentColor"
            className="w-6 h-6"
        >

            <path
                strokeLinecap="round"
                strokeLinejoin = "round"
                d="M4 6h16M6 12h12m-7 6h4"
            />
        </svg>
      </button>
    </div>

   {/* Filter Popup */}
{showFilter && (
    <div className='absolute top-[50px] right-0 w-[300px] bg-white shadow-lg rounded-md border p-4 z-10'>
        {/* Filter Title and Status Dropdown */}
        <div className="w-[296px] h-[623px] relative">
            <div className="w-[294px] h-[100px] left-[2px] top-0 absolute">
                <div className="w-[195.30px] h-[25px] left-0 top-[8px] absolute text-black text-2xl font-light font-['Red Hat Mono']">Students</div>
                <div className="w-[73.24px] h-5 left-[14.27px] top-[80px] absolute">
                    <div className="w-[21.36px] h-5 left-0 top-0 absolute bg-[#d9d9d9]" />
                    <div className="w-[39.67px] left-[33.57px] top-[3px] absolute text-black text-[13px] font-light font-['Inconsolata']">Alumni</div>
                </div>
                <div className="w-[93.58px] h-5 left-[14.27px] top-[44px] absolute">
                    <div className="w-[21.36px] h-5 left-0 top-0 absolute bg-[#d9d9d9]" />
                    <div className="w-[60.01px] left-[33.57px] top-[3px] absolute text-black text-[13px] font-light font-['Inconsolata']">Undergrad</div>
                </div>
                <div className="w-[84.43px] h-5 left-[160.75px] top-[44px] absolute">
                    <div className="w-[21.36px] h-5 left-0 top-0 absolute bg-[#d9d9d9]" />
                    <div className="w-[52.89px] left-[31.53px] top-[3px] absolute text-black text-[13px] font-light font-['Inconsolata']">Graduate</div>
                </div>
            </div>
            
            {/* Location Section */}
            <div className="w-[296px] h-[125px] left-0 top-[113px] absolute">
                <div className="w-[195.30px] h-[25px] left-0 top-[4px] absolute text-black text-2xl font-light font-['Red Hat Mono']">Location</div>
                <div className="w-[137.32px] h-5 left-[16.27px] top-[44px] absolute">
                    <div className="w-[21.36px] h-5 left-0 top-0 absolute bg-[#d9d9d9]" />
                    <div className="w-[112.91px] left-[24.41px] top-[3px] absolute text-black text-[13px] font-extrabold font-['Inconsolata']">San Francisco, CA</div>
                </div>
                <div className="w-[103.75px] h-5 left-[16.27px] top-[75px] absolute">
                    <div className="w-[21.36px] h-5 left-0 top-0 absolute bg-[#d9d9d9]" />
                    <div className="w-[79.34px] left-[24.41px] top-[3px] absolute text-black text-[13px] font-extrabold font-['Inconsolata']">New York, NY</div>
                </div>
                <div className="w-[130.20px] h-5 left-[16.27px] top-[105px] absolute">
                    <div className="w-[21.36px] h-5 left-0 top-0 absolute bg-[#d9d9d9]" />
                    <div className="w-[105.79px] left-[24.41px] top-[3px] absolute text-black text-[13px] font-extrabold font-['Inconsolata']">Philadelphia, PA</div>
                </div>
                <div className="w-[91.55px] h-5 left-[162.75px] top-[75px] absolute">
                    <div className="w-[21.36px] h-5 left-0 top-0 absolute bg-[#d9d9d9]" />
                    <div className="w-[66.12px] left-[25.43px] top-[4px] absolute text-black text-[13px] font-extrabold font-['Inconsolata']">Austin, TX</div>
                </div>
                <div className="w-[120.03px] h-5 left-[162.75px] top-[105px] absolute">
                    <div className="w-[21.36px] h-5 left-0 top-0 absolute bg-[#d9d9d9]" />
                    <div className="w-[39.67px] left-[25.43px] top-[3px] absolute text-black text-[13px] font-extrabold font-['Inconsolata']">Other: </div>
                    <div className="w-[49.85px] h-[0px] left-[70.18px] top-[14.50px] absolute border border-black"></div>
                </div>
                <div className="w-[98.67px] h-5 left-[162.75px] top-[44px] absolute">
                    <div className="w-[21.36px] h-5 left-0 top-0 absolute bg-[#d9d9d9]" />
                    <div className="w-[73.24px] left-[25.43px] top-[3px] absolute text-black text-[13px] font-extrabold font-['Inconsolata']">Seattle, WA</div>
                </div>
            </div>

            {/* Industry Section */}
            <div className="w-[296px] h-[166px] left-0 top-[248px] absolute">
                <div className="w-[195.30px] h-[25px] left-0 top-0 absolute text-black text-2xl font-light font-['Red Hat Mono']">Industry</div>
                <div className="w-[137.32px] h-[123px] left-[16.27px] top-[43px] absolute">
                    <div className="w-[21.36px] h-5 left-0 top-[1px] absolute bg-[#d9d9d9]" />
                    <div className="w-[21.36px] h-5 left-0 top-[35px] absolute bg-[#d9d9d9]" />
                    <div className="w-[21.36px] h-5 left-0 top-[69px] absolute bg-[#d9d9d9]" />
                    <div className="w-[21.36px] h-5 left-0 top-[103px] absolute bg-[#d9d9d9]" />
                    <div className="w-[21.36px] h-5 left-[115.96px] top-0 absolute bg-[#d9d9d9]" />
                    <div className="w-[21.36px] h-5 left-[115.96px] top-[34px] absolute bg-[#d9d9d9]" />
                    <div className="w-[21.36px] h-5 left-[115.96px] top-[68px] absolute bg-[#d9d9d9]" />
                    <div className="w-[21.36px] h-5 left-[115.96px] top-[102px] absolute bg-[#d9d9d9]" />
                </div>
            </div>

            {/* Company Section */}
            <div className="w-[296px] h-[33px] left-0 top-[424px] absolute">
                <div className="w-[196.65px] h-[25px] left-0 top-0 absolute text-black text-2xl font-light font-['Red Hat Mono']">Company</div>
            </div>

            {/* Apply Filters Button */}
            <div className = "absolute bottom-4 left-0 w-full text-center">
                <button 
                    onClick={toggleFilterPopup} 
                    className='bg-green-500 text-white w-full py-2 rounded-md hover:bg-green-600'>
                    Apply Filters
                </button>
            </div>
        </div>
    </div>
)}





    </div>
  )
}

export default Searchbar