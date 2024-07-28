import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import TwolaneApi from "../Api";
import LoadIcon from "../common/LoadIcon";

function PostDetail() {
  const { id } = useParams();
  console.debug("PostDetail", "id:", id);

  const [post, setPost] = useState(null);

  useEffect(
    function getPostById() {
      async function getPost() {
        setPost(await TwolaneApi.getPost(id));
      }

      getPost();
    },
    [id]
  );

  if (!post) return <LoadIcon />;

  return (
    <div className="PostDetails">
      <h4>{post.title}</h4>
      <small>
        Posted at: {post.created_at}, by: {post.user_id.username}
      </small>
      <p>{post.body}</p>
      <br />
      <small>Cannot comment on posts yet.</small>
    </div>
  );
}

export default PostDetail;
