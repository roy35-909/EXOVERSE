// HomePage.js

import { useState } from 'react';
import '../assets/css/popup.css'; // Import your CSS file
import data from '../assets/data/data.json'
let imgUrl  = 'https://cdn.eso.org/images/thumb700x/eso1134a.jpg'
import exoplanetData from '../assets/data/data.json'

// const exoplanetData = [
//   {
//     id: 1,
//     name: 'Exoplanet 1',
//     distanceFromEarth: '100 light-years',
//     starDetails: 'Sun-like star',
//     discoveredYear: 2000,
//     discoveredBy: 'NASA',
//     chemicals: 'Methane, Carbon Dioxide',
//     imageUrl: 'https://cdn.eso.org/images/thumb700x/eso1134a.jpg',
//   },
//   {
//     id: 2,
//     name: 'Exoplanet 1',
//     distanceFromEarth: '100 light-years',
//     starDetails: 'Sun-like star',
//     discoveredYear: 2000,
//     discoveredBy: 'NASA',
//     chemicals: 'Methane, Carbon Dioxide',
//     imageUrl: 'https://cdn.eso.org/images/thumb700x/eso1134a.jpg',
//   },

//   {
//     id: 3,
//     name: 'Exoplanet 1',
//     distanceFromEarth: '100 light-years',
//     starDetails: 'Sun-like star',
//     discoveredYear: 2000,
//     discoveredBy: 'NASA',
//     chemicals: 'Methane, Carbon Dioxide',
//     imageUrl: 'https://cdn.eso.org/images/thumb700x/eso1134a.jpg',
//   },
//   {
//     id: 4,
//     name: 'Exoplanet 1',
//     distanceFromEarth: '100 light-years',
//     starDetails: 'Sun-like star',
//     discoveredYear: 2000,
//     discoveredBy: 'NASA',
//     chemicals: 'Methane, Carbon Dioxide',
//     imageUrl: 'https://cdn.eso.org/images/thumb700x/eso1134a.jpg',
//   },
//   // Add more exoplanet data here
// ];

function makeurl(w){
  let final = ''
  console.log(w);
  for(let i=0;i<w.length;i++){
    console.log(w[i]);
    if(w[i]==' ')
    {
      final+='_';
    }
    else{
      final+=w[i];
    }
  }
  return final;

}

function PopUp() {
  const [selectedPlanet, setSelectedPlanet] = useState(null);

  const handleCardClick = (planet) => {
   
    setSelectedPlanet(planet);
  };

  return (
    <div className="home-container">
      {exoplanetData.map((planet) => (
        <div
          key={planet.id}
          className="planet-card"
          onClick={() => handleCardClick(planet)}
        >
          <img src={imgUrl} alt={planet.name} />
          <h3>{planet.name}</h3>
        </div>
      ))}

      {selectedPlanet && (
        <div className="popup">
          <div className="popup-content">
            <div className="button_group">
              <a href={'https://exoplanets.nasa.gov/eyes-on-exoplanets/#/system/'+makeurl(selectedPlanet.name)+'/'} target="_blank">

              <button className="close-button">
              Explore
            </button>
              </a>

          <button className="close-button" onClick={() => setSelectedPlanet(null)}>
              Close
            </button>

            </div>

            <div className="popup-details">
              <div className="popup-image">
                <img src={imgUrl} alt={selectedPlanet.name} />
              </div>
              <div className="popup-info">
                <h2>{selectedPlanet.name}</h2>
                <p>Distance from Earth: {selectedPlanet.distanceFromEarth}</p>
                
                <p>Discovered Year: {selectedPlanet.discoveredYear}</p>
                <p>Temprature : {selectedPlanet.temp}</p>
                <p>Mass: {selectedPlanet.mass}</p>
                <p>Radius: {selectedPlanet.redius}</p>
                <p>Orbital Time: {selectedPlanet.orbital}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default PopUp;
