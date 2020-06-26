import React from "react";
import { members } from "./index";
import TeamMember from "../TeamMember/TeamMember";

import "./TeamList.scss";

const TeamList = () => {
  return (
    <div className="team-list">
      {members.map((member) => (
        <TeamMember {...member} />
      ))}
    </div>
  );
};

export default TeamList;
