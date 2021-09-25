import React from "react";

export default function Phonetic(props) {
  if (props.phonetic.text) {
    return (
      <div className="Phonetic">
        <a
          href={props.phonetic.audio}
          target="_blank"
          rel="noreferrer"
          className="audio-link"
        >
          Listen
        </a>{" "}
        <span className="text">{props.phonetic.text}</span>
      </div>
    );
  } else {
    return null;
  }
}
