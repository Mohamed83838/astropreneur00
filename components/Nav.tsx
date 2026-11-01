"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
const links = [["/", "Overview"], ["/events", "Events"], ["/workforce", "Workforce"], ["/stores", "Stores"], ["/products", "Products"], ["/partners", "Partners"]];
export default function Nav() {
  const p = usePathname();
  return <>{links.map(([h, l]) => <Link key={h} href={h} className={(h === "/" ? p === "/" : p.startsWith(h)) ? "on" : ""}>{l}</Link>)}</>;
}
