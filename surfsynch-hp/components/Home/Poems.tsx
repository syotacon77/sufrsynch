import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/autoplay";

export default function Poems() {
  return (
    <div className="relative z-0 whitespace-nowrap bg-black py-8 text-9xl">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 5,
          disableOnInteraction: false,
        }}
        speed={5000}
        className="text-white"
      >
        <SwiperSlide>
          <div className="outline-text">Latest Technology</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="outline-text">Future Creative</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="outline-text">Strategic Solutions</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="outline-text">Redefining the Future</div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
