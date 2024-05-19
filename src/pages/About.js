import React, { useState } from 'react';
import './About.css';

const About = ({ theme }) => {
  const [countryName, setCountryName] = useState('');
  const [countryData, setCountryData] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setCountryName(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);
      const data = await response.json();
      if (response.ok) {
        setCountryData(data[0]);
        setError(null);
      } else {
        setError('Země nenalezena');
        setCountryData(null);
      }
    } catch (error) {
      console.error('Error fetching country data:', error);
      setError('Error fetching country data');
      setCountryData(null);
    }
  };

  return (
    <div className={`country-info-container ${theme === 'dark' ? 'dark' : ''}`}>
      <h2>Základní informace o zemích</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Zadejte anglický název Země"
          value={countryName}
          onChange={handleChange}
        />
        <button type="submit">Vyhledat</button>
      </form>
      {error && <p>{error}</p>}
      {countryData && (
        <div className='single-country-container'>
          <div className="single-country">
          <h3>{countryData.name.common}</h3>
          <img src={countryData.flags.png} alt={`Flag of ${countryData.name.common}`} />
          <p>Populace: {countryData.population}</p>
          <p>Hlavní město: {countryData.capital}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default About;