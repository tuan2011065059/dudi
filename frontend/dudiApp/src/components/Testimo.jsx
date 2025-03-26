import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Testimo.css"; // Import file CSS

const testimonials = [
  {
    text: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads...",
    name: "Vu Huy Ho",
    position: "Design Director",
  },
  {
    text: "Their team is professional, responsive, and truly cares about the success of our business...",
    name: "John Doe",
    position: "Marketing Manager",
  },
  {
    text: "Highly recommend Positivus to any company looking to grow their online presence...",
    name: "Jane Smith",
    position: "CEO",
  },
  {
    text: "The best marketing agency we have worked with...",
    name: "Alex Johnson",
    position: "Sales Manager",
  },
  {
    text: "The best marketing agency we have worked with...",
    name: "Alex Johnson",
    position: "Sales Manager",
  },
  {
    text: "The best marketing agency we have worked with...",
    name: "Alex Johnson",
    position: "Sales Manager",
  },
  {
    text: "The best marketing agency we have worked with...",
    name: "Alex Johnson",
    position: "Sales Manager",
  },
];

const Testimo = () => {
  return (
    <>
    <div className='container d-flex justify-content-left my-5'>
                <span className='d-inline-block border rounded bg-danger text-white'>Testimonials </span>
                
            </div>
    <div className="testimonial-container">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={3} 
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
        pagination={{ clickable: true }}
        breakpoints={{
          1024: { slidesPerView: 3 },
          768: { slidesPerView: 2 },
          480: { slidesPerView: 1 },
        }}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="testimonial-box">
              <p className="testimonial-text">{testimonial.text}</p>
              <h5 className="testimonial-name">{testimonial.name}</h5>
              <p className="testimonial-position">{testimonial.position}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Nút điều hướng */}
      <div className="swiper-button-prev">
        <FontAwesomeIcon icon={faArrowLeft} />
      </div>
      <div className="swiper-button-next">
        <FontAwesomeIcon icon={faArrowRight} />
      </div>
    </div>
    </>
  );
};

export default Testimo;
