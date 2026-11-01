# HR Desk (frontend only)
Next.js 15 App Router + TypeScript, plain CSS, dummy data.

    npm install && npm run dev

Backend hook point: `lib/api.ts` (`submitEvent`, returns a `Strategy`; its JSON shape is defined in `lib/data.ts`). Dummy data lives in `lib/data.ts`.
Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_API_URL`.

Dummy data lives in `data/*.json` (company, stores, products, partners, employees, events, strategies).
Types, including the `Strategy` JSON format the AI must return, are in `lib/types.ts`.
`lib/data.ts` loads the JSON files and is the only place to change when you switch to a real database.
"# astropreneur" 
"# astropreneur" 
"# astropreneur00" 
