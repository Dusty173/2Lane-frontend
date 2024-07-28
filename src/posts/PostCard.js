import React from "react";
import { Link } from "react-router-dom";

import "./PostCard.css";

/** Show limited information about a company
 *
 * Is rendered by CompanyList to show a "card" for each company.
 *
 * CompanyList -> CompanyCard
 */

function PostCard({ id, title, body, created_at, user_id }) {
  console.debug("PostCard", title, created_at);

  return (
    <Link className="PostCard" to={`/posts/${id}`}>
      <div className="card-body">
        <h4 className="card-title">{title}</h4>
        <small>
          Posted: {created_at} By:{user_id.username}
        </small>
        <p>{body}</p>
      </div>
    </Link>
  );
}

export default PostCard;
