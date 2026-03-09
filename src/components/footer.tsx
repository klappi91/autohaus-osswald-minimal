import Link from "next/link"
import { Separator } from "@/components/ui/separator"

const pageLinks = [
  { label: "Home", href: "/" },
  { label: "Verkauf", href: "/verkauf" },
  { label: "Unser Betrieb", href: "/unser-betrieb" },
  { label: "Leistungen", href: "/leistungen" },
  { label: "Kontakt", href: "/kontakt" },
  { label: "Impressum", href: "/impressum" },
  { label: "Datenschutz", href: "/datenschutz" },
]

const openingHours = [
  { day: "Mo – Fr", time: "8:00 – 17:00 Uhr" },
  { day: "Sa", time: "9:00 – 12:00 Uhr" },
  { day: "So", time: "geschlossen" },
]

export function Footer() {
  return (
    <footer className="bg-secondary/60">
      <div className="mx-auto max-w-6xl px-6 pt-16 pb-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {/* Kontakt */}
          <div>
            <h3 className="mb-4 text-xs font-medium uppercase tracking-widest text-foreground">
              Kontakt
            </h3>
            <address className="space-y-2 text-sm font-light not-italic leading-relaxed text-foreground/70">
              <p>Autohaus Oßwald GmbH &amp; Co. KG</p>
              <p>Auf dem Esch 21<br />49356 Diepholz</p>
              <div className="pt-2 space-y-1">
                <p>
                  Tel:{" "}
                  <a
                    href="tel:+495441975551"
                    className="transition-colors hover:text-brand"
                  >
                    +49 5441 / 975551
                  </a>
                </p>
                <p>
                  Fax: +49 5441 / 592487
                </p>
                <p>
                  E-Mail:{" "}
                  <a
                    href="mailto:autohaus-osswald@web.de"
                    className="transition-colors hover:text-brand"
                  >
                    autohaus-osswald@web.de
                  </a>
                </p>
              </div>
            </address>
          </div>

          {/* Öffnungszeiten */}
          <div>
            <h3 className="mb-4 text-xs font-medium uppercase tracking-widest text-foreground">
              Öffnungszeiten
            </h3>
            <dl className="space-y-2 text-sm font-light text-foreground/70">
              {openingHours.map((entry) => (
                <div key={entry.day} className="flex justify-between gap-4">
                  <dt className="min-w-[60px]">{entry.day}</dt>
                  <dd className="text-right">{entry.time}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Links */}
          <div>
            <h3 className="mb-4 text-xs font-medium uppercase tracking-widest text-foreground">
              Seiten
            </h3>
            <nav>
              <ul className="space-y-2">
                {pageLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm font-light text-foreground/70 transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        <Separator className="my-8 bg-border/50" />

        <div className="text-center text-xs font-light text-foreground/50">
          &copy; {new Date().getFullYear()} Autohaus Oßwald GmbH &amp; Co. KG. Alle Rechte vorbehalten.
        </div>
      </div>
    </footer>
  )
}
