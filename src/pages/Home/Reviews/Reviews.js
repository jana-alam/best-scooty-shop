import React from "react";
import Review from "../Review/Review";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import { Pagination, Autoplay } from "swiper";
import review from "../../../images/review-img.jpg";

import "swiper/swiper-bundle.min.css";

const Reviews = () => {
  return (
    <section className="">
      <h1 className="text-center text-6xl text-gray-600 font-semibold mb-6 sm:mb-12">
        Happy <span className="text-red-600">Customers!</span>
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 items-center bg-red-50">
        <div className="w-10/12 mx-auto">
          <Swiper
            speed={1000}
            autoplay={{ delay: 3000 }}
            modules={[Autoplay, Pagination]}
            spaceBetween={50}
            slidesPerView="auto"
            pagination={{
              clickable: true,
            }}
          >
            <SwiperSlide>
              <Review></Review>
            </SwiperSlide>
            <SwiperSlide>
              <Review></Review>
            </SwiperSlide>
            <SwiperSlide>
              <Review></Review>
            </SwiperSlide>
            <SwiperSlide>
              <Review></Review>
            </SwiperSlide>
          </Swiper>
        </div>
        {/* image section */}
        <div>
          <img src={review} alt="Review" className="w-full" />
        </div>
      </div>
    </section>
  );
};

export default Reviews;
