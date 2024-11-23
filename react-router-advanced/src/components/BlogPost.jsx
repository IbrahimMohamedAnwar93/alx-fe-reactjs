import React from "react";
import { useParams } from "react-router-dom";

const BlogPost = () => {
  const { id } = useParams(); // Get the 'id' param from the URL
  return (
    <div>
      <h2>Blog Post {id}</h2>
      {/* You can fetch and display the content for this post using the 'id' */}
    </div>
  );
};

export default BlogPost;
