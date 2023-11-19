import React from 'react'
import Navbar from './Navbar'
import Footerbar from './Footerbar'

// import '../styles/global.css'

import '../styles/global.scss'
function Layout({ children }) {
    return (
        <div className='layout'>
            <Navbar></Navbar>
            <div className='content'>
                {children}
            </div>
            <Footerbar></Footerbar>
        </div>
    )
}

export default Layout
