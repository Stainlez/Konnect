import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = () => {
  return (
    <div className="relative min-h-screen font-montserrat flex flex-col overflow-hidden">
      <div>
        <Header />
      </div>

      <div className="flex-grow overflow-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
