import type { Metadata } from "next"
import { AnimatedSection } from "@/components/animated-section"
import { Separator } from "@/components/ui/separator"

export const metadata: Metadata = {
  title: "Impressum",
}

export default function ImpressumPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-24">
      <AnimatedSection>
        <h1 className="text-4xl font-semibold tracking-tight text-black">
          Impressum
        </h1>
      </AnimatedSection>

      <Separator className="my-16" />

      <div className="space-y-12 text-sm leading-relaxed text-black/70">
        {/* Verantwortlich */}
        <section>
          <h2 className="text-xs font-medium tracking-widest text-black/40 uppercase">
            Verantwortlich
          </h2>
          <div className="mt-4 space-y-1">
            <p className="font-medium text-black">
              Autohaus Oßwald GmbH & Co. KG
            </p>
            <p>Auf dem Esch 21</p>
            <p>49356 Diepholz</p>
          </div>
        </section>

        {/* Kontakt */}
        <section>
          <h2 className="text-xs font-medium tracking-widest text-black/40 uppercase">
            Kontakt
          </h2>
          <div className="mt-4 space-y-1">
            <p>Telefon: +49 5441/975551</p>
            <p>Fax: +49 5441/592487</p>
            <p>E-Mail: autohaus-osswald@web.de</p>
          </div>
        </section>

        {/* Registereintrag */}
        <section>
          <h2 className="text-xs font-medium tracking-widest text-black/40 uppercase">
            Registereintrag
          </h2>
          <div className="mt-4 space-y-1">
            <p>Handelsregister A</p>
            <p>Amtsgericht Walsrode</p>
            <p>HRA 202512</p>
          </div>
        </section>

        {/* Umsatzsteuer */}
        <section>
          <h2 className="text-xs font-medium tracking-widest text-black/40 uppercase">
            Umsatzsteuer
          </h2>
          <div className="mt-4 space-y-1">
            <p>Umsatzsteuer-ID: DE 296140060</p>
            <p>Steuernummer: 45/200/21919</p>
          </div>
        </section>

        <Separator />

        {/* Haftung für Inhalte */}
        <section>
          <h2 className="text-lg font-medium text-black">
            Haftung für Inhalte
          </h2>
          <p className="mt-4">
            Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte
            auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach
            §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
            verpflichtet, übermittelte oder gespeicherte fremde Informationen zu
            überwachen oder nach Umständen zu forschen, die auf eine
            rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung
            oder Sperrung der Nutzung von Informationen nach den allgemeinen
            Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist
            jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten
            Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden
            Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
          </p>
        </section>

        {/* Haftung für Links */}
        <section>
          <h2 className="text-lg font-medium text-black">
            Haftung für Links
          </h2>
          <p className="mt-4">
            Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren
            Inhalte wir keinen Einfluss haben. Deshalb können wir für diese
            fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
            verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber
            der Seiten verantwortlich. Die verlinkten Seiten wurden zum
            Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft.
            Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht
            erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten
            Seiten ist jedoch ohne konkrete Anhaltspunkte einer
            Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von
            Rechtsverletzungen werden wir derartige Links umgehend entfernen.
          </p>
        </section>

        {/* Urheberrecht */}
        <section>
          <h2 className="text-lg font-medium text-black">Urheberrecht</h2>
          <p className="mt-4">
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
            diesen Seiten unterliegen dem deutschen Urheberrecht. Die
            Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
            Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
            schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            Downloads und Kopien dieser Seite sind nur für den privaten, nicht
            kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser
            Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte
            Dritter beachtet. Insbesondere werden Inhalte Dritter als solche
            gekennzeichnet. Sollten Sie trotzdem auf eine
            Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
            entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen
            werden wir derartige Inhalte umgehend entfernen.
          </p>
        </section>
      </div>
    </div>
  )
}
