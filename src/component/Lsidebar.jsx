import {NavLink} from 'react-router-dom'
import img from '../assets/img/logo6.png'
const Lsidebar = () => {
   return (
     <div className=" border border-white border-opacity-30 h-screen ">
       <div className="bg-[#2b4162] py-2 flex flex-col items-center w-48 h-full">
          <div className=" flex flex-row justify-center items-center overflow-hidden">
              <img className='w-16' src={img} alt="" />
             <NavLink className='mt-4 text-cyan-400 font-bold text-xl'>EXOVERSE</NavLink>
          </div>
          <div className='btn flex flex-col  items-center mt-28 h-[70%] justify-between'>
             
           <NavLink to="/" className="bg-white bg-opacity-30 w-36 mb-3 h-14 rounded-lg flex justify-center text-center items-center  text-cyan-400 font-bold text-xl">
                  Home</NavLink>
           <NavLink to="habitable" className="bg-white bg-opacity-30 w-36 mb-3 h-14 rounded-lg flex justify-center text-center items-center  text-cyan-400 font-bold text-xl">
                  Habitable Planes</NavLink> 
           <NavLink to="Nasadata" className="bg-white bg-opacity-30 w-36 mb-3 h-14 rounded-lg flex justify-center text-center items-center  text-cyan-400 font-bold text-xl">
                  Nasas Discovery</NavLink> 
           <NavLink to="lab" className="bg-white bg-opacity-30 w-36 mb-3 h-14 rounded-lg flex justify-center text-center items-center  text-cyan-400 font-bold text-xl">
                  Exo_Lab</NavLink> 
           <NavLink to="media" className="bg-white bg-opacity-30 w-36 mb-3 h-14 rounded-lg flex justify-center text-center items-center  text-cyan-400 font-bold text-xl">
                  Multimedia</NavLink> 
           <NavLink to="plan" className="bg-white bg-opacity-30 w-36 mb-3 h-14 rounded-lg flex justify-center text-center items-center  text-cyan-400 font-bold text-xl">
                  Plan & Idea</NavLink> 
           <NavLink to="news" className="bg-white bg-opacity-30 w-36 mb-3 h-14 rounded-lg flex justify-center text-center items-center  text-cyan-400 font-bold text-xl">
                  News & Events</NavLink> 
            
          </div>
         </div>

      

     </div>
   )
 }
 
 export default Lsidebar;
 