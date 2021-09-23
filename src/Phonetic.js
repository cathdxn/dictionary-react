import React from "react";

export default function Phonetic(props) {
  return (
    <section className="Phonetic">
      <a
        className="btn btn-primary"
        href={props.phonetic.audio}
        target="_blank"
        rel="noreferrer"
      >
        Listen
      </a>{" "}
      <span>{props.phonetic.text}</span>
    </section>
  );
}
