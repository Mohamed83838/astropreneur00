import { partners } from "@/lib/data";
export default function Partners() {
  return (<><h1>Partners</h1><p className="sub">Suppliers, logistics and payment providers.</p>
    <div className="card"><table><thead><tr><th>Partner</th><th>Kind</th><th>Country</th><th>Since</th><th>Status</th></tr></thead><tbody>
      {partners.map((p) => <tr key={p.id}><td><b>{p.name}</b></td><td>{p.kind}</td><td>{p.country}</td><td>{p.since}</td>
        <td><span className={"badge" + (p.status === "Active" ? "" : " warn")}>{p.status}</span></td></tr>)}
    </tbody></table></div></>);
}
