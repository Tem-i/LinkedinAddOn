import React, {useState} from 'react'
import {FormControlLabel, Switch} from '@mui/material'
import Searchbar from './searchbar'
import UserBox from './UserBox'

const CommunityPanel = () => {
    const [isDisplayChecked, setIsDisplayChecked] = useState(false)
  return (
    <div>
        <div className='bg-[#dedede] h-dvh  '>
            {/* <div className='flex-row w-full h-dvh'>
                <div className='flex flex-col w-full h-dvh bg-[#dedede] space-y-4 p-4 '>
                    <div className='flex items-center space-x-4'>
                        <Searchbar />
                        
                        <FormControlLabel control={<Switch checked={isDisplayChecked} onChange={(e) => setIsDisplayChecked(e.target.checked)} />} label='Display' sx={{
                            '& .MuiFormControlLabel-label' : {
                                color: 'black',
                            },
                        }} 
                        />
                        <div className='flex text-4xl text-black'>
                            My Connections
                        </div>
                    </div>
                    <div className='flex'>
                        <div className='bg-[#d2a8a8] p-4 rounded-lg text-black ' >
                            Suggested for you
                            <div className='flex space-x-2 '>
                                <UserBox />
                                <UserBox />
                                <UserBox />
                            </div>
                        </div>
                    </div>
                    <div className='flex space-x-2'>
                        <UserBox />
                        <UserBox />
                        <UserBox />
                    </div>
                </div>
            </div> */}
            <div className='flex flex-col'>

                <div className='flex  bg-[#dedede] spacey-y-4 p-4'>
                    <div className='flex items-center space-x-4'>
                        <Searchbar />
                        
                        <FormControlLabel control={<Switch checked={isDisplayChecked} onChange={(e) => setIsDisplayChecked(e.target.checked)} />} label='Display' sx={{
                            '& .MuiFormControlLabel-label' : {
                                color: 'black',
                            },
                        }} 
                        />
                        <div className='flex text-4xl text-black'>
                            My Connections
                        </div>
                    </div>
                </div>
                <div className='flex flex-row'>
                    <div className='flex flex-col'>
                        <div className='flex-col bg-[#d2a8a8] p-4 rounded-2xl text-black'>
                            <div>
                                Suggested Connections
                            </div>
                            <div className='flex space-x-4'>
                                <UserBox />
                                <UserBox />
                                <UserBox />
                                <UserBox />
                                <UserBox />
                            </div>
                        </div>
                        <div className='flex space-x-2 p-4'>
                            <UserBox />
                            <UserBox />
                            <UserBox />
                            <UserBox />
                            <UserBox />
                        </div>
                    </div>
                    <div className='flex flex-col justify-start items-center'>
                        <div className='p-4 text-2xl font-bold rounded-lg text-black'>
                            Total Connections ____
                        </div>
                        <button className='p-4 rounded-full bg-white text-black font-bold'>
                            Invite!
                        </button>
                    </div>  
                </div>
            </div>
        </div>
    </div>
  )
}

export default CommunityPanel