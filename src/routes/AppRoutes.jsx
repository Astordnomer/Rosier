import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Community from '../pages/Community'
import ContactUs from '../pages/ContactUs'
import OurStory from '../pages/OurStory'
import Shop from '../pages/Shop'
import Collection from '../pages/Collection'

function AppRoutes() {
  return (
    <Routes>
        <Route path='/'element={<Home />}/>
        <Route path='/community'element={<Community />}/>
        <Route path='/contactus'element={<ContactUs />}/>
        <Route path="/contact" element={<ContactUs />} />
        <Route path='/ourstory'element={<OurStory />}/>
        <Route path='/shop'element={<Shop />}/>
        <Route path='/collection/:category' element={<Collection />} />
    </Routes>
  )
}

export default AppRoutes