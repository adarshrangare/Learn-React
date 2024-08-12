import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import RootLayout from './layouts/RootLayout'
import About from './pages/About'
import SignUp from './pages/SignUp'
import Login, { loginAction } from './pages/Login'
import Home from './pages/Home'


const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element = {<RootLayout/>} >
      
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/signup' element={<SignUp/>} />
      <Route path='/login' element={<Login/>} action={loginAction}/>
  </Route>
))


const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App