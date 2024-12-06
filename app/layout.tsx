import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Gluf for restaurants",
  description:
    "Gluf is the go-to app for restaurants to connect, discuss & track content in one single place",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className + " bg-white"}>{children}</body>
    </html>
  )
}
