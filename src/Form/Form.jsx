import React from "react";

export const PostForm = () => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <textarea
          value={postContent}
          id=""
          cols="30"
          rows="10"
          onChange={handlePostChange}
          placeholder="Write your customer name"
        ></textarea>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};
