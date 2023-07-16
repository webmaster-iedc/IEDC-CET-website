import React from "react";
import "../mainfiles/testimstyles.css";
import TestimTile from "../mainfiles/TestimTile";

import Athira from '../../Assets/Images/Testimonials/Athira.jpg'
import Ann from '../../Assets/Images/Testimonials/Ann.jpg'
import Sreekanth from '../../Assets/Images/Testimonials/Sreekanth.jpg'

const Testim = () => {
  const testimonials = [
    {
      name: "Athira",

      imageSrc: Athira,

      description:
        "It was a wonderful experience. We did learn a lot  through the workshop.The workshop helped us a lot to improve ourselves",
    },
    {
      name: "Ann Mariya Binoy",

      imageSrc: Ann,

      description:
        "The startup workshop was very useful for us.... We have learned many things for example how to develop an idea, how to implement it,etc.... Along with this classes was very much relevant and useful. We got an idea about how to improve on our project... We only just had an idea but the workshop helped us to improve our idea and work on it.... The idea pitching competition was also so good.. We got an idea where we need to change, improve etc.... All the mentors was very helpful in clearing our doubts.... Overall it was a wonderful section... Thank you iedc CET",
    },
    {
      name: "Sreekanth Sreekumar",

      imageSrc: Sreekanth,

      description:
        "The startup workshop series conducted by IEDC was wonderful. The workshop sessions were fun and covered many relevant topics required for startups such as business models and funding strategies. The interactive activities taught us about collaboration and networking. The quiz at the end were really helpful in evaluating ourselves.",
    },
  ];

  const goPrev = (e) => {
    const div = e.target.nextElementSibling;
    const isEnd = div.scrollLeft === 0;
    div.scrollLeft = isEnd
      ? div.firstChild.scrollWidth * testimonials.length
      : div.scrollLeft - div.firstChild.scrollWidth;
  };

  const goNext = (e) => {
    const div = e.target.previousElementSibling;
    const isEnd =
      div.scrollLeft >=
      div.firstChild.scrollWidth * (testimonials.length - 1.5);
    div.scrollLeft = isEnd ? 0 : div.scrollLeft + div.firstChild.scrollWidth;
  };

  const testimTiles = [];
  testimonials.forEach((testimonial) =>
    testimTiles.push(<TestimTile testimonial={testimonial} />)
  );

  return (
    <>
    <h2 class="w-3/4 self-center pt-12 mb-2 text-white text-center text-4xl font-bold">Testimonials</h2>
    <div className="testimonials-div">
      
      <button className="testimonial-btn" onClick={goPrev}>
        &#x21e6;
      </button>
      <div className="shown-testimonial break-words border-solid border-zinc-800 border-l-[15px] bg-zinc-800 rounded-lg" id="shown-testimonial">
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
