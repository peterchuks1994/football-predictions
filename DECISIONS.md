# Football Predictions Website — Decisions Log

This file records important project decisions.

A decision should not be changed casually. If a decision needs to change, record the reason, date and impact before changing the project.

---

## DEC-001 — Worldwide Audience

**Status:** Confirmed

**Decision:** The website will target football fans worldwide.

**Reason:** A worldwide audience provides a larger potential search audience and avoids limiting the project to one country.

**Impact:** The site will use internationally understandable English and avoid unnecessary country-specific assumptions.

---

## DEC-002 — English First

**Status:** Confirmed

**Decision:** English is the initial website language.

**Reason:** English provides broad international reach while keeping the first version manageable.

**Future:** Additional languages may be considered after the English version is established.

---

## DEC-003 — AdSense as Primary Monetization

**Status:** Confirmed

**Decision:** Google AdSense is the primary initial monetization objective.

**Reason:** The project owner has no initial budget and wants to monetize organic website traffic.

**Impact:** The website must prioritize useful content, strong user experience, search visibility and compliance with current Google publisher policies.

**Important:** AdSense approval and revenue are not guaranteed.

---

## DEC-004 — Free-First Infrastructure

**Status:** Confirmed

**Decision:** The project should initially operate at a $0 infrastructure cost.

**Preferred services:**

* GitHub
* Cloudflare
* Google Search Console
* Google Analytics where useful
* Free football data sources

**Reason:** The project has no available startup budget.

**Impact:** Architecture must be designed carefully around free-tier limits.

---

## DEC-005 — GitHub as Permanent Project Source

**Status:** Confirmed

**Decision:** GitHub is the permanent source repository and project-history system.

**Reason:** GitHub provides version control and protects the project from dependence on ChatGPT conversation history.

**Impact:** Important project documentation must be stored in the repository.

---

## DEC-006 — Cloudflare as Preferred Infrastructure

**Status:** Confirmed

**Decision:** Cloudflare will be the preferred platform for hosting and serverless infrastructure.

**Potential services:**

* Cloudflare Pages
* Cloudflare Workers
* Cloudflare D1
* Cloudflare KV
* Other appropriate free Cloudflare services

**Reason:** Cloudflare provides useful free infrastructure suitable for a small initial project.

**Impact:** Exact service selection will be finalized during implementation based on current limits and requirements.

---

## DEC-007 — Primary Football Data Source

**Status:** Confirmed

**Decision:** football-data.org will be the initial primary football data source.

**Reason:** Its current free plan provides suitable basic football data for the initial prediction system.

**Required data includes:**

* Competitions
* Teams
* Fixtures
* Results
* Standings

**Important:** Current API documentation and terms must be checked before implementation.

---

## DEC-008 — API-Football Excluded

**Status:** Confirmed

**Decision:** API-Football will not be used as a project dependency.

**Reason:** It is not available to the project owner in their region.

**Impact:** The architecture must not depend on API-Football.

---

## DEC-009 — Initial Prediction Markets

**Status:** Confirmed

The first prediction engine will support:

1. Match result / 1X2
2. Over/Under goals
3. Both Teams To Score / BTTS

**Reason:** These markets can initially be supported using the type of basic football data available from the primary source.

---

## DEC-010 — Corners Deferred

**Status:** Confirmed

**Decision:** Corners predictions are postponed.

**Reason:** The selected primary free data source does not provide the detailed corner statistics required for a reliable corners model on its free tier.

**Rule:** Corners must not be presented as a genuine data-driven prediction until a reliable, accessible and legally usable free data source is found.

---

## DEC-011 — No Fabricated Statistics

**Status:** Permanent

**Decision:** The website must never fabricate football statistics.

This includes:

* Fixtures
* Results
* League tables
* Team statistics
* Corner statistics
* Prediction results
* Historical performance

If data is unavailable, the system should say so or omit the feature.

---

## DEC-012 — No Fabricated Prediction Performance

**Status:** Permanent

