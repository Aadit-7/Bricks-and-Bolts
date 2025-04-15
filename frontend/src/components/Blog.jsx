import React, { useState } from "react";
import { Editor } from "@tinymce/tinymce-react";

const Blog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [blogs, setBlogs] = useState([]);

  const onPostBlog = () => {
    alert("Blog Posted Successfully !!");
  };

  const handleEditorChange = (newContent) => {
    setContent(newContent);
  };

  const handlePublish = () => {
    if (title.trim() && content.trim()) {
      const newBlog = {
        id: Date.now(),
        title,
        content,
      };
      setBlogs([newBlog, ...blogs]);
      setTitle("");
      setContent("");
    } else {
      alert("Please fill out both title and content before publishing.");
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 rounded-lg shadow-2xl lg:my-5 md:m-auto bg-white">
      <h1 className="text-3xl font-bold text-center mb-6 text-black">
        Create a New Blog
      </h1>

      <input
        type="text"
        placeholder="Enter blog title..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-2 mb-4 border border-gray-300 rounded"
      />

      <Editor
        apiKey="tquz2xvistk41l19rcd4b6buw01amgw45x3cz27bqn8u7sdj"
        value={content}
        onEditorChange={handleEditorChange}
        init={{
          height: 300,
          menubar: false,
          branding: false,
          plugins: "lists link image preview imagetools paste",
          toolbar:
            "undo redo | formatselect | bold italic | alignleft aligncenter alignright | bullist numlist | link image preview",
          automatic_uploads: true,
          file_picker_types: "image",
          images_upload_handler: (blobInfo, success, failure) => {
            const reader = new FileReader();
            reader.readAsDataURL(blobInfo.blob());
            reader.onload = () => {
              success(reader.result);
            };
            reader.onerror = () => {
              failure("Image upload failed");
            };
          },
        }}
      />

      <button
        onClick={(handlePublish, onPostBlog)}
        className="mt-4 bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 cursor-pointer"
      >
        Publish Blog
      </button>

      {blogs.length > 0 && (
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Published Blogs</h2>
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="mb-6 p-4 bg-white shadow-md rounded-md"
            >
              <h3 className="text-xl font-bold mb-2">{blog.title}</h3>
              <div dangerouslySetInnerHTML={{ __html: blog.content }} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Blog;
