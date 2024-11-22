import React, {useState} from 'react'
import Searchbar from './searchbar'
import {FormControlLabel, Switch} from '@mui/material'
import User from './user'
import UserBox from './UserBox'

const MainPanel = () => {
    const [isDisplayChecked, setIsDisplayChecked] = useState(false)

  return (
    <div>
        <div className='flex-grow flex flex-col w-full h-full bg-[#dedede] space-y-4 p-4'>
            <div className='flex items-center space-x-4'>
                <Searchbar />
                
                <FormControlLabel control={<Switch checked={isDisplayChecked} onChange={(e) => setIsDisplayChecked(e.target.checked)} />} label='Display' sx={{
                    '& .MuiFormControlLabel-label' : {
                        color: 'black',
                    },
                }} 
                />
                
            </div>
            <div className='bg-[#f17c4a]/25 w-full h-[37px]'>
                <div className='flex space-x-4'>
                    <div className="text-black text-base font-['Red Hat Mono']">name</div>
                    <div className="text-black text-base font-['Red Hat Mono']">status</div>
                    <div className="text-black text-base font-['Red Hat Mono']">location</div>
                </div>
            </div>

            {/* conditional redner  */}
            {isDisplayChecked ? (<div className='bg-white/25 w-full h-[654x] p-4'>                      
                <User />
                <User />
                <User />
            </div>) : (<div className='bg-white/25 w-full h-[654x] p-4 flex flex-row'>                      
                <UserBox />
                <UserBox />
                <UserBox />
            </div>)}
            {/* // <div className='bg-white/25 w-full h-[654x] p-4'>                      
            //     <User />
            //     <User />
            //     <User />
            // </div> */}

            {/* <div className='bg-white/25 w-full h-[654x] p-4'>                      
                <UserBox />
                <UserBox />
                <UserBox />
            </div> */}
        </div>
    </div>
  )
}

export default MainPanel