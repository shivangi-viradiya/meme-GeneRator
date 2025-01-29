import React from "react";
import { useState,useEffect } from "react";
import kidMeme from "../Images/kid-meme.webp";

const Main = () => {
  const [meme, setMeme] = useState({
    topText: "One does not simply",
    bottomText: "Walk into Mordor",
    img: kidMeme,
  });

  const [allMemes, setAllMemes] = useState([]);

  const handleChange = (event) => {
    const { value, name } = event.currentTarget;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
    console.log(value);
  };

  const getMemeImage = () => {
     const randomNumber = Math.floor(Math.random() * allMemes.length);
     const newMemeUrl = allMemes[randomNumber].url;
     setMeme((prevMeme) => ({
       ...prevMeme,
       img: newMemeUrl,
     }));
  };

  useEffect(() => {
      fetch("https://api.imgflip.com/get_memes")
      .then(response => response.json())
      .then(data => setAllMemes(data.data.memes));
  }, []);

  return (
    <main>
      <div className="form">
        <label>
          Top Text
          <input
            type="text"
            placeholder="One does not simply"
            name="topText"
            value={meme.topText}
            onClick={handleChange}
          />
        </label>
        <label>
          Bottom Text
          <input
            type="text"
            placeholder="Walk into Mordor"
            name="bottomText"
            value={meme.bottomText}
            onClick={handleChange}
          />
        </label>
        <button onClick={getMemeImage}>Get a new meme image</button>
      </div>
      <div className="meme">
        <img src={meme.img} />
        <span className="top">{meme.topText}</span>
        <span className="bottom">{meme.bottomText}</span>
      </div>
    </main>
  );
};

export default Main;
