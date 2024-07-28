import React, { useContext } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Homepage from "./hompage/Home";
import PostsPage from "./posts/PostsPage";
import LoginForm from "./forms/LoginForm";
import SignupForm from "./forms/Signupform";
import ProfileForm from "./forms/ProfileForm";
import PostForm from "./posts/AddPost";
import DrivesList from "./drives/DriveList";
import DriveForm from "./drives/AddDriveForm";
import UserProfile from "./Profile";
import MyGarage from "./cars/mygarage";
import CarForm from "./forms/newCar";
import UserContext from "./Usercontext";

function Routing({ login, signup }) {
  const Navigate = useNavigate();

  const PrivateRoute = ({ children, ...rest }) => {
    const auth = useContext(UserContext);
    return auth ? children : <Navigate to="/login" />;
  };

  console.debug(
    "Routes",
    `login: ${typeof login}`,
    `register: ${typeof signup}`
  );

  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>

        <Route path="/login" element={<LoginForm login={login} />}></Route>

        <Route path="/signup" element={<SignupForm signup={signup} />}></Route>

        <Route element={<PrivateRoute />}>
          <Route path="/posts" element={<PostsPage />} />
          <Route path="/posts/new" element={<PostForm />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/profile/edit" element={<ProfileForm />} />
          <Route path="/drives" element={<DrivesList />} />
          <Route path="/drives/new" element={<DriveForm />} />
          <Route path="/cars" element={<MyGarage />} />
          <Route path="/cars/new" element={<CarForm />} />
        </Route>
      </Routes>
    </>
  );
}

export default Routing;
