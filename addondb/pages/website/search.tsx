import React from 'react'
import Head from 'next/head'

const home = () => {
  return (

    <div className='flex flex-col h-screen'>
        <Head>
            <title>Alumni Search</title>
        </Head>
        {/*Header*/}
        <header className='flex justify-between items-center px-4 py-2 bg-amber-300'>
            <div className='font-bold'>Logo</div>
            <div className='text-xl font-bold rext-red-600'>RPI</div>
        </header>

        {/* Sidebar */}
        <aside className='flex flex-col items-center w-16 bg-orange-500 py-4 space-y-4'>
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

        </main>
    </div>
  )
}

export default home