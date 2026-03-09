import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AnimatedSection } from "@/components/animated-section";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "Gebrauchtfahrzeuge",
  description:
    "Gepruefte Gebrauchtwagen mit 12 Monaten Garantie. TUeV-Check, Finanzierung und Probefahrt bei Autohaus Osswald in Diepholz.",
};

const services = [
  {
    title: "TUeV Gebrauchtwagencheck",
    description:
      "Jedes Fahrzeug durchlaeuft eine gruendliche Pruefung nach TUeV-Standards.",
  },
  {
    title: "Hebebuehnen-Check",
    description:
      "Transparente Begutachtung von unten -- Sie sehen, was wir sehen.",
  },
  {
    title: "Finanzierung",
    description:
      "Flexible Finanzierungsmoeglichkeiten ueber die Santander Bank.",
  },
  {
    title: "12 Monate Garantie",
    description:
      "Gesonderte Gebrauchtwagen-Garantie fuer Ihre Sicherheit nach dem Kauf.",
  },
];

export default function VerkaufPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] w-full">
        <Image
          src="/images/emotionheader5810301986.jpg"
          alt="Gebrauchtfahrzeuge bei Autohaus Osswald"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
          <p className="text-sm font-medium tracking-widest text-[#f28627] uppercase">
            Verkauf
          </p>
          <h1 className="mt-3 text-4xl font-light tracking-tight text-white md:text-5xl lg:text-6xl">
            Gebrauchtfahrzeuge
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="mx-auto max-w-3xl px-6 py-24 md:py-32">
        <AnimatedSection>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Bei uns finden Sie gepflegte Gebrauchtwagen zu fairen Preisen. Jedes
            Fahrzeug wird in unserer Meisterwerkstatt geprueft und aufbereitet,
            bevor es in den Verkauf geht.
          </p>
          <Separator className="my-12 w-12 bg-[#f28627]" />
        </AnimatedSection>

        {/* Services grid */}
        <div className="grid gap-12 sm:grid-cols-2">
          {services.map((service, i) => (
            <AnimatedSection key={service.title} delay={0.1 * (i + 1)}>
              <div>
                <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-full border border-[#f28627]/30 text-sm font-medium text-[#f28627]">
                  {i + 1}
                </div>
                <h2 className="text-lg font-medium tracking-tight">
                  {service.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t bg-secondary/30 px-6 py-24 md:py-32">
        <AnimatedSection className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-light tracking-tight md:text-3xl">
            Interesse geweckt?
          </h2>
          <Separator className="mx-auto my-8 w-12 bg-[#f28627]" />
          <p className="text-muted-foreground">
            Rufen Sie uns an und vereinbaren Sie eine Probefahrt. Oder schauen
            Sie sich unsere aktuellen Angebote auf mobile.de an.
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
              render={
                <a
                  href="https://home.mobile.de/ATOAUTOTECHNIKOSSWALD#ses"
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
              className="h-10 rounded-full bg-[#f28627] px-6 text-white hover:bg-[#d9741f]"
            >
              Fahrzeuge auf mobile.de
            </Button>
            <Button
              variant="outline"
              render={<Link href="/kontakt" />}
              className="h-10 rounded-full px-6"
            >
              Kontakt aufnehmen
            </Button>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
