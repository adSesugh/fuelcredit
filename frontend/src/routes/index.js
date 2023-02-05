
import React from 'react'
const { createBrowserRouter, createRoutesFromElements, Route } = require("react-router-dom")

const Landing = React.lazy(() => import('../pages/Landing'))
const SignIn = React.lazy(() => import('../pages/auth/SignIn'))
const SignUp = React.lazy(() => import('../pages/auth/SignUp'))
const ErrorPage = React.lazy(() => import('../pages/ErrorPage'))
const Dashboard = React.lazy(() => import('../pages/Dashboard'))

const routers = createBrowserRouter(createRoutesFromElements(
    <>
        <Route path="/" element={<Landing />} />
        <Route path='signin' element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
        <Route path='dashboard' element={<Dashboard />} />
        <Route path='*' element={<ErrorPage />} />
    </>
))

export default routers