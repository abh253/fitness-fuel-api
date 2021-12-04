import React, { useContext } from "react";
import Article from "./components/Article";
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import PopCats from "./components/PopCats";
import StockClearance from "./components/StockClearance";
import Loading from './components/Loading'
import { AppContext } from "./Context";
import SubCategories from "./components/SubCategories";
import PopBrands from "./components/PopBrands";
import MostViewed from "./components/MostViewed";

function App() {
  const {loading}=useContext(AppContext);
  if(loading){
    return <Loading/>
  }
  return (
    <>
      <Navbar />
      <Banner />
      <Article />
      <PopCats/>
      <StockClearance/>
      <SubCategories/>
      <PopBrands/>
      <MostViewed/>
    </>
  );
}

export default App;
