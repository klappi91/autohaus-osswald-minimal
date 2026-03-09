"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { MenuIcon, PhoneIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Verkauf", href: "/verkauf" },
  { label: "Unser Betrieb", href: "/unser-betrieb" },
] as const

const leistungenLinks = [
  { label: "Inspektion", href: "/leistungen/inspektion", description: "Regelmäßige Wartung für alle Marken" },
  { label: "24-Stunden-Annahme", href: "/leistungen/24-stunden-annahme", description: "Fahrzeugabgabe rund um die Uhr" },
  { label: "Ersatzwagen", href: "/leistungen/ersatzwagen", description: "Mobil bleiben während der Reparatur" },
  { label: "Reifen- und Winterservice", href: "/leistungen/reifen-und-winterservice", description: "Saisonaler Reifen- und Wintercheck" },
] as const

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-sm supports-backdrop-filter:bg-white/80">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/brand/logo.jpg"
            alt="Autohaus Oßwald"
            width={120}
            height={40}
            className="h-10 w-auto"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            {navLinks.map((link) => (
              <NavigationMenuItem key={link.href}>
                <NavigationMenuLink
                  render={<Link href={link.href} />}
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "font-light tracking-wide text-foreground/80 hover:text-foreground"
                  )}
                >
                  {link.label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}

            {/* Leistungen with dropdown */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="font-light tracking-wide text-foreground/80 hover:text-foreground">
                Leistungen
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[340px] gap-1 p-2">
                  {leistungenLinks.map((link) => (
                    <li key={link.href}>
                      <NavigationMenuLink
                        render={<Link href={link.href} />}
                        className="block rounded-md px-3 py-2.5 transition-colors hover:bg-muted"
                      >
                        <span className="text-sm font-medium">{link.label}</span>
                        <p className="mt-0.5 text-xs text-muted-foreground font-light">
                          {link.description}
                        </p>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                render={<Link href="/kontakt" />}
                className={cn(
                  navigationMenuTriggerStyle(),
                  "font-light tracking-wide text-foreground/80 hover:text-foreground"
                )}
              >
                Kontakt
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Right side: Phone + Mobile hamburger */}
        <div className="flex items-center gap-3">
          <a
            href="tel:+495441975551"
            className="hidden items-center gap-1.5 text-sm font-light text-foreground/70 transition-colors hover:text-brand sm:flex"
          >
            <PhoneIcon className="size-3.5" />
            <span>+49 5441 / 975551</span>
          </a>

          {/* Mobile menu */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger
              render={
                <Button variant="ghost" size="icon" className="lg:hidden" />
              }
            >
              <MenuIcon className="size-5" />
              <span className="sr-only">Menü öffnen</span>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] p-0">
              <SheetHeader className="border-b px-6 py-4">
                <SheetTitle className="text-left text-sm font-medium tracking-wide">
                  Menü
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col px-4 py-4">
                {navLinks.map((link) => (
                  <SheetClose
                    key={link.href}
                    render={<Link href={link.href} />}
                  >
                    <span className="block rounded-md px-3 py-2.5 text-sm font-light tracking-wide text-foreground/80 transition-colors hover:bg-muted hover:text-foreground">
                      {link.label}
                    </span>
                  </SheetClose>
                ))}

                <Separator className="my-2" />
                <span className="px-3 py-2 text-xs font-medium uppercase tracking-widest text-muted-foreground">
                  Leistungen
                </span>
                {leistungenLinks.map((link) => (
                  <SheetClose
                    key={link.href}
                    render={<Link href={link.href} />}
                  >
                    <span className="block rounded-md px-3 py-2.5 text-sm font-light tracking-wide text-foreground/80 transition-colors hover:bg-muted hover:text-foreground">
                      {link.label}
                    </span>
                  </SheetClose>
                ))}

                <Separator className="my-2" />
                <SheetClose render={<Link href="/kontakt" />}>
                  <span className="block rounded-md px-3 py-2.5 text-sm font-light tracking-wide text-foreground/80 transition-colors hover:bg-muted hover:text-foreground">
                    Kontakt
                  </span>
                </SheetClose>

                <Separator className="my-3" />
                <a
                  href="tel:+495441975551"
                  className="flex items-center gap-2 rounded-md px-3 py-2.5 text-sm font-light text-brand transition-colors hover:bg-muted"
                >
                  <PhoneIcon className="size-3.5" />
                  +49 5441 / 975551
                </a>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
      <div className="mx-auto max-w-6xl border-b border-border/50" />
    </header>
  )
}
