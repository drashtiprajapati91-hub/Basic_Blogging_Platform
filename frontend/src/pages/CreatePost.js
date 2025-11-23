import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreatePost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const submitPost = (e) => {
    e.preventDefault();

    axios.post("http://localhost:5000/api/posts", { title, content })
      .then(() => navigate("/"))
      .catch(err => console.log(err));
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-3xl font-bold mb-6">Create New Post</h2>

      <form onSubmit={submitPost} className="grid gap-4">

        <input
          className="border rounded-md p-3 w-full"
          type="text"
          placeholder="Post Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <textarea
          className="border rounded-md p-3 w-full"
          placeholder="Write your content..."
          rows="6"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        ></textarea>

        <button 
          className="bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          type="submit"
        >
          Publish Post
        </button>

      </form>
    </div>
  );
}

export default CreatePost;
