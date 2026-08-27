# Football Predictions Website — Project Bible

## 1. Project Status

**Status:** Foundation / Phase 0 complete
**Working public brand:** Not finalized
**Repository:** `football-predictions`

This document is the permanent source of truth for the project.

The project must not depend on ChatGPT conversation history. Important decisions, architecture, progress, and constraints must be recorded in this repository.

---

## 2. Project Goal

Build a professional worldwide football statistics and predictions website designed primarily to generate organic Google traffic and monetize that traffic through Google AdSense.

The website should provide useful football information rather than functioning only as a collection of betting tips.

The long-term objective is to create a credible football statistics and prediction publication that users find useful enough to return to regularly.

---

## 3. Target Audience

**Geographic target:** Worldwide

**Initial language:** English

The website should be understandable and useful to football fans internationally.

Avoid country-specific branding unless there is a future strategic reason to introduce localized content.

---

## 4. Initial Prediction Markets

The initial prediction engine will support:

1. Match result (1X2)
2. Over/Under goals
3. Both Teams To Score (BTTS)

Corners are a planned future feature.

Corners must NOT be presented as a data-driven prediction until a reliable, accessible and legally usable free data source is available.

Never fabricate statistics or prediction inputs.

---

## 5. Football Data

### Primary planned source

football-data.org

The free tier is currently intended to provide the initial competition, fixture, result and standings data required for the first version.

The exact API capabilities, competition coverage, request limits and terms must be verified against the current official documentation before implementation.

### Data-source rule

Do not build important functionality around an API feature that has not been verified.

Do not invent unavailable statistics.

If a required data point is unavailable from the free source, either:

* find a legitimate free alternative,
* redesign the feature so it does not require that data,
* or postpone the feature.

---

## 6. Initial Competition Strategy

Use the competitions available through the selected free football-data source.

Do not manually promise coverage of leagues that the chosen free API does not actually provide.

The system should be designed so additional competitions can be added later without rebuilding the entire website.

---

## 7. Website Philosophy

The website should look like it was designed and engineered by an experienced senior web developer.

It must NOT look like an automatically generated AI website.

### Avoid

* Excessive gradients
* Generic AI visual language
* Excessive rounded cards
* Excessive animations
* Emoji-heavy interfaces
* Huge marketing headlines
* "AI-powered" gimmicks
* Generic stock imagery
* Artificial-sounding copy
* Thin automatically generated pages

### Prefer

* Strong typography
* Consistent spacing
* Restrained colour palette
* Clear information hierarchy
* Professional tables
* Useful statistics
* Fast loading
* Excellent mobile usability
* Accessible navigation
* Editorial-style presentation
* Consistent reusable components

The design should feel like a mature football statistics publication.

---

## 8. Mobile-First Requirement

The project owner will manage the website primarily from a mobile phone.

Therefore:

* The website must be mobile-first.
* Administrative/development instructions should favour browser-based tools.
* Avoid requiring command-line tools unless absolutely necessary.
* User instructions must be understandable to someone with no coding background.

---

## 9. Planned Core Website Sections

Initial architecture should support:

* Home
* Today's Predictions
* Matches
* Leagues
* Teams
* Individual Match pages
* Individual League pages
* Individual Team pages
* Statistics
* Prediction Results / Historical Record
* Articles / Guides
* About
* Contact
* Privacy Policy
* Terms
* Disclaimer

Not every section needs to be implemented in the first release.

---

## 10. Match Page Concept

A match page should eventually contain useful information such as:

* Teams
* Competition
* Date and time
* Match result prediction
* 1X2 probabilities
* Over/Under probabilities
* BTTS probabilities
* Recent form
* Relevant team statistics
* Home/away performance
* League position
* Historical information where reliable data exists
* Explanation of the model's prediction
* Historical prediction result where available

Predictions should be presented as probabilities or statistical assessments, not guarantees.

---

## 11. Prediction Philosophy

The prediction system should be transparent and measurable.

The project should eventually maintain a historical record containing:

* Prediction
* Prediction date
* Match
* Market
* Model probability
* Actual outcome
* Correct/incorrect result

The website should be able to calculate historical performance.

