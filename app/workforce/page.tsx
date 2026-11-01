import { employees, storeName } from "@/lib/data";
export default function Workforce() {
  return (<><h1>Workforce</h1><p className="sub">Experience, skills and current tasks for every employee.</p>
    <div className="card"><table><thead><tr><th>Employee</th><th>Store</th><th>Experience</th><th>Skills</th><th>Current tasks</th><th>Workload</th><th>Mobility</th></tr></thead><tbody>
      {employees.map((e) => <tr key={e.id}>
        <td><b>{e.name}</b><br /><small>{e.role}</small></td><td>{storeName(e.storeId)}</td><td>{e.yearsExperience} yrs</td>
        <td className="tags">{e.skills.map((s) => <span key={s}>{s}</span>)}</td>
        <td>{e.tasks.join(", ")}</td>
        <td><div className="bar"><i style={{ width: e.workload + "%" }} /></div>{e.workload}%</td>
        <td><span className={"badge" + (e.openToMove ? "" : " warn")}>{e.openToMove ? "Open to move" : "Stays"}</span></td></tr>)}
    </tbody></table></div></>);
}
