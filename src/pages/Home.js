import React, { useEffect, useState } from "react";
import "./Home.css";
import HeadingImage from "../components/images/heading-image.png";
import getFolderText from "../components/FolderManager";
import CountryCard from "../components/homePageComponents/CountryCard/CountryCard";
import Folder from "../components/homePageComponents/Folder/Folder";
import { CountriesCards, ShortTexts, FoldersData } from "../../src/utils/Data";

const Home = ({ theme }) => {
  useEffect(() => {
    localStorage.setItem("current_theme", theme);
  }, [theme]);

  const [randomText] = useState(() => {
    const randomIndex = Math.floor(Math.random() * ShortTexts.length);
    return ShortTexts[randomIndex];
  });

  const [selectedFolder, setSelectedFolder] = useState(0);

  const handleFolderClick = (folderIndex) => {
    setSelectedFolder(folderIndex);
  };

  return (
    <div className={`container ${theme === "dark" ? "dark" : ""}`}>
      <div className="content">
        <div className="center-content">
          <h1 className="title">Vítejte na naší stránce</h1>
          <p className="changing-text">{randomText}</p>
          <div className="image-container">
          <img src={HeadingImage} alt="Background" className="background-image" />
        </div>
          <h2>Nabízené destinace</h2>
          <div className="featured-products">
            {CountriesCards.map((country) => (
              <CountryCard
                key={country.id}
                title={country.title}
                description={country.description}
                images={country.images}
              />
            ))}
          </div>
          <div className="folders">
            {FoldersData.map((folder, index) => (
              <Folder
                key={index}
                title={folder.title}
                isSelectedFolder={selectedFolder === index}
                onClick={() => handleFolderClick(index)}
              />
            ))}
          </div>
          <div className="folder-text">{getFolderText(selectedFolder)}</div>
        </div>
      </div>
    </div>
  );
};

export default Home;