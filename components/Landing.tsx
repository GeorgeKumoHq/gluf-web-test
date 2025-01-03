"use client"

import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import Banner from "./Banner"

export default function Landing() {
  const pathname = usePathname()

  const [platform, setPlatform] = useState("")
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    function getPlatform() {
      const userAgent = navigator.userAgent

      if (/Android/i.test(userAgent)) {
        return "android"
      } else if (/iPhone|iPad|iPod/i.test(userAgent)) {
        return "ios"
      } else if (/Windows|Macintosh|Linux/i.test(userAgent)) {
        return "web"
      } else {
        return "unknown"
      }
    }
    setShowBanner(true)
    const platform = getPlatform()
    if (platform) {
      setPlatform(platform)
    }
    console.log("User is on:", platform)
  }, [])

  useEffect(() => {
    if (pathname === "/") return
    if (platform === "android") {
      try {
        window.location.href = `gluf-app://${pathname}`
      } catch (error) {
        console.error("Error navigating to app:", error)
      }
    } else {
      console.log("Platform does not support deep linking")
    }
  }, [pathname, platform])

  const onClose = () => {
    setShowBanner(false)
  }
  const handleOpenApp = () => {
    if (platform === "android") {
      window.location.href = `gluf-app://${pathname}`
    } else {
      console.log("Platform does not support deep linking")
    }
  }

  return (
    <>
      {showBanner && <Banner onOpen={handleOpenApp} onClose={onClose} />}
      <div className="container mx-auto sm:px-0 px-8 sm:py-12 py-8">
        <nav className="flex items-center justify-center">
          <h1 className="text-4xl text-black">Download Gluf</h1>
        </nav>
        <div className="flex sm:flex-row flex-col items-center justify-center mt-16 sm:gap-x-8 gap-y-8"></div>
        <div className="flex sm:flex-row flex-col items-center justify-center mt-16 sm:gap-x-8 gap-y-8">
          <a href="" target="_blank">
            <img
              src="/apple.png"
              alt="gluf screens"
              className="sm:h-[60px] sm:w-auto"
            />
          </a>
          <a href="" target="_blank">
            <img
              src="/google.png"
              alt="gluf screens"
              className="sm:h-[60px] sm:w-auto"
            />
          </a>
        </div>
      </div>
    </>
  )
}
