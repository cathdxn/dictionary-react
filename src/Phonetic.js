import React from "react";

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      <a
        className="btn btn-primary"
        href={props.phonetic.audio}
        target="_blank"
      >
        Listen
      </a>
    </div>
  );
}
