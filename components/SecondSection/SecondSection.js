import Image from "next/image"
import React from "react"

const SecondSection = () => {
  return (
    <div className="h-auto px-5 pb-40 bg-[url('/banner02.png')] bg-cover justify-center">
      <div className="flex flex-col items-center justify-between text-white h-full gap-10 md:gap-16 max-w-screen-lg mx-auto">
        {/* Border */}
        <div className="border-b border-dashed border-shoonya-green w-full" />

        {/* Heading and Subheading */}
        <div className="flex flex-col items-center gap-3 md:gap-4">
          <h1 className="text-2xl md:text-4xl text-[#486601] text-center font-semibold">
            What happens when you start with Shoonya?
          </h1>
          <p className="text-lg md:text-xl text-shoonya-black italic text-center">
            At Shoonya, we don’t just plant trees, we grow a greener hope for
            the future.
          </p>
        </div>

        {/* Paragraph */}
        <p className="text-shoonya-black text-lg md:text-2xl text-center">
          At the heart of our initiative is a commitment{" "}
          <br className="hidden md:inline" />
          to local ecosystems and communities.
        </p>

        {/* Map and List Section */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 mt-5">
          <Image
            src="/map.svg"
            width={410}
            height={410}
            className="w-[250px] md:w-[410px]"
            alt="map"
          />

          <ul className="list-disc text-base md:text-lg text-shoonya-black w-full md:w-[421px] flex flex-col gap-4 md:gap-5">
            <li>
              We identify ecologically sensitive zones and collaborate with
              local vulnerable communities from the area, empowering the
              livelihoods of the farmers from these communities.
            </li>
            <li>
              Farmers become stewards of the land, their knowledge and care
              nurturing a verdant future with the promise of long-term economic
              benefits.
            </li>
          </ul>
        </div>

        {/* Final Paragraph */}
        <p className="text-base md:text-xl text-shoonya-black text-center mt-5 md:mt-10">
          Our reforestation project directly benefits the biosphere by
          strategically growing native trees in ecologically sensitive zones.
          These trees act as natural filters, removing harmful pollutants and
          enriching the air we breathe. They also provide vital habitats for
          diverse species, promoting biodiversity and restoring ecological
          balance.
        </p>
      </div>
    </div>
  )
}

export default SecondSection
