import React, { useEffect } from 'react'
import API from '../util/API'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
    const navigate = useNavigate()
    const user = window.localStorage.getItem('user');

    useEffect(() => {
    }, [])

    const logout = async () => {
        return await API.post('/logout')
            .then((res) => {
                if(res.status === 200){
                    window.localStorage.clear()
                    navigate('/')
                }
            }).catch((err) => {
                console.log(err)
            })
    }
    return (
        <div className='flex flex-col h-screen justify-center items-center'>
            <h4>Welcome {user && user}</h4>
            <button onClick={logout} className='my-4 py-1 bg-yellow-500 px-4'>Logout</button>
        </div>
    )
}

export default Dashboard
