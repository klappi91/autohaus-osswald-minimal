import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRightIcon } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"
import { Separator } from "@/components/ui/separator"

export const metadata: Metadata = {
  title: "Leistungen",
  description:
    "Alle Kfz-Leistungen im Überblick: Reparaturen, Inspektionen, TÜV/AU, Oldtimer, US-Cars und mehr. Autohaus Oßwald in Diepholz.",
}

const servicesLeft = [
  "Reparaturen aller Art",
  "Steinschlag Reparatur",
  "Unfall / Karosserie",
  "Lackierung",
  "Motor",
  "Getriebe",
]

const servicesRight = [
  "Wartung / Inspektionen",
  "Ölwechsel",
  "Inspektion",
  "Motordiagnose",
  "Klimaanlagenservice",
  "Oldtimer / US-Cars",
  "TÜV / AU",
  "Ersatzteilverkauf",
]

const subServices = [
  {
    title: "Inspektion",
    description: "Attraktive Komplettpreise für alle Marken",
    href: "/leistungen/inspektion",
  },
  {
    title: "24-Stunden-Annahme",
    description: "Fahrzeugabgabe rund um die Uhr",
    href: "/leistungen/24-stunden-annahme",
  },
  {
    title: "Ersatzwagen",
    description: "Mobil bleiben während der Reparatur",
    href: "/leistungen/ersatzwagen",
  },
  {
    title: "Reifen- und Winterservice",
    description: "Saisonaler Check und Reifenwechsel",
    href: "/leistungen/reifen-und-winterservice",
  },
]

export default function LeistungenPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[40vh] min-h-[320px] w-full overflow-hidden">
        <Image
          src="/images/emotionheader5810301970.jpg"
          alt="Werkstatt Leistungen"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto w-full max-w-3xl px-6 pb-12">
            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Leistungen
            </h1>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-3xl">
          <AnimatedSection>
            <p className="text-lg font-light leading-relaxed text-foreground/80">
              ATO - Autotechnik Oßwald ist eine freie, typenoffene
              Kfz-Fachwerkstatt. Das bedeutet: Wir arbeiten an allen Marken und
              Modellen - ob europäisch, japanisch oder amerikanisch, ob Oldtimer
              oder Neuwagen.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <p className="mt-6 text-base font-light leading-relaxed text-foreground/60">
              Unser Anspruch ist es, Ihnen Meisterqualität zu fairen und
              transparenten Preisen zu bieten. Vor jeder Reparatur erhalten Sie
              einen detaillierten Kostenvoranschlag - ohne versteckte Kosten,
              ohne Überraschungen. Vertrauen und Ehrlichkeit sind die Basis
              unserer Arbeit.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-6">
        <Separator />
      </div>

      {/* Service List */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-3xl">
          <AnimatedSection>
            <h2 className="text-2xl font-semibold tracking-tight">
              Unser Leistungsspektrum
            </h2>
          </AnimatedSection>

          <div className="mt-12 grid gap-12 sm:grid-cols-2">
            <AnimatedSection delay={0.1}>
              <ul className="space-y-4">
                {servicesLeft.map((service) => (
                  <li
                    key={service}
                    className="flex items-center gap-3 text-base font-light text-foreground/80"
                  >
                    <span className="h-px w-4 bg-brand" />
                    {service}
                  </li>
                ))}
              </ul>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <ul className="space-y-4">
                {servicesRight.map((service) => (
                  <li
                    key={service}
                    className="flex items-center gap-3 text-base font-light text-foreground/80"
                  >
                    <span className="h-px w-4 bg-brand" />
                    {service}
                  </li>
                ))}
              </ul>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-6">
        <Separator />
      </div>

      {/* Pricing Philosophy */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-3xl">
          <AnimatedSection>
            <h2 className="text-2xl font-semibold tracking-tight">
              Unsere Preise
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <p className="mt-8 text-base font-light leading-relaxed text-foreground/80">
              Transparenz bei den Kosten ist uns besonders wichtig. Vor jeder
              Arbeit an Ihrem Fahrzeug erstellen wir einen detaillierten
              Kostenvoranschlag. So wissen Sie immer genau, was auf Sie zukommt.
              Sollten während der Reparatur zusätzliche Arbeiten notwendig
              werden, sprechen wir das selbstverständlich vorher mit Ihnen ab.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p className="mt-4 text-base font-light leading-relaxed text-foreground/60">
              Als freie Werkstatt sind wir nicht an die Preisstrukturen der
              Hersteller gebunden. Das ermöglicht uns, Ihnen faire Preise bei
              gleichbleibend hoher Qualität zu bieten. Überzeugen Sie sich
              selbst.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-6">
        <Separator />
      </div>

      {/* Sub-Service Cards */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-3xl">
          <AnimatedSection>
            <h2 className="text-2xl font-semibold tracking-tight">
              Weitere Services
            </h2>
          </AnimatedSection>

          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {subServices.map((service, i) => (
              <AnimatedSection key={service.href} delay={0.1 * (i + 1)}>
                <Link
                  href={service.href}
                  className="group flex flex-col justify-between rounded-lg border border-border/60 p-6 transition-colors hover:border-brand/40 hover:bg-muted/30"
                >
                  <div>
                    <h3 className="text-base font-medium tracking-tight">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm font-light text-foreground/60">
                      {service.description}
                    </p>
                  </div>
                  <div className="mt-6 flex items-center gap-1.5 text-sm font-light text-brand">
                    Mehr erfahren
                    <ArrowRightIcon className="size-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
