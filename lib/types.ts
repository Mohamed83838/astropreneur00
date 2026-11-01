export type Store = { id: string; name: string; city: string; type: "Flagship" | "Standard" | "Outlet"; status: "Open" | "Opening soon"; headcount: number; monthlyRevenue: number };
export type Product = { sku: string; name: string; category: string; price: number; stock: number; partnerId: string };
export type Partner = { id: string; name: string; kind: "Supplier" | "Logistics" | "Payments"; country: string; since: number; status: "Active" | "Under review" };
export type Employee = { id: string; name: string; role: string; storeId: string; yearsExperience: number; skills: string[]; tasks: string[]; workload: number; openToMove: boolean };
export type CompanyEvent = { id: string; type: string; title: string; date: string; status: "New" | "Analysed" | "Closed" };

/* ------------------------------------------------------------------
   STRATEGY FORMAT
   The AI backend must return a `Strategy` object in exactly this JSON shape.
   The frontend only renders it; it never decides who goes where.
   - Number of people is NOT an input: the AI decides how many actions it needs.
   - `employeeId` references Employee.id. It is null for "hire" (no one yet).
   - `phase` groups actions on screen: immediate, short_term (<= 30 days), long_term.
   - `dependsOn` lists action ids that must finish first.
------------------------------------------------------------------- */
export type ActionType = "relocate" | "assign_task" | "train" | "hire" | "promote" | "review";
export type Phase = "immediate" | "short_term" | "long_term";

export type StrategyAction = {
  id: string;
  type: ActionType;
  phase: Phase;
  priority: "high" | "medium" | "low";
  employeeId: string | null;
  title: string;
  details: string;
  fromStoreId: string | null; // relocate: where the person leaves
  toStoreId: string | null;   // relocate / assign_task / hire: where the work happens
  startDate: string;          // ISO date
  endDate: string | null;     // ISO date, null if open-ended
  training: { topic: string; durationDays: number } | null; // only for type "train"
  rationale: string;          // why the AI chose this, shown to HR
  dependsOn: string[];
};

export type Strategy = {
  id: string;
  eventId: string;
  generatedAt: string;        // ISO datetime
  summary: string;
  risks: string[];
  actions: StrategyAction[];
};
