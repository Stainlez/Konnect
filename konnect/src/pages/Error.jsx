import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-textColor text-center p-8">
      <h1 className="text-3xl font-semibold text-red-600">
        Error: {error.message}
      </h1>
      <pre className="mt-4 text-lg text-gray-700">
        {error.status} - {error.statusText}
      </pre>
      <div className="mt-8">
        <p className="text-sm text-gray-600">
          Please try again later or contact support.
        </p>
      </div>
    </div>
  );
};

export default Error;
