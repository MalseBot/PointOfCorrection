import React from 'react'
import ReactDOMClient from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import {
  NavBar,
  Footer,
  About,
  Home,
  Cart,
  Account,
  Sign,
  Contact,
  Shop,
} from './Components'
import 'bootstrap'
const root = ReactDOMClient.createRoot(document.getElementById('root'))
root.render(
  <div className='bg-info'>
  <Router >
    <NavBar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about.jsx' element={<About />} />
      <Route path='/Account.jsx' element={<Account />} />
      <Route path='/Cart.jsx' element={<Cart />} />
      <Route path='/Shop.jsx' element={<Shop />} />
      <Route path='/Sign.jsx' element={<Sign />} />
      <Route path='/Contact.jsx' element={<Contact />} />
    </Routes>
    <Footer />
  </Router>
  </div>
)
