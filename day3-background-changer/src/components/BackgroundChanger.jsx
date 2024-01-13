import React, { useState } from "react";

const BackgroundChanger = () => {
  const [newRGB, setNewRGB] = useState({ R: 255, G: 255, B: 255 });
  const randomRGB = () => {
    const R = Math.floor(Math.random() * 255);
    const G = Math.floor(Math.random() * 255);
    const B = Math.floor(Math.random() * 255);
    return { R, G, B };
  };

  const onBtnClick = () => {
    const randomColor = randomRGB();
    setNewRGB(randomColor);
    console.log(randomColor);
  };

  return (
    <div
      className="bgContainer"
      style={{
        backgroundColor: `rgb(${newRGB.R} ,${newRGB.G} , ${newRGB.B} )`,
      }}
    >
      <button onClick={onBtnClick}>change background color</button>
    </div>
  );
};

export default BackgroundChanger;
