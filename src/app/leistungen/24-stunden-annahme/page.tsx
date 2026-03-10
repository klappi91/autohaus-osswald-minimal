import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { PhoneIcon, ArrowRightIcon } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"
import { Separator } from "@/components/ui/separator"

export const metadata: Metadata = {
  title: "24-Stunden-Annahme",
  description:
    "Fahrzeugabgabe rund um die Uhr bei Autohaus Oßwald in Diepholz. Auch ohne Termin außerhalb der Öffnungszeiten.",
}

const otherServices = [
  { title: "Inspektion", href: "/leistungen/inspektion" },
  { title: "Ersatzwagen", href: "/leistungen/ersatzwagen" },
  {
    title: "Reifen- und Winterservice",
    href: "/leistungen/reifen-und-winterservice",
  },
]

export default function AnnahmePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[40vh] min-h-[320px] w-full overflow-hidden">
        <Image
          src="/images/service-24h-annahme.webp"
          alt="24-Stunden Fahrzeugannahme"
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
                <li className="text-white">24-Stunden-Annahme</li>
              </ol>
            </nav>
            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              24-Stunden-Annahme
            </h1>
          </div>
        </div>
      </section>

      <div className="py-24 px-6">
        <div className="mx-auto max-w-3xl">

        {/* Content */}
        <AnimatedSection delay={0.1}>
          <p className="mt-10 text-lg font-light leading-relaxed text-foreground/80">
            Ihr Fahrzeug muss zur Inspektion oder es steht eine Reparatur an,
            Sie können es jedoch nicht zu unseren üblichen Öffnungszeiten vorbei
            bringen?
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <p className="mt-4 text-base font-light leading-relaxed text-foreground/80">
            Bei ATO - Autotechnik Oßwald kein Problem: Stellen Sie Ihr Auto
            auch ohne vorige Terminvereinbarung außerhalb unserer
            Geschäftszeiten einfach auf dem Hof ab. Werfen Sie Ihren
            Fahrzeugschlüssel zusammen mit einer kurzen Beschreibung des
            Auftrags in unseren Briefkasten und wir kümmern uns um den Rest.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <p className="mt-4 text-base font-light leading-relaxed text-foreground/60">
            So können Sie Ihr Fahrzeug jederzeit abgeben - ganz ohne
            Wartezeiten und unabhängig von unseren Öffnungszeiten. Bequemer
            geht es nicht.
          </p>
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
