import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  phone: z.string().optional(),
  business: z.string().optional(),
  service: z.string().optional(),
  budget: z.string().optional(),
  description: z.string().min(10, "Please describe your project (min 10 chars)"),
});

export const submitContact = createServerFn({ method: "POST" })
  .inputValidator(contactSchema)
  .handler(async ({ data }) => {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) throw new Error("RESEND_API_KEY is not configured");

    const html = `
      <h2>New Enquiry — Bytingo</h2>
      <table cellpadding="6">
        <tr><td><strong>Name</strong></td><td>${data.name}</td></tr>
        <tr><td><strong>Email</strong></td><td>${data.email}</td></tr>
        ${data.phone ? `<tr><td><strong>Phone</strong></td><td>${data.phone}</td></tr>` : ""}
        ${data.business ? `<tr><td><strong>Business</strong></td><td>${data.business}</td></tr>` : ""}
        ${data.service ? `<tr><td><strong>Service</strong></td><td>${data.service}</td></tr>` : ""}
        ${data.budget ? `<tr><td><strong>Budget</strong></td><td>${data.budget}</td></tr>` : ""}
      </table>
      <p><strong>Description:</strong><br>${data.description.replace(/\n/g, "<br>")}</p>
    `;

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Bytingo <enquiry@bytingo.com>",
        to: ["contact.bytingo@gmail.com"],
        reply_to: data.email,
        subject: `New enquiry from ${data.name}`,
        html,
      }),
    });

    if (!res.ok) {
      const body = await res.text();
      throw new Error(`Email send failed: ${body}`);
    }

    return { ok: true };
  });
