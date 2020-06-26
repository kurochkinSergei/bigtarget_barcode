import React from "react";
import { roles as rolesDict } from "../TeamList/index";
import githubIcon from "assets/social/github.svg";
import linkedinIcon from "assets/social/linkedin.svg";

import { Tag, Divider } from "antd";

import "./TeamMember.scss";
import { white, elPurple, elYellow } from "constants/colors";

const TeamMember = ({
  id,
  name,
  img,
  roles,
  description,
  linkedin,
  github,
}) => {
  return (
    <div className="team-member">
      <div className="img-wrapper">
        <img src={img} alt={name} />
      </div>
      <div className="content">
        <div className="name">{name}</div>
        <Divider
          dashed
          orientation="left"
          style={{ borderColor: elYellow, margin: "8px 0" }}
        />

        <div style={{ lineHeight: "28px" }}>
          {roles.map((role) => (
            <Tag color={white} style={{ fontSize: 16, color: elPurple }}>
              {rolesDict[role]}
            </Tag>
          ))}
        </div>
        <div className="description">{description}</div>
        <div className="social">
          {linkedin && (
            <a href={linkedin} target="_blank" rel="noopener noreferrer">
              <img className="social-icon" src={linkedinIcon} alt="linkedin" />
            </a>
          )}
          <a href={github} target="_blank" rel="noopener noreferrer">
            <img className="social-icon" src={githubIcon} alt="github" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
