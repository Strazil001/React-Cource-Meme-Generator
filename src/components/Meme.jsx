import React from "react";
import data from "../data";
import "./Meme.css";

export default function () {
  function getMemeImage() {
    const memesArray = data.data.memes;
    const randomNr = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNr].url;
    console.log(url);
  }
  return (
    <main className="meme">
      <div className="meme-form">
        <input className="meme-input" name="" type="text" value="" />
        <input className="meme-input" name="" type="text" value="" />
      </div>
      <button className="meme-btn" onClick={getMemeImage}>
        Get a new meme!
      </button>
      <img className="meme-img" alt="" src="" />
    </main>
  );
}
