import { useRouteError, NavLink } from "react-router-dom";
import { useLoaderData } from "react-router-dom";

const Accounttype = () => {
  const user = useLoaderData();

  return (
    <div className="flex font-montserrat items-center justify-center  min-h-screen bg-textColor">
      <div className="w-full max-w-md p-8 space-y-3 max-h-md bg-white rounded-lg shadow-md flex flex-col">
        <div>
          <h1 className="text-2xl font-bold text-center text-gray-900">
            User Account Type
          </h1>
          <p className="text-md text-center text-gray-600">
            This account is{" "}
            {user.role === "User" ? "a Regular User" : "an Entrepreneur"}{" "}
            account
          </p>
        </div>

        {user.role === "User" && (
          <NavLink
            to="/registerentrepreneur"
            className="p-4 px-3 font-bold mt-10 text-center bg-highlight rounded-lg hover:bg-green-600"
          >
            Become an Entrepreneur
          </NavLink>
        )}
        {/* <Link to="/" className="w-full bg-[#161616] hover:bg-gray-600 text-white py-2 text-center block mt-auto">
       Return to Home
     </Link> */}
      </div>
    </div>
  );
};

export default Accounttype;
