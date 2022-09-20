import React from "react";
import memesdata from "../memesdata";

export default function Meme() {
  let [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/3si4.jpg",
  });

  let [allMemeImages, setAllMemeImages] = React.useState(memesdata);

  let getImg = () => {
    let memesArray = allMemeImages.data.memes;
    let randNumber = Math.floor(Math.random() * memesArray.length);
    let url = memesArray[randNumber].url;

    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  };

  function handleChange(event) {
    const { value, name } = event.target;
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        [name]: value,
      };
    });
  }

  return (
    <section className="main-meme">
      <div className="inputs">
        <input
          className="input upperInput"
          name="topText"
          type="text"
          placeholder="Top text"
          value={meme.topText}
          onChange={handleChange}
        ></input>
        <input
          className="input lowerInput"
          name="bottomText"
          type="text"
          placeholder="Bottom text"
          value={meme.bottomText}
          onChange={handleChange}
        ></input>
      </div>
      <button className="button" onClick={getImg}>
        Get a new meme image
      </button>
      <div className="meme">
        <img className="img-meme" alt="meme" src={meme.randomImage} />
        <span className="meme-text meme-text--upper">{meme.topText}</span>
        <span className="meme-text meme-text--lower">{meme.bottomText}</span>
      </div>
    </section>
  );
}
