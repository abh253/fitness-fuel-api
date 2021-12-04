import React, { useEffect, useState } from 'react'
import local_data from './data'

const apiLink = 'https://dev-api.fitnessfuel360.com/app/home?format=json';
const axios = require('axios');

const AppContext = React.createContext();
const AppProvider = ({ children }) => {
    const [loading,setLoading]=useState(true);
    const [banner, setBanner] = useState([]);
    const [article, setArticle] = useState([]);
    const [popCats, setPopCats] = useState([]);
    const [stockClr, setStockClr] = useState([]);
    const [subCats, setSubCats] = useState([]);
    const [popBrands,setPopBrands]=useState([]);
    const [mostViewed,setMostViewed]=useState([]);
    const fetchData = async () => {
        try {
            // const response = await fetch(apiLink);  
            // const apiData = await response.json();
            // console.log(local_data.sections);
            const apiData=local_data;
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
            setPopBrands(newPopBrands.items);

            const newMostViewed = sections.find((single) => {
                return single.key === 'Most Viewed';
            });
            setMostViewed(newMostViewed.items);
            setLoading(false);

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
            stockClr,
            subCats,
            popBrands,
            mostViewed,
            loading

        }}>
            {children}
        </AppContext.Provider>
    )
}

export { AppContext, AppProvider }
