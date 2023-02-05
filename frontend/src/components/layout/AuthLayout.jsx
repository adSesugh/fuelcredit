import React from 'react'

const AuthLayout = ({ children }) => {
    return (
        <div className='flex h-screen justify-center items-center'>
            <div className='flex w-1/2 xs:hidden h-full'>
                <div className='flex justify-center items-center from-violet-900 to-green-500 bg-purple-700 w-full'>
                    <h6 className='text-4xl text-white'>Fuel Credit</h6>
                </div>
            </div>
            <div className='flex w-1/2 xs:w-full h-full justify-center items-center'>
                {children}
            </div>
        </div>
    )
}

export default AuthLayout
