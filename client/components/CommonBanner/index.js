import React from "react";

function CommonBannner({ title, image, subHeading }) {
  return (
    <div
      className="page-heading about-page-heading"
      style={{ backgroundImage: `url(${process.env.NEXT_PUBLIC_URL}${image})` }}
      id="top"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="inner-content">
              <h2>{title}</h2>
              <span>{subHeading}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommonBannner;
