import React from 'react'

const Pokeman = ({pokeman}) => {

    if(!pokeman){
        return (
            <div>
                loading...
            </div>
        )
    }
    return (
        <div className="flex flex-wrap lg:w-3/4">

            <div className="imagewrapper w-full mb-2 lg:w-1/2 p-4 rounded-2xl bg-gray-200 flex items-center justify-center py-24  ">
                <img src={pokeman.image} alt={pokeman.name} />
            </div>

            <div className="info  p-2 lg:px-4 lg:w-1/2 ">
                <div>
                    <div className="name capitalize bold font-bold text-2xl">
                    <span>{pokeman.id}.</span>  {pokeman.name}
                    </div>
                </div>

                <div className="py-4 ">
                    <div>
                        Moves:
                    </div>
                    <div className="flex flex-wrap">
                    {
                        
                        pokeman.moves.slice(0,12).map(({move},index)=>(
                            
                            <div key={index+1} className="text-sm p-2 px-3 rounded-3xl bg-gray-200 mr-1 mt-2 text-gray-600 ">
                                {move.name}
                            </div>
                        ))
                    }
                    </div>
                </div>
            </div>

        </div>
    )
}


export default Pokeman
