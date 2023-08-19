import React from "react";
import "./testimstyles.css";
import TestimTile from "./TestimTile";

import Athira from "../../Assets/Images/Testimonials/Athira.jpg";
import Ann from "../../Assets/Images/Testimonials/Ann.jpg";
import Sreekanth from "../../Assets/Images/Testimonials/Sreekanth.jpg";

const Testim = () => {
  const testimonials = [
    {
      name: "Athira",

      imageSrc: Athira,
      batch:"S2 Test",
      description:
        "It was a wonderful experience. We did learn a lot  through the workshop.The workshop helped us a lot to improve ourselves",
    },
    {
      name: "Ann Mariya Binoy",

      imageSrc: Ann,
      batch:"S2 Test",
      description:
        "The startup workshop was very useful for us. We learned many things, for example, how to develop an idea, how to implement it, etc. Along with this, the classes were very relevant and useful. We got an idea about how to improve on our project. We only had an idea, but the workshop helped us to improve our idea and work on it. The idea pitching competition was also very good. It gave us an idea of where we need to change, improve, etc. All of the mentors were very helpful in clearing our doubts. Overall, it was a wonderful session. Thank you, IEDC CET",
    },
    {
      name: "Sreekanth Sreekumar",

      imageSrc: Sreekanth,
      batch:"S5 EEE CET",
      description:
        "The startup workshop series conducted by IEDC was wonderful. The workshop sessions were fun and covered many relevant topics required for startups such as business models and funding strategies. The interactive activities taught us about collaboration and networking. The quiz at the end were really helpful in evaluating ourselves.",
    },
  ];

  const goPrev = (e) => {
    const div = e.target.nextElementSibling;
    const isEnd = div.scrollLeft === 0;
    div.scrollLeft = isEnd
      ? div.firstChild.scrollWidth * testimonials.length
      : div.scrollLeft - div.firstChild.scrollWidth - 25;
  };

  const goNext = (e) => {
    const div = e.target.previousElementSibling;
    const isEnd =
      div.scrollLeft >=
      div.firstChild.scrollWidth * (testimonials.length - 1.5);
    div.scrollLeft = isEnd
      ? 0
      : div.scrollLeft + div.firstChild.scrollWidth + 25;
  };

  const testimTiles = [];
  testimonials.forEach((testimonial,index) =>
    testimTiles.push(<TestimTile key={index} testimonial={testimonial} />)
  );

  return (
    <>
      <h2 className="w-3/4 self-center border-t-[1px] border-t-gray-800  pt-12 text-white text-center text-4xl font-bold">
        Testimonials
      </h2>
      <div className="testimonials-div">
        <button className="testimonial-btn" onClick={goPrev}>
          &#x21e6;
        </button>
        <div className="shown-testimonial " id="shown-testimonial">
          {testimTiles}
        </div>
        <button className="testimonial-btn" onClick={goNext}>
          &#x21e8;
        </button>
      </div>
    </>
  );
};

export default Testim;
