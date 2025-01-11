import { useParams, useNavigate, useLoaderData } from 'react-router-dom';

const ServicesDetails = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const servicesList = useLoaderData();

  // Find the specific service by ID
  const service = servicesList.find((s) => s.id === serviceId);

  if (!service) {
    return <p>Service not found</p>;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg max-w-lg">
        <h2 className="text-2xl font-bold">{service.name}</h2>
        <p>{service.description}</p>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded-md mt-4"
          onClick={() => navigate('/services')}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ServicesDetails;
