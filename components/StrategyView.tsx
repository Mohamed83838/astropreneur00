import { employees, storeName, type Strategy, type Phase } from "@/lib/data";

const phases: [Phase, string][] = [["immediate", "Immediate"], ["short_term", "Next 30 days"], ["long_term", "Later"]];
const label: Record<string, string> = { relocate: "Relocate", assign_task: "Assign task", train: "Train", hire: "Hire", promote: "Promote", review: "Review" };
const who = (id: string | null) => (id ? employees.find((e) => e.id === id)?.name ?? id : "New hire");

export default function StrategyView({ s }: { s: Strategy }) {
  return (
    <div>
      <p style={{ marginTop: 0 }}>{s.summary}</p>
      {s.risks.length > 0 && <div className="risks"><b>Risks</b><ul>{s.risks.map((r) => <li key={r}>{r}</li>)}</ul></div>}
      {phases.map(([p, name]) => {
        const list = s.actions.filter((a) => a.phase === p);
        if (!list.length) return null;
        return (
          <div key={p} style={{ marginTop: 20 }}>
            <h2>{name}</h2>
            {list.map((a) => (
              <div className={"action " + a.type} key={a.id}>
                <div><span className="badge">{label[a.type]}</span>{" "}
                  <span className={"badge" + (a.priority === "high" ? " stop" : a.priority === "medium" ? " warn" : "")}>{a.priority}</span></div>
                <b>{a.title}</b>
                <p>{a.details}</p>
                <small>
                  {who(a.employeeId)}
                  {a.fromStoreId && a.toStoreId ? ` · ${storeName(a.fromStoreId)} to ${storeName(a.toStoreId)}` : a.toStoreId ? ` · ${storeName(a.toStoreId)}` : ""}
                  {` · ${a.startDate}${a.endDate ? " to " + a.endDate : ""}`}
                  {a.training ? ` · ${a.training.topic}, ${a.training.durationDays} days` : ""}
                  {a.dependsOn.length ? ` · after ${a.dependsOn.join(", ")}` : ""}
                </small>
                <p className="why">Why: {a.rationale}</p>
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
}
