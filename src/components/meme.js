import React from "react";
import memesdata from "../memesdata";

export default function Meme() {
  let [meme, setMeme] = React.useState("");

  let getImg = () => {
    let memesArray = memesdata.data.memes;
    let randNumber = Math.floor(Math.random() * memesArray.length);
    setMeme(memesArray[randNumber].url);
  };

  return (
    <section className="main-meme">
      <div className="inputs">
        <input className="input" type="text" placeholder="Top text"></input>
        <input className="input" type="text" placeholder="Bottom text"></input>
      </div>
      <button className="button" onClick={getImg}>
        Get a new meme image
      </button>
      <div className="meme">
        <img className="img-meme" alt="meme" src={meme} />
        {/* <span className="meme-text meme-text--upper">shut up</span>
        <span className="meme-text meme-text--lower">and take my money</span> */}
      </div>
    </section>
  );
}
