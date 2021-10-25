import 'tailwindcss/tailwind.css'

import  Layout  from '../components/Layout'
import { PokemonList } from '../components/PokemonList'

import React from 'react'

const Home = ({pokemon}) => {

  return (
  
      <div className="maxwidthwrapper" >
        

        <div className="py-4">
          <PokemonList pokemon={pokemon}/>
        </div>
       
      </div>
   
  )
}

export async function getStaticProps(context){

    try {

      const url='https://pokeapi.co/api/v2/pokemon?limit=150'

      const res=await fetch(url);

      const {results}=await res.json();

      const pokemon=results.map((result,index)=>{

          const paddedIndex=("00"+(index+1)).slice(-3);

          const image=`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${paddedIndex}.png`;

          return {
            ...result,image
          }
      });

      return {
        props:{pokemon}
      }

      
    } catch (error) {
      console.log(error)
    }

    return {
      props:{

      }
    }

}


export default Home