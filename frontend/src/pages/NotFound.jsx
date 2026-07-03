import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 px-6">

      <div className="text-center">

        <h1 className="text-9xl font-black text-blue-600 drop-shadow-lg">
          404
        </h1>

        <h2 className="text-3xl font-bold mt-4">
          Page Not Found
        </h2>

        <p className="text-gray-500 mt-3 max-w-md mx-auto">
          Sorry, the page you are looking for doesn't exist or has been moved.
        </p>

        <Link
          to="/"
          className="
inline-flex
items-center
justify-center
mt-8
bg-blue-600
hover:bg-blue-700
text-white
font-medium
px-8
py-3
rounded-xl
shadow-md
transition-all
duration-300
hover:scale-105
"
        >
          Back Home
        </Link>

      </div>

    </section>
  );
}

export default NotFound;