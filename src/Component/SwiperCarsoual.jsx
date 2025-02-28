import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const SwiperCarousel = () => {
  const swiperRef = useRef(null);
  const slides = [
    {
      image:
      "https://images.pexels.com/photos/598917/pexels-photo-598917.jpeg?auto=compress&cs=tinysrgb&w=600",
      text: "Graphic Design",
    },
    {
      image:
      "https://images.pexels.com/photos/26578948/pexels-photo-26578948/free-photo-of-a-laptop-and-a-monitor-standing-on-the-desk.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      text: "Web Development",
    },
    {
      image:
        "https://images.pexels.com/photos/6214387/pexels-photo-6214387.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      text: "E-commerce Solutions",
    },
    {
      image:
      "https://images.pexels.com/photos/8927039/pexels-photo-8927039.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      text: "App Design",
    },
    {
      image:
      "https://images.pexels.com/photos/30824760/pexels-photo-30824760/free-photo-of-elegant-gift-box-with-victoria-s-secret-branding.jpeg?auto=compress&cs=tinysrgb&w=600",
      text: "Branding & Identity",
    },
    {
      image:
        "https://images.pexels.com/photos/26617651/pexels-photo-26617651/free-photo-of-folded-scarf-of-dior-in-box.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      text: "Packaging Design",
    },
  ];

  const fallbackImage = "https://via.placeholder.com/677x1024";

  return (
    <div className="relative py-10 mx-4 lg:mx-10">
      {/* Navigation Buttons */}
      <div className="absolute mt-10 lg:flex hidden top-[-60px] right-[10px] z-10 gap-2">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="px-4 py-2 transition duration-300 rounded-xl hover:bg-Accent2/10"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="font-semibold text-Black"
          >
            <path
              d="M6.85355 3.14645C7.04882 3.34171 7.04882 3.65829 6.85355 3.85355L3.70711 7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H3.70711L6.85355 11.1464C7.04882 11.3417 7.04882 11.6583 6.85355 11.8536C6.65829 12.0488 6.34171 12.0488 6.14645 11.8536L2.14645 7.85355C1.95118 7.65829 1.95118 7.34171 2.14645 7.14645L6.14645 3.14645C6.34171 2.95118 6.65829 2.95118 6.85355 3.14645Z"
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="px-4 py-2 transition duration-300 rounded-xl hover:bg-Accent2/10"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="font-semibold text-Black"
          >
            <path
              d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      </div>

      {/* Swiper Carousel */}
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        slidesPerView={1}
        spaceBetween={10}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        className="mySwiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative">
              <img
                src={slide.image}
                alt={`Slide ${index + 1}`}
                onError={(e) => {
                  e.target.src = fallbackImage;
                }}
                className="object-cover w-full h-full transition duration-300 border-1 border-White hover:border-Black"
              />
              <div className="absolute right-0 py-3 text-2xl font-medium text-Text lg:bottom-10 font-title bottom-5 left-5 lg:left-10 text-start">
                {slide.text}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperCarousel;