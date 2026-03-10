import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { PhoneIcon, ArrowRightIcon, CheckIcon } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"
import { Separator } from "@/components/ui/separator"

export const metadata: Metadata = {
  title: "Reifen- und Winterservice",
  description:
    "Wintercheck, Reifenwechsel und Einlagerung bei Autohaus Oßwald in Diepholz. Sicher durch die kalte Jahreszeit.",
}

const checklist = [
  "Abgasanlage",
  "Batterie",
  "Beleuchtung",
  "Bremsanlage",
  "Reifen",
  "Reifendruck",
  "Ölstand",
  "Scheibenwischanlage",
  "Türschlösser",
]

const otherServices = [
  { title: "Inspektion", href: "/leistungen/inspektion" },
  { title: "24-Stunden-Annahme", href: "/leistungen/24-stunden-annahme" },
  { title: "Ersatzwagen", href: "/leistungen/ersatzwagen" },
]

export default function ReifenWinterservicePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[40vh] min-h-[320px] w-full overflow-hidden">
        <Image
          src="/images/service-reifen-winterservice.webp"
          alt="Reifenwechsel und Winterservice"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto w-full max-w-3xl px-6 pb-12">
            <nav className="mb-4">
              <ol className="flex items-center gap-2 text-sm font-light text-white/70">
                <li>
                  <Link
                    href="/leistungen"
                    className="transition-colors hover:text-white"
                  >
                    Leistungen
                  </Link>
                </li>
                <li>/</li>
                <li className="text-white">Reifen- und Winterservice</li>
              </ol>
            </nav>
            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Reifen- und Winterservice
            </h1>
          </div>
        </div>
      </section>

      <div className="py-24 px-6">
        <div className="mx-auto max-w-3xl">

        {/* Content */}
        <AnimatedSection delay={0.1}>
          <p className="mt-10 text-lg font-light leading-relaxed text-foreground/80">
            Der Winter stellt besondere Anforderungen an Ihr Fahrzeug. Mit
            unserem umfassenden Winterservice-Paket machen wir Ihr Auto fit für
            die kalte Jahreszeit - damit Sie sicher durch Herbst und Winter
            kommen.
          </p>
        </AnimatedSection>

        {/* Checklist */}
        <AnimatedSection delay={0.2}>
          <div className="mt-12">
            <p className="text-xs font-medium uppercase tracking-widest text-foreground/40">
              Unser Wintercheck umfasst
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {checklist.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-sm font-light text-foreground/80"
                >
                  <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-brand/10">
                    <CheckIcon className="size-3 text-brand" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </AnimatedSection>

        {/* Winter Tires */}
        <AnimatedSection delay={0.3}>
          <div className="mt-12">
            <p className="text-base font-light leading-relaxed text-foreground/80">
              Selbstverständlich übernehmen wir auch den saisonalen
              Reifenwechsel für Sie. Ob Sommer- oder Winterreifen - wir
              montieren, wuchten und prüfen den Zustand Ihrer Bereifung
              gewissenhaft.
            </p>
            <p className="mt-4 text-base font-light leading-relaxed text-foreground/60">
              Benötigen Sie Lagerplatz für Ihre Reifen? Kein Problem: Wir bieten
              Ihnen eine fachgerechte Reifeneinlagerung zu fairen Konditionen.
              So sparen Sie sich den Platz zuhause und können sicher sein, dass
              Ihre Reifen optimal gelagert werden.
            </p>
          </div>
        </AnimatedSection>

        {/* CTA */}
        <AnimatedSection delay={0.4}>
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
    </div>
  )
}
