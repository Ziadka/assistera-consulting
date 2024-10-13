import { MainNav } from "@/components/main-nav"
import "./globals.css"
import { Inter } from "next/font/google"
import { Metadata } from 'next'

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "AssiteraConsulting",
  description: "Solutions d'assistance virtuelle pour petites entreprises",
  icons: {
    icon: '/logo.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={`${inter.className} bg-gradient-to-b from-black to-gray-900 min-h-screen`}>
        <header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/60">
          <div className="container flex h-14 items-center">
            <MainNav />
          </div>
        </header>
        <main>{children}</main>
        <footer className="border-t border-gray-800 bg-black">
          <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
            <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
              <p className="text-center text-sm leading-loose md:text-left text-gray-400">
                © 2024 AssiteraConsulting. Tous droits réservés.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}