import React from "react";

export default function Meme() {
  return (
    <section className="main-meme">
      <div className="inputs">
        <input className="input"></input>
        <input className="input"></input>
      </div>
      <button className="button">Get a new meme image</button>
      <img className="img-meme" />
    </section>
  );
}
