import React from "react";
import "./TeamMember.scss";

const TeamMember = ({ id, name, img, roles, description }) => {
  return (
    <div className="team-member">
      <div className="img-wrapper">
        <img src={img} alt={name} />
      </div>
      <div className="content">
        <div className="name">{name}</div>
        <div>{roles.map((role) => role)}</div>
        <div className="description">{description}</div>
      </div>
    </div>
  );
};

export default TeamMember;
