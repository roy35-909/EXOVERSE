import './App.css'

 import Layout from './component/Layout'
 import Home from './Pages/Home'
 import About from './Pages/About'
  import Lab from './Pages/Lab'
 import Joinus from './Pages/Joinus'
 import NasaData from './Pages/NasaData'
 import Media from './Pages/Media'
import News from './Pages/News'
import PlanIdea from './Pages/PlanIdea'
import HabitablePlanet from './Pages/HabitablePlanet'
 import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Contact from './Pages/Contact'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
        <Route path='' element={<Home/>}/>
        <Route path= 'about' element={<About/>}/>
        <Route path= 'contact' element={<Contact/>}/>
         <Route path= 'lab' element={<Lab/>}/>
         <Route path= 'joinus' element={<Joinus/>}/>
         <Route path= 'Nasadata' element={<NasaData/>}/>
         <Route path= 'media' element={<Media/>}/>
         <Route path= 'news' element={<News/>}/>
        <Route path= 'plan' element={<PlanIdea/>}/>
        <Route path= 'habitable' element={<HabitablePlanet/>}/>
     </Route>
    )
  )
  
  
  function App() {


  return (
    <>
      <RouterProvider router={router}/>
      {/* <Exolab/> */}
    </>
  )
}

export default App
