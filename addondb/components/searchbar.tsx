import React from 'react'
import { useState } from 'react'

function Searchbar() {
    const [inputValue, setInputValue] = useState('')

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value)
    }

  return (
    <div>
        <div className='w-[651px] h-[42px] bg-[#f4f4f4] rounded-[15px] p-2'>
            <input 
                className='w-full h-full bg-transparent outline-none text-sm px-4 text-black'
                type='text'
                placeholder='Search...'
                value={inputValue}
                onChange={handleChange}
            />     
        </div>
    </div>
  )
}

export default Searchbar