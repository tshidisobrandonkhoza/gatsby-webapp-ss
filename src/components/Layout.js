import React from 'react'
import Navbar from './Navbar'
import Footerbar from './Footerbar'
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
