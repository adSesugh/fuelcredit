import React, { Suspense } from 'react'
import { RouterProvider } from 'react-router-dom'
import routers from './routes'

const App = () => <Suspense>
    <RouterProvider router={routers} />
</Suspense>

export default App