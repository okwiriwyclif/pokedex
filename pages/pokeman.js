import React from 'react'
import { useRouter } from 'next/router'

const pokeman = () => {
    const router= useRouter();
    return (
        <div className="maxwidthwrapper">
            <div className="flex  justify-end p-2 mn-2">
                <button className="border text-sm rounded-3xl mb-1 p-1 px-4 border-gray-200" onClick={()=>router.back()} >back</button>
            </div>

            <div className="flex  h-5/6 w-full items-center justify-center p-4">
                pokeman
            </div>

        </div>
    )
}

export default pokeman
