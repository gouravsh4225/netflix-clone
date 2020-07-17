import React, { Fragment } from "react";
import Home from "./Components/Home/Home";
import Banner from "./Components/Banner/Banner";
import Nav from "./Components/Nav/Nav";

import requests from "./Services/RequestUrls";
import "./App.css";

function App() {
  return (
    <Fragment>
      <div className="app">
        <Nav />
        <Banner />
        <Home
          title="NETFLIX ORIGINALS"
          fetchUrl={requests.fetchNetflixOriginal}
          isLargeImage
        />
        <Home title="Trending Now" fetchUrl={requests.fetchTrending} />
        <Home title="Top Rated" fetchUrl={requests.fetchTopRated} />
        <Home title="Action Movies" fetchUrl={requests.fetchActionMovie} />
        <Home title="Comedy Movies" fetchUrl={requests.fetchComedyMovie} />
        <Home title="Horror Movies" fetchUrl={requests.fetchHorrorMovie} />
        <Home title="Romance Movies" fetchUrl={requests.fetchRomanceMovie} />
        <Home title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      </div>
    </Fragment>
  );
}

export default App;
