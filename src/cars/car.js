import React, { useContext } from "react";
import TwolaneApi from "../Api";
import UserContext from "../Usercontext";

function Car({ id, make, model, model_year }) {
  const { currUser, setCurrUser } = useContext(UserContext);

  async function handleRemove() {
    await TwolaneApi.removeCar(currUser.username, id);
  }

  return (
    <div>
      <ul>
        <li>{make}</li>
        <li>{model}</li>
        <li>{model_year}</li>
      </ul>
      <button onClick={handleRemove}>Remove</button>
    </div>
  );
}

export default Car;
