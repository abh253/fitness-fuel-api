import React, { useContext } from 'react'
import { AppContext } from '../Context'

const SubCategories = () => {
    const { subCats } = useContext(AppContext);
    return (
        <section className='container mt-4 align-content-center' >
            <h2>Sub-categories</h2>
            <div className='row justify-content-around'>
                {
                    subCats.map((single) => {
                        return <p className='pop-categories pop-sub-categories mx-4' key={single.id}><span>{single.name}</span></p>
                    })
                }
            </div>



        </section>
    )
}

export default SubCategories
