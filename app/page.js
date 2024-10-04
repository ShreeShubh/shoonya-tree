import FifthSection from "@/components/FifthSection/FifthSection"
import FirstSection from "@/components/FirstSection/FirstSection"
import Footer from "@/components/Footer/Footer"
import ForthSection from "@/components/ForthSection/ForthSection"
import GetInvolved from "@/components/GetInvolved/GetInvolved"
import Power from "@/components/Power/Power"
import SecondSection from "@/components/SecondSection/SecondSection"
import Support from "@/components/Support/Support"
import ThirdSection from "@/components/ThirdSection.js/ThirdSection"

export default function Home() {
  return (
    <>
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <ForthSection />
      <FifthSection />
      <Power />
      <Support />
      <GetInvolved />
      <Footer />
    </>
  )
}
