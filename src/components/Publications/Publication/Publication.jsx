import React from "react";
import cn from "classnames";
import "./Publication.scss";

const Publication = ({ href, source, title, text, style, img, isYellow }) => {
  return (
    <div
      className={cn("publication", {
        yellow: isYellow,
      })}
      style={style}
    >
      <a href={href} target="_blank" rel="noopener noreferrer">
        <div>
          <img className="img" src={img} alt="uplift-pt-1" />
        </div>

        <div className="description">
          <div className="source">{source}</div>
          <div className="title">{title}</div>
          <div className="text">{text}</div>
        </div>
      </a>
    </div>
  );
};

export default Publication;
