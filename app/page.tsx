import { company, stores, employees, products, partners, events } from "@/lib/data";
export default function Overview() {
  const stats = [["Stores", stores.length], ["Employees", employees.length], ["Products", products.length], ["Partners", partners.length]];
  return (<>
    <h1>Overview</h1><p className="sub">{company.name}, founded {company.founded}. Markets: {company.markets.join(", ")}.</p>
    <div className="stats">{stats.map(([l, v]) => <div className="stat" key={l}><b>{v}</b><span>{l}</span></div>)}</div>
    <div className="card"><h2>Recent events</h2>
      <table><thead><tr><th>Event</th><th>Type</th><th>Date</th><th>Status</th></tr></thead><tbody>
        {events.map((e) => <tr key={e.id}><td>{e.title}</td><td>{e.type}</td><td>{e.date}</td><td><span className={"badge" + (e.status === "New" ? " warn" : "")}>{e.status}</span></td></tr>)}
      </tbody></table></div>
  </>);
}
