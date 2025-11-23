import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditPost() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    axios.get(`http://localhost:5000/api/posts/${id}`)
      .then(res => {
        setTitle(res.data.title);
        setContent(res.data.content);
      })
      .catch(err => console.log(err));
  }, [id]);

  const updatePost = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:5000/api/posts/${id}`, { title, content })
      .then(() => navigate("/"))
      .catch(err => console.log(err));
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-3xl font-bold mb-6">Edit Post</h2>

      <form onSubmit={updatePost} className="grid gap-4">
        <input
          className="border rounded-md p-3 w-full"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          className="border rounded-md p-3 w-full"
          rows="6"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>

        <button 
          className="bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition"
          type="submit"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
}

export default EditPost;
