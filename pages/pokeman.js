import React from 'react'
import { useRouter } from 'next/router'
import Pokeman from '../components/Pokeman';

const pokeman = ({pokeman}) => {
    const router= useRouter();
    return (
        <div className="maxwidthwrapper p-2 lg:py-4">
            <div className="flex   p-2 mn-2">

                

                <button className="border shadow-sm flex items-center text-sm rounded-xl mb-1 p-2 pb-2 px-4 " onClick={()=>router.back()} >
                    <div className="mr-1">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="-5 -5 24 24" width="18" height="18" fill="currentColor"><path d="m3.414 7.657 3.95 3.95A1 1 0 0 1 5.95 13.02L.293 7.364a.997.997 0 0 1 0-1.414L5.95.293a1 1 0 1 1 1.414 1.414l-3.95 3.95H13a1 1 0 0 1 0 2H3.414z"/></svg>
                    </div>
                   
                    back
                </button>
            </div>

            <div className="flex  h-5/6 w-full items-center justify-center p-4">
                <Pokeman pokeman={pokeman}></Pokeman>
            </div>

        </div>
    )
}


export async function getServerSideProps({query}){

    const id =query.id;

    try {
        
        const url=`https://pokeapi.co/api/v2/pokemon/${id}`

        const res=await fetch(url);

        const pokeman=await res.json();

        const paddedIndex=("00"+(id)).slice(-3);

        pokeman.image=`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${paddedIndex}.png`;


        return {
            props:{
                pokeman
            }
        }

    } catch (error) {

        console.log(error)

    }
}

export default pokeman
