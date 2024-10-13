"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from 'next/image'

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

export function MainNav() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = React.useState(false)

  const navItems = [
    { href: "/", label: "Accueil" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "À propos" },
    { href: "/testimonials", label: "Témoignages" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <div className="flex items-center justify-between w-full">
      <Link href="/" className="flex flex-col items-center">
        <Image
          src="/logo.png"
          alt="AssiteraConsulting Logo"
          width={40}
          height={40}
        />
        <span className="text-xs font-semibold mt-0">AssiteraConsulting</span>
      </Link>

      <nav className="hidden md:flex items-center space-x-4 lg:space-x-">
        {navItems.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              pathname === href
                ? "text-primary"
                : "text-muted-foreground"
            )}
          >
            {label}
          </Link>
        ))}
      </nav>

      <div className="hidden md:block">
        <Button asChild>
          <Link href="/contact">Contactez-nous</Link>
        </Button>
      </div>

      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild className="md:hidden">
          <Button variant="outline" size="icon">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right">
          <nav className="flex flex-col space-y-4 mt-4">
            {navItems.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  pathname === href
                    ? "text-primary"
                    : "text-muted-foreground"
                )}
                onClick={() => setIsOpen(false)}
              >
                {label}
              </Link>
            ))}
            <Button asChild className="mt-4">
              <Link href="/contact" onClick={() => setIsOpen(false)}>Contactez-nous</Link>
            </Button>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  )
}