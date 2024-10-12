"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

import Image from "next/image"

export function MainNav() {
  const pathname = usePathname()

  return (
    <div className="flex items-center justify-between w-full py-4">
      {/* Left Side: Logo */}
      <Link href="/" className="flex items-center space-x-2">
        <Image
          src="/logo.png"
          alt="AssiteraConsulting Logo"
          width={40}
          height={40}
        />
        <span className="font-bold text-xl">AssiteraConsulting</span>
      </Link>

      {/* Center: Nav links */}
      <nav className="flex-1 flex justify-center space-x-6">
        {[
          { href: "/", label: "Accueil" },
          { href: "/services", label: "Services" },
          { href: "/about", label: "À propos" },
          { href: "/testimonials", label: "Témoignages" },
        ].map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              pathname === href ? "text-primary" : "text-muted-foreground"
            )}
          >
            {label}
          </Link>
        ))}
      </nav>

      {/* Right Side: Contact button */}
      <div className="flex items-center">
        <Button asChild>
          <Link href="/contact">Contactez-nous</Link>
        </Button>
      </div>
    </div>
  )
}
