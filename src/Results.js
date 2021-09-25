import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";

export default function Dictionary(props) {
  if (props.results) {
    return (
      <div className="Results">
        <section>
          <h2>{props.results.word}</h2>

          {props.results.phonetics.map(function (phonetic, index) {
            return (
              <span key={index}>
                <Phonetic phonetic={phonetic} />
              </span>
            );
          })}
        </section>
        <span>
          {props.results.meanings.map(function (meaning, index) {
            return (
              <span key={index}>
                <Meaning meaning={meaning} />
              </span>
            );
          })}
        </span>
      </div>
    );
  } else {
    return null;
  }
}
