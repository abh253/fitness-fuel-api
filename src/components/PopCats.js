import React, { useContext } from 'react'
import { AppContext } from '../Context'

const PopCats = () => {
    const { popCats } = useContext(AppContext);
    return (
        <section className='container mt-4 align-content-center' >
            <h2>Popular Categories</h2>
            <div className='row justify-content-around'>
                {
                    popCats.map((single) => {
                        return <p className='pop-categories mx-4' key={single.id}><span>{single.name}</span></p>
                    })
                }
            </div>



        </section>
    )
}

export default PopCats
