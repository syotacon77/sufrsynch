import Image from "next/image";

import Header from "@/components/Header";

export default function Hero() {
  return (
    <div className="bg-boxes-pattern pt-16">
      <Header />

      <div>
        <div className="relative mx-auto max-w-7xl pt-24">
          <div className="absolute bottom-16 left-[-400px] flex size-fit animate-spin-slow items-center justify-center">
            <svg
              className="m-8 rounded-full border-4 border-dashed border-gray-900/5 opacity-70"
              viewBox="0 1000 1000"
              width="500"
              height="500"
            >
              <defs>
                <path
                  id="textcircle"
                  d="M250,400 a150,150 0 0,1 0,-300a150,150 0 0,1 0,300Z"
                ></path>
              </defs>
              <text>
                <textPath
                  xlinkHref="#textcircle"
                  textLength="905"
                  className="text-3xl"
                >
                  Global Perspective to All Directions!
                </textPath>
              </text>
            </svg>

            <Image src="/logo.png" width={100} height={100} alt="Logo" />
          </div>

          <div className="pb-16 font-bold" style={{ fontSize: "200px" }}>
            <div className="-mb-16 flex text-left">
              <div className="relative">
                <div className="relative z-10">GOING</div>
                <div className="absolute left-2 top-2 text-gray-100">GOING</div>
              </div>
              <div className="ml-10 rotate-12">💎</div>
            </div>
            <div className="text-right">
              <div className="relative">
                <div className="relative z-10">BEYOND</div>
                <div className="absolute right-2 top-2 text-gray-100">
                  BEYOND
                </div>
              </div>
            </div>
          </div>

          <div className="relative grid grid-cols-2 pt-80">
            <div className="absolute left-72 space-y-8 text-6xl font-extralight text-gray-500">
              <div className="flex gap-16">
                <div>
                  <div className="flex cursor-pointer items-center justify-center duration-300 hover:font-normal hover:text-black">
                    CONSULTING
                  </div>
                </div>
                <div>/</div>
                <div>
                  <div className="flex cursor-pointer items-center justify-center duration-300 hover:font-normal hover:text-black">
                    DEVELOPMENT
                  </div>
                </div>
              </div>
              <div className="flex justify-center gap-16">
                <div>
                  <div className="flex cursor-pointer items-center justify-center duration-300 hover:font-normal hover:text-black">
                    CREATIVE
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-10 -right-80">
            <div className="scale-150 text-9xl font-extralight text-gray-300/30">
              Surfsynch B.V.
            </div>
          </div>

          <div className="absolute -right-80 -top-80">
            <svg
              className="m-8 animate-spin-slow rounded-full border-4 border-dashed border-gray-400 opacity-10"
              viewBox="0 1000 1000"
              width="500"
              height="500"
            >
              <defs>
                <path
                  id="textcircle"
                  d="M250,400 a150,150 0 0,1 0,-300a150,150 0 0,1 0,300Z"
                ></path>
              </defs>
              <text>
                <textPath
                  xlinkHref="#textcircle"
                  textLength="905"
                  className="text-3xl"
                >
                  Global Perspective to All Directions!
                </textPath>
              </text>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
