import { Link } from "react-router-dom"

const NotFound = () => {
  return (
<div className="flex font-montserrat items-center justify-center min-h-screen bg-textColor">

<div className="w-full max-w-md p-8 space-y-3 bg-white rounded-lg shadow-md min-h-[400px] flex flex-col justify-between">
  <div>
    <h1 className="text-2xl font-bold text-center text-gray-900">Page not Found</h1>
    <p className="text-sm text-center text-gray-600">
      The page you are looking for does not exist
    </p>
  </div>
  
  <Link to="/" className="w-full bg-[#161616] hover:bg-gray-600 text-white py-2 text-center block mt-auto">
    Return to Home
  </Link>
</div>
    </div>
  )
}

export default NotFound
