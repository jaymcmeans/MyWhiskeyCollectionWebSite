import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"
import { Provider } from "@/components/ui/provider"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  title: "MyWhiskeyCollection — Track & Manage Your Whiskey Collection",
  description:
    "A personal whiskey collection manager with dashboard analytics, bottle tracking, distillery directory, and CSV import. Request access today.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable}`}>
        <Provider>
          <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
            <Header />
            <main style={{ flex: 1 }}>
              {children}
            </main>
            <Footer />
          </div>
        </Provider>
      </body>
    </html>
  )
}
