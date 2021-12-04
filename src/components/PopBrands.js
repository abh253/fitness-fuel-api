import React, { useContext } from 'react'
import { AppContext } from '../Context'

const PopBrands = () => {
    const { popBrands } = useContext(AppContext);
    return (
        <section className='container mt-4 align-content-center' >
            <h2>Popular Brands</h2>
            <div className='row justify-content-around'>
                {
                    popBrands.map((single) => {
                        return <p className='pop-categories pop-brand-categories mx-4' key={single.id}><span>{single.name}</span></p>
                    })
                }
            </div>



        </section>
    )
}

export default PopBrands
