import React from 'react'
import { Route, Routes } from 'react-router-dom'


import HeaderNav from '../components/header/HeaderNav'


export default function BasePage() {
  return (
    <Routes>
            <Route index element={<HeaderNav/>} />
            <Route path='/koleksi-buku' element={<HeaderNav/>} />
            <Route path='/data-peminjaman' element={<HeaderNav/>} />
            <Route path='/formPinjam' element={<HeaderNav/>}/>
            {/* <Route path='/logout' element={<Login/>} /> */}
            
            
        </Routes>
  )
}