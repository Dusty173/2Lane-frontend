import React, { useContext } from "react";
import UserContext from "./Usercontext";
import { Link } from "react-router-dom";

function UserProfile() {
  const { currUser, setCurrUser } = useContext(UserContext);

  return (
    <>
      <div>
        <h2 className="username">{currUser.username}</h2>
      </div>
      <div>
        <ul className="userdata">
          <li>{currUser.email}</li>
          <li>{currUser.created_at}</li>
          <li>
            Administrator status:
            {currUser.is_admin ? "You are an admin" : "Not an admin."}
          </li>
        </ul>
      </div>
      <Link to="/profile/edit">Edit profile</Link>
    </>
  );
}

export default UserProfile;
