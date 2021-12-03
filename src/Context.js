import React, { useEffect,useState } from 'react'
const apiLink='https://dev-api.fitnessfuel360.com/app/home?format=json';

const AppContext=React.createContext();
const AppProvider = ({children}) => {
    const [banner,setBanner]=useState([]);
    const [article,setArticle]=useState([]);
    const [popCats,setPopCats]=useState([]);
    const [stockClr,setStockClr]=useState([]);


    const fetchData=async ()=>{
        try{
            const response=await fetch(apiLink);
            const apiData=await response.json();
            const {sections}=apiData;
            
            const newBanner=sections.find((single)=>{
                return single.key==='banner';
            })
            setBanner(newBanner.items);

            const newArticle=sections.find((single)=>{
                return single.item_type==='article';
            });
            setArticle(newArticle.items);

            const newPopCats=sections.find((single)=>{
                return single.key==='Pop_cats';
            })
            setPopCats(newPopCats.items);

            const newStockClr=sections.find((single)=>{
                return single.key==='Stock_Clearance';
            });
            setArticle(newStockClr.items);


            
        }catch(e){
            console.log(e);
        }
    }
    useEffect(() => {
        fetchData();
    }, [])

    return (
        <AppContext.Provider value={{
            article,
            banner,
            popCats,
            stockClr

        }}>
            {children}
        </AppContext.Provider>
    )
}

export {AppContext,AppProvider}
