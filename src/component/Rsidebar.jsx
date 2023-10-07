import {NavLink} from "react-router-dom"
 
const Rsidebar = () => {
  return (
    <div className=" h-screen border border-white border-opacity-30  float-right">
      <div  className="bg-[#2b4162] py-2 float-right flex flex-col items-center justify-between w-48 h-full">
         <div className=" flex overflow-hidden">

            <NavLink to='joinus' className='bg-white bg-opacity-30 w-36 mb-3 h-14 rounded-lg flex justify-center text-center items-center  text-cyan-400 font-bold text-xl'>join us</NavLink>
         </div>
         <div to='about' className='btn flex flex-col  items-center'>
            
            <NavLink to="about" className="bg-white bg-opacity-30 w-36 mb-3 h-14 rounded-lg flex justify-center text-center items-center  text-cyan-400 font-bold text-xl">About us</NavLink>
            <NavLink to='contact' className="bg-white bg-opacity-30 w-36 mb-3 h-14 rounded-lg flex justify-center text-center items-center  text-cyan-400 font-bold text-xl">Contact us</NavLink>

         </div>
        </div>
    </div>
  )
}

export default Rsidebar
