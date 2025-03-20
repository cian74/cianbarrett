import { useState, useEffect } from "react";
import "./App.css";

function CatPics() {
  const [images, setImages] = useState([]);
  const [rawData, setRawData] = useState(""); 

  useEffect(() => {
    const googleSheet = process.env.REACT_APP_CAT_PICS_URL; 

    fetch(googleSheet)
      .then((response) => response.text())
      .then((data) => {
        setRawData(data);

        const lines = data.split("\n").map((line) => line.trim());

        const validUrls = lines
          .filter((line) => line.startsWith("http"))
          .map((line) =>
            line.includes("drive.google.com/uc?export=view&id=")
              ? line.replace("export=view&", "") 
              : line
          );

        setImages(validUrls);
      })
      .catch((error) => {
        console.error("Error fetching cat images:", error);
      });
  }, []);

  return (
    <div className="centered">
      <div className="content">
        <div className="cat-gallery">
          {images.length > 0 ? (
            images.map((url, index) => (
              <img
                key={index}
                src={url}
                alt={`Cat ${index}`}
                className="cat-image"
                onError={(e) => {
                  console.error(`Failed to load image: ${url}`);
                  e.target.style.display = "none";
                }}
              />
            ))
          ) : (
            <div>
              <p>Loading cat pictures...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CatPics;
