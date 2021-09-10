import React from "react";

const Card = ({ name, description, image, wikiLink }) => (
  <div className="column is-one-quarter">
    <div className="card">
      <div className="card-content">
        <div className="media">
          <div className="media-left">
            <figure className="image is-48x48">
              <img src={image} alt={name} />
            </figure>
          </div>
          <div className="media-content">
            <p className="title is-4">{name}</p>
          </div>
        </div>

        <div className="content">
          {description}
          <br />
        </div>
      </div>
    </div>
  </div>
);

export default Card;
