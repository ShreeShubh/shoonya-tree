"use client"

import { millionTreesData } from "@/utils/data"
import Slider from "react-slick"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Link from "next/link"

const Power = () => {
  // Slick slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Number of items to show (adjust based on your layout)
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024, // for medium screens and below
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640, // for mobile screens
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <div className="h-auto px-5 pt-5 md:pt-10 pb-16">
      <div className="flex flex-col items-center h-full gap-5 max-w-screen-lg mx-auto">
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-2xl md:text-4xl text-[#486601] text-center font-semibold">
            The Power of 1 Million Trees
          </h1>
          <p className="text-lg md:text-xl text-shoonya-black italic text-center">
            The figures used are rough estimates based on scientific
            calculations, with slight variations expected.
          </p>
        </div>

        <div className="mt-7 w-full">
          <Slider {...settings}>
            {millionTreesData.map((item, index) => {
              return (
                <div key={index} className="px-2">
                  {/* Set a fixed height for each item */}
                  <div className="rounded flex flex-col h-[250px] md:h-[300px] w-full md:w-[300px] overflow-hidden mx-auto">
                    {/* Adjust height as necessary */}
                    <div className="flex flex-col h-full">
                      {/* Title Section */}
                      <div className="bg-gradient-to-r from-[#A1B300] to-[#D9D98C] flex justify-center items-center py-2 rounded-t">
                        <h2 className="text-lg md:text-xl text-[#374708]">
                          {item.title}
                        </h2>
                      </div>

                      {/* Content Section */}
                      <div className="p-3 text-[#141414] border border-[#B8D0CB] border-t-0 rounded-b flex flex-col gap-3 h-full">
                        <p className="text-base md:text-lg">{item.desc01}</p>

                        {/* Description */}
                        <div
                          className="text-base md:text-lg flex-grow overflow-auto"
                          dangerouslySetInnerHTML={{ __html: item.desc02 }}
                        ></div>

                        {/* Source Section */}
                        <Link href={item.link} target="_blank">
                          <p className="text-base md:text-lg text-[#333536] mt-auto">
                            Source:{" "}
                            <span className="text-[#05AC8D]">
                              {item.source}
                            </span>
                          </p>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default Power
