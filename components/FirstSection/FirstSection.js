import Image from "next/image"

const FirstSection = () => {
  return (
    <div className="min-h-screen pb-40 bg-[url('/banner01.png')] bg-cover bg-center flex justify-center">
      <div className="flex flex-col items-center text-white h-full gap-24 mx-auto">
        <div className="bg-white px-7 py-5 rounded-b-2xl shadow">
          <Image src="/logo.svg" width={168} height={53} alt="shoonya logo" />
        </div>

        <div className="flex flex-col items-center gap-3">
          <Image
            src="/rootsLogo.svg"
            width={195}
            height={103}
            alt="shoonya logo"
          />
          <h1 className="text-xl md:text-2xl text-[#292929] italic text-center">
            Planting the Seeds of Tomorrow
          </h1>
        </div>

        <div className="flex flex-col items-center gap-10 md:gap-14 px-3">
          <h1 className="text-2xl md:text-4xl text-shoonya-black font-semibold text-center">
            We are on a mission to grow 1 Million trees by 2030
          </h1>

          <button className="relative bg-shoonya-green text-base md:text-lg px-4 md:px-5 py-2 rounded-3xl ring-4 ring-shoonya-green/30 shadow overflow-hidden group">
            <span className="absolute inset-0 bg-shoonya-purple origin-left scale-x-0 transition-transform duration-500 ease-in-out group-hover:scale-x-100"></span>
            <span className="relative z-10">Join the Movement</span>
          </button>
        </div>

        <div className="bg-white p-2 md:p-3 w-full mt-10">
          <video
            src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/shoonya/5382493-hd_1280_720_24fps.mp4"
            className="w-full h-full rounded-2xl"
            controls
            //poster="/videoPlaceholder.png"
          ></video>
        </div>

        <div className="flex flex-col md:flex-row gap-10 md:gap-20">
          <Image
            src="/tree.png"
            width={310}
            height={310}
            className="tree"
            alt="tree"
          />

          <div className="flex flex-col justify-center gap-3 md:gap-5 text-center md:text-left">
            <p className="text-base md:text-lg text-shoonya-purple">
              One Tree can absorb <br /> up to 22 kg of CO2 per year
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold text-shoonya-black">
              Imagine what <br /> 1 Million Trees Can Do.
            </h2>
          </div>
        </div>

        <div className="flex flex-col items-center gap-5 md:gap-7 mt-5 w-full md:w-3/4 px-4">
          <h2 className="text-shoonya-black text-2xl md:text-3xl text-center ">
            Our initiative began with a simple commitment, to work together and
            give back to the Earth and her people. With a deep-rooted focus on
            ecological balance and community empowerment, we aim for lasting
            sustainable impact.
          </h2>

          <p className="text-base md:text-lg text-[#141414] text-center mt-5 md:mt-10">
            Our vision is clear: to create a greener, more resilient planet by
            supporting the growth of native trees that support biodiversity and
            provide long-term benefits to both nature and people. Every tree
            planted today moves us closer to the ultimate goal,{" "}
            <span className="font-semibold">a net-zero future</span>.
          </p>

          <p className="text-base md:text-lg text-[#141414] text-center font-semibold">
            This is more than a project; it’s a collective act of love for the
            land we call home.
          </p>
        </div>
      </div>
    </div>
  )
}

export default FirstSection

{
  /* <div className=" flex w-full h-[525px]">
          <Image
            src="/videoPlaceholder.png"
            width={1000}
            height={500}
            className="w-full h-full"
          />
        </div> */
}
