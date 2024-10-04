"use client"

import { whoCanJoinUsData } from "@/utils/data"
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io"
import Image from "next/image"
import React from "react"
import Slider from "react-slick"

const ThirdSection = () => {
  const sliderRef = React.useRef(null)

  // Slick Slider settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Default: show 3 items
    slidesToScroll: 1,
    centerMode: false, // Not centered by default
    arrows: false,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2, // On tablet, show 2 items
          centerMode: false,
        },
      },
      {
        breakpoint: 640, // Mobile view settings
        settings: {
          slidesToShow: 1, // Show only one item
          centerMode: true, // Center the item
          centerPadding: "0px", // No padding to ensure full visibility of one item
        },
      },
    ],
  }

  return (
    <div className="h-auto px-5 pt-32 pb-40 bg-[url('/banner03.png')] bg-cover">
      <div className="flex flex-col items-center h-full gap-5 max-w-screen-lg mx-auto">
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-4xl text-[#486601] text-center font-semibold">
            Who Can Join Us?
          </h1>
          <p className="text-xl text-shoonya-black italic text-center">
            We invite collaborations across all sectors to plant the roots of
            change for the future. <br /> Your Present, for Our Green Future
          </p>
        </div>

        <div className="w-full">
          <Slider ref={sliderRef} {...settings}>
            {whoCanJoinUsData.map((item, index) => {
              return (
                <div key={index} className="flex justify-center">
                  {/* Circle container with dynamic width and height */}
                  <img
                    src="/whoCanJoinUs/icon02.svg"
                    width={35}
                    height={35}
                    alt="icon"
                    className="w-10 h-10"
                  />
                  <img
                    src="/whoCanJoinUs/icon02.png"
                    width={35}
                    height={35}
                    alt="icon"
                    className="w-10 h-10"
                  />
                  <div className="flex flex-col items-center justify-start gap-4 bg-[url('/whoCanJoinUs/circle.png')] bg-cover bg-center w-[400px] h-[400px] p-5">
                    {/* Image with fixed height to align */}
                    <Image
                      src="/whoCanJoinUs/icon02.png"
                      width={35}
                      height={35}
                      alt="icon"
                      className="w-10 h-10"
                    />
                    <div className="flex justify-center items-center h-[50px] mt-20">
                      <Image
                        src="/whoCanJoinUs/icon02.png"
                        width={35}
                        height={35}
                        alt="icon"
                        className="w-10 h-10"
                      />
                    </div>

                    {/* Description */}
                    <p className="text-sm text-[#333536] text-center w-3/5">
                      <span className="text-shoonya-purple">{item.title}</span>{" "}
                      {item.desc}
                    </p>
                  </div>
                </div>
              )
            })}
          </Slider>
        </div>

        <h2 className="text-xl text-[#141414] text-center">
          <span className="font-semibold text-shoonya-purple">
            {" "}
            And you. <br /> Every individual,{" "}
          </span>{" "}
          with the power to become a steward of change.
        </h2>

        <div className="flex items-center justify-center gap-2">
          {/* Left arrow button, hidden by default and shown on mobile */}
          <button
            className="p-2.5 bg-white border rounded-full text-2xl "
            onClick={() => sliderRef.current.slickPrev()}
          >
            <IoIosArrowRoundBack />
          </button>

          {/* Right arrow button, hidden by default and shown on mobile */}
          <button
            className="p-2.5 bg-white border rounded-full text-2xl "
            onClick={() => sliderRef.current.slickNext()}
          >
            <IoIosArrowRoundForward />
          </button>
        </div>
      </div>
    </div>
  )
}

export default ThirdSection
