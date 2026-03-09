import type { Metadata } from "next"
import Link from "next/link"
import { PhoneIcon, ArrowRightIcon } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"
import { Separator } from "@/components/ui/separator"

export const metadata: Metadata = {
  title: "Ersatzwagen",
  description:
    "Ersatzwagen zu günstigen Konditionen bei Autohaus Oßwald in Diepholz. Mobil bleiben während der Reparatur.",
}

const otherServices = [
  { title: "Inspektion", href: "/leistungen/inspektion" },
  { title: "24-Stunden-Annahme", href: "/leistungen/24-stunden-annahme" },
  {
    title: "Reifen- und Winterservice",
    href: "/leistungen/reifen-und-winterservice",
  },
]

export default function ErsatzwagenPage() {
  return (
    <div className="py-24 px-6">
      <div className="mx-auto max-w-3xl">
        {/* Breadcrumb */}
        <AnimatedSection>
          <nav className="mb-12">
            <ol className="flex items-center gap-2 text-sm font-light text-foreground/50">
              <li>
                <Link
                  href="/leistungen"
                  className="transition-colors hover:text-foreground"
                >
                  Leistungen
                </Link>
              </li>
              <li>/</li>
              <li className="text-foreground">Ersatzwagen</li>
            </ol>
          </nav>
        </AnimatedSection>

        {/* Title */}
        <AnimatedSection>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Ersatzwagen
          </h1>
        </AnimatedSection>

        {/* Content */}
        <AnimatedSection delay={0.1}>
          <p className="mt-10 text-lg font-light leading-relaxed text-foreground/80">
            Während Sie Ihr Auto zur Überarbeitung in unserer Werkstatt lassen,
            können wir Ihnen einen Ersatzwagen anbieten. Zu günstigen
            Konditionen bleiben Sie so mobil!
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <p className="mt-4 text-base font-light leading-relaxed text-foreground/60">
            Rufen Sie uns an und informieren Sie sich! Wir finden die passende
            Lösung, damit Sie auch während der Reparatur flexibel bleiben.
          </p>
        </AnimatedSection>

        {/* CTA */}
        <AnimatedSection delay={0.3}>
          <div className="mt-12">
            <a
              href="tel:+495441975551"
              className="inline-flex items-center gap-2.5 rounded-lg bg-brand px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-brand/90"
            >
              <PhoneIcon className="size-4" />
              +49 5441 / 975551
            </a>
          </div>
        </AnimatedSection>

        {/* Separator */}
        <div className="py-16">
          <Separator />
        </div>

        {/* Other Services Nav */}
        <AnimatedSection delay={0.1}>
          <p className="text-xs font-medium uppercase tracking-widest text-foreground/40">
            Weitere Services
          </p>
          <nav className="mt-6 space-y-3">
            {otherServices.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group flex items-center justify-between rounded-lg border border-border/60 px-5 py-4 transition-colors hover:border-brand/40 hover:bg-muted/30"
              >
                <span className="text-sm font-light">{service.title}</span>
                <ArrowRightIcon className="size-4 text-foreground/30 transition-all group-hover:translate-x-1 group-hover:text-brand" />
              </Link>
            ))}
          </nav>
        </AnimatedSection>
      </div>
    </div>
  )
}
