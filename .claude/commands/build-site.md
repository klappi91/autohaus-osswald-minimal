# Website bauen

Baue eine komplette Website fuer das Unternehmen.

## Daten
- Content, Bilder, Brand: `../scraped-data/`
- Design-Richtung: `./specs/design.md`
- Analyse: `../scraped-data/analysis.md`

Lies zuerst alle Datenquellen bevor du anfaengst.

## Vorgaben
- Texte und Seitenstruktur 1:1 aus scraped-data uebernehmen
- Bilder uebernehmen, Hero-Bild neu generieren (Gemini-Skill)
- Unternehmensfarben aus brand/colors.json
- Logo einbinden aus brand/
- Impressum und Datenschutz 1:1 uebernehmen

## Stack
Next.js 16, React 19, TypeScript, Tailwind v4, shadcn/ui

## Skills nutzen
- frontend-design Plugin fuer Design-Qualitaet
- ui-styling fuer shadcn Komponenten
- motion-framer oder gsap-scrolltrigger je nach design.md
- gemini-image fuer Hero-Bild Generierung

## Am Ende
1. `npm run build` muss durchlaufen
2. `git add -A && git commit -m "Build complete"`
3. QA: Dev-Server starten, alle Seiten per Browser testen, Screenshots machen, Report schreiben nach qa/
4. Dev-Server beenden
5. QA-Report lesen — wenn keine gravierenden Fehler:
   - `gh repo create {firmenname}-{variante} --public --source=. --push`
   - `vercel --token $(cat ~/.config/vercel/token) --prod --yes --scope christian-klapproths-projects`
6. Falls gravierende Fehler: Fixen, zurueck zu Schritt 1

Nutze Agent-Teams fuer parallele Arbeit. Entscheide selbst
welche Agents du brauchst und in welcher Reihenfolge.
