import Image from "next/image"

const Header = () => {
  return (
    <div className="h-screen px-5 pt-10 pb-16 bg-[url('/banner.jpg')] bg-cover">
      <div className="flex flex-col items-center justify-between text-white h-full">
        <Image src="/logo.svg" width={187} height={59} alt="shoonya logo" />
        <Image
          src="/rootsLogo.svg"
          width={324}
          height={147}
          alt="shoonya logo"
        />
        <h1 className="text-3xl font-semibold">
          We are on a mission to grow 1 Million trees by 2025
        </h1>
        <button className="bg-shoonya-green text-lg px-5 py-2 rounded-3xl hover:ring-4 ring-shoonya-green/30">
          Join the Movement
        </button>
      </div>
    </div>
  )
}

export default Header
