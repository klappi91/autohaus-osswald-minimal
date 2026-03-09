import Image from "next/image";
import Link from "next/link";
import { AnimatedSection } from "@/components/animated-section";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const services = [
  {
    title: "Inspektion",
    description:
      "Speziell ausgebildete Pruefer sorgen dafuer, dass Ihr Fahrzeug sicher unterwegs ist.",
    href: "/leistungen/inspektion",
  },
  {
    title: "24h-Annahme",
    description:
      "Geben Sie Ihr Fahrzeug ab, wann immer es Ihnen passt -- rund um die Uhr.",
    href: "/leistungen/24-stunden-annahme",
  },
  {
    title: "Ersatzwagen",
    description:
      "Bleiben Sie mobil. Wir stellen Ihnen waehrend der Reparatur einen Leihwagen.",
    href: "/leistungen/ersatzwagen",
  },
  {
    title: "Winterservice",
    description:
      "Reifenwechsel, Frostschutz und mehr -- sicher durch die kalte Jahreszeit.",
    href: "/leistungen/reifen-und-winterservice",
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[70vh] min-h-[500px] w-full">
        <Image
          src="/images/hero.jpg"
          alt="Autohaus Oßwald – Moderne Kfz-Werkstatt in Diepholz"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
          <h1 className="text-4xl font-light tracking-tight text-white md:text-6xl lg:text-7xl">
            Autohaus Oßwald
          </h1>
          <Separator className="mx-auto my-6 w-16 bg-[#f28627]" />
          <p className="text-lg font-light tracking-wide text-white/90 md:text-xl">
            Meisterqualitaet fuer alle Marken
          </p>
        </div>
      </section>

      {/* Welcome */}
      <section className="mx-auto max-w-3xl px-6 py-24 md:py-32">
        <AnimatedSection>
          <h2 className="text-2xl font-light tracking-tight md:text-3xl">
            Herzlich willkommen im Autohaus Oßwald in Diepholz
          </h2>
          <Separator className="my-8 w-12 bg-[#f28627]" />
          <p className="leading-relaxed text-muted-foreground">
            Sie suchen einen vertrauensvollen und zuverlaessigen Ansprechpartner,
            wenn es um die Wartung oder die Reparatur Ihres Autos geht? Dann sind
            Sie bei uns genau richtig!
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Mit unserem kompetenten Rundum-Service fuer alle Marken bietet Ihnen
            unsere Kfz-Reparaturwerkstatt Sofortservice und Meisterqualitaet zu
            erschwinglichen Preisen. Unser Team beantwortet Ihnen jederzeit gerne
            alle offenen Fragen.
          </p>
        </AnimatedSection>

        {/* Steinschlag Badge */}
        <AnimatedSection delay={0.2} className="mt-12">
          <div className="rounded-lg border border-[#f28627]/20 bg-[#f28627]/5 px-6 py-4">
            <p className="text-sm font-medium tracking-wide text-[#f28627]">
              Jetzt NEU
            </p>
            <p className="mt-1 text-lg font-light">Steinschlag Reparatur</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Schnell, sauber und zu fairen Preisen -- sprechen Sie uns an.
            </p>
          </div>
        </AnimatedSection>
      </section>

      {/* Services */}
      <section className="border-t bg-secondary/30 px-6 py-24 md:py-32">
        <div className="mx-auto max-w-5xl">
          <AnimatedSection>
            <p className="text-center text-sm font-medium tracking-widest text-[#f28627] uppercase">
              Leistungen
            </p>
            <h2 className="mt-3 text-center text-2xl font-light tracking-tight md:text-3xl">
              Was wir fuer Sie tun
            </h2>
          </AnimatedSection>

          <div className="mt-16 grid gap-px bg-border sm:grid-cols-2">
            {services.map((service, i) => (
              <AnimatedSection key={service.title} delay={0.1 * (i + 1)}>
                <Link
                  href={service.href}
                  className="group flex h-full flex-col bg-background p-8 transition-colors hover:bg-secondary/50"
                >
                  <h3 className="text-lg font-medium tracking-tight">
                    {service.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                  <span className="mt-4 text-sm font-medium text-[#f28627] opacity-0 transition-opacity group-hover:opacity-100">
                    Mehr erfahren &rarr;
                  </span>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24 md:py-32">
        <AnimatedSection className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium tracking-widest text-[#f28627] uppercase">
            Kontakt
          </p>
          <h2 className="mt-3 text-2xl font-light tracking-tight md:text-3xl">
            Wir sind fuer Sie da
          </h2>
          <Separator className="mx-auto my-8 w-12 bg-[#f28627]" />
          <p className="text-muted-foreground">
            Autohaus Oßwald GmbH &amp; Co. KG
            <br />
            Auf dem Esch 21, 49356 Diepholz
          </p>
          <p className="mt-4 text-2xl font-light tracking-tight">
            <a href="tel:+495441975551" className="hover:text-[#f28627] transition-colors">
              05441 / 975551
            </a>
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            Mo&ndash;Fr 8:00&ndash;17:00 &middot; Sa 9:00&ndash;12:00
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Button
              render={<Link href="/kontakt" />}
              className="h-10 rounded-full bg-[#f28627] px-6 text-white hover:bg-[#d9741f]"
            >
              Termin vereinbaren
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
