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
// import online and offline for detecting if user is online/offline
import { Online, Offline } from "react-detect-offline";
// Image that we will use when offline
let logoOffline = require("./icons8-portrait-mode-female-100.png");

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

      {/* our offline section */}
      <div className="App-header">
        <Offline>
          <div className="container  text-center">
            <div className="col-12">
              <img
                src={logoOffline}
                alt="Connect to internet"
                height="170"
                width="170"
              />
              <h1 className="fs-sm-4 fs-lg-1">Connect to the Internet</h1>
              <p>You're offline. Check your connection.</p>
              <form>
                <button
                  type="submit"
                  className="btn  border-outline-secondary text-white fw-bold "
                  style={{ backgroundColor: "rgb(233, 15, 113)" }}
                >
                  Retry
                </button>
              </form>
            </div>
          </div>
        </Offline>
      </div>

      {/* when online Route through these */}
      <Online>
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
        </Routes>
      </Online>

      {/* Our default component very last footer in here */}
      <Footer />

      {/* copyright section in here */}
      <CopyRight />
    </div>
  );
}

export default App;
