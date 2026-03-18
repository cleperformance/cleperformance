"use client";

import { siteConfig } from "@/data/site-config";
import { useActionState } from "react";
import { sendContactEmail, type ContactFormState } from "./actions";

const initialState: ContactFormState = { status: "idle" };

export function ContactForm() {
  const [state, action, isPending] = useActionState(
    sendContactEmail,
    initialState,
  );

  if (state.status === "success") {
    return (
      <div className="flex flex-col items-center justify-center gap-4 rounded-xl border border-[#D8E4EF] bg-white p-10 text-center shadow-sm">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600 text-3xl">
          ✓
        </div>
        <h3 className="text-xl font-bold text-[#0A2A4A]">Demande envoyée !</h3>
        <p className="text-[#4A6A8A]">
          Nous avons bien reçu votre message et vous recontacterons dans les
          meilleurs délais.
        </p>
        <a
          href={siteConfig.phoneHref}
          className="mt-2 text-sm font-medium text-[#1A6FAF] hover:underline"
        >
          Besoin d&apos;une réponse rapide ? Appelez le {siteConfig.phone}
        </a>
      </div>
    );
  }

  return (
    <form
      action={action}
      className="space-y-4 rounded-xl border border-[#D8E4EF] bg-white p-6 shadow-sm"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="mb-1.5 block text-sm font-medium text-[#0A2A4A]"
          >
            Nom complet *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            disabled={isPending}
            className="w-full rounded-lg border border-[#D8E4EF] bg-white px-3 py-2.5 text-sm text-[#0A2A4A] placeholder:text-[#4A6A8A]/50 outline-none focus:border-[#1A6FAF] focus:ring-1 focus:ring-[#1A6FAF] disabled:opacity-50"
            placeholder="Votre nom"
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className="mb-1.5 block text-sm font-medium text-[#0A2A4A]"
          >
            Téléphone *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            disabled={isPending}
            className="w-full rounded-lg border border-[#D8E4EF] bg-white px-3 py-2.5 text-sm text-[#0A2A4A] placeholder:text-[#4A6A8A]/50 outline-none focus:border-[#1A6FAF] focus:ring-1 focus:ring-[#1A6FAF] disabled:opacity-50"
            placeholder="06 00 00 00 00"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="email"
          className="mb-1.5 block text-sm font-medium text-[#0A2A4A]"
        >
          Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          disabled={isPending}
          className="w-full rounded-lg border border-[#D8E4EF] bg-white px-3 py-2.5 text-sm text-[#0A2A4A] placeholder:text-[#4A6A8A]/50 outline-none focus:border-[#1A6FAF] focus:ring-1 focus:ring-[#1A6FAF] disabled:opacity-50"
          placeholder="votre@email.com"
        />
      </div>

      <div>
        <label
          htmlFor="vehicle"
          className="mb-1.5 block text-sm font-medium text-[#0A2A4A]"
        >
          Véhicule (marque, modèle, année)
        </label>
        <input
          type="text"
          id="vehicle"
          name="vehicle"
          disabled={isPending}
          className="w-full rounded-lg border border-[#D8E4EF] bg-white px-3 py-2.5 text-sm text-[#0A2A4A] placeholder:text-[#4A6A8A]/50 outline-none focus:border-[#1A6FAF] focus:ring-1 focus:ring-[#1A6FAF] disabled:opacity-50"
          placeholder="Ex: Renault Clio 2020"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-1.5 block text-sm font-medium text-[#0A2A4A]"
        >
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          disabled={isPending}
          className="w-full rounded-lg border border-[#D8E4EF] bg-white px-3 py-2.5 text-sm text-[#0A2A4A] placeholder:text-[#4A6A8A]/50 outline-none focus:border-[#1A6FAF] focus:ring-1 focus:ring-[#1A6FAF] disabled:opacity-50"
          placeholder="Décrivez votre besoin : clé perdue, double, type de véhicule..."
        />
      </div>

      {state.status === "error" && (
        <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600">
          {state.message}
        </p>
      )}

      <button
        type="submit"
        disabled={isPending}
        className="w-full rounded-lg bg-[#1A6FAF] px-6 py-3 font-semibold text-white transition-colors hover:bg-[#0A2A4A] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isPending ? "Envoi en cours…" : "Envoyer ma demande de devis"}
      </button>

      <p className="text-xs text-[#4A6A8A]">
        * Champs obligatoires. Nous vous recontacterons dans les meilleurs
        délais.
      </p>
    </form>
  );
}
