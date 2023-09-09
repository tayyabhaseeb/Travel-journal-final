import React from "react";

export default function Main(props) {
  console.log(props);
  const {
    title,
    location,
    googleMapsUrl,
    startDate,
    endDate,
    description,
    imageUrl,
  } = props.obj;
  return (
    <div className="main-container">
      <img src={imageUrl} className="largeImage" />
      <div className="child-two">
        <div className="location-cont">
          <i className="fa-solid fa-location-dot loco-icon"></i>
          <p className="country">{location}</p>
          <a className="google-maps" href={googleMapsUrl}>
            View on Google Maps
          </a>
        </div>
        <h2 className="mount">{title}</h2>
        <p className="date">
          {startDate} - {endDate}
        </p>
        <p className="desc">{description}</p>
      </div>
    </div>
  );
}
