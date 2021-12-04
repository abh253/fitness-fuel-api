import React, { useContext } from "react";
import Article from "./components/Article";
import Navbar from './components/Navbar'
import Banner from './components/Banner'

function App() {
  return (
    <>
      <Navbar />

      <Banner />
      <Article />

    </>
  );
}

export default App;
