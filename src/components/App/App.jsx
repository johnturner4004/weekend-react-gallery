import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";
import "./App.css";
import GalleryList from "../GalleryList/GalleryList.jsx";

function App() {
  const [pictureArray, setPictureArray] = useState();

  useEffect(() => {
    getPicture();
  }, []);

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
    console.log("pictures", pictureArray);
    return (pictureArray)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Gallery of My Life</h1>
      </header>
      {
        pictureArray ?
        // insert your content here
        <GalleryList pictureArray={pictureArray, getPicture()} />
      :
        // add a loader or an empty div here
        <div></div>
    }
      {
        console.log(
          pictureArray
        ) /* <p>Gallery goes here</p>
        <img src="images/goat_small.jpg"/> */
      }
    </div>
  );
}

export default App;
