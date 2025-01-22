import { Outlet } from "react-router-dom";
// import Header from "./Header"

const GeneralLayout = () => {
  return (
    <div className="min-h-screen font-montserrat flex flex-col">
      <Outlet />
    </div>
  );
};

export default GeneralLayout;
