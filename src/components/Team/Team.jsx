import React from "react";
import TeamList from "./TeamList/TeamList";

const Team = () => {
  return (
    <>
      <div className="content-header">Наша команда</div>
      <TeamList />
      {/* <div className="content-header">Публикации</div> */}
    </>
  );
};

export default Team;
