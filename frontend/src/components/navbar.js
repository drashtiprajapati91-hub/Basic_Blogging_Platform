import { Link } from "react-router-dom";

function navbar() {
  return (
    <nav className="bg-blue-600 text-white px-6 py-4 shadow-md flex justify-between items-center">
      <h1 className="text-xl font-bold">My Blog</h1>

      <div className="flex gap-6">
        <Link className="hover:text-gray-300" to="/">Home</Link>
        <Link className="hover:text-gray-300" to="/create">Create Post</Link>
      </div>
    </nav>
  );
}

export default navbar;
