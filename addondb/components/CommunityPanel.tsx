import React, {useState, useEffect} from 'react'
import {FormControlLabel, Switch} from '@mui/material'
import Searchbar from './searchbar'
import UserBox from './UserBox'

interface Profile {
    _id: string
    full_name: string
    occupation: string
    location: string
}

const CommunityPanel: React.FC = () => {
    const [isDisplayChecked, setIsDisplayChecked] = useState(false)
    const [suggestedProfiles, setSuggestedProfiles] = useState<Profile[]>([])
    const [searchResults, setSearchResults] = useState<Profile[]>([])

    const handleSearch = async (query: string) => {
        if(!query){
            setSearchResults([])
            return
        }

        try {
            const response = await fetch(`/api/search?query=${encodeURIComponent(query)}`)
            const data: Profile[] = await response.json()
            setSearchResults(data)
        } catch (error) {
            console.error('Error performing search:',error)
        }
    }

    useEffect(() => {
        const fetchProfiles = async () => {
            try {
                const response = await fetch('/api/profiles')
                const data: Profile[] = await response.json()
                setSuggestedProfiles(data.slice(0,5))
            } catch (error) {
                console.error('Error fetching suggested profiles', error)
            }
        }

        fetchProfiles()

    }, [])

  return (
    <div>
        <div className='bg-[#dedede] h-dvh  '>
            <div className='flex flex-col'>

                <div className='flex  bg-[#dedede] spacey-y-4 p-4'>
                    <div className='flex items-center space-x-4'>
                        <Searchbar onSearch={handleSearch} />
                        
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
                               {suggestedProfiles.map((profile) => (
                                <UserBox key={profile._id} profile={profile} />
                               ))}
                            </div>
                        </div>
                        <div className='flex space-x-2 p-4'>
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