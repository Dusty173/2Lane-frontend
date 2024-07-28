import React from "react";
import "./DriveCard.css";

/** Show limited information about a company
 *
 * Is rendered by CompanyList to show a "card" for each company.
 *
 * CompanyList -> CompanyCard
 */

function DriveCard({ title, description, created_at, route_link }) {
  console.debug("DriveCard", title, description, created_at, route_link);

  return (
    <div className="DriveCard">
      <div className="card-body">
        <h4 className="card-title">{title}</h4>
        <small>Posted: {created_at}</small>
        <p>Route Link for Google Maps: {route_link}</p>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default DriveCard;
