import Lsidebar from '../component/Lsidebar'
import Rsidebar from '../component/Rsidebar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className="h-screen w-screen flex flex-row justify-between">
      <Lsidebar/>
      <Outlet/>
      <Rsidebar/>
    </div>
  )
}

export default Layout
