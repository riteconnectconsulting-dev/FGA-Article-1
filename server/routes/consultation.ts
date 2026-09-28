import { RequestHandler } from "express";
import { consultationSchema } from "../../shared/consultation";

export const handleConsultation: RequestHandler = async (req, res) => {
  const parsed = consultationSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ error: "Invalid form data" });
  }

  const webhookUrl = process.env.ZAPIER_WEBHOOK_URL;
  if (!webhookUrl) {
    console.error("ZAPIER_WEBHOOK_URL is not set");
    return res.status(500).json({ error: "Form is not configured" });
  }

  try {
    const zapier = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...parsed.data,
        submittedAt: new Date().toISOString(),
        page: req.get("referer") ?? null,
      }),
      signal: AbortSignal.timeout(10_000),
    });
    if (!zapier.ok) {
      console.error(`Zapier webhook responded ${zapier.status}`);
      return res.status(502).json({ error: "Could not deliver the request" });
    }
    res.status(200).json({ ok: true });
  } catch (err) {
    console.error("Zapier webhook failed", err);
    res.status(502).json({ error: "Could not deliver the request" });
  }
};
