import { strategies, type Strategy } from "./data";

export type EventInput = { type: string; location: string; details: string; file: File | null };

const API = process.env.NEXT_PUBLIC_API_URL;

//real backend
/**
import { company, stores, products, partners, employees, strategies, type Strategy } from "./data";

export type EventInput = { type: string; location: string; details: string; file: File | null };

const WEBHOOK_URL = "https://astradev123.app.n8n.cloud/webhook/hr-department-strategy";

function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const r = new FileReader();
    r.onload = () => resolve(String(r.result).split(",")[1] ?? "");
    r.onerror = () => reject(new Error("Could not read the file"));
    r.readAsDataURL(file);
  });
}

// n8n can answer with an object, an array, or an AI Agent's { output: "..." } text.
// This turns any of those into a Strategy.
function normalize(raw: unknown, eventType: string): Strategy {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let data: any = Array.isArray(raw) ? raw[0] : raw;
  if (data?.output) data = data.output;
  if (typeof data === "string") data = JSON.parse(data.replace(/```json|```/g, "").trim());
  if (data?.strategy) data = data.strategy;
  return {
    id: data.id ?? "ST-" + Date.now(),
    eventId: data.eventId ?? eventType,
    generatedAt: data.generatedAt ?? new Date().toISOString(),
    summary: data.summary ?? "",
    risks: data.risks ?? [],
    actions: data.actions ?? [],
  };
}

export async function submitEvent(input: EventInput): Promise<Strategy> {
  const body = {
    event: {
      type: input.type,
      location: input.location,
      details: input.details,
      document: input.file
        ? { name: input.file.name, mimeType: input.file.type, base64: await fileToBase64(input.file) }
        : null,
    },
    company,
    stores,
    products,
    partners,
    employees,
    // Tells the AI exactly which JSON shape to answer with
    strategyFormat: strategies[0],
  };

  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), 120_000); // AI workflows can be slow
  try {
    const res = await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
      signal: ctrl.signal,
    });
    const text = await res.text();
    if (!res.ok) throw new Error(`n8n answered ${res.status}: ${text.slice(0, 300)}`);
    if (!text.trim()) {
      throw new Error("n8n returned an empty response. Add a 'Respond to Webhook' node at the end of the workflow.");
    }
    return normalize(JSON.parse(text), input.type);
  } finally {
    clearTimeout(timer);
  }
}
 */
//for presentation purposes
export async function submitEvent(input: EventInput): Promise<Strategy> {
  void API; void input;
  await new Promise((r) => setTimeout(r, 1200));
  return { ...strategies[0], id: "ST-" + Date.now(), generatedAt: new Date().toISOString() };
}
