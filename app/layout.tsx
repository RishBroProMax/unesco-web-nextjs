import { Montserrat, Playfair_Display } from "next/font/google"
import { MaintenanceMode } from "@/components/maintenance-mode"
import "./globals.css"

const montserrat = Montserrat({ 
  subsets: ["latin"],
  variable: "--font-montserrat",
})

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-playfair",
})

export const metadata = {
  title: "UNESCO Society - Mahinda Rajapaksha College Matara",
  description: "Official website of the UNESCO Society at Mahinda Rajapaksha College Matara",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const isMaintenanceMode = process.env.NEXT_PUBLIC_MAINTENANCE_MODE === 'true'

  return (
    <html lang="en" className={`scroll-smooth ${montserrat.variable} ${playfair.variable}`}>
      <body className={montserrat.className}>
        {isMaintenanceMode && <MaintenanceMode />}
        {children}
      </body>
    </html>
  )
}
