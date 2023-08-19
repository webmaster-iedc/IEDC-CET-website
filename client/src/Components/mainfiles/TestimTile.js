import React from "react";

const TestimTile = ({ testimonial }) => {
  return (
    <div className="testim-tile">
      <img src={testimonial.imageSrc} alt="profile pic" />
      <div className="testimonial-data">
        <p>{testimonial.description}</p>
        <div>{testimonial.name}</div>
        <p  >{testimonial.batch}</p>
      </div>
    </div>
  );
};

export default TestimTile;
