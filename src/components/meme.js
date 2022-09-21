import React from "react";

export default function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/3si4.jpg",
  });

  const [allMemes, setAllMemes] = React.useState([]);

  // React.useEffect(() => {
  //   fetch("https://api.imgflip.com/get_memes")
  //     .then((res) => res.json())
  //     .then((res) => setAllMemes(res.data.memes));
  // }, []);

  React.useEffect(() => {
    async function getMemes() {
      const res = await fetch("https://api.imgflip.com/get_memes");
      const data = await res.json();
      setAllMemes(data.data.memes);
    }
    getMemes();
  }, []);

  const getImg = () => {
    const randNumber = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randNumber].url;

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
