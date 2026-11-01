"use client";
import { useState } from "react";
import { submitEvent } from "@/lib/api";
import { events, strategies, type Strategy } from "@/lib/data";
import StrategyView from "@/components/StrategyView";

export default function Events() {
  const [busy, setBusy] = useState(false);
  const [strategy, setStrategy] = useState<Strategy | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const file = f.get("file");
    setBusy(true);
    setStrategy(await submitEvent({ type: String(f.get("type")), location: String(f.get("location")), details: String(f.get("details")), file: file instanceof File && file.size ? file : null }));
    setBusy(false);
  }

  return (<>
    <h1>Events</h1>
    <p className="sub">Describe what changed. The AI builds a strategy of actions for your workforce.</p>
    <div className="two">
      <div>
        <form className="card" onSubmit={onSubmit}>
          <h2>New event</h2>
          <label htmlFor="type">Event type</label>
          <select id="type" name="type"><option>Employee resigned</option><option>New store</option><option>New market</option><option>New technology</option></select>
          <label htmlFor="location">Location or team</label><input id="location" name="location" defaultValue="Bizerte Port" />
          <label htmlFor="details">Details</label><textarea id="details" name="details" placeholder="What happened, when, anything the AI should know" />
          <label htmlFor="file">Attach a document</label><input id="file" name="file" type="file" />
          <p style={{ marginTop: 16 }}><button className="primary" disabled={busy}>{busy ? "Building strategy..." : "Generate strategy"}</button></p>
        </form>
        <div className="card"><h2>Past events</h2>
          {events.map((ev) => { const st = strategies.find((s) => s.eventId === ev.id);
            return <div className="rec" key={ev.id}><b>{ev.title}</b><p>{ev.type} · {ev.date}</p>
              {st ? <button onClick={() => setStrategy(st)}>View strategy</button> : <span className="badge warn">No strategy yet</span>}</div>; })}
        </div>
      </div>
      <div className="card"><h2>Strategy</h2>
        {busy ? <p className="empty">The AI is reading your company data...</p>
          : strategy ? <StrategyView s={strategy} />
          : <p className="empty">Generate a strategy or open a past event.</p>}
      </div>
    </div>
    <details className="card"><summary><b>JSON format the AI must return</b></summary>
      <pre>{JSON.stringify(strategies[0], null, 2)}</pre></details>
  </>);
}