Do not claim that the model is profitable or highly accurate unless the historical data genuinely supports that claim.

---

## 12. Monetization

### Primary monetization goal

Google AdSense.

The website should be built to provide genuine value before monetization becomes the main visible purpose.

Avoid designing pages solely to display advertisements.

Content should remain useful even when advertisements are removed.

Do not make unsupported claims such as:

* Guaranteed wins
* Guaranteed profits
* Certain predictions
* Risk-free betting
* Guaranteed betting success

AdSense eligibility and publisher policies must be checked against Google's current policies before application.

---

## 13. SEO Strategy

The website should be designed from the beginning to support search engines.

Planned areas include:

* Clean URLs
* Page titles
* Meta descriptions
* Canonical URLs
* XML sitemap
* robots.txt
* Structured data where appropriate
* Internal linking
* Mobile performance
* Fast page loading
* Useful original content
* Search-friendly match and league pages

Do not create thousands of thin pages merely for SEO.

Every indexed page should have a useful purpose.

---

## 14. Infrastructure Philosophy

Initial target cost:

**$0**

Preferred infrastructure:

* GitHub for source control
* Cloudflare Pages for website hosting
* Cloudflare Workers for backend/serverless processing where appropriate
* Cloudflare D1/KV or another suitable free Cloudflare storage option where appropriate
* Google Search Console
* Google Analytics where useful
* Free football data sources

Paid services should not be introduced unless there is a clear reason and the project owner explicitly agrees.

---

## 15. Reliability Rules

The project must prioritize verified information.

When dealing with:

* API limits
* API coverage
* Cloudflare limits
* GitHub functionality
* Google Search policies
* AdSense requirements
* Current pricing
* Current free-tier restrictions

use current official documentation rather than assumptions.

If something is uncertain, mark it as uncertain and verify it before implementation.

---

## 16. Security Rules

Never commit the following to GitHub:

* API keys
* Passwords
* Authentication tokens
* Private credentials
* Personal access tokens
* Private user information

Secrets must be stored using appropriate environment/secret-management facilities.

---

## 17. Development Rules

Build incrementally.

Each major feature should be:

1. Planned
2. Implemented
3. Tested
4. Verified
5. Documented
6. Committed to GitHub

Do not make large unrelated changes at the same time.

If a change breaks an existing feature, fix the existing feature before continuing.

---

## 18. Conversation Continuity

The ChatGPT conversation is NOT the permanent memory of this project.

The repository is.

The following files maintain continuity:

* `PROJECT.md` — what the project is
* `ROADMAP.md` — where the project is going
* `DECISIONS.md` — important technical/business decisions
* `CHANGELOG.md` — what has changed
* `NEXT.md` — exactly what should happen next

If a new ChatGPT conversation is required, these files should be treated as the authoritative project context.

---

## 19. Current Architecture Direction

Initial intended architecture:

Football Data
→ Data Collection
→ Cloudflare processing/storage
→ Prediction Engine
→ Website
→ Google Search
→ Visitors
→ AdSense

GitHub stores and versions the project source code.

The exact Cloudflare architecture will be finalized after the API and data requirements are verified.

---

## 20. Current Constraints

* $0 initial budget
* Mobile-phone development/management
* Project owner has no coding experience
* Worldwide audience
* English initially
* Free data sources preferred
* AdSense is the primary business objective
* Professional, non-AI-looking design
* No fabricated football statistics
* No fabricated prediction performance

---

## 21. Current Decisions

### Confirmed

* Worldwide football audience
* English initially
* GitHub repository created
* Cloudflare is the preferred hosting/infrastructure platform
* football-data.org is the initial primary data source
* Initial prediction markets: 1X2, Over/Under, BTTS
* Corners postponed until reliable free data is available
* AdSense is the primary monetization objective
* Mobile-first development
* Professional senior-developer visual direction

### Not yet confirmed

* Final public brand/domain
* Exact website visual identity
* Exact Cloudflare database architecture
* Final prediction methodology
* Exact content strategy
* AdSense application timing

---

## 22. Current Phase

**Phase 0 — Foundation**

The project is ready to move into Phase 1.

Next major objective:

**Build the first professional mobile-first website skeleton.**
