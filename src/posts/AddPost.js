import React, { useContext, useState } from "react";
import UserContext from "../Usercontext";
import TwolaneApi from "../Api";

function PostForm() {
  const { currUser, setCurrUser } = useContext(UserContext);
  const [formData, setFormData] = useState({
    title: "",
    body: "",
    user_id: currUser.user_id,
  });

  const [formErr, setFormErr] = useState([]);

  console.debug(
    "PostForm",
    "currentUser:",
    currUser,
    "formData:",
    formData,
    "formErrors:",
    formErr
  );

  async function handleSubmit(e) {
    e.preventDefault();

    let postData = {
      title: formData.title,
      body: formData.body,
      user_id: currUser.user_id,
    };

    try {
      await TwolaneApi.createPost(postData);
    } catch (err) {
      setFormErr(err);
      return;
    }
  }

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData((f) => ({
      ...f,
      [name]: value,
    }));
    setFormErr([]);
  }

  return (
    <div className="form-div">
      <form className="postform">
        <div>
          <label htmlFor="title">Title</label>
          <input
            name="title"
            value={formData.title}
            placeholder="Title"
            required
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="body">Body</label>
          <input
            type="textarea"
            name="body"
            value={formData.body}
            required
            onChange={handleChange}
          />
        </div>
        <button className="submit-btn" onClick={handleSubmit}></button>
      </form>
    </div>
  );
}
export default PostForm;
