import React, { useState, useEffect } from "react";
import TwolaneApi from "../Api";
import LoadIcon from "../common/LoadIcon";
import PostCard from "./PostCard";
import { Link } from "react-router-dom";

function PostsPage() {
  console.debug("Posts Page");

  const [posts, setPosts] = useState(null);

  useEffect(function getAllPostsOnLoad() {
    console.debug("Get Posts on mount");
    loader();
  }, []);

  async function loader() {
    let posts = await TwolaneApi.getAllPosts();
    setPosts(posts);
  }

  if (!posts) return <LoadIcon />;

  return (
    <>
      <Link to="/posts/new">Add Post</Link>
      <div className="post-list">
        {posts.length ? (
          <div>
            {posts.map((p) => (
              <PostCard
                id={p.id}
                title={p.title}
                body={p.body}
                created_at={p.created_at}
                user_id={p.user_id}
              />
            ))}
          </div>
        ) : (
          <p>No results found!</p>
        )}
      </div>
    </>
  );
}
export default PostsPage;
