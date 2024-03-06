import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Pagination } from "swiper";

const ReadMoreText = ({ children }) => {
  const text = children;
  const textLen = 250;
  const isBig = text.length > textLen;
  const [ReadMore, setReadMore] = useState(true);
  const toggleReading = () => {
    setReadMore(!ReadMore);
  };
  return (
    <p>
      {isBig ? (ReadMore ? text.slice(0, textLen) + "..." : text) : text}
      {isBig ? (
        <span
          onClick={toggleReading}
          className="block text-white underline cursor-pointer"
        >
          {ReadMore ? "read more" : "show less"}
        </span>
      ) : (
        <p></p>
      )}
    </p>
  );
};

function Slider({ data }) {
  const [slidesPerView, setSlidesPerView] = useState(3);
  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth <= 768) {
        setSlidesPerView(1);
      } else if (screenWidth <= 1024) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(3);
      }
    };
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <Swiper
      slidesPerView={slidesPerView}
      spaceBetween={20}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper"
      centeredSlides={false}
      style={{
        "--swiper-pagination-color": "#0cb1ed",
        "--swiper-pagination-bullet-inactive-color": "#6a6c7a",
        "--swiper-pagination-bullet-inactive-opacity": "1",
        "--swiper-pagination-bullet-size": "10px",
        "--swiper-pagination-bullet-horizontal-gap": "6px",
      }}
    >
      {data.map((event, index) => (
        <SwiperSlide key={index}>
          <div className="h-full max-w-sm border border-gray-200 rounded-lg shadow dark:border-gray-700 mb-10">
            <img
              className="rounded-t-lg"
              src={event.image}
              alt=""
              style={{ width: "536px", height: "354px" }}
            />

            <div className="text-center p-5">
              <a href={event.registrationLink}>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-100">
                  {event.eventName}
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 text-gray-400">
                {event.date}
              </p>
              <div className="items-center flex flex-col space-y-2 text-gray-700 dark:text-gray-400">
                <ReadMoreText>{event.content}</ReadMoreText>
                {/* <p>{event.content}</p> */}
                {event.brochureLink !== "" && (
                  <a
                    href={event.brochureLink}
                    className="inline-flex pt-4 items-center text-white hover:underline underline-offset-2"
                  >
                    View Brochure
                  </a>
                )}
                {event.registrationLink !== "" && (
                  <a
                    href={event.brochureLink}
                    className="inline-flex items-center px-10 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Register
                  </a>
                )}
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Slider;
