import React from "react";
import { Link } from "react-router-dom";

import "./PostCard.css";

/** Show limited information about a company
 *
 * Is rendered by CompanyList to show a "card" for each company.
 *
 * CompanyList -> CompanyCard
 */

function PostCard({ id, title, body, created_at, username }) {
  console.debug("PostCard", username, id, title, created_at);

  let time = created_at;
  let newTime = new Date(time);
  let formattedTime = newTime.toLocaleString();

  return (
    <Link className="PostDetail" to={`/posts/${id}`}>
      <div className="card-body">
        <h4 className="card-title">{title}</h4>
        <small>
          Posted: <i>{formattedTime}</i> <br />
          By:{username}
        </small>
        <p>{body}</p>
      </div>
    </Link>
  );
}

export default PostCard;
