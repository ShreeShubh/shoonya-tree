"use client"

import { useRef } from "react"

import Header from "@/components/Header/Header"
import StartWithShoonya from "@/components/StartWithShoonya/StartWithShoonya"
import WhoCanJoinUs from "@/components/WhoCanJoinUs/WhoCanJoinUs"
import GrowEngageFacilitate from "@/components/GrowEngageFacilitate/GrowEngageFacilitate"
import WhoDoWeAim from "@/components/WhoDoWeAim/WhoDoWeAim"
import Power from "@/components/Power/Power"
import Support from "@/components/Support/Support"
import GetInvolved from "@/components/GetInvolved/GetInvolved"
import Footer from "@/components/Footer/Footer"

const HomePage = () => {
  const scrollToRef = useRef(null)
  return (
    <>
      <Header scrollToRef={scrollToRef} />
      <StartWithShoonya />
      <WhoCanJoinUs scrollToRef={scrollToRef} />
      <GrowEngageFacilitate />
      <WhoDoWeAim />
      <Power />
      <div ref={scrollToRef}>
        <GetInvolved />
      </div>
      <Support />

      <Footer />
    </>
  )
}

export default HomePage
