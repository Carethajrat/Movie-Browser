// import necessary stuff first
import React from "react";
// import our css file
import "./App.css";
// import our components which we will be displaying/rendering using Router
// using rect-router-dom
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import AboutView from "./Components/AboutView";
import SearchView from "./Components/SearchView";
import MovieView from "./Components/MovieView";
import ContactView from "./Components/ContactView";
import Footer from "./Components/Footer";
import CopyRight from "./Components/CopyRight";
// our rect hooks in here
import { useState, useEffect } from "react";
import PageNotFound from "./Components/PageNotFound";

function App() {
  // using react hooks in here to initialize our whether SearchText,
  // checking if data is there as in available and our result as an array,
  // starting with an empty array
  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [dataThere, setDataThere] = useState("false");

  useEffect(() => {
    // if there is any serachText make an API request for the particular title
    if (searchText) {
      fetch(`https://www.omdbapi.com/?s=${searchText}&apikey=da0212a5`)
        .then((response) => response.json())
        .then((data) => {
          // console log the data for developer reference 
          console.log(data, "is data");
          // set our empty array with the actual data
          setSearchResults(data.Search);
          setDataThere(true);
        });
    }
  }, [searchText]);

  return (
    <div className="App">
      {/* Our default component very first Navbar in here */}
      <Navbar
        searchText={searchText}
        setSearchText={setSearchText}
        searchResults={searchResults}
      />
      <div className="App-header">
        
      </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutView />} />
          <Route path="/contact" element={<ContactView />} />
          <Route
            path="/search"
            element={
              <SearchView
                keyword={searchText}
                searchResults={searchResults}
                dataThere={dataThere}
              />
            }
          />
          <Route path="/movies/:Title" element={<MovieView />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      {/* Our default component very last footer in here */}
      <Footer />

      {/* copyright section in here */}
      <CopyRight />
    </div>
  );
}

export default App;
