import React, {useState} from "react";
import "./ClothingPopup.css"


function ClothingPopup({ show, details, currentCardIndex, setCurrentCardIndex }) {
    if (!show) {
      return null;
    }
  
    const handlePrevClick = () => {
      if (currentCardIndex > 0) {
        setCurrentCardIndex(currentCardIndex - 1);
      }
    };
  
    const handleNextClick = () => {
      const cardCount = currentCardIndex
  
      if (currentCardIndex < cardCount - 1) {
        setCurrentCardIndex(currentCardIndex + 1);
      }
    };
  
    return (
      <div className="popup">
        <div className="popup-inner">
          <button className="close-btn" onClick={() => setCurrentCardIndex(null)}>
            Close
          </button>
          {/* Display card details based on currentCardIndex */}
          <div className="card-details">
            {/* Card details */}
            <h2>{details.itemName}</h2>
            <p>{details.title}</p>
            <p>{details.price}</p>
            <p>{details.description}</p>
            <img src={details.imageSrc} alt="Product" />
          </div>
          {/* Navigation buttons */}
          <div className="popup-navigation">
            <button onClick={handlePrevClick}>Previous</button>
            <button onClick={handleNextClick}>Next</button>
          </div>
        </div>
      </div>
    );
  }
  
  export default ClothingPopup;