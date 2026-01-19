import "./globals.css";
import type { RootLayoutProps } from "@/app/types"
import { Albert_Sans, Montserrat_Alternates } from "next/font/google"
import Navbar from "@/app/components/Navbar"
import NostrProfile from "@/app/components/NostrProfile"

const albertSans = Albert_Sans({
  subsets: ["latin"],
  display: "swap"
})

const montserratAlternates = Montserrat_Alternates({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat-alternates"
})

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html>
      <head>
        <script 
          type="module" 
          src="https://cdn.jsdelivr.net/npm/nostr-components@latest/dist/components/nostr-profile.es.js">
        </script>
      </head>
      <body className={`${albertSans.className} ${montserratAlternates.variable}`}>
        <Navbar />
        {children}
        <NostrProfile />
      </body>
    </html>
  );
}