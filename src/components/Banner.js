import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../Context'
const Banner = () => {
    const {banner}=useContext(AppContext);
    return (
        <div style={{height:'35vw', overflow:'hidden'}}>
            {
                banner.map((single,index)=>{
                    return <img src={single.url} key={index} className="" style={{width:'100%',height:'100%'}} alt={single.firebase.name}></img>
                })
            }
        </div>
    )
}

export default Banner
