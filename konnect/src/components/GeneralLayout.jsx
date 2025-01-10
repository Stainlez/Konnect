import { Outlet } from "react-router-dom"
// import Header from "./Header"

const GeneralLayout = () => {
  return (
        <div className="min-h-screen font-montserrat flex flex-col overflow-hidden">
          
          <div className="flex-grow overflow-auto">
            <Outlet />
          </div>
        </div>
  )
}

export default GeneralLayout
