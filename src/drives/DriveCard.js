import React from "react";
import "./DriveCard.css";

function DriveCard({ title, description, created_at, route_link }) {
  let time = created_at;
  let newTime = new Date(time);
  let formattedTime = newTime.toDateString();

  return (
    <div className="DriveCard">
      <div className="card-body">
        <h4 className="card-title">{title}</h4>
        <small>
          Posted: <i>{formattedTime}</i>
        </small>
        <p className="route-link">
          Route for Google Maps: <br />
          <a target="blank" className="btn" href={route_link}>
            Get Route
          </a>
        </p>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default DriveCard;
