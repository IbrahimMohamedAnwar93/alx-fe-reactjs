import React from "react";
import { useParams } from "react-router-dom";

function BlogPost() {
  const { id } = useParams(); // Access the dynamic part of the route

  return (
    <div>
      <h1>Blog Post #{id}</h1>
      {/* You can fetch and display the blog post data using the id */}
    </div>
  );
}

export default BlogPost;
