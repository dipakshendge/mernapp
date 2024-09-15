import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import { Home } from './pages/Home/home';
import { About } from './pages/About/about';
import { Servieces } from './pages/Services/Services';
import { Login } from './pages/Login/login';
import { Register } from './pages/Register/register';
import { Contact } from './pages/Contact/contact';
import { Navbar } from './components/Navbar/Navbar';
import { Error } from './pages/Error/error';
import { Footer } from './components/Footer/footer';
import { Logout } from './pages/Logout/logout';
import { AdminLayout } from './components/Layout/admin_Layout';
import { AdminUsers } from './pages/Admin/admin_users';
import { AdminContacts } from './pages/Admin/admin_contacts';

function App() {
 
  return (
    <>
      <BrowserRouter>
        <Navbar />
       
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/contact' element={<Contact />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/services' element={<Servieces />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/register' element={<Register />}/>
          <Route path='logout' element={<Logout />} />
          <Route path='/*' element={<Error />}/>
          <Route path='/admin' element={<AdminLayout />}>
            <Route path='users' element={<AdminUsers />} />
            <Route path='contacts' element={<AdminContacts />} />
          </Route>
        </Routes>

        <Footer />
      </BrowserRouter> 
    </>
  )
}

export default App
