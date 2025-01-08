import { Outlet } from "react-router-dom"
import Header from "./Header"

const Layout = () => {
  return (
        <div className="min-h-screen font-montserrat flex flex-col overflow-hidden">
          <div className="fixed top-0 left-0 right-0 z-50">
            <Header />
          </div>
          <div className="flex-grow overflow-auto">
            <Outlet />
          </div>
        </div>
  )
}

export default Layout
