"use server";

import { siteConfig } from "@/data/site-config";
import { resend } from "@/lib/resend";

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message?: string;
};

export async function sendContactEmail(
  _prev: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const name = formData.get("name") as string;
  const phone = formData.get("phone") as string;
  const email = formData.get("email") as string;
  const vehicle = formData.get("vehicle") as string;
  const message = formData.get("message") as string;

  if (!name || !phone || !message) {
    return {
      status: "error",
      message: "Merci de remplir tous les champs obligatoires.",
    };
  }

  try {
    await resend.emails.send({
      // ⚠️ TEST : domaine partagé Resend. Remplacer par noreply@cleperformance66.fr une fois le domaine vérifié.
      from: "Clé Performance 66 <onboarding@resend.dev>",
      to: siteConfig.email,
      replyTo: email || undefined,
      subject: `Nouvelle demande de devis — ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #0A2A4A;">
          <div style="background: linear-gradient(135deg, #0A2A4A, #1A6FAF); padding: 24px 32px; border-radius: 8px 8px 0 0;">
            <h1 style="color: #ffffff; margin: 0; font-size: 20px;">Nouvelle demande de devis</h1>
            <p style="color: rgba(255,255,255,0.7); margin: 4px 0 0; font-size: 14px;">Clé Performance 66 — Formulaire de contact</p>
          </div>

          <div style="background: #F8F9FB; padding: 32px; border: 1px solid #D8E4EF; border-top: none; border-radius: 0 0 8px 8px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #D8E4EF; width: 140px; font-weight: bold; color: #4A6A8A; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;">Nom</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #D8E4EF; font-size: 15px;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #D8E4EF; font-weight: bold; color: #4A6A8A; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;">Téléphone</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #D8E4EF; font-size: 15px;">
                  <a href="tel:${phone.replace(/\s/g, "")}" style="color: #1A6FAF; text-decoration: none; font-weight: bold;">${phone}</a>
                </td>
              </tr>
              ${
                email
                  ? `<tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #D8E4EF; font-weight: bold; color: #4A6A8A; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;">Email</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #D8E4EF; font-size: 15px;">
                  <a href="mailto:${email}" style="color: #1A6FAF; text-decoration: none;">${email}</a>
                </td>
              </tr>`
                  : ""
              }
              ${
                vehicle
                  ? `<tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #D8E4EF; font-weight: bold; color: #4A6A8A; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;">Véhicule</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #D8E4EF; font-size: 15px;">${vehicle}</td>
              </tr>`
                  : ""
              }
              <tr>
                <td style="padding: 10px 0; font-weight: bold; color: #4A6A8A; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px; vertical-align: top;">Message</td>
                <td style="padding: 10px 0; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">${message}</td>
              </tr>
            </table>

            <div style="margin-top: 24px; padding: 16px; background: #EBF4FB; border-radius: 6px; border-left: 3px solid #3AAFDE;">
              <p style="margin: 0; font-size: 13px; color: #4A6A8A;">
                📱 Répondez directement à cet email pour contacter le client, ou appelez le <strong>${phone}</strong>.
              </p>
            </div>
          </div>
        </div>
      `,
    });

    return { status: "success" };
  } catch {
    return {
      status: "error",
      message: "Une erreur est survenue. Merci de nous appeler directement.",
    };
  }
}
