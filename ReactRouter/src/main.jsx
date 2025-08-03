import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import Layout from './Layout.jsx'
import User from './components/User/User.jsx'
import GithubUser, { githubUserInfo } from './components/User/GithubUser.jsx'

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element= {<Layout/>}>
    <Route path='' element= {<Home/>}/>
    <Route path='about' element= {<About/>}/>
    <Route path='contact' element= {<Contact/>}/>
    <Route path='user/:userid' element= {<User/>}/>
    <Route loader = {githubUserInfo}
    path='github' element= {<GithubUser/>}/>
  </Route>
))

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
