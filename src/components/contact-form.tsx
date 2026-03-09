"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  if (submitted) {
    return (
      <div className="rounded-lg border border-black/10 bg-black/[0.02] px-8 py-12 text-center">
        <p className="text-lg font-medium text-black">
          Vielen Dank für Ihre Nachricht.
        </p>
        <p className="mt-2 text-sm text-black/50">
          Wir melden uns schnellstmöglich bei Ihnen.
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        setSubmitted(true)
      }}
      className="space-y-6"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-black">
            Name *
          </label>
          <Input
            id="name"
            name="name"
            required
            placeholder="Ihr Name"
            className="h-10 rounded-none border-black/15 bg-transparent focus-visible:border-[#f28627] focus-visible:ring-[#f28627]/20"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="firma" className="text-sm font-medium text-black">
            Firma
          </label>
          <Input
            id="firma"
            name="firma"
            placeholder="Firmenname"
            className="h-10 rounded-none border-black/15 bg-transparent focus-visible:border-[#f28627] focus-visible:ring-[#f28627]/20"
          />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-black">
            E-Mail *
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            placeholder="ihre@email.de"
            className="h-10 rounded-none border-black/15 bg-transparent focus-visible:border-[#f28627] focus-visible:ring-[#f28627]/20"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="telefon" className="text-sm font-medium text-black">
            Telefon
          </label>
          <Input
            id="telefon"
            name="telefon"
            type="tel"
            placeholder="+49 ..."
            className="h-10 rounded-none border-black/15 bg-transparent focus-visible:border-[#f28627] focus-visible:ring-[#f28627]/20"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="nachricht" className="text-sm font-medium text-black">
          Nachricht *
        </label>
        <Textarea
          id="nachricht"
          name="nachricht"
          required
          placeholder="Wie können wir Ihnen helfen?"
          rows={5}
          className="rounded-none border-black/15 bg-transparent focus-visible:border-[#f28627] focus-visible:ring-[#f28627]/20"
        />
      </div>

      <p className="text-xs text-black/40">
        Felder mit * sind Pflichtfelder
      </p>

      <Button
        type="submit"
        size="lg"
        className="h-11 rounded-none bg-[#f28627] px-8 text-sm font-medium tracking-wide text-white uppercase hover:bg-[#d9741e]"
      >
        Nachricht senden
      </Button>
    </form>
  )
}
