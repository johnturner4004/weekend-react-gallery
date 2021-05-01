import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";
import "./App.css";
import GalleryList from "../GalleryList/GalleryList.jsx";

function App() {
  // hook to store picture array which contains necessary info about the pictures
  const [pictureArray, setPictureArray] = useState();

  useEffect(() => {
    getPicture();
  }, []);

  // gets picture data from the server and stores it in pictureArray
  function getPicture() {
    axios
      .get("/gallery")
      .then((response) => {
        setPictureArray(response.data);
        console.log("got pictures from server", response);
      })
      .catch((error) => {
        console.log("unable to get pictures", error);
        alert("unable to get pictures from server");
      });
    return (pictureArray)
  }

  // renders page elements
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Gallery of My Life</h1>
      </header>
      
      {// prevents GalleryList from running until picture data is received from the server
        pictureArray ?
        // GalleryList sets up page elements where pictures will be displayed
        <GalleryList pictureArray={pictureArray, getPicture()} />
      :
        // Empty div to render until pictureArray is filled
        <div></div>
    }
    </div>
  );
}

export default App;
