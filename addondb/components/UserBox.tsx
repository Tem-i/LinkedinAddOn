import React from 'react'
import { useRouter } from 'next/navigation'

const UserBox = () => {
    const router = useRouter()
  return (
    <div>
        <div className='flex flex-col items-center bg-white border rounded-lg p-4 w-48'>
            {/* Profile Picture */}
            <div className='flex items-center justify-center w-24 h-24 bg-black rounded-full '></div>

            {/* Text Information  */}
            <div className='text-center space-y-1'>
                <p className='font bold text-lg text-black'>Student Name</p>
                <p className='text-gray-600'>Location</p>
                <p className='text-gray-600'>Company/Major</p>
            </div>

            <button 
                className='mt-6 px-4 py-2 bg-white border border-black text-black rounded-lg hover:bg-gray-100 '
                onClick={
                    () => {
                        router.push('/website/userprofile')
                    }
                }>
                View Profile
            </button>
        </div>
    </div>
  )
}

export default UserBox