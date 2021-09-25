import React from "react";

export default function Photos(props) {
  if (props.photos) {
    return (
      <section className="Photos">
        <div className="row">
          {props.photos.map(function (photo, index) {
            return (
              <a
                className="col-sm-4 col-6 img-fluid mt-2 mb-2"
                key={index}
                href={photo.src.original}
                target="_blank"
                rel="noreferrer"
              >
                <img src={photo.src.small} alt={props.description} />
              </a>
            );
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}
