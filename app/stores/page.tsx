import { stores } from "@/lib/data";
export default function Stores() {
  return (<><h1>Stores</h1><p className="sub">Locations, staffing and monthly revenue (TND).</p>
    <div className="card"><table><thead><tr><th>Store</th><th>City</th><th>Type</th><th>Staff</th><th>Revenue / month</th><th>Status</th></tr></thead><tbody>
      {stores.map((s) => <tr key={s.id}><td><b>{s.name}</b></td><td>{s.city}</td><td>{s.type}</td><td>{s.headcount}</td><td>{s.monthlyRevenue.toLocaleString("en-US")}</td>
        <td><span className={"badge" + (s.status === "Open" ? "" : " warn")}>{s.status}</span></td></tr>)}
    </tbody></table></div></>);
}