**Decision:** Historical prediction accuracy must be calculated from actual recorded predictions and actual match outcomes.

The website must never invent an accuracy percentage.

---

## DEC-013 — Predictions Are Probabilities

**Status:** Confirmed

**Decision:** Predictions should be represented as statistical probabilities or model assessments.

**Reason:** A football prediction cannot be guaranteed.

**Avoid claims such as:**

* Guaranteed win
* Guaranteed profit
* Certain result
* Risk-free bet
* Guaranteed prediction

---

## DEC-014 — Professional Visual Design

**Status:** Confirmed

**Decision:** The website must look like it was designed by an experienced professional web-development team.

**Design direction:**

* Restrained
* Clean
* Information-focused
* Fast
* Mobile-first
* Strong typography
* Consistent spacing
* Professional data tables
* Clear hierarchy

**Avoid:**

* Generic AI aesthetics
* Excessive gradients
* Excessive rounded cards
* Emoji-heavy interfaces
* Artificial marketing language
* Unnecessary animations
* Generic AI-generated visual patterns

---

## DEC-015 — Mobile First

**Status:** Confirmed

**Decision:** Mobile usability is a first-class requirement.

**Reason:** The project owner will manage the project primarily from a mobile phone, and football audiences commonly access websites on mobile devices.

---

## DEC-016 — No Paid Domain Initially

**Status:** Confirmed

**Decision:** Do not purchase a custom domain during the initial development stage.

**Reason:** The project budget is $0.

**Future:** A domain can be purchased if the site demonstrates sufficient progress or revenue potential.

---

## DEC-017 — Modular Prediction Engine

**Status:** Confirmed

**Decision:** Each prediction market should be implemented as a separate module.

Initial structure:

```text
Prediction Engine
├── Match Result
├── Over/Under
├── BTTS
└── Corners (future)
```

**Reason:** This allows new markets to be added without rebuilding the entire system.

---

## DEC-018 — Data Caching

**Status:** Planned

**Decision:** Public website traffic should not directly consume external API requests whenever avoidable.

**Reason:** Free APIs have request limits.

**Preferred architecture:**

```text
External API
     ↓
Data collection
     ↓
Cache / database
     ↓
Website
```

This reduces unnecessary API usage and improves website speed.

---

## DEC-019 — Build Incrementally

**Status:** Permanent

**Decision:** The project will be built in small verified stages.

Each major feature should be:

1. Planned
2. Built
3. Tested
4. Verified
5. Documented
6. Committed

Do not introduce several unrelated changes at once.

---

## DEC-020 — Conversation Is Not Project Memory

**Status:** Permanent

**Decision:** ChatGPT conversation history is not considered the authoritative project memory.

The GitHub repository is authoritative.

The key continuity files are:

* PROJECT.md
* ROADMAP.md
* DECISIONS.md
* CHANGELOG.md
* NEXT.md

If a new conversation is required, these files must be used to restore project context.

---

## DEC-021 — Public Brand Not Yet Finalized

**Status:** Open

**Decision:** The final public website name has not yet been selected.

**Working repository name:**

`football-predictions`

**Previous candidate rejected:**

`FootyForm`

**Reason for rejection:** The desired domain was unavailable.

**Rule:** Do not rename the public project or purchase a domain until a suitable name has been researched and verified.

---

## DEC-022 — API Availability Must Be Verified

**Status:** Permanent

**Decision:** Before making any external API a core dependency, verify:

* Geographic availability
* Free-tier limits
* Data coverage
* Historical availability
* Rate limits
* Terms of use
* Reliability

**Reason:** A service being advertised as "free" does not necessarily mean it is usable for this particular project.

---

# Decision Change Procedure

If an important decision needs to change:

1. Identify the existing decision.
2. Explain why it no longer works.
3. Verify the alternative.
4. Record the new decision below.
5. Update PROJECT.md.
6. Update ROADMAP.md if necessary.
7. Update affected code/documentation.
8. Record the change in CHANGELOG.md.

Never silently overwrite an important architectural decision.
