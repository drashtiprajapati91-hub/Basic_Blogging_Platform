import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/posts")
      .then((res) => setPosts(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="max-w-6xl mx-auto mt-10 p-4">
      {/* Page Header */}
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-4xl font-bold text-gray-800">All Posts</h1>

        <Link
          to="/create"
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg shadow-md transition duration-300"
        >
          + Create Post
        </Link>
      </div>

      {/* Grid of Posts */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <div
            key={post._id}
            className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition duration-300"
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              {post.title}
            </h2>

            <p className="text-gray-700 text-sm leading-relaxed line-clamp-4 mb-4">
              {post.content}
            </p>

            <Link 
              to={`/edit/${post._id}`}
              className="text-green-600 underline mt-3 inline-block"
            >
              Edit
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
