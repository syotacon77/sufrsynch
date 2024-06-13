import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/autoplay";

const consultings = [
  {
    name: "Degital Strategy",
    icon: "/ser8.svg",
    image: "/ser2.png",
  },
  {
    name: "Data Analytics",
    icon: "/ser8.svg",
    image: "/ser2.png",
  },
  {
    name: "Business Intelligence",
    icon: "/ser8.svg",
    image: "/ser2.png",
  },
  {
    name: "Planning Support",
    icon: "/ser8.svg",
    image: "/ser2.png",
  },
];
const doubledConsultings = [...consultings, ...consultings];

const developments = [
  {
    name: "Front-End System",
    icon: "/ser8.svg",
    image: "/ser2.png",
  },
  {
    name: "Back-End System",
    icon: "/ser8.svg",
    image: "/ser2.png",
  },
  {
    name: "Cloud Solutions",
    icon: "/ser8.svg",
    image: "/ser2.png",
  },
  {
    name: "Maintenance Operations",
    icon: "/ser8.svg",
    image: "/ser2.png",
  },
];
const doubledDevelopments = [...developments, ...developments];

const creatives = [
  {
    name: "UI/UX Design",
    icon: "/ser8.svg",
    image: "/ser2.png",
  },
  {
    name: "Graphic Design",
    icon: "/ser8.svg",
    image: "/ser2.png",
  },
  {
    name: "Game Art & Assets",
    icon: "/ser8.svg",
    image: "/ser2.png",
  },
  {
    name: "Visual Storytelling",
    icon: "/ser8.svg",
    image: "/ser2.png",
  },
];
const doubledCreatives = [...creatives, ...creatives];

export default function WhatWeDo() {
  return (
    <div>
      <div className="mb-16 flex items-center gap-16">
        <div className="w-full border-b-8 border-black"></div>
        <h1 className="aspect-square border-8 border-black text-center text-9xl">
          What{" "}
          <span className="inline-block bg-gradient-to-r from-[#419dc1] to-blue-500 bg-clip-text text-transparent">
            We
          </span>{" "}
          Do
        </h1>
        <div className="w-full border-b-8 border-black"></div>
      </div>

      <div className="space-y-16">
        <div>
          <h2 className="relative z-10 text-left text-8xl">Consulting</h2>
          <div className="-mt-8 flex">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={30}
              slidesPerView="auto"
              loop={true}
              autoplay={{
                delay: 1500,
                disableOnInteraction: false,
              }}
              speed={5000}
              dir="rtl"
              className="swiper-container"
            >
              {doubledConsultings.map((consulting, index) => (
                <SwiperSlide
                  key={`${consulting.name}-${index}`}
                  style={{ width: "420px" }}
                >
                  <div className="grid grid-cols-2 gap-8 bg-gray-50 p-8">
                    <div className="col-span-1 flex items-center">
                      <Image
                        src={consulting.image}
                        width={60}
                        height={50}
                        className="size-80 object-cover"
                        alt={consulting.name}
                      />
                    </div>
                    <div className="col-span-1 flex items-center">
                      <div>
                        <div
                          className="flex"
                          style={{ justifyContent: "left" }}
                        >
                          <Image
                            src={consulting.icon}
                            width={80}
                            height={80}
                            className="size-20 object-cover"
                            alt={consulting.name}
                          />
                        </div>
                        <div className="mt-8">
                          <h5 className="text-left text-3xl">
                            {consulting.name}
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        <div>
          <h2 className="relative z-10 text-right text-8xl">Development</h2>
          <div className="-mt-8 flex">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={30}
              slidesPerView="auto"
              loop={true}
              autoplay={{
                delay: 1500,
                disableOnInteraction: false,
              }}
              speed={5000}
              className="swiper-container"
            >
              {doubledDevelopments.map((development, index) => (
                <SwiperSlide
                  key={`${development.name}-${index}`}
                  style={{ width: "420px" }}
                >
                  <div className="grid grid-cols-2 gap-8 bg-gray-50 p-8">
                    <div className="col-span-1 flex items-center">
                      <Image
                        src={development.image}
                        width={60}
                        height={50}
                        className="size-80 object-cover"
                        alt={development.name}
                      />
                    </div>
                    <div className="col-span-1 flex items-center">
                      <div>
                        <div
                          className="flex"
                          style={{ justifyContent: "right" }}
                        >
                          <Image
                            src={development.icon}
                            width={80}
                            height={80}
                            className="size-20 object-cover"
                            alt={development.name}
                          />
                        </div>
                        <div className="mt-8">
                          <h5 className="text-right text-3xl">
                            {development.name}
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        <div>
          <h2 className="relative z-10 text-left text-8xl">Creative</h2>
          <div className="-mt-8 flex">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={30}
              slidesPerView="auto"
              loop={true}
              autoplay={{
                delay: 1500,
                disableOnInteraction: false,
              }}
              speed={5000}
              dir="rtl"
              className="swiper-container"
            >
              {doubledCreatives.map((creative, index) => (
                <SwiperSlide
                  key={`${creative.name}-${index}`}
                  style={{ width: "420px" }}
                >
                  <div className="grid grid-cols-2 gap-8 bg-gray-50 p-8">
                    <div className="col-span-1 flex items-center">
                      <Image
                        src={creative.image}
                        width={60}
                        height={50}
                        className="size-80 object-cover"
                        alt={creative.name}
                      />
                    </div>
                    <div className="col-span-1 flex items-center">
                      <div>
                        <div
                          className="flex"
                          style={{ justifyContent: "left" }}
                        >
                          <Image
                            src={creative.icon}
                            width={80}
                            height={80}
                            className="size-20 object-cover"
                            alt={creative.name}
                          />
                        </div>
                        <div className="mt-8">
                          <h5 className="text-left text-3xl">
                            {creative.name}
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
