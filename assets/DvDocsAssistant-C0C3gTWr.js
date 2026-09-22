import{eL as O,w as E,o as R,eM as S,eR as w,f9 as _,r as k,n as z,eZ as u,eX as y,f4 as T,ez as j,fc as A,eW as b,fe as I,eO as W,e_ as F,d0 as Y,fj as x,eP as H,f5 as U,ey as Q,f0 as K,eV as m}from"./iframe-BqHSr5b_.js";import{M as N}from"./MpChatBubble-BTSmkFFk.js";import{a as G}from"./geminiClient-CDLR38JX.js";import{_ as J}from"./_plugin-vue_export-helper-DlAUqK2U.js";const B=`# FAQ Crib Sheet — Say-It-Out-Loud Answers

Every answer is written to be **spoken**, in plain language a non-technical listener follows on first hearing. Each has an *If pushed:* line for the follow-up. Questions 24–36 cover teams, handover, QA/UAT, and governance — the full written plans behind those answers live in [operating-model.md](./operating-model.md).

Golden rules: never promise a date or a percentage before the pilots · never say "production-ready" · "converge into LiquidSky," never "replace."

---

## Big picture

**1. "Is this the real product? What am I actually looking at?"**

> It's a working copy of it. The screens are real, the buttons really work, the flows behave like the real thing. The only fake part is the data — the customers and orders are made up, on purpose. Think of it as the product's stunt double: does everything the real one does, and nobody gets hurt.

*If pushed:* "Real screens, pretend data. That split is exactly what makes it safe to move fast here."

**2. "Is it production-ready?"**

> No — and honestly, that's by design. "Production-ready" means real customer data, security, permissions, support — a long list this deliberately doesn't have. This is the *reference*: it shows what right looks like, so the real product can be built to match it.

*If pushed:* "The pilots are exactly the step where 'looks right here' becomes 'works right there.'"

**3. "What exactly are we approving today?"**

> Two small things. First, the look and behavior you saw — agreeing that's the direction. Second, the next step: a two-week review with two named people to check what fits into LiquidSky. Not a rewrite, not a budget, not a migration date.

*If pushed:* "If you leave agreeing on the direction and the review, today was a success."

**4. "Why a working sandbox instead of design mockups?"**

> Because mockups are always on their best behavior. They never show a slow connection, an empty table, a long German word, or a small laptop screen. Running software shows all of that — the stuff that actually trips customers up. And engineers get something they can copy, instead of a picture they have to interpret.

*If pushed:* "Reviews here happen against a link you can click, not a PDF — that alone changed our decision speed."

---

## For the PM

**5. "What does this actually speed up?"**

> Three things. Trying ideas: a new screen can be clickable in a day, because the parts already exist. Reviewing: every change gets a private web link, so you click the real flow on your own laptop instead of squinting at a picture in a meeting. And building: engineers start from a working example instead of guessing from a mockup.

*If pushed:* "Most of what you saw today was assembled from the kit in days, not quarters — that speed is the product here."

**6. "Can we user-test or stakeholder-review with it?"**

> Yes — that's its day job. It's live on the web, it's clickable, and flows behave like the real thing. Perfect for "does this make sense?" tests and "which of these two?" questions. One caveat: the data is made up, so we test whether people *understand* the screens, not whether the numbers are right.

*If pushed:* "We can put two versions of a flow behind two links and watch which one people get through faster — without touching the real product."

**7. "Can sales use it for demos?"**

> Nearly. Today it would technically work; to do it responsibly we'd want a small pass first — a tidy demo account, and a short list of what to click and what to skip. Worth doing on purpose rather than letting it happen by accident.

*If pushed:* "Let's park it as a fast follow — it's a cheap win once we agree on the main plan."

**8. "How will we know the new design is succeeding?"**

> We measure things we can actually count, starting from the pilots: how long it takes to build a typical page, how many screens use the shared parts with no local tweaks, how many duplicate patterns we retire, and accessibility checks passing. I'm deliberately not inventing target percentages today — first we measure where we are, then we set targets.

*If pushed:* "The Sales Orders pilot is where the first real numbers come from."

**9. "What does maintaining this cost us?"**

> Modest, and mostly time we already spend. There's no server and no real data to look after. The honest cost is keeping it in sync with our decisions — which is design work we do anyway; now it lands somewhere clickable instead of in a slide nobody reopens. And the convergence plan exists precisely so this never becomes a second product to maintain.

*If pushed:* "The expensive option is the status quo: every team re-deciding what a Save button looks like, forever."

---

## For engineering

**10. "Are we replacing LiquidSky?"**

> No — the opposite. LiquidSky stays the shared foundation and the destination. The sandbox is the evidence: worked examples, tested patterns, written-down requirements. Where LiquidSky already covers a need, we use it. Where there's a genuine gap, we contribute through its normal process.

*If pushed:* "My sixth ask is literally 'no separate library ever ships from this sandbox.' I'm volunteering the constraint."

**11. "Why not just publish this sandbox as the library?"**

> Because then we'd have two of everything — two button sets, two documentation sites, two release schedules — and every team stuck choosing between them while they slowly drift apart. One supported path beats two half-supported ones. This project earns its keep as the reference, not as a second library.

*If pushed:* "The graveyard of internal platforms is full of 'temporary second libraries.' Not adding a headstone."

**12. "Can we lift components straight into the product?"**

> Some, nearly as-is — the simple, self-contained ones like page headers, dialogs, and empty states. That's exactly why they're the first pilot. Others are tangled up with the sandbox's fake data and need their edges cleaned first. The compatibility review sorts every part into one of four buckets: use as-is, wrap, contribute, or keep local.

*If pushed:* "That sorting is a two-week review, not a leap of faith — that's ask number three."

**13. "Are we locked into Vuetify?"** *(Vuetify = the off-the-shelf component toolkit underneath)*

> The look and behavior live in *our* rules and *our* parts; Vuetify just supplies raw material underneath. Teams build against our parts, so if the raw material ever had to change, the repair happens inside the kit — not across every page of the product. Also worth saying: the product already uses Vuetify today. This adds discipline; it doesn't add lock-in.

*If pushed:* "The riskier lock-in is what we have now — the same toolkit configured differently on every page."

**14. "AI wrote chunks of this — why should we trust the code?"**

> The same way we trust human code: rules and review, not vibes. The AI works inside tight guardrails — the written-down design rules, strict type checking, and a documentation page required for every part — and everything passes automated checks plus a human read. And remember what this repo is: the reference. Anything promoted into LiquidSky goes through LiquidSky's full review like any other contribution.
>
> The honest headline is the opposite of scary: those guardrails are *why* one team could cover 171 screens. That capability is the thing I want the org to inherit.

*If pushed:* "Judge the artifact, not the author — it's all in the repo, and I'd genuinely welcome a skeptical code review."

**15. "What's the accessibility story — really?"**

> Baseline done, honestly incomplete. The core parts work with a keyboard, have proper labels, and every documentation page carries an automated accessibility check. What's *not* true yet: those checks don't block releases automatically, and the long tail of screens hasn't all been audited. Anything shared through LiquidSky ships with automated plus manual accessibility checks — that's in its quality gates.

*If pushed:* "For shared parts the gate list is real: automated checks, keyboard review, both themes, three screen sizes, visual snapshots."

---

## For design

**16. "Why doesn't every page look identical?"**

> Because consistency belongs at the right level. List pages, detail pages, settings — those follow strict recipes. But a flow-builder isn't a table, and forcing it to look like one is how you get consistent-but-unusable. Specialist screens share the deeper layers — colors, fields, statuses, keyboard behavior — so they're clearly the same family without wearing the same uniform.

*If pushed:* "You saw it live: the journey builder's side panel uses the same fields and status colors as the orders table."

**17. "Where does Figma fit?"**

> For this initiative, the running screens and their documentation are the source of truth — because running software can't lie about how it behaves. Figma stays wonderful for early sketching and exploring; it's just not the contract we build against. That way we avoid maintaining a parallel picture-library that slowly drifts away from reality.

*If pushed:* "We can sync design values out to Figma when needed — truth just flows from the working screens outward."

**18. "What's the dark-mode story for the real product?"**

> You watched it: one keypress, 297 written-down values flip to their dark versions, every screen updates. What the sandbox proves is the *method* — every color is looked up from the shared list, nothing hard-wired. Getting dark mode into the real product then becomes careful bookkeeping and testing, not a redesign.

*If pushed:* "The flip you saw had no special-cased screens — that's the point."

---

## The spicy ones

**19. "How long will the migration take?"**

> The only honest answer today: the pilots tell us. Anyone who gives you a total migration date before running one real page through the process is guessing with confidence. Phase one is measured in weeks, and it converts my unknowns into an estimate you can actually hold me to.

*If pushed:* "I'll trade you: names for the review this week, an evidence-based estimate at the end of it."

**20. "Two sets of design values exist right now — the sandbox's and LiquidSky's. Which wins?"**

> Long-term there's exactly one list, and it lives with LiquidSky. The sandbox's values are the approved design *input* to that list — not a competitor. Every difference gets triaged one by one: fix it, theme it, or record it as a deliberate exception. The central design-system team approves anything shared.

*If pushed:* "That value-by-value mapping is deliverable number one of the compatibility review."

**21. "Isn't this throwaway work? Aren't we building things twice?"**

> Fair question — and mostly no. The expensive part of this work was never typing the code; it's the hundreds of decisions — spacing, hierarchy, behavior, what happens when a table is empty. Those decisions are made, tested, and written down here, and they transfer whole. Some glue code is disposable by design — cheap insurance against rebuilding the *product* wrong. And part of it is never thrown away at all: the reference and prototyping environment is this project's permanent job.

*If pushed:* "A film set isn't the building — but nobody calls the set 'throwaway' while it's saving the movie."

**22. "What if the LiquidSky review says most of it can't merge?"**

> Then we learned that for the price of a two-week review instead of a two-quarter rewrite — which is exactly why the review comes first. Even in the worst case, the design decisions, the page recipes, and the working reference stay valid; only the delivery route changes — more wrapping, slower merging. The decisions survive any of those outcomes.

*If pushed:* "The review has four outcomes per part, and 'keep it local' is a legitimate one, not a failure."

**23. "Who owns what, going forward?"**

> Clean lines. Product design owns how things should look and behave, and what counts as done. The central design-system team owns LiquidSky — the shared parts, their releases. Product engineering owns putting the parts to work in the product. Leadership owns priorities. Nobody's job moves to my laptop — the sandbox just gives everyone the same picture to point at.

*If pushed:* "That's why ask three is two named people — ownership starts with names, not org charts."

---

## How we'll work together

**24. "Can our team keep working in its own silo?" (commerce / marketing / service)**

> On your product area — yes, that's the design. Commerce keeps owning the store builder, marketing keeps its campaign screens and builders, service keeps ticketing and chat. Nobody's roadmap moves. What ends is each team re-inventing the *shared* parts — the buttons, the panels, the builder skeleton. Silo work on shared parts is exactly how we got five Save buttons.

*If pushed:* "Own your area, share the commons. When commerce improves the inspector panel, marketing's builders get better for free — and the reverse."

**25. "Can the commerce team contribute store-builder components?"**

> Yes — that's the model, not an exception to it. And here's the part that makes it cheap: a store builder, a landing-page builder, and an email builder are the same skeleton wearing different clothes. In the sandbox, seventeen builder screens already run inside one shared builder shell. So commerce contributes to the shared builder kit through the same path as everything else — and every other builder inherits the improvement.

*If pushed:* "The contribution path and the cross-team council that triages it are one page of the operating model — I'll share it right after this call."

**26. "What does the new design-to-dev handover look like? Are we getting rid of Figma?"**

> We're not getting rid of Figma — it stays where it's brilliant: exploring, concepts, early options. What changes is the *handover*. Instead of signing off on pictures, we sign off on the working screen: design explores in Figma, assembles the chosen direction in the sandbox in days, everyone clicks the real flow and accepts *that*, and engineering builds from a working reference instead of interpreting a picture.

*If pushed:* "Figma starts the idea; the sandbox becomes the acceptance platform. The five-step workflow with owners is in the operating model."

**27. "Why not Figma-to-Figma like we did before?"**

> Because a picture can't show the places design actually breaks: loading, empty tables, keyboard access, small screens, long text. Handing over pictures forced engineers to translate — and translation is where quality leaked. The working screen removes the translation step entirely.

*If pushed:* "Nothing against Figma — it's the right tool before the direction is chosen, and the wrong contract after."

**28. "How does QA work in all this?"**

> It gets narrower and deeper. The shared parts are tested once, centrally — every state, keyboard access, both themes, approved screenshots. So page-level QA stops re-proving the same visual details on every screen and focuses on what's actually new: the flow, the data, the integrations. And the accepted sandbox screen gives QA something they've never had — a living answer to "what is this page *supposed* to look like?"

*If pushed:* "QA co-authors the final checklist during the pilots, so the bar is theirs — not imposed on them afterwards."

**29. "How does this actually improve our speed from PRD to production?"**

> It compresses the three slowest loops in the middle. A PRD becomes a clickable prototype in days, because the parts exist. Review happens on a live link instead of a chain of mockup meetings. And engineering starts from a working reference instead of reverse-engineering a picture. I'm deliberately not quoting a percentage — the pilots will give us the real before-and-after numbers.

*If pushed:* "This sandbox is itself the proof: one small team, 171 screens, built on those rails."

**30. "When can we start? Marketing is still moving legacy code from Vue 2 to Vue 3."**

> We start now — the first steps don't touch marketing at all. The compatibility review is analysis, and the pilots run in areas already on the new stack. Then the migration stops being a blocker and becomes the vehicle: every legacy screen has to be rebuilt anyway, so rebuilding it onto system parts means we pay for each screen once — not twice.

*If pushed:* "Migrate-then-redesign would touch every marketing screen a second time. Converge-as-you-migrate touches it once."

**31. "How do we share feedback on the design system or the sandbox?"**

> One place: a Confluence page I'll share right after this call. Feedback gets triaged into three lanes — flow, technical, visual — and each lane has a named owner. The promise is that everything gets an answer; not everything gets an action. The most useful feedback from this room is flows and feasibility — the technical and process side.

*If pushed:* "Silence is the only prohibited outcome — every item gets a reply and a decision."

---

## Design authority — and the sharp moments

**32. "Is the design final? Can we change patterns, colors, fonts?"**

> The direction is signed off at leadership level — so it's final as a *direction*, not frozen as a museum piece. If something genuinely doesn't work, we fix it, and the feedback door is open. But visual identity decisions — colors, type, patterns — stay with product design, one accountable owner instead of a committee. What I need from this room is feedback on flows, feasibility, and gaps.

*If pushed:* "Preference gets a reply and a decision. A real usability issue gets a fix. Both go through the same Confluence page."

**33. When someone keeps hammering "this doesn't look right, that doesn't look right":**

> That's exactly the kind of eye we want on this — and visual calls have a home: product design owns them, and this direction has already been through user testing and leadership review. Where I really need *your* eye today is the flows and the plan. If the visual point still stands tomorrow, put it on the Confluence page and product design will answer it directly.

*Second use, shorter:* "Noted — that one goes to the design lane on Confluence, and it'll get an answer. Back to the flow: does this step work for your team?"

*Never say:* "that's already been decided" with a closed door — always give the feedback a path, then move the room forward.

**34. "Has anyone actually tested this with users, or do we just like it?"**

> Both, honestly — and testing wins when they disagree. We ran pilot user testing during the build, and what you saw today was shaped by it. UAT-style testing is ongoing right now, and the results get published on the Confluence page — including the misses. A finding that kills a pattern is the program working, not failing.

*If pushed:* "The UAT plan is persona-based and task-based — real tasks like 'find yesterday's unfulfilled orders,' not demo-friendly ones."

**35. "What's the UAT plan for the design sandbox?"**

> Short version: monthly rounds, recruited against our four merchant personas, five people per persona. Each round runs task-based sessions on the core flows — find an order, build a journey, edit a contact — on the live sandbox link, where possible running the same task in the current product for a before-and-after comparison. Every round ends with a one-page readout on Confluence: what we tested, what we found, what we changed.

*If pushed:* "Mock data makes it zero-risk to test aggressively — participants can't break anything, so we let them try."

**36. "Everyone gets sandbox access and PMs can add AI-coded screens? What's the governance?"**

> Yes to access, with lanes. The sandbox is open like a workshop, not like a wall. Anyone — including PMs — can *explore*: build on a branch, share a clickable preview link, argue with a real thing instead of a document. But nothing merges itself. *Proposing* something into the sandbox takes a design review and an engineering review. *Promoting* it into the shared reference takes the full quality gate plus product-design sign-off. And AI-written work passes exactly the same gates as human-written work — we judge the artifact, not the author.

*If pushed:* "The reference everyone sees is protected — exploration is visible but clearly not canon. Three lanes, one page of the operating model."

---

*Parking-lot phrase for anything unanswerable:* "Great question — I don't want to hand-wave it. Let me take it into the compatibility review and come back with evidence instead of adjectives."
`,$=`# Design System Operating Model

**Status:** proposal — shared after the leadership showcase (2026-07-20) · **Owner:** Deepak (UX)
**Companions:** [showcase-faq-crib-sheet.md](./showcase-faq-crib-sheet.md)

This is the "how we'll actually work" document behind the showcase: how teams contribute, how design hands over to engineering, how QA and UAT fit, how AI-assisted contributions are governed, and how the timing works alongside the Vue 2 → Vue 3 migration. It's written to be pasted into Confluence and argued with — every section ends with what needs a decision.

Ground rules carried over from the showcase (unchanged): the sandbox is a **working prototype environment**, not production. Everything shared converges **into LiquidSky** — no second library ever ships from the sandbox. **No dates** until the two pilots produce evidence.

---

## 1 · How teams work on the system — own your area, share the commons

Nobody's roadmap moves, and no team stops owning its product area:

| Team | Keeps owning | Draws from the commons |
|---|---|---|
| **Commerce** | Store builder, orders, catalog screens | Kit parts, list/detail recipes, **builder kit** |
| **Marketing** | Campaign screens, journey/email/landing-page builders | Kit parts, recipes, **builder kit** |
| **Service** | Ticketing, chatbots, transactional SMS screens | Kit parts, recipes, status/queue patterns |

**The commons** are two things:

1. **The shared kit** — the base parts and page recipes everyone saw in the showcase (buttons, fields, tables, page headers, list/detail patterns).
2. **The builder kit** — the parts every builder-type screen shares: the builder shell (top bar, save/status area, exit guard), the canvas frame, the inspector/settings panel, node cards, add-step menus. This is not speculative: **17 builder screens in the sandbox — store, landing pages, email, journeys and the rest — already run inside one shared builder shell.** A store builder, a landing-page builder, and an email builder are the same skeleton wearing different clothes.

**So: can a team work "in its own silo"?** On its product area — yes, that's the design. On the shared skeleton — no, and that's the point. When commerce improves the inspector panel, marketing's builders get better for free, and the reverse. Silo work on shared parts is how we got five Save buttons.

**How a team contributes** (same four-bucket path as the LiquidSky convergence plan):

1. Team identifies a need → checks the kit/builder kit first.
2. Exists? **Use** it. Close but not quite? **Wrap** it (thin team-local layer). Missing and generally useful? **Contribute** it through LiquidSky's normal process. Genuinely team-specific? **Keep local**, documented as such.
3. Disagreements and "is this general or local?" calls go to the council (below).

**The design-system council** — the only new meeting, and it's 30 minutes every two weeks:

- One engineer from each cloud team (commerce, marketing, service)
- One product designer (design authority)
- One LiquidSky maintainer (foundation authority)

It triages contribution proposals, resolves use/wrap/contribute/keep-local disputes, and reviews what's drifting. It is not a approval bottleneck for day-to-day work — teams build freely inside their areas; the council only touches the commons.

**Decisions needed:** one named engineer per cloud team for the council · confirmation that the builder kit is treated as commons from day one.

---

## 2 · Design → build handover — the new workflow

**Figma is not going away.** It stays what it's best at: exploring, moodboards, early concepts, quick options. What changes is the **acceptance artifact** — the thing everyone signs off on stops being a picture and becomes the working screen.

| Step | What happens | Who owns it | What it replaces |
|---|---|---|---|
| ① Explore | Sketch directions, options, flows in Figma | Product design | (unchanged) |
| ② Assemble | Build the chosen direction in the sandbox from kit parts — AI-assisted, typically days | Product design (+ AI tooling) | Weeks of high-fidelity mockup polishing |
| ③ **Accept** | PM + stakeholders click the real flow on a shared link; feedback on the real thing; sign-off happens **here** | PM decides, design facilitates | Redline handoff, spec PDFs, "final_v3" decks |
| ④ Build | Engineering builds in the product from the accepted working reference, using LiquidSky parts | Product engineering | Reverse-engineering a picture |
| ⑤ Verify | QA checks the product against the accepted reference | QA | "Does it match the mockup?" arguments |

Why not Figma-to-Figma like before: a picture can't show loading, empty tables, keyboard access, small screens, or long text — which is exactly where quality used to leak in translation. The working reference removes the translation step.

What design still delivers in Figma: early exploration, flows/IA diagrams, brand and illustration work, anything pre-direction. What design stops delivering: pixel-perfect replicas of every screen state — the sandbox holds those, and they can't drift.

**Decisions needed:** agree that step ③ (sandbox link) is the acceptance gate for new UX work · pick the first feature to run through this pipeline end-to-end (suggestion: whatever the Sales Orders pilot ships next).

---

## 3 · QA in this model — test the parts once, test the flows always

The shift: today QA re-verifies the same visual and interaction details on every screen, because every screen is bespoke. With a shared kit, those details are tested **once, centrally**, and page-level QA shrinks to what is actually new on that page.

**Component level (central, once):** every shared part passes a gate before it counts — type-check and build, tests on public behavior, a documentation page with required states, keyboard + automated accessibility checks, both themes, three screen sizes, approved visual snapshots. (This is the same gate list quoted in the showcase FAQ #15.)

**Page level (per team, per feature):** flow logic, data correctness, integration, permissions. Visual/interaction consistency is inherited from the parts — QA spot-checks it, not re-proves it.

**Regression:** approved screenshots of accepted screens become the baseline; changes that alter them must be intentional (a design decision, not a side effect). The sandbox reference screen is QA's answer to "what is this page supposed to look like?"

**QA joins the pilots** — the two pilot projects co-author the final gate checklist with QA so the bar is theirs, not imposed on them afterwards.

**Decisions needed:** one QA representative named to the pilots · agreement that the accepted sandbox screen is the acceptance reference for pilot pages.

---

## 4 · UAT plan for the design sandbox

**Already done (say this in the room):** pilot user testing ran during the build — task-based sessions on early versions of the core screens shaped the direction that was shown today. UAT-style testing is **ongoing now**, and results will be shared openly, including the misses.

**The ongoing program, per round (roughly monthly, calendar set after the pilots start):**

1. **Who:** recruited against our four personas (admin, store owner, marketing manager, support agent — \`docs/personas/\`), ~5 participants per persona per round. Internal proxies (CS, sales engineers) are acceptable for early rounds; customers join once the consent/logistics path is set.
2. **What:** task-based scenarios on the core flows, e.g. *find yesterday's unfulfilled orders · create a draft order · build a two-step welcome journey · edit a contact and undo it · find where to change the store's shipping rate*. Tasks come from real support tickets and PM top-tasks, not from what demos well.
3. **How:** moderated 30-minute remote sessions on the deployed sandbox link (mock data means zero risk), plus unmoderated first-click/findability tests between rounds. Where a comparable flow exists in the current product, we run the same task there for a **before/after comparison** (task success, time, misclicks).
4. **Output:** a one-page readout per round on the Confluence page — what we tested, task success, top 3 findings, what we changed because of it. Findings triage into the same three feedback lanes as section 5.
5. **Honesty rule:** results are published whether they flatter the sandbox or not; a finding that kills a pattern is the program working, not failing.

**Decisions needed:** access to recruit internal proxies from CS/sales · a PM per cloud to contribute top-tasks for the scenario bank.

---

## 5 · Feedback and change governance — including AI-coded contributions

### Feedback intake (everyone)

One Confluence page (shared after the showcase), one intake, three lanes:

- **Flow / UX** — "this flow confuses me," "this step is missing" → triaged by product design, tested in UAT where disputed.
- **Technical** — "this pattern won't survive our data volumes," "this conflicts with LiquidSky's roadmap" → triaged by the engineering pilot pair.
- **Visual** — "I'd prefer a different blue" → logged and answered by product design, which holds design authority. The direction is signed off at leadership level; genuine issues get fixed, preferences get a reply and a decision, not a redesign.

Everything gets an answer. Not everything gets an action. Silence is the only prohibited outcome.

### Contribution lanes (the sandbox is open — including to PMs and AI-assisted building)

The sandbox is open like a **workshop**, not like a wall: anyone can build in it; nothing becomes "the reference" without review. Three lanes:

| Lane | Who | What it means | Gate |
|---|---|---|---|
| **Explore** | Anyone — PMs, designers, engineers | Build on a branch, share the auto-generated preview link, argue with a clickable thing | None. Branches never merge themselves. |
| **Propose** | Author + reviewers | "This should become part of the sandbox" — opens a review | Product-design review (UX) + engineering review (code). The repo's written rails apply: kit parts only, no hardcoded styles, strict types. |
| **Promote** | Council-aware | "This should be part of the reference / a LiquidSky candidate" | Full component gate (section 3) + product-design sign-off. LiquidSky candidates then go through LiquidSky's own process like any contribution. |

Rules that make this safe:

- **The reference is protected.** The main branch — the thing stakeholders see and QA measures against — only changes through Propose/Promote. Exploration lives on branches and preview links, visible but clearly not canon.
- **AI-coded work is judged like all work** — by the artifact, not the author. The same rails that let AI-assisted building cover 171 screens (written conventions, kit-parts-only, type checks, documentation-required, human review) are the same gates a human contribution passes. There is no separate "AI lane" and no AI exemption.
- **PM prototypes are proposals, not product.** A PM's explored branch is a brilliant way to communicate intent — it enters the same Propose gate if it wants to live longer than the conversation.

**Decisions needed:** confirm the three-lane model · confirm product design as the UX gate and the pilot engineering pair as the code gate for Propose.

---

## 6 · Timing — starting alongside the Vue 2 → Vue 3 migration

The honest sequencing question: marketing still has legacy screens moving from Vue 2 to Vue 3. Does design-system work wait? **No — it starts now, away from the migration, then rides it.**

1. **Now:** the LiquidSky compatibility review (two named people, ~two weeks of work) touches no product code at all — it's analysis. The sandbox itself is already on the new stack.
2. **Pilots:** run in areas that are already Vue 3 — the component pilot and the Sales Orders page — so the migration isn't a dependency.
3. **Marketing converges as it migrates.** Every legacy screen has to be rebuilt for Vue 3 *anyway*. Rebuilding it onto system parts at the same time means each screen is paid for **once**, not twice — migrate-then-redesign would touch every screen a second time. The migration stops being a blocker and becomes the adoption vehicle for marketing.
4. **No combined dates** until the pilots report — same evidence-first rule as everything else.

**Decisions needed:** agreement in principle that migrated marketing screens land on system parts (per-screen calls stay with the marketing team) · the two compatibility-review names, which starts the clock on everything above.

---

## Decision summary (one screen)

| # | Decision | From section |
|---|---|---|
| 1 | One engineer per cloud team + confirm builder kit as commons | 1 |
| 2 | Sandbox link = acceptance gate; pick the first end-to-end feature | 2 |
| 3 | QA rep on the pilots; accepted screens = acceptance reference | 3 |
| 4 | Recruiting access + a PM per cloud for UAT top-tasks | 4 |
| 5 | Three contribution lanes + named gates | 5 |
| 6 | Converge-as-you-migrate in principle; two review names | 6 |

None of these need budget or new headcount this quarter — they need names and agreement.
`,X="# Token & Theme Audit (2026-07-05)\n\n<!-- Artifact of the Token & Theme Audit agent (design-system program, Phase 1). -->\n\n## 1. Token pipeline health\n**Status: Healthy with minor drift**\n\nThe pipeline flows cleanly: `tokens.json` → `build.mjs` → `generated/{tokens.ts, variables.css, _variables.scss}` → `vuetify.ts` and `global.scss`. No circular references detected. The `build.mjs` script resolves alias references (`{color.light.primary}`) correctly and generates all three output formats.\n\n**Drift found (3 values not in tokens.json):**\n- `src/plugins/maropostTheme.ts:171` — `min-height: 40px` (VBtn style)\n- `src/plugins/maropostTheme.ts:172` — `padding-inline: 14px` (VBtn style)\n- `src/styles/global.scss:143` — `rgba(255, 255, 255, 0.16)` (inset button shadow)\n\n**Recommendation:** Extract button padding + min-height into `component.button.sizing` tokens in tokens.json; codify the inset shadow as a reusable token.\n\n## 2. Legacy tokens.scss\n**Status: Live but unused**\n\n`src/styles/tokens.scss` is still wired into Vite + Storybook via `additionalData` (provides SCSS variable scope to all components). However, no `@import` or direct usage found in Vue/style blocks — it's purely for mixins + local SCSS files.\n\n**Conflict:** Shadow values differ. `tokens.scss` has `$mp-shadow-md: 0 4px 16px rgba(0, 0, 0, 0.08)`, but `tokens.json` specifies spread/blur separately for resolution independence.\n\n**Recommendation:** Deprecate. Regenerate `_variables.scss` from tokens.json; update Vite config to import generated vars instead.\n\n## 3. Vuetify global defaults\nAll 12 essential component types configured in `maropostDefaults` (VBtn, VCard, VTextField, VAlert, VChip, VDataTable, VNavigationDrawer, VDialog, VDivider, VList, + input variants). Button typography fully specified (font-weight, letter-spacing, font-size); card radius standardized on `lg` (14px). Input fields use `density: comfortable` + explicit radius token.\n\n**Coverage:** Stores **cannot** be globally defaulted (Pinia not coupled to Vuetify), but preview.ts correctly registers Pinia for story-level use. Critical for dashboard components rendering with live data.\n\n## 4. Storybook config\nStories glob matches `src/**/*.stories.ts` + marobase-ui packages. Preview registers Vuetify + Pinia + Router with correct theme sync. Light/dark toolbar present with `globalTypes.theme` + decorator that sets `v-theme--dark/light` classes on document root.\n\n**Addons installed:** docs, themes. **Missing:** `@storybook/addon-a11y` (for WCAG contrast audits). Recommend installing for pre-commit CI.\n\n**Theme sync issue:** Decorator reads `context.globals.theme` but does NOT re-render Vuetify's actual theme object — it only syncs the class. Stories must explicitly read `vuetifyTheme` from the setup return. This works but is implicit.\n\n## 5. Hardcoded-value violations\n**Font-size literals:** 33 components (48% of 69 Vue files) use `font-size: Npx` in `<style>` blocks instead of tokens. Worst offenders: ModuleLandingPage (14), DvDataTable (8), DvHistoryDrawer (6), DvRefineDialog (5). Breakpoints: 10.5px, 11px, 13px, 14px, 15px — none in typography.fontSize (which defines xs/sm/body/md/lg/xl/2xl/3xl).\n\n**Hex colors:** ~27 hardcoded hex values across 10 files. Mostly in SVG gradients (MpOverviewChart: `#2CC4FF`, `#00608D`) and copilot voice components (DvOrbitMicBar, DvOrbitStatusPill). These are intentional design flourishes but not token-traceable.\n\n**Scrollbar:** global.scss uses raw `rgba(0, 0, 0, 0.15)` for webkit scrollbar — invisible on light theme, risky in overlay contexts.\n\n## 6. Dark-mode risk list\n**Critical:** Scrollbar thumb uses hard black (rgba 0,0,0). In dark mode, this is invisible.\n\n**Warning:** Inset button shadow (global.scss:143) is light-mode only — breaks visual feedback on dark surfaces.\n\n**Safe:** Text uses `rgb(var(--v-theme-on-surface))` pattern throughout. Shadows from tokens.json are theme-separated. No `white` literals found in component styles (only icon `color=\"white\"` prop on 5 elements, which is Vuetify-safe).\n\n## 7. Top 5 recommended fixes (by impact)\n1. **Scrollbar token:** Convert `rgba(0,0,0,...)` → CSS variable scoped to light/dark themes; test in dark overlays.\n2. **Font-size scale:** Migrate 33 components to typography.fontSize tokens; define missing 10.5px, 13px, 15px stops or enforce rounding to existing scale.\n3. **Component sizing:** Extract VBtn padding/min-height + input radius into `component.*` tokens; remove inline px from maropostTheme.ts style props.\n4. **A11y audit:** Install @storybook/addon-a11y; gate CI on contrast ≥4.5:1 WCAG AA.\n5. **Deprecate tokens.scss:** Delete; update vite.config.ts to import only `generated/_variables.scss`.\n",Z=`# Component Inventory (2026-07-05) — SUPERSEDED

> ⚠️ **This document is a historical snapshot and its counts are wrong.**
> It records the repo as of 2026-07-05 (69 components, 31 story files). As of
> 2026-08-17 the repo has **112 components and 122 story files**.
>
> For current numbers and the sidebar taxonomy, use
> [storybook-structure.md](./storybook-structure.md), which is regenerated from
> \`dist-storybook/index.json\` and is the maintained source of truth. For the
> component API reference, use \`CLAUDE.md\` → Component Inventory, or the
> Storybook autodocs (\`npm run storybook\`).
>
> Kept for the Phase-1 used-by analysis and deletion rationale below, which is
> still useful history. Don't cite its totals.

<!-- Artifact of the Component Inventory agent (design-system program, Phase 1). -->
<!-- Used-by counts are grep-based; the cleanup agent re-verifies with proof before acting. -->

## Totals
- **Total components**: 69 Vue files
- **Top-level (root)**: 18 components
- **copilot/**: 17 components (+8 in copilot/voice/)
- **dashboards/**: 9 components (+5 in widgets/, +4 in wizard/)
- **layout/**: 2 · **marketing/**: 2 · **merchandising/**: 1 · **settings/**: 3
- **Stories**: 31 Storybook files (.stories.ts)
- **Story gap**: 38 components without stories

## Inventory

| Component | Dir | Props | Emits | Slots | Used by | Notable Consumers | Story | Tier |
|-----------|-----|-------|-------|-------|---------|-------------------|-------|------|
| MpPageHeader | . | 1 | 0 | 2 | 200 | Fulfillments, DraftOrders, SettingsPlaceholder | Yes | P0 |
| MpStatusChip | . | 1 | 0 | 0 | 102 | Fulfillments, DraftOrders, Coupons | Yes | P0 |
| MpEmptyState | . | 1 | 1 | 0 | 92 | DashboardGrid, Fulfillments, Coupons | Yes | P0 |
| MpDataTableToolbar | . | 1 | 1 | 3 | 114 | Fulfillments, DraftOrders, Coupons | Yes | P0 |
| MpFloatingBulkBar | . | 1 | 1 | 1 | 30 | views | Yes | P0 |
| MpFormDrawer | . | 1 | 0 | 2 | 37 | DvActionCard, DvCampaignCard | Yes | P0 |
| MpKpiCard | . | 1 | 0 | 2 | 27 | copilot cards | Yes | P0 |
| MpFilterTabs | . | 1 | 0 | 0 | 20 | Fulfillments, Commerce views | Yes | P0 |
| MpTableSkeleton | . | 1 | 0 | 0 | 16 | DashboardTableWidget | Yes | P0 |
| MpErrorState | . | 1 | 1 | 0 | 8 | DvHistoryDrawer, DvToastStack | Yes | P0 |
| MpFolderSelect | . | 1 | 1 | 0 | 2 | MpMoveToFolderDialog | Yes | P0 |
| MpManageFoldersDrawer | . | 1 | 1 | 0 | 2 | AppBar | Yes | P0 |
| MpMoveToFolderDialog | . | 1 | 1 | 0 | 3 | views | Yes | P0 |
| MpSectionHeader | . | 1 | 0 | 1 | 5 | settings | Yes | P0 |
| MpSourceCloudChip | . | 1 | 0 | 0 | 4 | DashboardListCard | Yes | P0 |
| ModuleLandingPage | . | 0 | 0 | 0 | 4 | views | No | P0 |
| MpOverviewChart | . | 1 | 0 | 0 | 0 | (none) | Yes | P0 |
| MpDaVinciBot | . | 0 | 0 | 0 | 4 | App.vue, MpDaVinciBot.stories | Yes | P1 |
| DvLandingHero | copilot | 2 | 1 | 0 | 4 | MpDaVinciBot | Yes | P1 |
| DvInsightCard | copilot | 1 | 1 | 0 | 4 | MpDaVinciBot | Yes | P1 |
| DvHistoryDrawer | copilot | 1 | 1 | 0 | 4 | MpDaVinciBot | Yes | P1 |
| DvToastStack | copilot | 0 | 0 | 0 | 4 | MpDaVinciBot | No | P1 |
| DvWidgetDraftCard | copilot | 1 | 1 | 0 | 4 | MpDaVinciBot | No | P1 |
| DvSegmentCard | copilot | 1 | 1 | 0 | 2 | DvDraftPreview | Yes | P1 |
| DvCampaignCard | copilot | 1 | 1 | 0 | 2 | DvDraftPreview | Yes | P1 |
| DvChartCard | copilot | 1 | 0 | 0 | 2 | DvDraftPreview | Yes | P1 |
| DvContentCard | copilot | 1 | 1 | 0 | 2 | DvDraftPreview | Yes | P1 |
| DvKpiRow | copilot | 1 | 0 | 0 | 2 | DvDraftPreview | Yes | P1 |
| DvDraftPreview | copilot | 1 | 0 | 0 | 6 | DvExpandDialog | No | P1 |
| DvExpandDialog | copilot | 1 | 1 | 0 | 2 | DvWidgetDraftCard | No | P1 |
| DvRefineDialog | copilot | 1 | 1 | 0 | 2 | MpDaVinciBot | No | P1 |
| DvDataTable | copilot | 1 | 0 | 0 | 0 | (none) | Yes | P1 |
| DvActionCard | copilot | 1 | 1 | 0 | 0 | (none) | Yes | P1 |
| DvDialogShell | copilot | 1 | 1 | 2 | 0 | (none) | No | P1 |
| DvJourneyCard | copilot | 1 | 1 | 0 | 0 | (none) | Yes | P1 |
| DvOrbCanvas | copilot/voice | 2 | 1 | 0 | 3 | DvOrbitOrb | No | P1 |
| DvIntentCardList | copilot/voice | 1 | 1 | 0 | 4 | MpDaVinciBot | Yes | P1 |
| DvOrbitOrb | copilot/voice | 2 | 0 | 0 | 18 | DvOrbitVoiceSurface | No | P1 |
| DvOrbitVoiceSurface | copilot/voice | 2 | 0 | 0 | 2 | MpDaVinciBot | No | P1 |
| DvOrbitMicBar | copilot/voice | 2 | 1 | 0 | 2 | DvOrbitVoiceSurface | No | P1 |
| DvOrbitWaveBars | copilot/voice | 2 | 0 | 0 | 4 | DvOrbitMicBar | No | P1 |
| DvOrbitStatusPill | copilot/voice | 1 | 0 | 0 | 3 | DvOrbitVoiceSurface | No | P1 |
| DvVoiceStatePill | copilot/voice | 2 | 0 | 0 | 0 | (none) | Yes | P1 |
| CreateDashboardDialog | dashboards | 1 | 1 | 0 | 4 | views | No | P1 |
| DashboardGrid | dashboards | 1 | 1 | 0 | 2 | DashboardSetupGuide | No | P1 |
| DashboardSetupGuide | dashboards | 1 | 1 | 0 | 3 | views | No | P1 |
| DashboardWidgetActionMenu | dashboards | 1 | 1 | 0 | 3 | DashboardWidgetCard | No | P1 |
| EditDashboardDialog | dashboards | 1 | 1 | 0 | 4 | views | No | P1 |
| WidgetWizardDrawer | dashboards | 1 | 0 | 0 | 2 | views | No | P1 |
| DashboardListCard | dashboards | 1 | 1 | 0 | 0 | (none) | No | P1 |
| DashboardListTable | dashboards | 1 | 1 | 0 | 0 | (none) | No | P1 |
| DashboardWidgetCard | dashboards | 1 | 1 | 0 | 9 | DashboardGrid | No | P1 |
| DashboardActivityWidget | dashboards/widgets | 1 | 0 | 0 | 2 | DashboardWidgetCard | No | P1 |
| DashboardChartWidget | dashboards/widgets | 1 | 0 | 0 | 2 | DashboardWidgetCard | No | P1 |
| DashboardKpiWidget | dashboards/widgets | 1 | 1 | 0 | 2 | DashboardWidgetCard | No | P1 |
| DashboardPieWidget | dashboards/widgets | 1 | 0 | 0 | 2 | DashboardWidgetCard | No | P1 |
| DashboardTableWidget | dashboards/widgets | 1 | 0 | 0 | 2 | DashboardWidgetCard | No | P1 |
| WidgetEditStep | dashboards/wizard | 1 | 1 | 0 | 2 | WidgetWizardDrawer | No | P1 |
| WidgetLibraryStep | dashboards/wizard | 0 | 1 | 0 | 2 | WidgetWizardDrawer | No | P1 |
| WidgetWizardManualSteps | dashboards/wizard | 1 | 1 | 0 | 0 | (none) | No | P1 |
| WidgetWizardModeChooser | dashboards/wizard | 0 | 1 | 0 | 0 | (none) | No | P1 |
| AppBar | layout | 0 | 0 | 0 | 2 | App.vue | Yes | P0 |
| AppSidebar | layout | 1 | 1 | 0 | 2 | App.vue | Yes | P0 |
| JourneyFlowColumn | marketing | 1 | 1 | 0 | 2 | JourneyBuilder view | No | P1 |
| JourneyMiniPreview | marketing | 1 | 0 | 0 | 6 | views | No | P1 |
| MerchProductCard | merchandising | 1 | 1 | 0 | 7 | Commerce views | No | P1 |
| SettingsSection | settings | 1 | 0 | 2 | 25 | settings | No | P1 |
| SettingsSidebar | settings | 0 | 0 | 0 | 2 | App.vue | No | P1 |
| SettingsPlaceholder | settings | 1 | 0 | 0 | 16 | settings views | No | P1 |

## Store Coupling

Components importing Pinia stores or composables with side effects (need mocks/decorators in Storybook):

- MpDaVinciBot → useAccounts, useCopilot, useDashboards, dashboards/metricCatalog, dashboards/types
- MpFolderSelect / MpManageFoldersDrawer / MpMoveToFolderDialog → useFolders
- DvWidgetDraftCard, DvExpandDialog, DvRefineDialog → useDashboards / dashboards/types
- DvIntentCardList → useDaVinciIntents (side effects)
- DvVoiceStatePill → useDaVinciVoice (side effects)
- DvHistoryDrawer → useDaVinciHistory, useDaVinciToasts (side effects)
- DvToastStack → useDaVinciToasts (side effects)
- CreateDashboardDialog / EditDashboardDialog / WidgetWizardDrawer / WidgetWizardManualSteps → useDashboards, dashboards/metricCatalog
- DashboardWidgetCard → dashboards/metricCatalog, useWidgetData (side effects)
- DashboardChartWidget → useAppTheme · DashboardKpiWidget → useRelativeTime
- WidgetLibraryStep → dashboards/widgetLibrary
- AppBar → useAccounts, useCopilot, useUserProfile, useAppTheme · AppSidebar → useAccounts
- JourneyFlowColumn / JourneyMiniPreview → journeyFlowData, useFlowTree
- MerchProductCard → useMerchandising

Note: \`dashboards/types\` is type re-exports, not a store — no mock needed for it alone.

## Browser API Coupling

- MpDaVinciBot → localStorage
- DvHistoryDrawer → window
- DvOrbCanvas, DvOrbitOrb → window (requestAnimationFrame)
- AppSidebar → window (event handling)
- DashboardChartWidget → window (viewport/theme detection)

## Zero-Usage & Story-Only List

**Grep-zero components (cleanup agent MUST re-verify — several are likely rendered
dynamically via \`component :is\` maps, e.g. DvIntentCardList/DvDraftPreview card maps and
the widget wizard steps):**
- MpOverviewChart (has story)
- DvActionCard (has story)
- DvDataTable (has story)
- DvDialogShell (no story)
- DvJourneyCard (has story)
- DvVoiceStatePill (has story — story-only)
- DashboardListCard (no story)
- DashboardListTable (no story)
- WidgetWizardManualSteps (no story)
- WidgetWizardModeChooser (no story)

## Data Files in Component Dirs

- **dashboards/dashboardOptions.ts** — dashboard accent color mappings
- **dashboards/widgetSizePresets.ts** — widget grid size presets by type
- **dashboards/wizard/buildPreviewWidget.ts** — widget preview builder for wizard
- **settings/settingsMenu.ts** — settings navigation structure
- **copilot/voice/orbit.ts** — orbital voice UI state/animation helpers

## Anomalies

- No views imported by components (good separation); no circular imports detected.
- Nested dirs fully explored: copilot/voice/ (8), dashboards/widgets/ (5), dashboards/wizard/ (4).
- Config .ts files live in component dirs but are not components (see above).
- No direct SpeechRecognition/ResizeObserver usage in .vue files (voice APIs live in composables).
`,ee='# Design System & Storybook Handover — July 2026\n\nPrepared 2026-07-18 for the Monday stakeholder showcase and engineering handover.\nBranch: `refactor/storybook-cleanup`. All changes verified with `npm run type-check`, `npm run build`, and `npm run build-storybook` at every step.\n\n## Executive summary\n\nThe Storybook previously merged two competing component systems into one sidebar: the app\'s actively-used **Mp\\*** design system and the dormant, Storybook-only **`packages/marobase-ui`** (Mb\\*) library. A full usage audit (every component grepped across `src/`) found **zero dead Mp\\* components** — all 90 are referenced by live app code — and **zero app usage of any Mb\\* component**. The cleanup removed the parallel Mb\\* system and all archive material, consolidated the one true duplicate component pair, migrated the highest-confidence convention violations in views, filled the biggest story-coverage gaps, and restructured the sidebar into a single coherent taxonomy.\n\nThe design system of record is **Mp\\*** (`src/components/`), documented in `CLAUDE.md` and `docs/design-system/`. Tokens live in `src/design-tokens/tokens.json` (`npm run tokens:build`).\n\n## Render parity with the design sandbox\n\nA follow-up audit found Storybook was loading only 6 of the app\'s 15 stylesheets — form fields, the sidebar/app-bar shell skins, source-cloud chip colors, and voice-orb/retail-widget styling all rendered as raw Vuetify in stories while the docs described the app look. Fixed by **`src/styles/app-styles.ts`**: a single ordered stylesheet manifest imported by both `src/main.ts` and `.storybook/preview.ts`. Storybook now renders identically to the app, and any stylesheet added to the manifest reaches both automatically — never add global CSS imports directly to `main.ts` or `preview.ts` again.\n\nVerified in-browser after the fix: form fields show the app chrome (10px radius, surface tint, focus ring, working `settings-grid` layout), AppSidebar/AppBar stories render the real shell skins, and MpSourceCloudChip shows per-cloud colors.\n\nTwo pattern galleries deleted with the archive were rebuilt sandbox-faithful:\n- **`Foundations/Buttons`** (`src/stories/Foundation/Buttons.stories.ts`) — VBtn exactly as the app styles it (flat default, no text-transform, Lucide icons), with the CTA/secondary/tertiary/destructive hierarchy.\n- **`Patterns/Data Table`** (`src/stories/DataTablePattern.stories.ts`) — the full canonical list-view composition (MpFilterTabs → card → MpDataTableToolbar → v-data-table with MpStatusChip + MpRowActionsMenu → MpEmptyState → MpFloatingBulkBar), cribbed from `SalesOrders.vue`, with Default/Empty/Loading/WithSelection states. This is the reference to copy when building a new list view.\n\n## Drawer shell + drawer audit (2026-07-18, follow-up pass)\n\n`MpFormDrawer` now opens as a **floating rounded surface** matching the copilot drawer and content frame: 16px radius (`--mp-component-dialog-radius-default`), 1px `--mp-border-subtle` border, `--mp-shadow-md`, 12px gutters top/right/bottom. Implementation note: it keeps Vuetify\'s inline `top`/`bottom` and overrides only `height: auto`, so the geometry self-corrects between app-bar and full-page routes with no hardcoded offsets. On ≤640px viewports the drawer becomes a full-bleed sheet clamped to `100vw` — this also fixes the long-standing bug where the 480px default overflowed a 375px screen. Every drawer inherits automatically (all overlay drawers compose MpFormDrawer).\n\nDrawer audit fixes shipped with it:\n- **Filters drawer** (MpDataTableToolbar): default subtitle "Changes apply immediately" (filters apply live — "Done" only dismisses), full-size footer buttons in a `Clear all · spacer · Done(primary)` layout.\n- **Filter-select convention**: outlined filter selects take `placeholder="All"` + `persistent-placeholder` so a null filter reads "All" instead of an empty-looking box. Reference implementations: `SalesOrders.vue`, `AllContacts.vue`, `Inventory.vue` (which also lost a redundant inner "Filter by" heading). **Follow-up:** apply to the remaining ~27 views with filter selects.\n- **MpManageFoldersDrawer**: "Done" is now flat primary; the raw delete-confirm `v-dialog` was replaced with `MpConfirmDialog` (wording preserved).\n- **rbac drawers**: footer gaps normalized to `ga-2`.\n- **DvHistoryDrawer** (copilot): gained full dialog semantics in overlay mode — `role="dialog"`, `aria-modal`, `aria-labelledby`, ESC-to-close, focus in/restore, Tab trap (inert in rail mode).\n- **Storybook**: new `FilterDrawer` story mirrors the real Filters drawer; MpFormDrawer width defaults corrected to 480; shell + mobile + filter-select conventions documented in the component docs.\n\nKnown follow-ups from this pass: sweep the remaining filter-select views; MpFormDrawer title is bespoke 17px (works, but not on the type scale — token-alignment candidate).\n\n## Removed\n\n| Item | Scale | Why safe |\n| --- | --- | --- |\n| `packages/marobase-ui` (Mb\\* library) | ~200 files: 44 components, ~90 story files | Used nowhere in `src/`; dormant since 2026-07-10; retirement already planned in `docs/ui-improvement-roadmap.md`. Its foundation token CSS was relocated to `src/styles/mb-foundation.tokens.css` (still imported by `main.ts`). |\n| `Archive/Visual Parity` stories (47) | Generated Mb\\* Figma-parity galleries | Deleted with the package; produced by orphaned tooling no npm script invoked. |\n| `scripts/visual/` parity tooling | 4 files | Orphaned — zero references in `package.json` scripts or CI. |\n| `Archive/Legacy Base` galleries (16) | Raw-Vuetify reference stories in `src/stories/` | Pre-program reference material; superseded by Mp\\* component stories. |\n| `Archive/Legacy Foundation/DesignSystemDemo` story | 1 file | The underlying page `src/views/Settings/DesignSystemDemo.vue` is routed in-app and was **kept**; only its archive story was removed. |\n| `@storybook/addon-themes` | 1 dev dependency | Declared but unused — theming is implemented by a custom decorator in `.storybook/preview.ts`. |\n| `visualParity` decorator + `.mp-visual-*` CSS in `preview.ts` | — | Dead after parity-story removal. |\n| `MbButton.mdx` (Meta-less MDX) | 1 file | Deleted with the package; it was a latent `build-storybook` breakage risk and contained stale guidance (mdi icons, pnpm). |\n\n## Consolidated / replaced\n\n| Before | After | Notes |\n| --- | --- | --- |\n| `CreateDashboardDialog.vue` + `EditDashboardDialog.vue` (~85% identical) | `src/components/dashboards/DashboardFormDialog.vue` | Props `accountId`, `dashboard?` (null = create mode); single `saved` emit. All mode-specific behavior preserved (reset vs hydrate, labels, avatar, autofocus/enter-submit). Call sites updated: `DashboardView.vue`, `Dashboards/DashboardsList.vue`. Merged story: `Dashboards/DashboardFormDialog`. |\n| 6 raw `<v-dialog>` confirm/delete dialogs | `MpConfirmDialog` | `DashboardView`, `DashboardsList`, `DefaultMerchandising`, `PinningEditor`, `RuleEditor`, `RecommendationEngines`. Wording, labels, and danger styling preserved. Known delta: two of these were `persistent`; MpConfirmDialog allows backdrop/Esc dismiss (standard confirm behavior). |\n\n## Deprecated (kept, exit path documented)\n\n- **`--mb-*` CSS-variable bridge** in `src/styles/global.scss` and **`src/styles/mb-foundation.tokens.css`** — the last remnants of marobase-ui. Kept because `src/views/Commerce/CommerceCloudLanding.vue` consumes 22 distinct `--mb-*` variables (60 references). **Next step:** migrate that view to `--mp-*` tokens, then delete both the bridge and the token file. Does not block the demo or handover.\n- **`src/styles/tokens.scss`** (legacy `$mp-*` SCSS vars) — one view holdout: `Marketing/AcquisitionForms.vue`. Migrate it to `src/design-tokens/` values, then retire the file. Does not block.\n\n## New Storybook structure\n\nSingle story source: `src/**/*.stories.@(ts|tsx)`. Sidebar order (pinned in `preview.ts` storySort):\n\n**Introduction** → **Foundations** (Colors, Typography, Spacing, Radius & Shadows, Icons) → **Layout** → **Navigation** → **Forms** → **Data Display** → **Feedback** → **Overlays** → **Patterns** → **AI** → **Copilot** → **Dashboards** → **Marketing** → **Merchandising** → **RBAC** → **Sales Channels** → **Settings**\n\nStory additions this pass: new `Data Display/MpDateRangeSelect` (was the only heavily-used component with no story — 14 usage sites); `MpFormDrawer` ValidationErrors + Submitting states; `MpStatusToggle` disabled-interaction proof; `MpSectionRail` full argTypes + autodocs.\n\n## Deliberate non-changes (audited, decided against)\n\n- **`MpErrorState` was NOT merged into `MpEmptyState`** despite near-identical markup. This is a documented semantic decision (CLAUDE.md): *error = something failed* (`role="alert"`, recovery defaults) vs *empty = nothing to show*. Keep both.\n- **`DvKpiRow` vs `MpKpiCard`** — intentional divergence (inline comment in DvKpiRow explains the copilot flex-column height constraint). Not duplicates.\n- **`SettingsPlaceholder`** — purpose-narrow "coming soon" page wrapper; overlaps the simplest empty state but composes page chrome. Left as-is.\n- **13 remaining raw `v-dialog` uses in views** — all are form or rich-content dialogs (e.g. plan-tier upsell in `RolesPermissionsPage`, POS preview dialogs, acquisition-form editors). Converting them to `MpFormDrawer` changes interaction patterns — deferred as intentional follow-up work, not done under demo deadline.\n\n## Remaining inconsistencies (documented, with recommended next steps)\n\n| Issue | Where | Recommended next step | Blocks Monday? |\n| --- | --- | --- | --- |\n| 4 views keep local status-chip color maps | `Commerce/StoreSetup`, `Service/ChatbotList`, `Service/ChatbotBuilder`, `Analytics/CustomReports` | Each renders statuses MpStatusChip\'s maps can\'t color correctly today (`Disconnected`→red, `Pending Auth`→warning, `Disabled`→warning, `Indexing`→info + spinner, `Ready`/`Running`/`Scheduled`). Extend MpStatusChip\'s `connection` map and add a `report`/`bot` type as a deliberate DS decision, then migrate. | No |\n| 3 ad-hoc status ternaries | `AudienceView`, `Marketing/EmailCampaigns`, `Marketing/LandingPageEditor` | Fold into the same MpStatusChip map-extension pass. | No |\n| ~22 views use raw `v-menu` kebabs | e.g. `Service/Tickets`, `Merchandising/*`, `Settings/Users` | Case-by-case migration to `MpRowActionsMenu` (many are legitimately non-row menus — do not bulk-convert). | No |\n| 14 feature components have no stories | `marketing/landing/` (6), `plg/` (4), `rbac/` drawers (2), `StoreEditorSidebar`, `JourneyAddStepMenu` | Add stories as those features stabilize; all are wired into live flows so none are dead code. | No |\n| Missing argTypes in some stories | `MpBuilderPreviewDialog`, `MpDaVinciBot`, `DvToastStack`, `DvIntentCardList`, `AppBar`, `PermissionMatrix`, `RolePicker`, `SettingsSidebar` | Add argTypes for a complete Controls tab. | No |\n| Component states not expressible without API changes | `MpConfirmDialog` has no loading/pending-confirm prop; `MpKpiCard` has no loading/empty prop (by documented design — pair with `MpTableSkeleton`); `MpFilterTabs` items have no `disabled`; `MpOptionCard` disabled unsupported (by documented design — filter options out) | The first two are the only genuine candidates: consider `loading` on MpConfirmDialog for async confirms. The others are documented design positions. | No |\n| Transitively-alive component clusters | `Dv*` intent cards reachable only via `DvIntentCardList`; dashboard widget renderers only via `DashboardWidgetCard`/`DashboardGrid` | Nothing to do now — but if those single parents are ever removed, the whole cluster becomes dead. Noted for future audits. | No |\n\n## Risks / notes for Monday\n\n- **No blockers.** Type-check, app build, and Storybook build are green on the final tree.\n- The two migrated dashboard confirm dialogs are no longer `persistent` (backdrop/Esc now cancels). This matches standard confirm-dialog behavior; flag it only if someone relies on forced-choice dialogs.\n- `CommerceCloudLanding.vue` styling depends on the relocated `mb-foundation.tokens.css` + bridge — verified working, but don\'t delete either file before migrating that view.\n- The Supernova sync (`supernova:storybook:build-and-sync`) builds the whole Storybook; it will simply import the smaller, cleaner build. Note `supernova-config.json` was already retired in an earlier commit — verify Supernova credentials/config before the next sync run.\n\n## For the engineering team\n\n- **Component reference:** `CLAUDE.md` (component inventory + conventions), `docs/design-system/` (structure, Vuetify mapping, tokens), Storybook autodocs (`npm run storybook`, port 6006).\n- **Conventions to hold the line on:** Lucide icons only (no `mdi-*`); cards `flat border rounded="lg"`; `MpFormDrawer` for forms, `MpConfirmDialog` for confirms (never raw `v-dialog`); `MpStatusChip` for status columns; `MpEmptyState` on every table; tokens only via `src/design-tokens/tokens.json`.\n- **All work is on `refactor/storybook-cleanup`** in single-purpose commits — each phase reverts surgically if needed.\n',V=`Core facts (counted from the repo, 2026-07): 89 shared components · 84 documented in Storybook · 171 product screens · 297 design tokens · 2 themes (light/dark) from one switch. 17 builder screens share one builder shell.
Program language rules: the sandbox is a "working prototype environment" (never "production-ready"); shared work "converges into LiquidSky" (never "replaces" it); no dates or percentages before the two pilots report.`,te=new Set(["an","as","at","be","by","do","go","if","in","is","it","my","no","of","on","or","so","to","up","us","we","the","and","for","are","but","not","you","your","our","can","this","that","with","what","when","how","why","who","will","was","were","has","have","had","does","did","its","it’s","into","from","they","them","their","there","here","been","being","would","should","could","about","which","while","where","than","then","them","these","those","some","any","all","one","two","just","like","get","gets","use","using"]);function D(h){return h.toLowerCase().replace(/[^a-z0-9\s-]/g," ").split(/[\s-]+/).filter(i=>i.length>1&&!te.has(i))}function v(h,i){const p=[],o=i.split(/^(?=## )/m);for(const e of o){const s=e.match(/^##\s+(.+)$/m)?.[1]?.trim()??"Introduction",d=e.split(/^(?=\*\*\d+\.)/m);for(const l of d){const c=l.trim();c.length<60||p.push({doc:h,heading:s,text:c})}}return p}const ne=[...v("FAQ crib sheet",B),...v("Operating model",$),...v("Design-system audit",X),...v("Component inventory",Z),...v("Handover 2026-07",ee)];function se(h){const i=[],p=/\*\*(\d+)\.\s+([^\n]+?)\*\*\s*\n+((?:>.*\n?)+)(?:\s*\*(?:If pushed|Second use[^:]*):\*\s*([^\n]+))?/g;let o;for(;(o=p.exec(h))!==null;){const e=o[3].split(`
`).map(n=>n.replace(/^>\s?/,"").trim()).filter(Boolean).join(" ");i.push({number:Number(o[1]),question:o[2].replace(/^["“]|["”]$/g,"").trim(),answer:e,ifPushed:(o[4]??"").replace(/^["“]|["”]$/g,"").trim()})}return i}const L=se(B);function C(h,i,p=""){const o=new Set(D(i)),e=new Set(D(p));let n=0;for(const s of h)e.has(s)&&(n+=3),o.has(s)&&(n+=1);return n}function oe(){function h(o,e=6,n=9e3){const s=D(o),d=ne.map(r=>({c:r,score:C(s,r.text,r.heading)})).filter(r=>r.score>0).sort((r,g)=>g.score-r.score),l=[V];let c=V.length;for(const{c:r}of d.slice(0,e)){const g=`[${r.doc} — ${r.heading}]
${r.text}`;if(c+g.length>n)break;l.push(g),c+=g.length}return l.join(`

---

`)}function i(o){const e=D(o);if(!e.length)return null;let n=null,s=0;for(const d of L){const l=C(e,d.answer,d.question)+C(e,d.question)*2;l>s&&(n=d,s=l)}return s>=4?n:null}return{retrieve:h,bestFaqMatch:i,starterChips:["Are we replacing LiquidSky?","When can the design team start using it?","Can my team keep working in its own silo?","How does QA work in all this?","Is the design final?","What’s the governance for AI-coded screens?"],faqEntries:L}}const ae={class:"dv-docs__header d-flex align-center ga-3 pa-4"},ie={class:"dv-docs__orb d-flex align-center justify-center"},re={key:0,class:"dv-docs__empty d-flex flex-column ga-4"},de={class:"d-flex flex-wrap ga-2"},le=["onClick"],he={key:0,class:"dv-docs__faq-tag"},ce="That one isn’t covered in my docs yet — the FAQ and operating model tabs on the left are the full source, and the feedback page is the right place to raise it so it gets a written answer.",q=O({__name:"DvDocsAssistant",setup(h){const{retrieve:i,bestFaqMatch:p,starterChips:o}=oe(),e=k([]),n=k(""),s=k(!1),d=k(null);let l=1,c=null;async function r(){await z(),d.value?.scrollTo({top:d.value.scrollHeight,behavior:"smooth"})}E(()=>e.value.length,r);async function g(P){const t=P.trim();if(!t||s.value)return;n.value="",e.value.push({id:l++,role:"user",text:t}),s.value=!0,c=new AbortController;const a=e.value.slice(0,-1).slice(-6).map(f=>({role:f.role,text:f.text}));try{const f=await G(t,a,{context:i(t),mode:"design-system",signal:c.signal});if(f)e.value.push({id:l++,role:"assistant",text:f.reply});else{const M=p(t);e.value.push(M?{id:l++,role:"assistant",text:M.answer,fromFaq:!0}:{id:l++,role:"assistant",text:ce})}}catch{}finally{s.value=!1,c=null}}return R(()=>c?.abort()),(P,t)=>(m(),S(_,{flat:"",border:"",rounded:"lg",class:"dv-docs d-flex flex-column"},{default:w(()=>[u("div",ae,[u("span",ie,[y(j,{size:"18",class:"dv-docs__orb-icon"},{default:w(()=>[...t[2]||(t[2]=[T("sparkles",-1)])]),_:1})]),t[3]||(t[3]=u("div",null,[u("div",{class:"text-subtitle-2 font-weight-bold"},"Da Vinci · Design System"),u("div",{class:"text-caption text-medium-emphasis"},"Answers grounded in the design-system docs")],-1))]),y(A),u("div",{ref_key:"transcriptEl",ref:d,class:"dv-docs__transcript flex-grow-1 pa-4"},[e.value.length?x("",!0):(m(),b("div",re,[t[4]||(t[4]=u("p",{class:"text-body-2 text-medium-emphasis"}," Ask me anything about the design system, the sandbox, or the plan — I answer from the FAQ, operating model, audit, inventory, and handover docs. ",-1)),u("div",de,[(m(!0),b(I,null,W(Y(o),a=>(m(),b("button",{key:a,type:"button",class:"dv-docs__chip",onClick:f=>g(a)},F(a),9,le))),128))])])),(m(!0),b(I,null,W(e.value,a=>(m(),S(N,{key:a.id,side:a.role==="user"?"end":"start",tone:a.role==="user"?"accent":"neutral",class:H(["dv-docs__msg",{"dv-docs__msg--skin":a.role==="user"}])},{default:w(()=>[a.fromFaq?(m(),b("div",he,"From the FAQ")):x("",!0),T(F(a.text),1)]),_:2},1032,["side","tone","class"]))),128)),s.value?(m(),S(N,{key:1,side:"start",tone:"neutral",loading:"",class:"dv-docs__msg"},{default:w(()=>[...t[5]||(t[5]=[T("Reading the docs…",-1)])]),_:1})):x("",!0)],512),y(A),u("form",{class:"pa-3",onSubmit:t[1]||(t[1]=K(a=>g(n.value),["prevent"]))},[y(Q,{modelValue:n.value,"onUpdate:modelValue":t[0]||(t[0]=a=>n.value=a),"hide-details":"",placeholder:"Ask about the design system…","aria-label":"Ask about the design system",disabled:s.value,autocomplete:"off"},{"append-inner":w(()=>[y(U,{icon:"arrow-up",size:"x-small",color:"primary",variant:"flat",type:"submit",disabled:!n.value.trim()||s.value,"aria-label":"Send question"},null,8,["disabled"])]),_:1},8,["modelValue","disabled"])],32)]),_:1}))}}),fe=J(q,[["__scopeId","data-v-a188e412"]]);q.__docgenInfo={exportName:"default",displayName:"DvDocsAssistant",description:"",tags:{},sourceFiles:["/home/runner/work/Storefront/Storefront/src/components/copilot/DvDocsAssistant.vue"]};export{fe as D};
