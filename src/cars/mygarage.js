import React, { useContext, useState, useEffect } from "react";
import TwolaneApi from "../Api";
import UserContext from "../Usercontext";
import LoadIcon from "../common/LoadIcon";
import Car from "./car";

function MyGarage() {
  const { cars, setCars } = useState(null);
  const { currUser, setCurrUser } = useContext(UserContext);

  useEffect(function getAllCarsOnLoad() {
    console.debug("Get cars on mount");
    loader();
  }, []);

  async function loader() {
    let cars = await TwolaneApi.getCars(currUser.username);
    setCars(cars);
  }

  if (!cars) return <LoadIcon />;

  return (
    <>
      {cars.length ? (
        <div className="cars-list">
          {cars.map((c) => (
            <div>
              <Car
                id={c.id}
                make={c.make}
                model={c.model}
                model_year={c.model_year}
              />
            </div>
          ))}
        </div>
      ) : (
        <p className="not-found">No cars found in your Garage!</p>
      )}
    </>
  );
}

export default MyGarage;
