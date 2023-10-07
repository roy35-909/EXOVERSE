
import { useState } from 'react';
import '../assets/css/popup.css'; // Import your CSS file

let imgUrl  = 'https://cdn.eso.org/images/thumb700x/eso1134a.jpg'

const exoplanetData = [
    {   "id" : 1,
        "img":"https://as2.ftcdn.net/v2/jpg/05/75/23/65/1000_F_575236580_jcUiaeVkhr7stdi7sS6E6hBxExVUMzsx.jpg"
    },
    {   "id" : 2,
    "img":"https://images.ctfassets.net/cnu0m8re1exe/1OdKy16tY7VjMLvC2SVEKL/9cad60defbd440fe79ea03c56d3e5ebd/PIA13994-medium.jpg"
},
{   "id" : 3,
"img":"https://imageio.forbes.com/specials-images/imageserve/6224fa9ae43044bb1ddf6af4/NASA-s-Transiting-Exoplanet-Survey-Satellite--TESS--will-find-thousands-of-exoplanets/960x0.jpg"
},
{   "id" : 4,
"img":"https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/06/13/14/exoplanet.jpg"
},
{   "id" : 5,
"img":"https://thevrsoldier.com/wp-content/uploads/2018/06/shutterstock_752492377.jpg"
},
{   "id" : 6,
"img":"https://exoplanets.nasa.gov/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBb29aIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--9767d1dd9f5d02627ba57e8c556f4e8e5021cdf2/hotJupiter320.jpg?disposition=attachment"
},
{   "id" : 7,
"img":"https://thevrsoldier.com/wp-content/uploads/2018/06/shutterstock_752492377.jpg"
},
{   "id" : 8,
"img":"https://images.interestingengineering.com/1200x675/img/iea/jg6P5yeJwx/untitled-1-17.jpg"
},
{   "id" : 9,
"img":"https://www.universetoday.com/wp-content/uploads/2022/09/Imagen1.jpeg"
},
{   "id" : 10,
"img":"https://exoplanets.nasa.gov/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBbHNNIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--adf1b7f6e0ed183792b1e2ab8f4dd28a5014a665/26a_big-vlt-s.jpg?disposition=attachment"
},

{
  "id":11,
  "img":"https://media.cnn.com/api/v1/images/stellar/prod/230110102813-nasa-toi-700-e-planet.jpg"
},
{
  "id":12,
  "img":"https://exoplanets.nasa.gov/internal_resources/751"
},
{
  "id":13,
  "img":"https://media.cnn.com/api/v1/images/stellar/prod/230110102813-nasa-toi-700-e-planet.jpg?c=original&q=h_618,c_fill"
},
]

function Media() {
  const [selectedPlanet, setSelectedPlanet] = useState(null);

  const handleCardClick = (planet) => {
   
    setSelectedPlanet(planet);
  };

  return (
    <div className="home-container">
      {exoplanetData.map((planet) => (
        <div className=''
          key={planet.id}
          className="planet-card p-0 m-0 h-44 border-none"
          onClick={() => handleCardClick(planet)}
        >
          <img className='w-full h-full' src={planet.img} alt={planet.name} />
          
        </div>
      ))}

      {selectedPlanet && (
        <div className="popup bg-black">
          <div className="popup-content bg-black">
            <div className="button_group bg-black">


          <button className="close-button" onClick={() => setSelectedPlanet(null)}>
              Close
            </button>

            </div>

            <div className="popup-details">
              <div className="popup-image">
                <img src={selectedPlanet.img} alt={selectedPlanet.name} />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Media;

