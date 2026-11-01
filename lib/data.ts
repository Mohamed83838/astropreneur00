// Loads the dummy data from the /data folder. Swap these imports for real queries later.
import type { Store, Product, Partner, Employee, CompanyEvent, Strategy } from "./types";
import companyJson from "@/data/company.json";
import storesJson from "@/data/stores.json";
import productsJson from "@/data/products.json";
import partnersJson from "@/data/partners.json";
import employeesJson from "@/data/employees.json";
import eventsJson from "@/data/events.json";
import strategiesJson from "@/data/strategies.json";

export type * from "./types";

export const company = companyJson;
export const stores = storesJson as Store[];
export const products = productsJson as Product[];
export const partners = partnersJson as Partner[];
export const employees = employeesJson as Employee[];
export const events = eventsJson as CompanyEvent[];
export const strategies = strategiesJson as Strategy[];

export const storeName = (id: string) => stores.find((s) => s.id === id)?.name ?? id;
export const partnerName = (id: string) => partners.find((p) => p.id === id)?.name ?? id;
