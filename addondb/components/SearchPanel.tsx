import React, {useState, useEffect} from 'react'
import Searchbar from './searchbar'
import {FormControlLabel, Switch, IconButton} from '@mui/material'
import User from './user'
import UserBox from './UserBox'
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';

interface Profile {
    _id: string
    full_name: string
    occupation: string
    location: string
}

const SearchPanel = () => {
    const [isDisplayChecked, setIsDisplayChecked] = useState(false)
    const [profiles, setProfiles] = useState<Profile[]>([])
    const [currentPage, setCurrentPage] = useState(0)
    const profilesPerPage = 10
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
            try{
                const response = await fetch('/api/allprofiles')
                const data: Profile[] = await response.json()
                setProfiles(data)
            } catch (error){
                console.error('Error fetching suggested profiles', error)
            }
        }
        fetchProfiles()
    }, [])

    const startIndex = currentPage * profilesPerPage
    const endIndex = startIndex + profilesPerPage
    // const displayedProfiles = profiles.slice(startIndex, endIndex)
    const displayedProfiles = (searchResults.length > 0 ? searchResults : profiles).slice(
        currentPage * profilesPerPage,
        currentPage * profilesPerPage + profilesPerPage
    )

    const handleNextPage = () => {
        if(endIndex < profiles.length){
            setCurrentPage(currentPage + 1)
        }
    }

    const handlePreviousPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1)
        }
    }

  return (
    <div >
        <div className='flex flex-col w-full h-dvh bg-[#dedede] space-y-4 p-4 overflow-auto '>
            <div className='flex items-center space-x-4'>
                <Searchbar onSearch={handleSearch} />
                
                <FormControlLabel control={<Switch checked={isDisplayChecked} onChange={(e) => setIsDisplayChecked(e.target.checked)} />} label='Display' sx={{
                    '& .MuiFormControlLabel-label' : {
                        color: 'black',
                    },
                }} 
                />

                {/* page buttons */}
                <div className='flex justify-between mt-4'>
                    <IconButton
                        onClick={handlePreviousPage}
                        disabled={currentPage === 0}
                        color='primary'
                        aria-label='previos page'
                        >
                            <ArrowBackIosNewRoundedIcon />
                    </IconButton>

                    <IconButton
                        onClick={handleNextPage}
                        disabled={endIndex >= profiles.length}
                        color='primary'
                        aria-label='next page'
                    >
                        <ArrowForwardIosRoundedIcon />
                    </IconButton>
                </div>
                
            </div>
            {isDisplayChecked && (<div className='bg-[#f17c4a]/25 w-full h-[37px]'>
                <div className='flex space-x-4'>
                    <div className="text-black text-base font-['Red Hat Mono']">name</div>
                    <div className="text-black text-base font-['Red Hat Mono']">status</div>
                    <div className="text-black text-base font-['Red Hat Mono']">location</div>
                </div>
            </div>)}

            {/* conditional redner  */}
            {isDisplayChecked ? (<div className='bg-white/25 w-full flex-grow p-4'>                      
                <User />
                <User />
                <User />
            </div>) : (<div className='bg-white/25 w-full flex-grow p-4 grid grid-cols-5 gap-1 max-w-screen-lg mx-auto '>                      
                {displayedProfiles.map((profiles) => (
                <UserBox key={profiles._id} profile={profiles} />
                ))}
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

export default SearchPanel