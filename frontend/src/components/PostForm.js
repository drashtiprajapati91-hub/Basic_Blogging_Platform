import React, { useState } from 'react';

const PostForm = ({ initialTitle = '', initialContent = '', onSubmit }) => {
  const [title, setTitle] = useState(initialTitle);
  const [content, setContent] = useState(initialContent);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, content });
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <input 
        type="text" 
        placeholder="Title" 
        value={title} 
        onChange={e => setTitle(e.target.value)} 
        className="border p-2 w-full mb-2"
        required
      />
      <textarea 
        placeholder="Content" 
        value={content} 
        onChange={e => setContent(e.target.value)} 
        className="border p-2 w-full mb-2" 
        rows="5"
        required
      />
      <button type="submit" className="bg-green-600 text-white p-2">Submit</button>
    </form>
  );
};

export default PostForm;
