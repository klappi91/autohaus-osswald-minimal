import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AnimatedSection } from "@/components/animated-section";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "Unser Betrieb",
  description:
    "Lernen Sie das Team von Autohaus Osswald kennen. Kfz-Meisterbetrieb in Diepholz mit persoenlicher Betreuung und fairen Preisen.",
};

const team = [
  {
    name: "Bernd Osswald",
    role: "Kfz-Meister und Firmeninhaber",
    initial: "B",
  },
  {
    name: "Marcel Osswald",
    role: "Kfz-Mechatroniker",
    initial: "M",
  },
  {
    name: "Katharina Lang",
    role: "Burokauffrau",
    initial: "K",
  },
  {
    name: "Raphael-Leon Goettmann",
    role: "Auszubildender 4. Lehrjahr, Kfz-Mechatroniker",
    initial: "R",
  },
  {
    name: "Ben Osswald",
    role: "Auszubildender 1. Lehrjahr, Kfz-Mechatroniker",
    initial: "B",
  },
  {
    name: "Dawid Kuziemski",
    role: "Auszubildender 1. Lehrjahr, Kfz-Mechatroniker",
    initial: "D",
  },
];

export default function UnserBetriebPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] w-full">
        <Image
          src="/images/emotionheader5810301970.jpg"
          alt="Werkstatt Autohaus Osswald"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
          <p className="text-sm font-medium tracking-widest text-[#f28627] uppercase">
            Ueber uns
          </p>
          <h1 className="mt-3 text-4xl font-light tracking-tight text-white md:text-5xl lg:text-6xl">
            Unser Betrieb
          </h1>
        </div>
      </section>

      {/* About */}
      <section className="mx-auto max-w-3xl px-6 py-24 md:py-32">
        <AnimatedSection>
          <h2 className="text-2xl font-light tracking-tight md:text-3xl">
            Ihre Werkstatt in Diepholz
          </h2>
          <Separator className="my-8 w-12 bg-[#f28627]" />
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="space-y-4 leading-relaxed text-muted-foreground">
            <p>
              Unsere Kfz-Reparaturwerkstatt in Diepholz ist ein vertrauensvoller
              Ansprechpartner fuer Reparaturen aller Art. Ihre Sicherheit in Ihrem
              Fahrzeug ist dann gegeben, wenn das Auto ohne Maengel auf den
              Strassen unterwegs ist. Daher uebernehmen wir neben der umfassenden
              Beratung auch wichtige Sicherheitschecks fuer Sie.
            </p>
            <p>
              In unserer Werkstatt wird Ihr Fahrzeug ausschliesslich von
              qualifiziertem Fachpersonal repariert. Inspektionen werden von
              speziell ausgebildeten Pruefern durchgefuehrt, damit auch der TUeV
              kein Problem fuer Sie wird.
            </p>
            <p>
              Direkt vor Ort uebernehmen wir die Ausbesserung von Blechschaeden,
              die beispielsweise durch Hagel entstanden sind. Auch ohne vorher
              vereinbarten Termin koennen Sie Ihr Fahrzeug bei uns pruefen und
              Maengel beseitigen lassen.
            </p>
            <p>
              Unsere Werkstatt arbeitet mit der neuesten Technik und aktuellsten
              Erkenntnissen unseres Berufsstands. Wir legen Wert auf individuelle
              Kundenbetreuung, faire und transparente Preise sowie die hohe
              Qualitaet unserer Arbeit.
            </p>
          </div>
        </AnimatedSection>
      </section>

      {/* Workshop image */}
      <AnimatedSection>
        <section className="relative mx-auto aspect-[21/9] max-w-5xl overflow-hidden">
          <Image
            src="/images/cache_2447480172.jpg"
            alt="Werkstatt Autohaus Osswald -- Arbeitsbereich"
            fill
            className="object-cover"
          />
        </section>
      </AnimatedSection>

      {/* Team */}
      <section className="px-6 py-24 md:py-32">
        <div className="mx-auto max-w-4xl">
          <AnimatedSection>
            <p className="text-center text-sm font-medium tracking-widest text-[#f28627] uppercase">
              Team
            </p>
            <h2 className="mt-3 text-center text-2xl font-light tracking-tight md:text-3xl">
              Die Menschen hinter dem Autohaus
            </h2>
            <Separator className="mx-auto my-8 w-12 bg-[#f28627]" />
          </AnimatedSection>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member, i) => (
              <AnimatedSection key={member.name} delay={0.1 * (i + 1)}>
                <div className="flex flex-col items-center text-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full border border-border bg-secondary text-2xl font-light text-foreground">
                    {member.initial}
                  </div>
                  <h3 className="mt-4 text-base font-medium tracking-tight">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {member.role}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t bg-secondary/30 px-6 py-24 md:py-32">
        <AnimatedSection className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-light tracking-tight md:text-3xl">
            Wir beraten Sie gerne
          </h2>
          <Separator className="mx-auto my-8 w-12 bg-[#f28627]" />
          <p className="text-muted-foreground">
            Nehmen Sie Kontakt zu uns auf. Wir freuen uns auf Ihren Besuch oder
            Ihren Anruf.
          </p>
          <p className="mt-6 text-2xl font-light tracking-tight">
            <a
              href="tel:+495441975551"
              className="transition-colors hover:text-[#f28627]"
            >
              05441 / 975551
            </a>
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Button
              render={<Link href="/kontakt" />}
              className="h-10 rounded-full bg-[#f28627] px-6 text-white hover:bg-[#d9741f]"
            >
              Kontakt aufnehmen
            </Button>
            <Button
              variant="outline"
              render={<a href="mailto:autohaus-osswald@web.de" />}
              className="h-10 rounded-full px-6"
            >
              E-Mail schreiben
            </Button>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
