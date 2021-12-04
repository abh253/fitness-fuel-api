import React, { useEffect, useState } from 'react'
  const apiLink = '/app/home?format=json';
const axios = require('axios');

const AppContext = React.createContext();
const AppProvider = ({ children }) => {
    const [banner, setBanner] = useState([]);
    const [article, setArticle] = useState([]);
    const [popCats, setPopCats] = useState([]);
    const [stockClr, setStockClr] = useState([]);
    const [subCats, setSubCats] = useState([]);
    
    const fetchData = async () => {
        try {
            const response = await fetch(apiLink);  
            console.log(response);
            const apiData = await response.json();
            // const apiData = response.data;

            const { sections } = apiData;

            const newBanner = sections.find((single) => {
                return single.key === 'banner';
            })
            setBanner(newBanner.items);

            const newArticle = sections.find((single) => {
                return single.item_type === 'article';
            });
            setArticle(newArticle.items);

            const newPopCats = sections.find((single) => {
                return single.key === 'Pop_cats';
            })
            setPopCats(newPopCats.items);

            const newStockClr = sections.find((single) => {
                return single.key === 'Stock_Clearance';
            });
            setStockClr(newStockClr.items);

            const newSubCats = sections.find((single) => {
                return single.key === 'Pop_subcats';
            });
            setSubCats(newSubCats.items);

            const newPopBrands = sections.find((single) => {
                return single.key === 'Pop_brands';
            });


            const newMostViewed = sections.find((single) => {
                return single.key === 'Most Viewed';
            });


        } catch (e) {
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

export { AppContext, AppProvider }
