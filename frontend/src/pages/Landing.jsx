import React from 'react'
import { Link } from 'react-router-dom'

const Landing = () => {
    React.useEffect(() => {
        document.title = 'Home | Fuel Credit'
    }, [])

    return (
        <div className='flex flex-col h-screen justify-center items-center text-black dark:text-white'>
            <h1 className='font-semibold text-4xl sm:text-[12px] text-center'>Welcome to Fuel Credit</h1>
            <div className='flex xs:flex-col xs:space-y-2 sm:space-x-1 py-3'>
                <Link to={'/signup'} className='py-2 px-4 bg-blue-700 text-white text-[12px] w-36 text-center'>Sign up an account</Link>
                <Link to={'/signin'} className='py-2 px-4 bg-green-700 text-white text-[12px] w-36 text-center'>Sign In</Link>
            </div>
        </div>
    )
}

export default Landing
