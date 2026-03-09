import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: {
    default: "Autohaus Oßwald – Kfz-Werkstatt in Diepholz",
    template: "%s | Autohaus Oßwald",
  },
  description:
    "Ihre freie Kfz-Werkstatt in Diepholz. Alle Marken, Classic & US Cars. Meisterqualität zu fairen Preisen.",
  keywords: [
    "Autohaus",
    "Werkstatt",
    "Diepholz",
    "Kfz-Reparatur",
    "US Cars",
    "Oldtimer",
    "TÜV",
    "Inspektion",
  ],
  openGraph: {
    title: "Autohaus Oßwald – Kfz-Werkstatt in Diepholz",
    description:
      "Freie Kfz-Werkstatt für alle Marken. Meisterqualität, faire Preise, persönlicher Service.",
    type: "website",
    locale: "de_DE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={`${dmSans.variable} font-sans antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
