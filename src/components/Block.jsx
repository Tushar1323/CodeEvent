import React from "react";
import './CSS/Navbar.css'

const ContestDetails = ({ status, date, time, platform, name, gotoLink }) => {
  return (
    <div className="contest-details" style={{ border: "2px solid black" }}>
      <span className="status">{status}</span>
      <span className="date">{date}</span>
      <span className="time">{time}</span>
      <span className="platform">{platform}</span>
      <span className="name">{name}</span>
      <a href={gotoLink} target="_blank" rel="noopener noreferrer" className="goto-link">
        Go to Contest
      </a>
    </div>
  );
};

export default ContestDetails;
