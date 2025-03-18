import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800">404 - Page Not Found</h1>
      <p className="mt-4 text-lg text-gray-600">
        The page you're looking for doesn't exist.
      </p>
      <Link
        to="/"
        className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
      >
        Go to Home
      </Link>
    </div>
  );
};

export default NotFound;