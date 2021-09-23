import React, { useState } from "react";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  function search(event) {
    event.preventDefault();
  }
  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  return (
    <div className="Dictionary">
      <form className="p-3" onSubimt={search}>
        <input type="search" onChange={handleKeywordChange} autofocus={true} />
        <input type="submit" />
      </form>
      <h1>{keyword}</h1>
    </div>
  );
}
