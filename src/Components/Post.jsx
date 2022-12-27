
import React from "react";
const Post = (title) => {
  console.log("title", title)
  return (
    <div className="post">
      <h1>
        {/* Here show the title of the post  */}
        {title.data.title}
      </h1>
      <h3>
        {/* Here show the body of the post  */}
        {title.data.post}
      </h3>
    </div>
  );
};

export default Post;
