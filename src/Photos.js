import React from "react";

export default function Photos(props) {
  if (props.photos) {
    console.log(props.photos);
    return (
      <section className="Photos">
        <div className="row">
          {props.photos.map(function (photo, index) {
            return (
              <a
                className="col-sm-4 col-6 mt-2 mb-2"
                key={index}
                href={photo.src.original}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="img-fluid"
                  src={photo.src.landscape}
                  alt={props.description}
                />
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
