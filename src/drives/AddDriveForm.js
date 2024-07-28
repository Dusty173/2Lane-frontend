import React, { useContext, useState } from "react";
import UserContext from "../Usercontext";
import TwolaneApi from "../Api";
import "../forms/form.css";
function DriveForm() {
  const { currUser, setCurrUser } = useContext(UserContext);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    route_link: "",
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

    let driveData = {
      title: formData.title,
      description: formData.description,
      route_link: formData.route_link,
    };

    try {
      await TwolaneApi.createDrive(driveData);
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
      <form className="driveform">
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
          <label htmlFor="routelink">Route Link:</label>
          <input
            name="routelink"
            value={formData.route_link}
            required
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <input
            type="textarea"
            name="description"
            value={formData.description}
            required
            onChange={handleChange}
          />
        </div>
        <button className="submit-btn" onClick={handleSubmit}></button>
      </form>
    </div>
  );
}
export default DriveForm;
