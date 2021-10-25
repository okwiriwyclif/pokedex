import React from 'react'
import Head  from 'next/Head'
import { Navbar } from './Navbar'
import Footer from './Footer'
// import { useState } from 'react'
import usePersistedState from 'use-persisted-state-hook'



const Layout = ({title,children}) => {

    const [darkMode,setDarkMode]=usePersistedState(true)

    return (
        <div className={darkMode?'dark':''}>
        <div className="w-full min-h-screen text-gray-900 dark:bg-gray-900 dark:text-gray-200" >
            <Head>
                <title>
                    {title}
                </title>
            </Head>

            <Navbar darkMode={darkMode} setDarkMode={setDarkMode}></Navbar>

            <main className="min-h-screen" >
                {children}
            </main>

            <Footer></Footer>

            
        </div>
        </div>
    )
}

export default Layout