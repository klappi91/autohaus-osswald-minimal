import type { Metadata } from "next"
import { AnimatedSection } from "@/components/animated-section"
import { Separator } from "@/components/ui/separator"
import { ContactForm } from "@/components/contact-form"

export const metadata: Metadata = {
  title: "Kontakt",
}

export default function KontaktPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-24">
      <AnimatedSection>
        <h1 className="text-4xl font-semibold tracking-tight text-black">
          Kontakt
        </h1>
        <p className="mt-4 text-base text-black/50">
          Wir freuen uns auf Ihre Nachricht.
        </p>
      </AnimatedSection>

      <Separator className="my-16" />

      {/* Contact Info */}
      <div className="grid gap-16 md:grid-cols-2">
        <div className="space-y-8">
          <div>
            <h2 className="text-xs font-medium tracking-widest text-black/40 uppercase">
              Adresse
            </h2>
            <div className="mt-4 space-y-1 text-sm leading-relaxed text-black/70">
              <p className="font-medium text-black">
                Autohaus Oßwald GmbH & Co. KG
              </p>
              <p>Auf dem Esch 21</p>
              <p>49356 Diepholz</p>
            </div>
          </div>

          <div>
            <h2 className="text-xs font-medium tracking-widest text-black/40 uppercase">
              Kontaktdaten
            </h2>
            <div className="mt-4 space-y-1 text-sm leading-relaxed text-black/70">
              <p>
                Telefon:{" "}
                <a
                  href="tel:+495441975551"
                  className="text-black underline-offset-4 hover:underline"
                >
                  +49 5441/975551
                </a>
              </p>
              <p>Fax: +49 5441/592487</p>
              <p>
                E-Mail:{" "}
                <a
                  href="mailto:autohaus-osswald@web.de"
                  className="text-black underline-offset-4 hover:underline"
                >
                  autohaus-osswald@web.de
                </a>
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-xs font-medium tracking-widest text-black/40 uppercase">
              Öffnungszeiten
            </h2>
            <div className="mt-4 space-y-1 text-sm leading-relaxed text-black/70">
              <div className="flex justify-between max-w-48">
                <span>Mo – Fr</span>
                <span>8:00 – 17:00</span>
              </div>
              <div className="flex justify-between max-w-48">
                <span>Sa</span>
                <span>9:00 – 12:00</span>
              </div>
              <div className="flex justify-between max-w-48">
                <span>So</span>
                <span className="text-black/40">geschlossen</span>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <h2 className="text-xs font-medium tracking-widest text-black/40 uppercase">
            Nachricht senden
          </h2>
          <div className="mt-6">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  )
}
