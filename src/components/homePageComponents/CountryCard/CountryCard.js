import React, { useState } from "react";

const CountryCard = ({ images, title, description }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleCountryImageChange = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  };

  return (
    <div className="product">
      <img
        src={images[currentImageIndex]}
        onClick={handleCountryImageChange}
        alt={title}
      />
      <h3>{title}</h3>
      <div className="product-text-container">
        <p>{description}</p>
      </div>
      <button className="buy-button">Do košíku</button>
    </div>
  );
};

export default CountryCard;
