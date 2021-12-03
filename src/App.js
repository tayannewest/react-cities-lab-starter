import React, { useState } from "react";
import "./styles.css";
import imagesArr from "./imageData";


export default function App() {

  const [bigImage, setBigImage] = useState(imagesArr[0].img)

  // USE useState TO CREATE  [bigImage, setBigImage]
  // AND SET IT TO THE IMAGE URL OF THE FIRST ELEMENT IN THE ARRAY

  // CREATE A HANDLE CLICK FUNCTION THAT ACCEPTS AN IMAGE URL
  // THE FUNCTION SHOULD CALL setBigImage AND PASS IT THE URL

  const handleClick = () => {
    setBigImage(images.src)
  }

  // CREATE A VARIABLE CALLED images THAT LOOPs OVER THE imagesArr AND RETURNS AN <IMG> ELEMENT

  const images = imagesArr.map((ele, index) => {
    return(
      <img src={ele.img}
      alt={ele.city} 
      className="thumb" 
      key={index} 
      onClick={handleClick}>
      </img>
    )
  })




  // ASSIGN ALL OF THE PROPERTIES THAT IT NEEDS: src, alt, className, key
  // ALSO ASSIGN AN onClick EVENT THAT CALL THE HANDLE EVENT AND PASSES IT THE IMG URL

  return (
    <div className="App">
      <h1>Cities Of The World</h1>
      <div id="wrapper">
        <div id="thumbnails">{images}</div>
        {/* THE SRC IMAGE URL SHOULD BE SET TO THE VALUE THAT IS STORED IN bigImage */}
        <img src={bigImage} id="bigimage" alt="city"/>
      </div>
    </div>
  );
}
