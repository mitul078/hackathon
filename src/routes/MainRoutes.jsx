import React, { lazy, Suspense } from 'react'
import { Routes ,  Route } from 'react-router-dom'
import Loading from '../component/Loading'
const Home = lazy(() => import("../pages/Home"))
const Models = lazy(() => import("../pages/Models"))
const Company = lazy(() => import("../pages/Company"))
const Service = lazy(() => import("../pages/Service"))

const MainRoutes = () => {
    return (
        <>
            <Suspense fallback={<Loading />}>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/models' element={<Models />} />
                    <Route path='/service' element={<Service />} />
                    <Route path='/company' element={<Company />} />
                </Routes>
            </Suspense>
        </>
    )
}

export default MainRoutes
