import { useState, useEffect } from "react";
import ImageSlider from "./ImageSilder";
import Nevbar from "./Nevbar";
import Header from "./Header";
import './App.css';

function App() {
  const [imgIndex, setImgIndex] = useState(0);
  return (
    <div className="main">
      <Header imgIndex={imgIndex} setImgIndex={setImgIndex} />
      <Nevbar imgIndex={imgIndex} setImgIndex={setImgIndex} />
      <ImageSlider imgIndex={imgIndex} setImgIndex={setImgIndex} />
    </div>
  );
}

export default App;
