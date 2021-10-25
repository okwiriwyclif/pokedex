import React from 'react'
import Link from 'next/link'

export const PokemonList = ({pokemon}) => {

    

    if(!pokemon.length){
        return (
          <div className="p-16 text-center">'Loading...'</div>  
            )
    }
    return (
        
        <div className="flex flex-wrap w-full p-2 ">

            { pokemon.map((pokeman,index)=>{

            let id=index+1;

            return ( 

            <Link key={id}  href={'/pokeman?id='+ id}>
                <a className="flex flex-col items-center w-1/2 lg:w-1/4 p-4">

                    <div className="imagewrapper drop-shadow-sm p-2 bg-gray-100 rounded-lg w-full">
                        <img className="w-full " src={pokeman.image} alt={pokeman.name} />
                    </div>

                    <div className="font-bold font-2xl p-2 capitalize">
                        <span className="mr-1">
                            {index + 1}.
                        </span>
                        <span>
                            {pokeman.name}
                        </span>
                    </div>

                </a>
                </Link>
            )
            })}
            
        </div>
    )
}
