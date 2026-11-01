import "./globals.css";
import Nav from "@/components/Nav";
import { company } from "@/lib/data";
export const metadata = { title: "HR Desk", description: "Workforce planning for company events" };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en"><body><div className="shell">
      <aside className="side"><div className="brand">HR Desk<small>{company.name}</small></div><Nav /></aside>
      <main>{children}</main>
    </div></body></html>
  );
}
