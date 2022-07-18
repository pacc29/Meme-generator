import React from "react";
import memesdata from "../memesdata";

export default function Meme() {

  let [meme, setMeme] = React.useState({
    topText: '',
    bottomText: '',
    randomImage: 'https://i.imgflip.com/3si4.jpg' 
  })

  let [allMemeImages, setAllMemeImages] = React.useState(memesdata)


  let getImg = () => {
    let memesArray = allMemeImages.data.memes;
    let randNumber = Math.floor(Math.random() * memesArray.length);
    let url = memesArray[randNumber].url

    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url
    }))
  };


  return (
    <section className="main-meme">
      <div className="inputs">
        <input
          className="input upperInput"
          // onInput={display}
          type="text"
          placeholder="Top text"
        ></input>
        <input
          className="input lowerInput"
          // onInput={display}
          type="text"
          placeholder="Bottom text"
        ></input>
      </div>
      <button className="button" onClick={getImg}>
        Get a new meme image
      </button>
      <div className="meme">
        <img className="img-meme" alt="meme" src={meme.randomImage} />
        {/* <span className="meme-text meme-text--upper">{upperText}</span>
        <span className="meme-text meme-text--lower">{lowerText}</span> */}
      </div>
    </section>
  );
}

// let [upperText, setUpperText] = React.useState("");
// let [lowerText, setLowerText] = React.useState("");

// let display = () => {
//   setUpperText(document.querySelector(".upperInput").value);
//   setLowerText(document.querySelector(".lowerInput").value);
// };