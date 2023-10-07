// import Homeleft from "./Homeleft"


const Hero = () => {

   
  return (
    <div className=" h-screen w-full flex  flex-col justify-center m-auto items-center">
      <div className="w-full h-[60%]  flex py-0">
      <iframe id='iframe-container' src="https://exoplanets.nasa.gov/eyes-on-exoplanets/#/planet/11_Com_b/" frameborder="0" className="w-full"></iframe>
 
      </div>
      <div className="btm w-full h-[40%]  text-center">
        <h2 className="text-2xl fontsf mb-4 ">What makes a Planet Habitable</h2>
        <div className="flex justify-center m-auto  text-sm text-center">
          
            <ul className="mr-12 flex justify-between w-full ml-4">
                <li className="hover:scale-110 bg-white bg-opacity-20  border-2 border-gray-400 border-opacity-50 fontmont px-2 py-1 mb-1.5 rounded-md">
                  <div className="h-[250px] w-[150px] ">
                    <h2 className="text-xl font-bold text-blue-300">Stable Climate</h2>
                    <p className="pt-8"> Extreme temperature fluctuations can make life unsustainable. A stable climate allows for the presence of liquid water, a crucial ingredient for life.</p>
                  </div>
                </li>
                <li className="hover:scale-110 bg-white bg-opacity-20  border-2 border-gray-400 border-opacity-50 fontmont px-2 py-1 mb-1.5 rounded-md"> <div className="h-[250px] w-[150px]">
                <h2 className="text-xl font-bold text-blue-300">Stable Orbit and Rotation</h2>
                <p className="pt-8">Predictable day-night cycles support ecosystems and climate stability.</p>
                  </div></li>
                <li className="hover:scale-110 bg-white bg-opacity-20  border-2 border-gray-400 border-opacity-50 fontmont px-2 py-1 mb-1.5 rounded-md"> <div className="h-[250px] w-[150px]">
                <h2 className="text-xl font-bold text-blue-300">Atmospheric Composition</h2>
                <p className="pt-8">A mix of gases suitable for life, protecting against harmful radiation and facilitating respiration</p>

                  </div></li>
                <li className="hover:scale-110 bg-white bg-opacity-20  border-2 border-gray-400 border-opacity-50 fontmont px-2 py-1 mb-1.5 rounded-md"> <div className="h-[250px] w-[150px]">
                <h2 className="text-xl font-bold text-blue-300">Sufficient Size and Gravity</h2>
                <p className="pt-8">Adequate mass to retain an atmosphere, vital for temperature regulation and shielding from radiation.</p>

                  </div></li>
                <li className="hover:scale-110 bg-white bg-opacity-20  border-2 border-gray-400 border-opacity-50 fontmont px-2 py-1 mb-1.5 rounded-md"> <div className="h-[250px] w-[150px]">
                <h2 className="text-xl font-bold text-blue-300">Liquid Water</h2>
                <p className="pt-8"> Essential for life's chemical reactions, water provides a medium for biological processes.</p>

                  </div></li>
                <li className="hover:scale-110 bg-white bg-opacity-20  border-2 Within the habitable zone, where the planet is neither too hot nor too cold for liquid water. border-gray-400 border-opacity-50 fontmont px-2 py-1 mb-1.5 rounded-md"> <div className="h-[250px] w-[150px]">
                <h2 className="text-xl font-bold text-blue-300">Appropriate Distance from Star</h2>
                <p className="pt-8">Within the habitable zone, where the planet is neither too hot nor too cold for liquid water.</p>

                  </div></li>
            </ul>

        </div>
      </div>
    </div>
  )
}

export default Hero
