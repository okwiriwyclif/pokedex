import React from 'react'
import Head  from 'next/Head'


const Layout = ({title,children}) => {
    return (
        <div className="w-full min-h-screen bg-gray-900 text-gray-200">
            <Head>
                <title>
                    {title}
                </title>
            </Head>

            <div className="text-center  text-3xl p-5 w-full bg-gray-900 sticky top-0 border-gray-700 border-b  ">
              <a className="font-bold" >Pokedex</a>  
            </div>

            <main >
                {children}
            </main>

            
        </div>
    )
}

export default Layout