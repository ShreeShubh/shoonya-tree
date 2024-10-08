import Header from "@/components/Header/Header"
import StartWithShoonya from "@/components/StartWithShoonya/StartWithShoonya"
import WhoCanJoinUs from "@/components/WhoCanJoinUs/WhoCanJoinUs"
import GrowEngageFacilitate from "@/components/GrowEngageFacilitate/GrowEngageFacilitate"
import WhoDoWeAim from "@/components/WhoDoWeAim/WhoDoWeAim"
import Power from "@/components/Power/Power"
import Support from "@/components/Support/Support"
import GetInvolved from "@/components/GetInvolved/GetInvolved"
import Footer from "@/components/Footer/Footer"

export default function Home() {
  return (
    <>
      <Header />
      <StartWithShoonya />
      <WhoCanJoinUs />
      <GrowEngageFacilitate />
      <WhoDoWeAim />
      <Power />
      <Support />
      <GetInvolved />
      <Footer />
    </>
  )
}
