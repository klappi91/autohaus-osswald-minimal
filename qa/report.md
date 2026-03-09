# QA Report: Autohaus Oßwald – Minimal Variante

**Datum:** 2026-03-09
**Getestet auf:** http://localhost:3000 (Next.js 16 Dev Server)
**Browser:** Chromium (Headless)
**Viewport:** 1280x720

---

## Zusammenfassung

**Ergebnis: BESTANDEN** - Alle 11 Seiten laden korrekt, keine Fehler.

| Seite | Status | Header | Footer | Bilder | Text |
|-------|--------|--------|--------|--------|------|
| Home (/) | OK | OK | OK | Hero + Workshop | OK |
| Verkauf | OK | OK | OK | Hero-Bild | OK |
| Unser Betrieb | OK | OK | OK | Workshop-Foto | OK |
| Leistungen | OK | OK | OK | Hero-Bild | OK |
| Inspektion | OK | OK | OK | - | OK |
| 24h-Annahme | OK | OK | OK | - | OK |
| Ersatzwagen | OK | OK | OK | - | OK |
| Winterservice | OK | OK | OK | - | OK |
| Kontakt | OK | OK | OK | - | OK |
| Impressum | OK | OK | OK | - | OK |
| Datenschutz | OK | OK | OK | - | OK |

## Details pro Seite

### 1. Home (/)
- Hero-Bild (Gemini-generiert) wird korrekt angezeigt
- "Autohaus Oßwald" Headline + "Meisterqualität für alle Marken" Subtitle
- Willkommenstext sichtbar
- "Jetzt NEU - Steinschlag Reparatur" Callout mit Orange-Akzent
- Service-Cards (4 Stück) mit Links zu Leistungen
- CTA-Section mit Telefonnummer und Buttons

### 2. Verkauf (/verkauf)
- Hero mit US Army Truck (emotionheader5810301986.jpg)
- Gebrauchtfahrzeuge-Serviceliste
- CTA vorhanden

### 3. Unser Betrieb (/unser-betrieb)
- Workshop-Foto als Hero
- Betriebsbeschreibung vollständig
- Team-Sektion (Initialen-Circles) - animiert beim Scrollen

### 4. Leistungen (/leistungen)
- Hero-Bild
- Vollständige Service-Liste in zwei Spalten
- Preisphilosophie-Text
- Links zu 4 Unterseiten

### 5-8. Leistungen-Unterseiten
- Alle 4 Unterseiten laden korrekt
- Breadcrumb-Navigation vorhanden
- "Weitere Services" Navigation am Ende
- CTA mit Telefonnummer

### 9. Kontakt (/kontakt)
- Zweispaltig: Adresse links, Formular rechts
- Kontaktformular mit allen Feldern (Name, Firma, E-Mail, Telefon, Nachricht)
- Öffnungszeiten korrekt dargestellt
- Pflichtfeld-Hinweis vorhanden

### 10. Impressum (/impressum)
- Alle rechtlichen Daten korrekt (Handelsregister, USt-ID, Steuernummer)
- Haftung für Inhalte, Links, Urheberrecht - vollständig

### 11. Datenschutz (/datenschutz)
- Vollständige Datenschutzerklärung mit allen 5 Sektionen
- Google Analytics, Cookies, Server-Log-Dateien dokumentiert
- Gut strukturiert mit Überschriften-Hierarchie

## Design-Bewertung

- **Typografie:** DM Sans font-light wirkt elegant und minimal
- **Farben:** Monochrom mit Orange (#f28627) als dezenter Akzent
- **Whitespace:** Großzügig, Inhalte atmen
- **Navigation:** Sticky Header mit Logo, Desktop-Nav + Mobile Sheet
- **Footer:** 3-spaltig, clean mit allen Links
- **Animationen:** Framer Motion fade-in (0.8s) - werden erst bei Scroll sichtbar

## Bekannte Limitierungen

1. Framer Motion `whileInView`-Animationen triggern nicht im headless Full-Page-Screenshot (erwartetes Verhalten)
2. Kontaktformular ist nur visuell (kein Backend)

## Screenshots

Alle Screenshots gespeichert in `qa/screenshots/`:
- 01-home.png
- 02-verkauf.png
- unser-betrieb.png
- leistungen.png
- leistungen-inspektion.png
- leistungen-24-stunden-annahme.png
- leistungen-ersatzwagen.png
- leistungen-reifen-und-winterservice.png
- kontakt.png
- impressum.png
- datenschutz.png
