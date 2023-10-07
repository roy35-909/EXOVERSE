
import axios from 'axios';
import React, { useState } from 'react';


const imgarray = [

  'https://images.nightcafe.studio/jobs/ZfCHYx692HEZQ95Fwv4P/ZfCHYx692HEZQ95Fwv4P--2--lkh6l_4x.jpg',
  'https://img.freepik.com/premium-photo/exoplanet-with-vibrant-colorful-atmosphere-deep-space-created-with-generative-ai_419341-48012.jpg',
  
];





const ExoLab = () => {
  const [imageUrl, setImageUrl] = useState('');
  const handleLoadRandomImage = () => {
    const r = Math.floor(Math.random() * 2);
    console.log(r)
    setImageUrl(imgarray[r])
  
      console.log(imageUrl)
  };

  return (
    <div className="w-[full] h-screen  flex flex-col justify-center m-auto items-center">
      <h1 className="text-3xl ">Create your own planet</h1>
      <p className="text-sm mb-[3%]">(Ai generated Image)</p>
      <div className="flex w-full ">
        <div className="  w-[40%] mr-1 flex flex-col">
            <input className="bg-tranparent text-md border-none fontmont px-4 py-2 mb-3 rounded-md" type="text" placeholder="Your planet name" />
            <input className="bg-tranparent text-md border-none fontmont px-4 py-2 mb-3 rounded-md" type="text" placeholder="Surface type" />
            <input className="bg-tranparent text-md border-none fontmont px-4 py-2 mb-3 rounded-md" type="text" placeholder="Star neme" />
            <input className="bg-tranparent text-md border-none fontmont px-4 py-2 mb-3 rounded-md" type="text" placeholder="Orbital period" />
            <input className="bg-tranparent text-md border-none fontmont px-4 py-2 mb-3 rounded-md" type="text" placeholder="Gravety" />
            <input className="bg-tranparent text-md border-none fontmont px-4 py-2 mb-3 rounded-md" type="text" placeholder="Mass of the planet" />
            <textarea className="bg-tranparent text-md border-none fontmont px-4 py-2 mb-3 rounded-md" name="details" id="" cols="5" rows="3" placeholder="more details about your planet"></textarea>
        </div>
        <div className="w-[60%] flex flex-col justify-between ml-1">
        {imageUrl && <img src={imageUrl} alt="Random" />}
             <div className=" flex mt-2 justify-evenly">
                <span className="w=[35%] px-2 py-1  cursor-pointer  text-lg font-bold rounded-l-md bg-white bg-opacity-30">Download</span>
                <span className="w=[20%] px-2 py-1  cursor-pointer text-lg font-bold  bg-white bg-opacity-30" onClick={handleLoadRandomImage}>Generate</span>
                <span className="w=[35%] px-2 py-1  cursor-pointer text-lg font-bold rounded-r-md bg-white bg-opacity-30">Submit</span>
             </div>
            </div>
      </div>
    </div>
  )
}

export default ExoLab;
